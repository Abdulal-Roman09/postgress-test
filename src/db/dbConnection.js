import dotenv from 'dotenv';
import pkg from 'pg';
const { Client } = pkg;

dotenv.config();

const connectionString = process.env.DATABASE_URL || '';

// Use SSL only for non-local connections
const useSSL = connectionString && !/localhost|127\.0\.0\.1/.test(connectionString);

const client = new Client({
  connectionString,
  ssl: useSSL ? { rejectUnauthorized: false } : false,
});

client.connect()
  .then(() => console.log(`✅ PostgreSQL connected (ssl=${useSSL})`))
  .catch(err => console.error('❌ Connection failed:', err));

export default client;
