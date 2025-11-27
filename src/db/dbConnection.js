import dotenv from 'dotenv';
import { Client } from 'pg';

dotenv.config();

const connectiondb = new Client({
  connectionString:
    process.env.DATABASE_URL || 'postgres://postgres:123456@localhost:5432/localhost',
});

connectiondb
  .connect()
  .then(() => console.log('✅ PostgreSQL Connected Successfully!'))
  .catch((err) => console.error('❌ Connection failed', err));

export default connectiondb;