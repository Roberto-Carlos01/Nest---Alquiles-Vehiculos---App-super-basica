import { IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateReservaDto {
  @IsDateString()
  fechaIni: string;

  @IsDateString()
  fechaFin: string;

  @IsNumber()
  total: number;

  @IsString()
  estado: string;

  @IsString()
  ciCliente: string;

  @IsString()
  placaVehiculo: string;
}
