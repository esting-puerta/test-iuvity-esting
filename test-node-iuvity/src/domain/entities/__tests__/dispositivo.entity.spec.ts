import { Dispositivo } from '../dispositivo.entity';

describe('Dispositivo Entity', () => {
  let dispositivo: Dispositivo;

  beforeEach(() => {
    dispositivo = {
      id: 1,
      nombre: 'iPhone 13',
      modelo: 'A2482',
      almacenamiento: '128GB'
    };
  });

  it('should create a valid dispositivo', () => {
    expect(dispositivo).toBeDefined();
    expect(dispositivo.id).toBe(1);
    expect(dispositivo.nombre).toBe('iPhone 13');
    expect(dispositivo.modelo).toBe('A2482');
    expect(dispositivo.almacenamiento).toBe('128GB');
  });

  it('should have all required properties', () => {
    expect(dispositivo).toHaveProperty('id');
    expect(dispositivo).toHaveProperty('nombre');
    expect(dispositivo).toHaveProperty('modelo');
    expect(dispositivo).toHaveProperty('almacenamiento');
  });

  it('should have correct property types', () => {
    expect(typeof dispositivo.id).toBe('number');
    expect(typeof dispositivo.nombre).toBe('string');
    expect(typeof dispositivo.modelo).toBe('string');
    expect(typeof dispositivo.almacenamiento).toBe('string');
  });
}); 