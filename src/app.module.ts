import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservasModule } from './reservas/reservas.module';
import { ParcelasModule } from './parcelas/parcelas.module';
import { SocketsModule } from './sockets/sockets.module';

@Module({
  imports: [ReservasModule, ParcelasModule, SocketsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
