import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  listarClientes() {
    return this.clienteService.getClientes();
  }

  @Get(':id')
  obtenerCliente(@Param('id', ParseIntPipe) id: number) {
    return this.clienteService.getClienteForId(id);
  }

  @Post()
  crearCliente(@Body() data: CreateClienteDto) {
    return this.clienteService.createCliente(data);
  }

  @Put(':id')
  editarCliente(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.clienteService.updateCliente(id, data);
  }

  @Delete(':id')
  eliminarCliente(@Param('id', ParseIntPipe) id: number) {
    return this.clienteService.deleteCliente(id);
  }

  @Get('/historial/:id')
  obtenerHistorialCliente(@Param('id', ParseIntPipe) id: number) {
    return this.clienteService.getHistorialCliente(id);
  }
}
