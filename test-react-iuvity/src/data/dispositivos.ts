import { DEVICE_MODELS, STORAGE_OPTIONS } from '../utils/const';
import { Dispositivo } from '../models/Dispositivo';

export const dispositivos: Dispositivo[] = [
    // Apple devices
    {
        id: 0,
        nombre: 'Apple',
        modelo: DEVICE_MODELS.Apple[0],
        almacenamiento: STORAGE_OPTIONS[2].value,
    },
    {
        id: 1,
        nombre: 'Apple',
        modelo: DEVICE_MODELS.Apple[1],
        almacenamiento: STORAGE_OPTIONS[3].value // 256GB
    },
    // Samsung devices
    {
        id: 2,
        nombre: 'Samsung',
        modelo: DEVICE_MODELS.Samsung[0],
        almacenamiento: STORAGE_OPTIONS[4].value // 512GB
    },
    {
        id: 3,
        nombre: 'Samsung',
        modelo: DEVICE_MODELS.Samsung[1],
        almacenamiento: STORAGE_OPTIONS[3].value // 256GB
    },
    // Xiaomi devices
    {
        id: 4,
        nombre: 'Xiaomi',
        modelo: DEVICE_MODELS.Xiaomi[0],
        almacenamiento: STORAGE_OPTIONS[3].value // 256GB
    },
    {
        id: 5,
        nombre: 'Xiaomi',
        modelo: DEVICE_MODELS.Xiaomi[1],
        almacenamiento: STORAGE_OPTIONS[2].value // 128GB
    },
    // Huawei devices
    {
        id: 6,
        nombre: 'Huawei',
        modelo: DEVICE_MODELS.Huawei[0],
        almacenamiento: STORAGE_OPTIONS[3].value // 256GB
    },
    // Google devices
    {
        id: 7,
        nombre: 'Google',
        modelo: DEVICE_MODELS.Google[0],
        almacenamiento: STORAGE_OPTIONS[4].value // 512GB
    },
    // OnePlus devices
    {
        id: 8,
        nombre: 'OnePlus',
        modelo: DEVICE_MODELS.OnePlus[0],
        almacenamiento: STORAGE_OPTIONS[3].value // 256GB
    }
]; 