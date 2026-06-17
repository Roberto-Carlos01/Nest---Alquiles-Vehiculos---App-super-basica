import { Module } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { ReservaController } from './reserva.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserva } from './entities/reserva.entity';
import { ClienteModule } from 'src/cliente/cliente.module';
import { VehiculoModule } from 'src/vehiculo/vehiculo.module';

@Module({
  imports: [TypeOrmModule.forFeature([Reserva]), ClienteModule, VehiculoModule],
  controllers: [ReservaController],
  providers: [ReservaService],
})
export class ReservaModule {}
