import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // elimina propiedades no definidas en el DTO
      forbidNonWhitelisted: true, // lanza error si se envían campos no permitidos
      transform: true, // convierte tipos automáticamente (ej. string → number)
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
