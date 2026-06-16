import { Reserva } from 'src/reserva/entities/reserva.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cliente' })
export class Cliente {
  @PrimaryGeneratedColumn({ name: 'idcliente' })
  idcliente!: number;

  @Column({ length: 100 })
  nombre!: string;

  @Column({ length: 100 })
  apellido!: string;

  @Column({ length: 20 })
  telefono?: string;

  @Column({ length: 30, unique: true })
  ci!: string;

  @Column({ length: 50, unique: true })
  licencia!: string;

  @OneToMany(() => Reserva, (reserva) => reserva.cliente)
  reservas!: Reserva[];
}
