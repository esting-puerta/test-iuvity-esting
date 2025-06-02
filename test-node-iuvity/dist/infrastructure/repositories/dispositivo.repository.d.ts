import { Dispositivo, DispositivoRepository } from '../../domain/entities/dispositivo.entity';
export declare class DispositivoRepositoryImpl implements DispositivoRepository {
    private dispositivos;
    findAll(): Promise<Dispositivo[]>;
    findById(id: number): Promise<Dispositivo | null>;
    create(dispositivo: Omit<Dispositivo, 'id'>): Promise<Dispositivo>;
    update(id: number, dispositivo: Partial<Dispositivo>): Promise<Dispositivo>;
    delete(id: number): Promise<void>;
}
