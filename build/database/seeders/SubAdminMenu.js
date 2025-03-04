"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
class default_1 extends Seeder_1.default {
    async run() {
        await Database_1.default.table('cms_module_permissions').insert([
            {
                user_group_id: '2',
                cms_module_id: '1',
                is_add: '1',
                is_view: '1',
                is_update: '1',
                is_delete: '1',
                created_at: new Date(),
            },
            {
                user_group_id: '2',
                cms_module_id: '2',
                is_add: '1',
                is_view: '1',
                is_update: '1',
                is_delete: '1',
                created_at: new Date(),
            },
            {
                user_group_id: '2',
                cms_module_id: '5',
                is_add: '1',
                is_view: '1',
                is_update: '1',
                is_delete: '1',
                created_at: new Date(),
            },
            {
                user_group_id: '2',
                cms_module_id: '6',
                is_add: '1',
                is_view: '1',
                is_update: '1',
                is_delete: '1',
                created_at: new Date(),
            },
            {
                user_group_id: '3',
                cms_module_id: '1',
                is_add: '1',
                is_view: '1',
                is_update: '1',
                is_delete: '1',
                created_at: new Date(),
            },
            {
                user_group_id: '3',
                cms_module_id: '5',
                is_add: '1',
                is_view: '1',
                is_update: '1',
                is_delete: '1',
                created_at: new Date(),
            },
            {
                user_group_id: '3',
                cms_module_id: '6',
                is_add: '1',
                is_view: '1',
                is_update: '1',
                is_delete: '1',
                created_at: new Date(),
            }
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=SubAdminMenu.js.map