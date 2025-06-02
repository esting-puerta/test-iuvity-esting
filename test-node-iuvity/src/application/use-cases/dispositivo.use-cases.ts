import { Injectable, Inject } from '@nestjs/common';
import { Dispositivo, DispositivoRepository, DISPOSITIVO_REPOSITORY } from '../../domain/entities/dispositivo.entity';

@Injectable()
export class DispositivoUseCases {
  constructor(
    @Inject(DISPOSITIVO_REPOSITORY)
    private readonly dispositivoRepository: DispositivoRepository
  ) {}

  async getAllDispositivos(): Promise<Dispositivo[]> {
    return this.dispositivoRepository.findAll();
  }

  async getDispositivoById(id: number): Promise<Dispositivo | null> {
    return this.dispositivoRepository.findById(id);
  }

  async createDispositivo(dispositivo: Omit<Dispositivo, 'id'>): Promise<Dispositivo> {
    return this.dispositivoRepository.create(dispositivo);
  }

  async updateDispositivo(id: number, dispositivo: Partial<Dispositivo>): Promise<Dispositivo> {
    return this.dispositivoRepository.update(id, dispositivo);
  }

  async deleteDispositivo(id: number): Promise<void> {
    return this.dispositivoRepository.delete(id);
  }
} 