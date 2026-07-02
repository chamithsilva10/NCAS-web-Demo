import { Pool, type PoolConfig, type QueryResult, type QueryResultRow } from "pg"

const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL

let pool: Pool | null = null

function parseBoolean(value: string | undefined) {
  return value === "1" || value === "true" || value === "yes"
}

function buildPoolConfig(): PoolConfig {
  const sslEnabled = parseBoolean(process.env.DATABASE_SSL || process.env.POSTGRES_SSL)

  return {
    connectionString: databaseUrl,
    ssl: sslEnabled
      ? {
          rejectUnauthorized: parseBoolean(process.env.DATABASE_SSL_REJECT_UNAUTHORIZED)
            ? true
            : false,
        }
      : undefined,
    max: Number(process.env.DATABASE_POOL_MAX || 10),
    idleTimeoutMillis: Number(process.env.DATABASE_IDLE_TIMEOUT_MS || 10_000),
    connectionTimeoutMillis: Number(process.env.DATABASE_CONNECTION_TIMEOUT_MS || 5_000),
  }
}

function getPool() {
  if (!databaseUrl) {
    return null
  }

  if (!pool) {
    pool = new Pool(buildPoolConfig())
  }

  return pool
}

export function hasDatabaseConfig() {
  return Boolean(databaseUrl)
}

export async function queryDatabase<T extends QueryResultRow = QueryResultRow>(
  text: string,
  values: unknown[] = [],
): Promise<QueryResult<T>> {
  const currentPool = getPool()
  if (!currentPool) {
    throw new Error("DATABASE_URL is not configured")
  }

  return currentPool.query<T>(text, values)
}

export async function closeDatabaseConnection() {
  if (pool) {
    await pool.end()
    pool = null
  }
}