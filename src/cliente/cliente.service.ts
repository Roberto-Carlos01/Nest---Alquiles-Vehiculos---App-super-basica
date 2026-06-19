/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente) private clienteRepository: Repository<Cliente>,
  ) {}
  async getClientes() {
    //retorna todos los cliente
    return await this.clienteRepository.find();
  }
  async getClienteForId(id: number) {
    // retorna solo el cliente con ese id
    return await this.clienteRepository.findOne({ where: { idcliente: id } });
  }
  async getClienteForCi(ci: string) {
    return await this.clienteRepository.findOne({ where: { ci: ci } });
  }
  async createCliente(clienteData: Partial<Cliente>) {
    //retorna un objeto cliente creado
    const newCliente = this.clienteRepository.create(clienteData);
    //retorna el cliente ya guardado en la bd
    return await this.clienteRepository.save(newCliente);
  }
  async updateCliente(id: number, clienteData: Partial<Cliente>) {
    //Retorna un objeto especial que nos indica los resultados de la actualizacion
    await this.clienteRepository.update(id, clienteData);

    //retorna el cliente actualizado
    return await this.clienteRepository.findOne({ where: { idcliente: id } });
  }
  async deleteCliente(id: number) {
    //Retorna un objeto especial que nos indica los resultados del delete
    return this.clienteRepository.delete(id);
  }
  async getHistorialCliente(id: number) {
    const historial = this.clienteRepository.query(
      'SELECT r.fechaIni AS inicio, r.fechaFin AS fin , r.total , r.estado AS estado_reserva , c.nombre , c.apellido , v.marca , v.modelo, v.color FROM reserva r JOIN cliente c ON c.idcliente= r.idcliente JOIN vehiculo v ON v.idvehiculo = r.idvehiculo WHERE c.idcliente = ? ORDER BY r.fechaIni DESC',
      [id],
    );
    return historial;
  }
}
