import { DispositivoRepositoryImpl } from '../dispositivo.repository';
import { Dispositivo } from '../../../domain/entities/dispositivo.entity';

describe('DispositivoRepositoryImpl', () => {
  let repository: DispositivoRepositoryImpl;
  let mockDispositivo: Dispositivo;

  beforeEach(() => {
    repository = new DispositivoRepositoryImpl();
    mockDispositivo = {
      id: 1,
      nombre: 'iPhone 13',
      modelo: 'A2482',
      almacenamiento: '128GB'
    };
  });

  describe('findAll', () => {
    it('should return an array of dispositivos', async () => {
      const dispositivos = await repository.findAll();
      expect(Array.isArray(dispositivos)).toBe(true);
      expect(dispositivos.length).toBeGreaterThan(0);
    });
  });

  describe('findById', () => {
    it('should return a dispositivo by id', async () => {
      // First create a dispositivo
      const created = await repository.create({
        nombre: mockDispositivo.nombre,
        modelo: mockDispositivo.modelo,
        almacenamiento: mockDispositivo.almacenamiento
      });

      const found = await repository.findById(created.id);
      expect(found).toBeDefined();
      expect(found?.id).toBe(created.id);
      expect(found?.nombre).toBe(created.nombre);
      expect(found?.modelo).toBe(created.modelo);
      expect(found?.almacenamiento).toBe(created.almacenamiento);
    });

    it('should return null when dispositivo is not found', async () => {
      const found = await repository.findById(999);
      expect(found).toBeNull();
    });
  });

  describe('create', () => {
    it('should create a new dispositivo', async () => {
      const newDispositivo = {
        nombre: mockDispositivo.nombre,
        modelo: mockDispositivo.modelo,
        almacenamiento: mockDispositivo.almacenamiento
      };

      const created = await repository.create(newDispositivo);
      expect(created).toHaveProperty('id');
      expect(created.nombre).toBe(newDispositivo.nombre);
      expect(created.modelo).toBe(newDispositivo.modelo);
      expect(created.almacenamiento).toBe(newDispositivo.almacenamiento);
    });
  });

  describe('update', () => {
    it('should update a dispositivo', async () => {
      // First create a dispositivo
      const created = await repository.create({
        nombre: mockDispositivo.nombre,
        modelo: mockDispositivo.modelo,
        almacenamiento: mockDispositivo.almacenamiento
      });

      const updateData = { nombre: 'iPhone 14' };
      const updated = await repository.update(created.id, updateData);
      expect(updated.nombre).toBe(updateData.nombre);
      expect(updated.modelo).toBe(created.modelo);
      expect(updated.almacenamiento).toBe(created.almacenamiento);
    });

    it('should throw error when updating non-existent dispositivo', async () => {
      const updateData = { nombre: 'New Name' };
      await expect(repository.update(999, updateData))
        .rejects
        .toThrow('Dispositivo not found');
    });
  });

  describe('delete', () => {
    it('should delete a dispositivo', async () => {
      // First create a dispositivo
      const created = await repository.create({
        nombre: mockDispositivo.nombre,
        modelo: mockDispositivo.modelo,
        almacenamiento: mockDispositivo.almacenamiento
      });

      await repository.delete(created.id);
      const found = await repository.findById(created.id);
      expect(found).toBeNull();
    });

    it('should throw error when deleting non-existent dispositivo', async () => {
      await expect(repository.delete(999))
        .rejects
        .toThrow('Dispositivo not found');
    });
  });
}); 