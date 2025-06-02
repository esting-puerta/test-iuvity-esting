import { Module } from '@nestjs/common';
import { DispositivoController } from '../controllers/dispositivo.controller';
import { DispositivoUseCases } from '../../application/use-cases/dispositivo.use-cases';
import { DispositivoRepositoryImpl } from '../../infrastructure/repositories/dispositivo.repository';
import { DISPOSITIVO_REPOSITORY } from '../../domain/entities/dispositivo.entity';

@Module({
    imports: [],
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