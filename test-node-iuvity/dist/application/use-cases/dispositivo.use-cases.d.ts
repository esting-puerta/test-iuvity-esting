import { Dispositivo, DispositivoRepository } from '../../domain/entities/dispositivo.entity';
export declare class DispositivoUseCases {
    private readonly dispositivoRepository;
    constructor(dispositivoRepository: DispositivoRepository);
    getAllDispositivos(): Promise<Dispositivo[]>;
    getDispositivoById(id: number): Promise<Dispositivo | null>;
    createDispositivo(dispositivo: Omit<Dispositivo, 'id'>): Promise<Dispositivo>;
    updateDispositivo(id: number, dispositivo: Partial<Dispositivo>): Promise<Dispositivo>;
    deleteDispositivo(id: number): Promise<void>;
}
