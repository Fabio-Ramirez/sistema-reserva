import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Departamento } from '../departamentos/departamento.entity';

@Entity()
export class Reserva {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fechaInicio: Date;

  @Column()
  fechaFin: Date;

  @Column({ default: 'PENDIENTE' })
  estado: string; // PENDIENTE, APROBADA, DESAPROBADA

  // Relación con Departamento
  @ManyToOne(() => Departamento, (departamento) => departamento.reservas)
  departamento: Departamento;
}
