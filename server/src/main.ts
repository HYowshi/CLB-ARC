import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Thiết lập tiền tố /api cho tất cả các routes của Backend
  app.setGlobalPrefix('api');

  // Bật CORS để Frontend (chạy cổng khác) có thể gọi được Backend
  app.enableCors();

  await app.listen(3000);
  console.log(`🚀 Server đang chạy tại: http://localhost:3000/api`);
}
bootstrap();