import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './cliente/entities/cliente.entity';
import { ClienteModule } from './cliente/cliente.module';
import { VehiculoModule } from './vehiculo/vehiculo.module';
import { Vehiculo } from './vehiculo/entities/vehiculo.entity';
import { ReservaModule } from './reserva/reserva.module';
import { Reserva } from './reserva/entities/reserva.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'alquiler_vehiculos',
      entities: [Cliente, Vehiculo, Reserva],
      synchronize: false, // SOLO en dev / prototipo
      // logging: true,
    }),
    ClienteModule,
    VehiculoModule,
    ReservaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
