"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispositivoController = void 0;
const common_1 = require("@nestjs/common");
const dispositivo_use_cases_1 = require("../../application/use-cases/dispositivo.use-cases");
let DispositivoController = class DispositivoController {
    dispositivoUseCases;
    constructor(dispositivoUseCases) {
        this.dispositivoUseCases = dispositivoUseCases;
    }
    async getAllDispositivos() {
        return this.dispositivoUseCases.getAllDispositivos();
    }
    async getDispositivoById(id) {
        return this.dispositivoUseCases.getDispositivoById(Number(id));
    }
    async createDispositivo(dispositivo) {
        return this.dispositivoUseCases.createDispositivo(dispositivo);
    }
    async updateDispositivo(id, dispositivo) {
        return this.dispositivoUseCases.updateDispositivo(Number(id), dispositivo);
    }
    async deleteDispositivo(id) {
        return this.dispositivoUseCases.deleteDispositivo(Number(id));
    }
};
exports.DispositivoController = DispositivoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DispositivoController.prototype, "getAllDispositivos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DispositivoController.prototype, "getDispositivoById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DispositivoController.prototype, "createDispositivo", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DispositivoController.prototype, "updateDispositivo", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DispositivoController.prototype, "deleteDispositivo", null);
exports.DispositivoController = DispositivoController = __decorate([
    (0, common_1.Controller)('dispositivos'),
    __metadata("design:paramtypes", [dispositivo_use_cases_1.DispositivoUseCases])
], DispositivoController);
//# sourceMappingURL=dispositivo.controller.js.map