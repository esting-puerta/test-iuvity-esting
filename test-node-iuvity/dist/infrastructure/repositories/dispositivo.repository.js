"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispositivoRepositoryImpl = void 0;
const dispositivos_1 = require("../../utils/data/dispositivos");
class DispositivoRepositoryImpl {
    dispositivos = [...dispositivos_1.dispositivos];
    async findAll() {
        return this.dispositivos;
    }
    async findById(id) {
        return this.dispositivos.find(dispositivo => dispositivo.id === id) || null;
    }
    async create(dispositivo) {
        const newDispositivo = {
            id: this.dispositivos.length,
            ...dispositivo
        };
        this.dispositivos.push(newDispositivo);
        return newDispositivo;
    }
    async update(id, dispositivo) {
        const index = this.dispositivos.findIndex(d => d.id === id);
        if (index === -1) {
            throw new Error('Dispositivo not found');
        }
        this.dispositivos[index] = { ...this.dispositivos[index], ...dispositivo };
        return this.dispositivos[index];
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