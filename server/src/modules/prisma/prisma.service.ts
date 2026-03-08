import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    // 1. Lấy chuỗi kết nối từ file .env
    const connectionString = process.env.DATABASE_URL;

    // 2. Tạo một Connection Pool (Hồ chứa kết nối) thông qua thư viện pg
    const pool = new Pool({ connectionString });

    // 3. Bọc Pool lại bằng Prisma Adapter
    const adapter = new PrismaPg(pool);

    // 4. Truyền adapter vào PrismaClient thay vì dùng 'datasources' cũ
    super({ adapter });
  }

  // Chạy tự động khi khởi động server
  async onModuleInit() {
    await this.$connect();
    console.log('📦 Đã kết nối thành công tới Cơ sở dữ liệu (Supabase qua pg-adapter)');
  }

  // Tự động ngắt kết nối khi tắt server để tránh treo connection
  async onModuleDestroy() {
    await this.$disconnect();
  }
}