import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Parcela } from './parcela.entity';

@Entity()
export class IngresoSalida {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigoIngreso: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaIngreso: Date;

  @Column({ nullable: true })
  fechaSalida: Date;

  // Relación con Parcela
  @ManyToOne(() => Parcela, (parcela) => parcela.ingresosSalidas)
  parcela: Parcela;
}
