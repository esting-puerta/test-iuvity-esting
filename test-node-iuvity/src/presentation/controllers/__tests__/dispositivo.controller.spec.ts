import { Test, TestingModule } from '@nestjs/testing';
import { DispositivoController } from '../dispositivo.controller';
import { DispositivoUseCases } from '../../../application/use-cases/dispositivo.use-cases';
import { Dispositivo } from '../../../domain/entities/dispositivo.entity';

describe('DispositivoController', () => {
  let controller: DispositivoController;
  let useCases: DispositivoUseCases;

  const mockDispositivo: Dispositivo = {
    id: 1,
    nombre: 'iPhone 13',
    modelo: 'A2482',
    almacenamiento: '128GB'
  };

  const mockUseCases = {
    getAllDispositivos: jest.fn(),
    getDispositivoById: jest.fn(),
    createDispositivo: jest.fn(),
    updateDispositivo: jest.fn(),
    deleteDispositivo: jest.fn()
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DispositivoController],
      providers: [
        {
          provide: DispositivoUseCases,
          useValue: mockUseCases
        }
      ]
    }).compile();

    controller = module.get<DispositivoController>(DispositivoController);
    useCases = module.get<DispositivoUseCases>(DispositivoUseCases);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllDispositivos', () => {
    it('should return an array of dispositivos', async () => {
      const dispositivos = [mockDispositivo];
      mockUseCases.getAllDispositivos.mockResolvedValue(dispositivos);

      const result = await controller.getAllDispositivos();
      expect(result).toEqual(dispositivos);
      expect(mockUseCases.getAllDispositivos).toHaveBeenCalled();
    });
  });

  describe('getDispositivoById', () => {
    it('should return a dispositivo by id', async () => {
      mockUseCases.getDispositivoById.mockResolvedValue(mockDispositivo);

      const result = await controller.getDispositivoById('1');
      expect(result).toEqual(mockDispositivo);
      expect(mockUseCases.getDispositivoById).toHaveBeenCalledWith(1);
    });

    it('should return null when dispositivo is not found', async () => {
      mockUseCases.getDispositivoById.mockResolvedValue(null);

      const result = await controller.getDispositivoById('999');
      expect(result).toBeNull();
      expect(mockUseCases.getDispositivoById).toHaveBeenCalledWith(999);
    });
  });

  describe('createDispositivo', () => {
    it('should create a new dispositivo', async () => {
      const newDispositivo = { ...mockDispositivo, id: undefined };
      mockUseCases.createDispositivo.mockResolvedValue(mockDispositivo);

      const result = await controller.createDispositivo(newDispositivo);
      expect(result).toEqual(mockDispositivo);
      expect(mockUseCases.createDispositivo).toHaveBeenCalledWith(newDispositivo);
    });
  });

  describe('updateDispositivo', () => {
    it('should update a dispositivo', async () => {
      const updateData = { nombre: 'iPhone 14' };
      const updatedDispositivo = { ...mockDispositivo, ...updateData };
      mockUseCases.updateDispositivo.mockResolvedValue(updatedDispositivo);

      const result = await controller.updateDispositivo('1', updateData);
      expect(result).toEqual(updatedDispositivo);
      expect(mockUseCases.updateDispositivo).toHaveBeenCalledWith(1, updateData);
    });
  });

  describe('deleteDispositivo', () => {
    it('should delete a dispositivo', async () => {
      mockUseCases.deleteDispositivo.mockResolvedValue(undefined);

      await controller.deleteDispositivo('1');
      expect(mockUseCases.deleteDispositivo).toHaveBeenCalledWith(1);
    });
  });
}); 