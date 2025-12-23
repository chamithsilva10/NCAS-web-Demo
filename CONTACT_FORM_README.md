# Contact Form Email Configuration

The contact form is now functional and will send emails to info@ncas.ac.lk when users submit inquiries.

## Setup Instructions

1. **Configure Email Settings**: Update the `.env.local` file with your SMTP provider credentials:

```env
# For Gmail (recommended):
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-gmail-app-password

# For other providers, adjust accordingly
```

2. **Gmail Setup** (if using Gmail):
   - Go to your Google Account settings
   - Enable 2-Factor Authentication
   - Generate an "App Password" for this application
   - Use your Gmail address as SMTP_USER
   - Use the App Password (not your regular password) as SMTP_PASS

3. **Alternative Email Providers**:
   - **SendGrid**: Use their SMTP settings
   - **Mailgun**: Use their SMTP settings
   - **AWS SES**: Configure with their SMTP credentials

## Features

- ✅ Real-time form validation
- ✅ Email delivery to info@ncas.ac.lk
- ✅ Professional HTML email formatting
- ✅ Success/error feedback to users
- ✅ Form reset after successful submission
- ✅ Loading states during submission

## Testing

Visit `/contact` on your website to test the form. The form will:
1. Validate required fields
2. Send emails to info@ncas.ac.lk
3. Show success/error messages
4. Reset the form on success

## Security Note

Make sure to:
- Never commit `.env.local` to version control
- Use secure SMTP connections (port 587 with TLS)
- Consider rate limiting for production use