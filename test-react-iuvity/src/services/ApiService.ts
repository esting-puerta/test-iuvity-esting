import { CONFIG } from '../utils/const';
import { Usuario } from "../models/Usuario";
import { Dispositivo } from '../models/Dispositivo';

const API_URL = CONFIG.API_URL_BACK;
const API_URL_RAMDOMUSER = CONFIG.API_URL_RAMDOMUSER;
const DISPOSITIVO_URL = 'dispositivos';

export class ApiService {

    static async getDatosUsuario(): Promise<Usuario> {
        const resp = await fetch(API_URL_RAMDOMUSER, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (!resp.ok) throw new Error('Error al consultar usuario');
        return resp.json();
    }

    static async obtenerTodos(): Promise<Dispositivo[]> {
        const resp = await fetch(API_URL + DISPOSITIVO_URL);
        if (!resp.ok) throw new Error('Error al obtener los dispositivos');
        return resp.json();
    }

    static async crear(data: Omit<Dispositivo, 'id'>): Promise<Dispositivo> {
        const resp = await fetch(API_URL + DISPOSITIVO_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!resp.ok) throw new Error('Error al crear dispositivo');
        return resp.json();
    }

    static async actualizar(id: number, data: Partial<Dispositivo>): Promise<Dispositivo> {
        const resp = await fetch(`${API_URL}${DISPOSITIVO_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!resp.ok) throw new Error('Error al actualizar dispositivo');
        return resp.json();
    }

    static async eliminar(id: number): Promise<void> {
        const resp = await fetch(`${API_URL}${DISPOSITIVO_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!resp.ok) throw new Error('Error al eliminar dispositivo');
    }
}