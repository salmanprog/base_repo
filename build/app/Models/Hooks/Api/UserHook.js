'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const FileUpload_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Libraries/FileUpload/FileUpload"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const Hash_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Hash"));
const Index_1 = global[Symbol.for('ioc.use')]("App/Helpers/Index");
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
class UserHook {
    static async indexQueryHook(query, request, slug = '') {
        query.select('users.*');
        if (typeof request.apiToken == 'function' && !lodash_1.default.isEmpty(slug)) {
            query.preload('userApiToken', (userApiTokenQuery) => {
                userApiTokenQuery.where('api_token', request.apiToken());
            });
        }
        if (lodash_1.default.isEmpty(slug)) {
            query.where('users.user_type', 'user');
        }
    }
    static async beforeCreateHook(request, params) {
        if (Env_1.default.get('OTP_DRIVER') == 'Telesign' && Env_1.default.get('OTP_SENDBOX') == 0) {
            params.mobile_otp = request.otpCode();
            params.mobile_otp_created_at = (0, Index_1.currentDateTime)();
        }
        if (!lodash_1.default.isEmpty(request.file('image_url'))) {
            params.image_url = await FileUpload_1.default.doUpload(request.file('image_url'), 'user');
        }
        let username = await User_1.default.generateSlug(params.name);
        params.user_group_id = lodash_1.default.isEmpty(params.user_group_id) ? 2 : params.user_group_id;
        params.parent_id = request.user().id;
        params.user_type = 'user';
        params.password = await Hash_1.default.make(params.password);
        params.username = username;
        params.slug = username;
        params.is_email_verify = 1;
        params.created_at = (0, Index_1.currentDateTime)();
    }
    static async afterCreateHook(record, request, params) {
        let request_params = request.all();
        let api_token = User_1.default.generateApiToken(record.email);
        await Database_1.default.table('user_api_tokens').insert({
            user_id: record.id,
            api_token: api_token,
            device_type: request_params.device_type,
            device_token: request_params.device_token,
            platform_type: lodash_1.default.isEmpty(request_params.platform_type) ? 'custom' : request_params.platform_type,
            platform_id: lodash_1.default.isEmpty(request_params.platform_id) ? null : request_params.platform_id,
            ip_address: request.ip(),
            user_agent: request.header('User-Agent'),
            created_at: (0, Index_1.currentDateTime)()
        });
        const Request = Application_1.default.container.use('Adonis/Core/Request');
        Request.macro('apiToken', function () {
            return api_token;
        });
    }
    static async beforeEditHook(request, params, slug) {
        if (!lodash_1.default.isEmpty(request.file('image_url'))) {
            params.image_url = await FileUpload_1.default.doUpload(request.file('image_url'), 'user');
        }
    }
    static async afterEditHook(request, slug) {
    }
    static async beforeDeleteHook(request, params, slug) {
    }
    static async afterDeleteHook(request, params, slug) {
    }
}
module.exports = UserHook;
//# sourceMappingURL=UserHook.js.map