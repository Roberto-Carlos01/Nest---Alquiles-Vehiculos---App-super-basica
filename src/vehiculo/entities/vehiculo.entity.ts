import { Reserva } from 'src/reserva/entities/reserva.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'vehiculo' })
export class Vehiculo {
  @PrimaryGeneratedColumn()
  idvehiculo!: number;

  @Column({ length: 100 })
  marca!: string;
  @Column({ length: 100 })
  modelo!: string;
  @Column({ type: 'year' })
  anio!: number;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precioDia!: number; // decimal 10,2
  @Column({ length: 20, unique: true })
  placa!: string;
  @Column({ length: 50 })
  color?: string;

  @Column({ length: 255 })
  foto?: string;
  @Column({ type: 'text' })
  descripcion?: string;
  @Column({ default: true })
  disponible!: boolean;

  @OneToMany(() => Reserva, (reserva) => reserva.vehiculo)
  reservas!: Reserva[];
}
