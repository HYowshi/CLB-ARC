// server/src/modules/prisma/prisma.module.ts

import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Đánh dấu @Global() giúp PrismaService có thể được dùng ở mọi module khác (như Auth, Users...) mà không cần phải import lại.
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}