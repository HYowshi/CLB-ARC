// server/src/app.module.ts

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // Thư viện đọc file .env của NestJS
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [
    // Load file .env cho toàn bộ hệ thống
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    
    // Module Database của chúng ta
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}