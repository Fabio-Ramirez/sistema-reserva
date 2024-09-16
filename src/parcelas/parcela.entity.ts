import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IngresoSalida } from './ingreso-salida.entity';

@Entity()
export class Parcela {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo: string;

  @Column({ default: false })
  ocupada: boolean;

  // Relación con IngresoSalida
  @OneToMany(() => IngresoSalida, (ingresoSalida) => ingresoSalida.parcela)
  ingresosSalidas: IngresoSalida[];
}
