import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehiculo } from './entities/vehiculo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehiculoService {
  constructor(
    @InjectRepository(Vehiculo)
    private vehiculoRepository: Repository<Vehiculo>,
  ) {}
  async create(vehiculoData: Partial<Vehiculo>) {
    const newVehiculo = this.vehiculoRepository.create(vehiculoData);
    return this.vehiculoRepository.save(newVehiculo);
  }

  async findAll() {
    return await this.vehiculoRepository.find();
  }

  async findOne(id: number) {
    return await this.vehiculoRepository.findOne({ where: { idvehiculo: id } });
  }
  async findOneByPlaca(placa: string) {
    return await this.vehiculoRepository.findOne({ where: { placa: placa } });
  }

  async update(id: number, vehiculoData: Partial<Vehiculo>) {
    await this.vehiculoRepository.update(id, vehiculoData);
    return await this.vehiculoRepository.findOne({ where: { idvehiculo: id } });
  }

  async remove(id: number) {
    return await this.vehiculoRepository.delete(id);
  }
}
