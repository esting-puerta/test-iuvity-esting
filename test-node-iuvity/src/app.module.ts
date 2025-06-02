import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DispositivoModule } from './dispositivo.module';

@Module({
  imports: [DispositivoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
