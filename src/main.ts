import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from '@synodus/nestjs-kafkajs-wrapper';

const logger: Logger = new Logger('Main');
async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  await app.listen(+process.env.PORT || 3000, '0.0.0.0');
  console.log('+process.env.PORT: ', +process.env.PORT)
  app.useLogger(process.env.ENABLE_LOG === 'true' ? app.get(WINSTON_MODULE_NEST_PROVIDER) : false);

  logger.log(`Worker ${process.pid} started on address ${await app.getUrl()}`);
}
bootstrap();
