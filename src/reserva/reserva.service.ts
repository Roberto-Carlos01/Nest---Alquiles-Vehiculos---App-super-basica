/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { Reserva } from './entities/reserva.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClienteService } from 'src/cliente/cliente.service';
import { VehiculoService } from 'src/vehiculo/vehiculo.service';

@Injectable()
export class ReservaService {
  constructor(
    @InjectRepository(Reserva) private reservaRepository: Repository<Reserva>,
    private clienteService: ClienteService,
    private vehiculoService: VehiculoService,
  ) {}
  async create(data: any) {
    const cliente = await this.clienteService.getClienteForCi(data.ciCliente);
    const vehiculo = await this.vehiculoService.findOneByPlaca(
      data.placaVehiculo,
    );
    const newReserva = this.reservaRepository.create({
      fechaIni: data.fechaIni,
      fechaFin: data.fechaFin,
      total: data.total,
      estado: data.estado,

      cliente: cliente,
      vehiculo: vehiculo,
    } as any);
    return await this.reservaRepository.save(newReserva);
  }

  async findAll() {
    return await this.reservaRepository.find({
      relations: { cliente: true, vehiculo: true },
    });
  }

  async findOne(id: number) {
    return await this.reservaRepository.findOne({
      where: { idreserva: id },
      relations: { cliente: true, vehiculo: true },
    });
  }

  async update(id: number, data: any) {
    const cliente = await this.clienteService.getClienteForCi(data.ciCliente);
    const vehiculo = await this.vehiculoService.findOneByPlaca(
      data.placaVehiculo,
    );
    const reserva = {
      fechaIni: data.fechaIni,
      fechaFin: data.fechaFin,
      total: data.total,
      estado: data.estado,

      cliente: cliente,
      vehiculo: vehiculo,
    } as any;
    await this.reservaRepository.update(id, reserva);

    return await this.reservaRepository.findOne({ where: { idreserva: id } });
  }

  async remove(id: number) {
    return this.reservaRepository.delete(id);
  }
}
