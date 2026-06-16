import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cliente' })
export class cliente {
  @PrimaryGeneratedColumn()
  idcliente!: number;

  @Column({ length: 150 })
  nombre!: string;
}
