import { IsBoolean, IsInt, IsNumber, IsString } from 'class-validator';

export class CreateVehiculoDto {
  @IsString()
  marca: string;

  @IsString()
  modelo: string;

  @IsInt()
  anio: number;

  @IsNumber()
  precioDia: number;

  @IsString()
  placa: string;

  @IsString()
  color: string;

  @IsString()
  foto: string;

  @IsString()
  descripcion: string;

  @IsBoolean()
  disponible: boolean;
}
