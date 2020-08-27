import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  await app.listen(port);

  console.log(`Server listening on port: ${port}`);
}

bootstrap();
