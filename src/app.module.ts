import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserva } from './reservas/reserva.entity';
import { Departamento } from './departamentos/departamento.entity';
import { Parcela } from './parcelas/parcela.entity';
import { IngresoSalida } from './parcelas/ingreso-salida.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Reserva, Departamento, Parcela, IngresoSalida],
      synchronize: true, // Solo para desarrollo, no en producción
    }),
    TypeOrmModule.forFeature([Reserva, Departamento, Parcela, IngresoSalida]),
  ],
})
export class AppModule {}
