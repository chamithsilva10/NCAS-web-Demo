const fs = require('fs');
const path = require('path');
const https = require('https');
const cheerio = require('cheerio');

const BASE_URL = 'https://ncas.ac.lk';
const NEWS_URL = 'https://ncas.ac.lk/news/';

async function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function scrapeNews() {
  try {
    console.log('Fetching news page...');
    const html = await fetchPage(NEWS_URL);
    const $ = cheerio.load(html);

    const newsItems = [];

    // Try different selectors for news items
    const selectors = [
      '.news-item',
      '.post',
      'article',
      '.entry',
      '.news-article',
      '.announcement',
      '.event-item'
    ];

    let foundItems = false;
    for (const selector of selectors) {
      $(selector).each((index, element) => {
        const titleElement = $(element).find('h1, h2, h3, .title, .entry-title').first();
        const linkElement = $(element).find('a').first();
        const excerptElement = $(element).find('.excerpt, .summary, .content p').first();

        if (titleElement.length > 0) {
          const title = titleElement.text().trim();
          const url = linkElement.attr('href');
          const fullUrl = url ? (url.startsWith('http') ? url : BASE_URL + url) : '';
          const excerpt = excerptElement.text().trim();

          if (title && title.length > 5) {
            newsItems.push({
              title,
              url: fullUrl,
              excerpt: excerpt || title,
              slug: `news-${index + 1}`
            });
            foundItems = true;
          }
        }
      });

      if (foundItems) break;
    }

    // If no structured items found, try to find all links
    if (newsItems.length === 0) {
      console.log('No structured news items found, trying link extraction...');
      $('a[href]').each((index, element) => {
        const $link = $(element);
        const href = $link.attr('href');
        const text = $link.text().trim();

        if (href &&
            (href.includes('/news/') ||
             href.includes('/announcement') ||
             href.includes('/event') ||
             (href.includes('ncas.ac.lk') && !href.includes('#') && !href.includes('mailto:'))) &&
            text.length > 10) {

          const fullUrl = href.startsWith('http') ? href : BASE_URL + href;
          newsItems.push({
            title: text,
            url: fullUrl,
            excerpt: text,
            slug: `news-link-${index + 1}`
          });
        }
      });
    }

    console.log(`Extracted ${newsItems.length} news items`);

    // Save to JSON file
    const outputPath = path.join(__dirname, 'news-data.json');
    fs.writeFileSync(outputPath, JSON.stringify(newsItems, null, 2));
    console.log(`Saved news data to ${outputPath}`);

    // Create individual news pages
    await createNewsPages(newsItems);

  } catch (error) {
    console.error('Error scraping news:', error);
  }
}

async function createNewsPages(newsItems) {
  const newsDir = path.join(__dirname, 'app', 'news');

  for (const item of newsItems.slice(0, 15)) { // Limit to first 15
    try {
      const slug = item.slug || item.title.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-').replace(/-+/g, '-');
      const pageDir = path.join(newsDir, slug);
      const pagePath = path.join(pageDir, 'page.tsx');

      // Create directory if it doesn't exist
      if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir, { recursive: true });
      }

      // Fetch full article content if URL is available
      let fullContent = item.excerpt || 'Content not available. Please visit the original NCAS website for full details.';

      if (item.url && item.url !== NEWS_URL && item.url.includes('ncas.ac.lk')) {
        try {
          console.log(`Fetching full content for: ${item.title}`);
          const articleHtml = await fetchPage(item.url);
          const $article = cheerio.load(articleHtml);

          // Try to extract main content
          const contentSelectors = [
            '.entry-content',
            '.post-content',
            '.content',
            'article .content',
            'main',
            '.entry',
            '.post',
            '#content'
          ];

          let contentText = '';
          for (const selector of contentSelectors) {
            const contentElement = $article(selector);
            if (contentElement.length > 0) {
              contentText = contentElement.text().trim();
              if (contentText.length > 100) break;
            }
          }

          if (contentText && contentText.length > 50) {
            fullContent = contentText;
          }
        } catch (error) {
          console.log(`Could not fetch full content for ${item.title}:`, error.message);
        }
      }

      // Create the page component
      const pageContent = `const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE_URL = 'https://ncas.ac.lk';
const NEWS_URL = 'https://ncas.ac.lk/news/';

async function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function extractLinks(html) {
  const links = [];
  const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>([^<]+)<\/a>/gi;
  let match;

  while ((match = linkRegex.exec(html)) !== null) {
    const href = match[1];
    const text = match[2].replace(/<[^>]*>/g, '').trim();

    if (text && text.length > 10 &&
        (href.includes('/news/') ||
         href.includes('/announcement') ||
         href.includes('/event') ||
         (href.includes('ncas.ac.lk') && !href.includes('#') && !href.includes('mailto:')))) {

      const fullUrl = href.startsWith('http') ? href : BASE_URL + href;
      links.push({
        title: text,
        url: fullUrl,
        slug: 'news-' + links.length + 1
      });
    }
  }

  return links;
}

function extractTitles(html) {
  const titles = [];
  const titleRegex = /<h[1-6][^>]*>([^<]+)<\/h[1-6]>/gi;
  let match;

  while ((match = titleRegex.exec(html)) !== null) {
    const title = match[1].replace(/<[^>]*>/g, '').trim();
    if (title && title.length > 10) {
      titles.push(title);
    }
  }

  return titles;
}

async function scrapeNews() {
  try {
    console.log('Fetching news page...');
    const html = await fetchPage(NEWS_URL);

    console.log('Extracting links and titles...');
    const links = extractLinks(html);
    const titles = extractTitles(html);

    console.log('Found ' + links.length + ' links and ' + titles.length + ' titles');

    // Combine links and titles into news items
    const newsItems = [];

    // Add links as news items
    links.slice(0, 10).forEach((link, index) => {
      newsItems.push({
        title: link.title,
        url: link.url,
        excerpt: link.title,
        slug: 'news-link-' + index + 1
      });
    });

    // Add titles that aren't already in links
    titles.slice(0, 5).forEach((title, index) => {
      const exists = newsItems.some(item => item.title === title);
      if (!exists) {
        newsItems.push({
          title: title,
          url: '',
          excerpt: title,
          slug: 'news-title-' + index + 1
        });
      }
    });

    console.log('Created ' + newsItems.length + ' news items');

    // Save to JSON file
    const outputPath = path.join(__dirname, 'news-data.json');
    fs.writeFileSync(outputPath, JSON.stringify(newsItems, null, 2));
    console.log('Saved news data to ' + outputPath);

    // Create individual news pages
    await createNewsPages(newsItems);

  } catch (error) {
    console.error('Error scraping news:', error);
  }
}

async function createNewsPages(newsItems) {
  const newsDir = path.join(__dirname, 'app', 'news');

  for (const item of newsItems.slice(0, 15)) {
    try {
      const slug = item.slug || item.title.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-').replace(/-+/g, '-');
      const pageDir = path.join(newsDir, slug);
      const pagePath = path.join(pageDir, 'page.tsx');

      // Create directory if it doesn't exist
      if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir, { recursive: true });
      }

      // Fetch full article content if URL is available
      let fullContent = item.excerpt || 'Content not available. Please visit the original NCAS website for full details.';

      if (item.url && item.url.includes('ncas.ac.lk')) {
        try {
          console.log('Fetching full content for: ' + item.title);
          const articleHtml = await fetchPage(item.url);

          // Simple content extraction - look for content between specific tags
          const contentMatches = articleHtml.match(/<div[^>]*class="[^"]*content[^"]*"[^>]*>(.*?)<\/div>/gis);
          if (contentMatches && contentMatches.length > 0) {
            let content = contentMatches[0].replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
            if (content.length > 100) {
              fullContent = content;
            }
          }
        } catch (error) {
          console.log('Could not fetch full content for ' + item.title + ':', error.message);
        }
      }

      // Create the page component
      const pageContent = `import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar, User } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '` + item.title.replace(/'/g, "\\'") + ` | NCAS News',
  description: '` + (item.excerpt || item.title).replace(/'/g, "\\'").substring(0, 150) + `...',
}

export default function NewsArticlePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/news">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Button>
        </Link>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                ` + new Date().toLocaleDateString() + `
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <User className="h-4 w-4 mr-1" />
                NCAS
              </div>
            </div>
            <CardTitle className="text-3xl leading-tight">` + item.title.replace(/'/g, "\\'") + `</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap leading-relaxed">
` + fullContent.replace(/'/g, "\\'").replace(/\n/g, '\n') + `
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> This content has been cloned from the NCAS website.
                For the most up-to-date information, please visit the official NCAS website.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}`;

      fs.writeFileSync(pagePath, pageContent);
      console.log('Created news page: ' + slug);

    } catch (error) {
      console.error('Error creating page for ' + item.title + ':', error);
    }
  }
}

// Run the scraper
scrapeNews();`;

      fs.writeFileSync(pagePath, pageContent);
      console.log(`Created news page: ${slug}`);

    } catch (error) {
      console.error(`Error creating page for ${item.title}:`, error);
    }
  }
}

// Run the scraper
scrapeNews();