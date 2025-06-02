import { Dispositivo, DispositivoRepository } from '../../domain/entities/dispositivo.entity';
import { dispositivos } from '../../utils/data/dispositivos';

export class DispositivoRepositoryImpl implements DispositivoRepository {
  private dispositivos: Dispositivo[] = [...dispositivos];

  async findAll(): Promise<Dispositivo[]> {
    return [...this.dispositivos];
  }

  async findById(id: number): Promise<Dispositivo | null> {
    const dispositivo = this.dispositivos.find(d => d.id === id);
    return dispositivo ? { ...dispositivo } : null;
  }

  async create(dispositivo: Omit<Dispositivo, 'id'>): Promise<Dispositivo> {
    const maxId = Math.max(...this.dispositivos.map(d => d.id), 0);
    const newDispositivo: Dispositivo = {
      id: maxId + 1,
      ...dispositivo
    };
    this.dispositivos.push({ ...newDispositivo });
    return newDispositivo;
  }

  async update(id: number, dispositivo: Partial<Dispositivo>): Promise<Dispositivo> {
    const index = this.dispositivos.findIndex(d => d.id === id);
    if (index === -1) {
      throw new Error('Dispositivo not found');
    }
    const updatedDispositivo = { ...this.dispositivos[index], ...dispositivo };
    this.dispositivos[index] = updatedDispositivo;
    return { ...updatedDispositivo };
  }

  async delete(id: number): Promise<void> {
    const index = this.dispositivos.findIndex(d => d.id === id);
    if (index === -1) {
      throw new Error('Dispositivo not found');
    }
    this.dispositivos.splice(index, 1);
  }
} 