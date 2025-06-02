"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispositivoRepositoryImpl = void 0;
const dispositivos_1 = require("../../utils/data/dispositivos");
class DispositivoRepositoryImpl {
    dispositivos = [...dispositivos_1.dispositivos];
    async findAll() {
        return [...this.dispositivos];
    }
    async findById(id) {
        const dispositivo = this.dispositivos.find(d => d.id === id);
        return dispositivo ? { ...dispositivo } : null;
    }
    async create(dispositivo) {
        const maxId = Math.max(...this.dispositivos.map(d => d.id), 0);
        const newDispositivo = {
            id: maxId + 1,
            ...dispositivo
        };
        this.dispositivos.push({ ...newDispositivo });
        return newDispositivo;
    }
    async update(id, dispositivo) {
        const index = this.dispositivos.findIndex(d => d.id === id);
        if (index === -1) {
            throw new Error('Dispositivo not found');
        }
        const updatedDispositivo = { ...this.dispositivos[index], ...dispositivo };
        this.dispositivos[index] = updatedDispositivo;
        return { ...updatedDispositivo };
    }
    async delete(id) {
        const index = this.dispositivos.findIndex(d => d.id === id);
        if (index === -1) {
            throw new Error('Dispositivo not found');
        }
        this.dispositivos.splice(index, 1);
    }
}
exports.DispositivoRepositoryImpl = DispositivoRepositoryImpl;
//# sourceMappingURL=dispositivo.repository.js.map