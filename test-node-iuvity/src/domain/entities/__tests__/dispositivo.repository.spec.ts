import { Dispositivo, DispositivoRepository } from '../dispositivo.entity';

class MockDispositivoRepository implements DispositivoRepository {
  private dispositivos: Dispositivo[] = [];

  async findAll(): Promise<Dispositivo[]> {
    return this.dispositivos;
  }

  async findById(id: number): Promise<Dispositivo | null> {
    return this.dispositivos.find(d => d.id === id) || null;
  }

  async create(dispositivo: Omit<Dispositivo, 'id'>): Promise<Dispositivo> {
    const newDispositivo = {
      id: this.dispositivos.length + 1,
      ...dispositivo
    };
    this.dispositivos.push(newDispositivo);
    return newDispositivo;
  }

  async update(id: number, dispositivo: Partial<Dispositivo>): Promise<Dispositivo> {
    const index = this.dispositivos.findIndex(d => d.id === id);
    if (index === -1) {
      throw new Error('Dispositivo not found');
    }
    this.dispositivos[index] = { ...this.dispositivos[index], ...dispositivo };
    return this.dispositivos[index];
  }

  async delete(id: number): Promise<void> {
    const index = this.dispositivos.findIndex(d => d.id === id);
    if (index === -1) {
      throw new Error('Dispositivo not found');
    }
    this.dispositivos.splice(index, 1);
  }
}

describe('DispositivoRepository', () => {
  let repository: DispositivoRepository;
  let mockDispositivo: Omit<Dispositivo, 'id'>;

  beforeEach(() => {
    repository = new MockDispositivoRepository();
    mockDispositivo = {
      nombre: 'iPhone 13',
      modelo: 'A2482',
      almacenamiento: '128GB'
    };
  });

  it('should create a new dispositivo', async () => {
    const created = await repository.create(mockDispositivo);
    expect(created).toHaveProperty('id');
    expect(created.nombre).toBe(mockDispositivo.nombre);
    expect(created.modelo).toBe(mockDispositivo.modelo);
    expect(created.almacenamiento).toBe(mockDispositivo.almacenamiento);
  });

  it('should find all dispositivos', async () => {
    await repository.create(mockDispositivo);
    const dispositivos = await repository.findAll();
    expect(Array.isArray(dispositivos)).toBe(true);
    expect(dispositivos.length).toBe(1);
  });

  it('should find dispositivo by id', async () => {
    const created = await repository.create(mockDispositivo);
    const found = await repository.findById(created.id);
    expect(found).toBeDefined();
    expect(found?.id).toBe(created.id);
  });

  it('should update dispositivo', async () => {
    const created = await repository.create(mockDispositivo);
    const updated = await repository.update(created.id, { nombre: 'iPhone 14' });
    expect(updated.nombre).toBe('iPhone 14');
    expect(updated.modelo).toBe(created.modelo);
  });

  it('should delete dispositivo', async () => {
    const created = await repository.create(mockDispositivo);
    await repository.delete(created.id);
    const found = await repository.findById(created.id);
    expect(found).toBeNull();
  });

  it('should throw error when updating non-existent dispositivo', async () => {
    await expect(repository.update(999, { nombre: 'New Name' }))
      .rejects
      .toThrow('Dispositivo not found');
  });

  it('should throw error when deleting non-existent dispositivo', async () => {
    await expect(repository.delete(999))
      .rejects
      .toThrow('Dispositivo not found');
  });
}); 