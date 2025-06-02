"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispositivoModule = void 0;
const common_1 = require("@nestjs/common");
const dispositivo_controller_1 = require("./presentation/controllers/dispositivo.controller");
const dispositivo_use_cases_1 = require("./application/use-cases/dispositivo.use-cases");
const dispositivo_repository_1 = require("./infrastructure/repositories/dispositivo.repository");
const dispositivo_entity_1 = require("./domain/entities/dispositivo.entity");
let DispositivoModule = class DispositivoModule {
};
exports.DispositivoModule = DispositivoModule;
exports.DispositivoModule = DispositivoModule = __decorate([
    (0, common_1.Module)({
        controllers: [dispositivo_controller_1.DispositivoController],
        providers: [
            dispositivo_use_cases_1.DispositivoUseCases,
            {
                provide: dispositivo_entity_1.DISPOSITIVO_REPOSITORY,
                useClass: dispositivo_repository_1.DispositivoRepositoryImpl
            }
        ]
    })
], DispositivoModule);
//# sourceMappingURL=dispositivo.module.js.map