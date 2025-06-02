import { Module } from '@nestjs/common';
import { DispositivoController } from './presentation/controllers/dispositivo.controller';
import { DispositivoUseCases } from './application/use-cases/dispositivo.use-cases';
import { DispositivoRepositoryImpl } from './infrastructure/repositories/dispositivo.repository';
import { DispositivoRepository, DISPOSITIVO_REPOSITORY } from './domain/entities/dispositivo.entity';

@Module({
    controllers: [DispositivoController],
    providers: [
        DispositivoUseCases,
        {
            provide: DISPOSITIVO_REPOSITORY,
            useClass: DispositivoRepositoryImpl
        }
    ]
})
export class DispositivoModule {} 