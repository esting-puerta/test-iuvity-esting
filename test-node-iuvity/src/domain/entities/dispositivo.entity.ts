export interface Dispositivo {
  id: number;
  nombre: string;
  modelo: string;
  almacenamiento: string;
}

export interface DispositivoRepository {
  findAll(): Promise<Dispositivo[]>;
  findById(id: number): Promise<Dispositivo | null>;
  create(dispositivo: Omit<Dispositivo, 'id'>): Promise<Dispositivo>;
  update(id: number, dispositivo: Partial<Dispositivo>): Promise<Dispositivo>;
  delete(id: number): Promise<void>;
}

export const DISPOSITIVO_REPOSITORY = 'DISPOSITIVO_REPOSITORY'; 