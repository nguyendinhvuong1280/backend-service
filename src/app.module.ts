import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WinstonModule } from 'nest-winston';
import { WINSTON_CONFIG } from '@synodus/nestjs-kafkajs-wrapper';

@Module({
  imports: [
    WinstonModule.forRoot(WINSTON_CONFIG),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
