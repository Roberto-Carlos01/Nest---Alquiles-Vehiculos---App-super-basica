import { Injectable } from '@nestjs/common';
import { Reserva } from './entities/reserva.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReservaService {
  constructor(
    @InjectRepository(Reserva) private reservaRepository: Repository<Reserva>,
  ) {}
  async create(data: Partial<Reserva>) {
    const newReserva = this.reservaRepository.create(data);
    return await this.reservaRepository.save(newReserva);
  }

  async findAll() {
    return await this.reservaRepository.find();
  }

  async findOne(id: number) {
    return await this.reservaRepository.findOne({ where: { idreserva: id } });
  }

  async update(id: number, data: Partial<Reserva>) {
    await this.reservaRepository.update(id, data);

    return await this.reservaRepository.findOne({ where: { idreserva: id } });
  }

  async remove(id: number) {
    return this.reservaRepository.delete(id);
  }
}
