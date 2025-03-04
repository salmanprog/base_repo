"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
const Hash_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Hash"));
const Index_1 = global[Symbol.for('ioc.use')]("App/Helpers/Index");
class default_1 extends Seeder_1.default {
    async run() {
        await this.userGroup();
        await this.users();
        await this.cmsModules();
        await this.applicationSetting();
        await this.contentManagement();
    }
    async userGroup() {
        await Database_1.default.table('user_groups').insert([
            {
                title: 'Super Admin',
                slug: (0, Index_1.strSlug)('Super Admin'),
                type: 'admin',
                is_super_admin: '1',
                created_at: new Date(),
            },
            {
                title: 'Admin',
                slug: (0, Index_1.strSlug)('Admin'),
                type: 'admin',
                is_super_admin: '0',
                created_at: new Date(),
            },
            {
                title: 'Contractor',
                slug: (0, Index_1.strSlug)('contractor'),
                type: 'contractor',
                is_super_admin: '0',
                created_at: new Date(),
            },
            {
                title: 'Manager',
                slug: (0, Index_1.strSlug)('manager'),
                type: 'manager',
                is_super_admin: '0',
                created_at: new Date(),
            },
            {
                title: 'Customer',
                slug: (0, Index_1.strSlug)('customer'),
                type: 'customer',
                is_super_admin: '0',
                created_at: new Date(),
            },
            {
                title: 'Crew',
                slug: (0, Index_1.strSlug)('crew'),
                type: 'crew',
                is_super_admin: '0',
                created_at: new Date(),
            },
            {
                title: 'App User',
                slug: (0, Index_1.strSlug)('App User'),
                type: 'user',
                is_super_admin: '0',
                created_at: new Date(),
            }
        ]);
    }
    async users() {
        await Database_1.default.table('users').insert([
            {
                user_group_id: 1,
                user_type: 'admin',
                name: 'Super Admin',
                username: 'superadmin',
                slug: 'superadmin',
                email: 'superadmin@admin.com',
                dob: '1996-05-20',
                age: 29,
                gender: 'Male',
                password: await Hash_1.default.make('Superadmin@123$'),
                is_email_verify: '1',
                email_verify_at: new Date(),
                created_at: new Date()
            },
            {
                user_group_id: 2,
                user_type: 'admin',
                name: 'Admin',
                username: 'admin',
                slug: 'admin',
                email: 'admin@cks.com',
                dob: '1996-05-20',
                age: 29,
                gender: 'Male',
                password: await Hash_1.default.make('Admin@123$'),
                is_email_verify: '1',
                email_verify_at: new Date(),
                created_at: new Date()
            }
        ]);
    }
    async cmsModules() {
        await Database_1.default.table('cms_modules').insert([
            {
                id: 1,
                name: 'Dashboard',
                route_name: 'admin/dashboard',
                icon: 'DashboardOutlined',
                status: '1',
                sort_order: 1,
                created_at: new Date()
            },
            {
                id: 2,
                name: 'Contractor Management',
                route_name: 'admin/contractor',
                icon: 'UsergroupDeleteOutlined',
                status: '1',
                sort_order: 2,
                created_at: new Date()
            },
            {
                id: 3,
                name: 'Content Management',
                route_name: 'admin/content',
                icon: 'ScheduleOutlined',
                status: '1',
                sort_order: 6,
                created_at: new Date()
            },
            {
                id: 4,
                name: 'Application Setting',
                route_name: 'admin/application-setting',
                icon: 'SettingOutlined',
                status: '1',
                sort_order: 7,
                created_at: new Date()
            },
            {
                id: 5,
                name: 'Profile Settings',
                route_name: 'admin/profilesettings',
                icon: 'UserOutlined',
                status: '1',
                sort_order: 8,
                created_at: new Date()
            },
            {
                id: 6,
                name: 'Change Password',
                route_name: 'admin/changepassword',
                icon: 'UnlockOutlined',
                status: '1',
                sort_order: 9,
                created_at: new Date()
            }
        ]);
    }
    async applicationSetting() {
        await Database_1.default.table('application_settings').insert([
            {
                identifier: 'application_setting',
                meta_key: 'favicon',
                value: '/images/favicon.png',
                is_file: '1',
                created_at: new Date(),
            },
            {
                identifier: 'application_setting',
                meta_key: 'logo',
                value: '/images/logo.jpg',
                is_file: '1',
                created_at: new Date(),
            },
            {
                identifier: 'application_setting',
                meta_key: 'application_name',
                value: 'CKS Portal',
                is_file: '0',
                created_at: new Date(),
            }
        ]);
    }
    async contentManagement() {
        let content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
        await Database_1.default.table('content_managements').insert([
            {
                title: 'About US',
                slug: 'about-us',
                content: content,
                status: '1',
                created_at: new Date(),
            },
            {
                title: 'Privacy Policy',
                slug: 'privacy-policy',
                content: content,
                status: '1',
                created_at: new Date(),
            },
            {
                title: 'Terms & Conditions',
                slug: 'terms-conditions',
                content: content,
                status: '1',
                created_at: new Date(),
            }
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=DatabaseSeeder.js.map