import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { CliModule } from './modules/cli/cli.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

async function bootstrapCli() {
  const cli = await NestFactory.create(CliModule);
  await cli.init();
}

const isCli = process.env.NODE_ENV && process.env.NODE_ENV.startsWith('cli');

if (isCli) {
  bootstrapCli();
} else {
  bootstrap();
}
