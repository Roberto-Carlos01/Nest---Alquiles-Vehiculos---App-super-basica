import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Vehiculo } from 'src/vehiculo/entities/vehiculo.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'reserva' })
export class Reserva {
  @PrimaryGeneratedColumn()
  idreserva!: number;

  @Column({ type: 'date' })
  fechaIni!: Date;

  @Column({ type: 'date' })
  fechaFin!: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total!: number;

  @Column({
    type: 'enum',
    enum: ['pendiente', 'confirmada', 'cancelada', 'finalizada'],
    default: 'pendiente',
  })
  estado!: string;

  @ManyToOne(() => Cliente, (cliente) => cliente.reservas)
  @JoinColumn({ name: 'idcliente' })
  cliente!: Cliente;

  @ManyToOne(() => Vehiculo, (vehiculo) => vehiculo.reservas)
  @JoinColumn({ name: 'idvehiculo' })
  vehiculo!: Vehiculo;
}
