import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DispositivoUseCases } from '../../application/use-cases/dispositivo.use-cases';
import { Dispositivo } from '../../domain/entities/dispositivo.entity';

@Controller('dispositivos')
export class DispositivoController {
  constructor(private readonly dispositivoUseCases: DispositivoUseCases) {}

  @Get()
  async getAllDispositivos(): Promise<Dispositivo[]> {
    return this.dispositivoUseCases.getAllDispositivos();
  }

  @Get(':id')
  async getDispositivoById(@Param('id') id: string): Promise<Dispositivo | null> {
    return this.dispositivoUseCases.getDispositivoById(Number(id));
  }

  @Post()
  async createDispositivo(@Body() dispositivo: Omit<Dispositivo, 'id'>): Promise<Dispositivo> {
    return this.dispositivoUseCases.createDispositivo(dispositivo);
  }

  @Put(':id')
  async updateDispositivo(
    @Param('id') id: string,
    @Body() dispositivo: Partial<Dispositivo>
  ): Promise<Dispositivo> {
    return this.dispositivoUseCases.updateDispositivo(Number(id), dispositivo);
  }

  @Delete(':id')
  async deleteDispositivo(@Param('id') id: string): Promise<void> {
    return this.dispositivoUseCases.deleteDispositivo(Number(id));
  }
} 