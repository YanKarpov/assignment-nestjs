import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TagsModule } from './tags/tags.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TagsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
