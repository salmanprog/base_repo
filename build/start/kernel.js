"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Server"));
Server_1.default.middleware.register([
    () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]("Adonis/Core/BodyParser"))),
    () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]("Adonis/Addons/Shield")))
]);
Server_1.default.middleware.registerNamed({
    apiAuthorization: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Middleware/ApiAuthorization'))),
    apiAuth: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Middleware/ApiAuthentication'))),
    adminAuth: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Middleware/AdminAuthentication'))),
    adminRedirectIfAuthenticate: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Middleware/AdminRedirectIfAuthentication'))),
    throttle: () => Promise.resolve().then(() => __importStar(require('@adonisjs/limiter/build/throttle'))),
});
//# sourceMappingURL=kernel.js.map