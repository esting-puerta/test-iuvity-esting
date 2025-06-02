import { DISPOSITIVO_MODELS, STORAGE_OPTIONS } from '../const';
import { Dispositivo } from '../../domain/entities/dispositivo.entity';

export const dispositivos: Dispositivo[] = [
    // Apple dispositivos
    {
        id: 1,
        nombre: 'iPhone 14',
        modelo: DISPOSITIVO_MODELS.Apple[1],
        almacenamiento: STORAGE_OPTIONS[1]
    },
    // Samsung dispositivos
    {
        id: 2,
        nombre: 'Galaxy S22',
        modelo: DISPOSITIVO_MODELS.Samsung[0],
        almacenamiento: STORAGE_OPTIONS[2]
    },
    {
        id: 3,
        nombre: 'Galaxy S21',
        modelo: DISPOSITIVO_MODELS.Samsung[1],
        almacenamiento: STORAGE_OPTIONS[1]
    },
    // Xiaomi dispositivos
    {
        id: 4,
        nombre: 'Mi 12',
        modelo: DISPOSITIVO_MODELS.Xiaomi[0],
        almacenamiento: STORAGE_OPTIONS[1]
    },
    {
        id: 5,
        nombre: 'Mi 11',
        modelo: DISPOSITIVO_MODELS.Xiaomi[1],
        almacenamiento: STORAGE_OPTIONS[0]
    },
    // Huawei dispositivos
    {
        id: 6,
        nombre: 'P50',
        modelo: DISPOSITIVO_MODELS.Huawei[0],
        almacenamiento: STORAGE_OPTIONS[2]
    },
    // Google dispositivos
    {
        id: 7,
        nombre: 'Pixel 7',
        modelo: DISPOSITIVO_MODELS.Google[0],
        almacenamiento: STORAGE_OPTIONS[1]
    },
    // OnePlus dispositivos
    {
        id: 8,
        nombre: 'OnePlus 10',
        modelo: DISPOSITIVO_MODELS.OnePlus[0],
        almacenamiento: STORAGE_OPTIONS[2]
    }
]; 