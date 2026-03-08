import { defineConfig } from '@prisma/config';
import 'dotenv/config'; // Tự động load file .env

export default defineConfig({
  // Prisma CLI (migrate) cần kết nối trực tiếp, không qua PgBouncer
  datasource: {
    url: process.env.DIRECT_URL, 
  },
});