import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'alquiler_vehiculos',
      entities: [],
      synchronize: false, // SOLO en dev / prototipo
      // logging: true,
    }),
    //otros modulos
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
