import { IsString, IsOptional, MinLength, MaxLength } from 'class-validator';
export class CreateClienteDto {
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  nombre: string;

  @IsString()
  @MinLength(2)
  @MaxLength(100)
  apellido: string;

  @IsString()
  @IsOptional()
  telefono?: string;

  @IsString()
  ci: string;

  @IsString()
  licencia: string;
}
