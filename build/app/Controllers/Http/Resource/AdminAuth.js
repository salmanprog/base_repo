'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const Index_1 = global[Symbol.for('ioc.use')]("App/Helpers/Index");
class User {
    constructor() {
        this.headers = {};
    }
    static async initResponse(data, request) {
        this.headers = request.headers();
        if (lodash_1.default.isEmpty(data))
            return [];
        let response;
        if (Array.isArray(data)) {
            response = [];
            for (var i = 0; i < data.length; i++) {
                response.push(await this.jsonSchema(data[i], request));
            }
        }
        else {
            response = await this.jsonSchema(data, request);
        }
        return response;
    }
    static async jsonSchema(record, request) {
        let api_token = typeof request.headers().authorization == 'undefined' ? record.userApiToken.api_token : request.apiToken();
        api_token = Buffer.from(api_token, "utf8").toString("base64");
        return {
            id: record.id,
            parent_id: record.parent_id,
            user_group_id: record.user_group_id,
            name: record.name,
            username: record.username,
            slug: record.slug,
            email: record.email,
            mobile_no: record.mobile_no,
            image_url: !lodash_1.default.isEmpty(record.image_url) ? await (0, Index_1.storageUrl)(record.image_url) : (0, Index_1.baseUrl)('/images/user-placeholder.jpg'),
            company_name: record.company_name,
            company_address: record.company_address,
            company_mobile_number: record.company_mobile_number,
            company_email_address: record.company_email_address,
            is_mobile_verify: record.is_mobile_verify,
            is_email_verify: record.is_email_verify,
            platform_type: record.platform_type,
            status: record.status,
            api_token: api_token,
            cms_modules: record.cms_modules,
            created_at: record.created_at
        };
    }
}
module.exports = User;
//# sourceMappingURL=AdminAuth.js.map