import { DispositivoUseCases } from '../../application/use-cases/dispositivo.use-cases';
import { Dispositivo } from '../../domain/entities/dispositivo.entity';
export declare class DispositivoController {
    private readonly dispositivoUseCases;
    constructor(dispositivoUseCases: DispositivoUseCases);
    getAllDispositivos(): Promise<Dispositivo[]>;
    getDispositivoById(id: string): Promise<Dispositivo | null>;
    createDispositivo(dispositivo: Omit<Dispositivo, 'id'>): Promise<Dispositivo>;
    updateDispositivo(id: string, dispositivo: Partial<Dispositivo>): Promise<Dispositivo>;
    deleteDispositivo(id: string): Promise<void>;
}
