import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
