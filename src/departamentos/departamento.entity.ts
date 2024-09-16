// eslint-disable-next-line prettier/prettier
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Reserva } from '../reservas/reserva.entity';

@Entity()
export class Departamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  ubicacion: string;

  // Relación con Reserva
  @OneToMany(() => Reserva, (reserva) => reserva.departamento)
  reservas: Reserva[];
}
