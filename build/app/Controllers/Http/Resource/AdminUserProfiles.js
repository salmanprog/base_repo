'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const Index_1 = global[Symbol.for('ioc.use')]("App/Helpers/Index");
const Gender_1 = __importDefault(require("./Gender"));
const Sex_1 = __importDefault(require("./Sex"));
const SexOrientation_1 = __importDefault(require("./SexOrientation"));
const RelationShip_1 = __importDefault(require("./RelationShip"));
const AncillaryRealtionship_1 = __importDefault(require("./AncillaryRealtionship"));
const ContactUsStatus_1 = __importDefault(require("./ContactUsStatus"));
const Media_1 = __importDefault(require("./Media"));
const Media_2 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Media"));
const Category_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Category"));
const UserSelectedCategory_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/UserSelectedCategory"));
const UserSelectedCategory_2 = __importDefault(global[Symbol.for('ioc.use')]("App/Controllers/Http/Resource/UserSelectedCategory"));
const AbuseStatuses_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Controllers/Http/Resource/AbuseStatuses"));
class AdminUserProfiles {
    static async initResponse(data, request) {
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
        return {
            id: record.id,
            slug: record.slug,
            name: record.name,
            nick_name: record.nick_name,
            dob: record.dob,
            age: record.age,
            image_url: !lodash_1.default.isEmpty(record.image_url) ? await (0, Index_1.storageUrl)(record.image_url) : (0, Index_1.baseUrl)('/images/user-placeholder.jpg'),
            gender: await Gender_1.default.initResponse(record.Gender, request),
            other_gender: record.other_gender,
            sex: await Sex_1.default.initResponse(record.Sex, request),
            other_sex: record.other_sex,
            sex_orientation: await SexOrientation_1.default.initResponse(record.SexOrientation, request),
            other_sex_orientation: record.other_sex_orientation,
            relationship: await RelationShip_1.default.initResponse(record.RelationShip, request),
            other_relationship: record.other_relationship,
            ancillary_relationship: await AncillaryRealtionship_1.default.initResponse(record.AncillaryRealtionship, request),
            contactus_status: await ContactUsStatus_1.default.initResponse(record.ContactUsStatus, request),
            contact_status_updated_at: record.contact_status_updated_at,
            abuse_type: await Category_1.default.getAllSubCategoriesById('personality_profile', record.id, 6),
            abuse_status: await AbuseStatuses_1.default.initResponse(record.AbuseStatuses, request),
            categories: await UserSelectedCategory_2.default.initResponse(await UserSelectedCategory_1.default.getSelectedCategoryArr('personality_profile', record.id), request),
            media: {
                'image': await Media_1.default.initResponse(await Media_2.default.getMediaByType(record.id, 'personality_profile', 'image'), request),
                'video': await Media_1.default.initResponse(await Media_2.default.getMediaByType(record.id, 'personality_profile', 'video'), request),
                'audio': await Media_1.default.initResponse(await Media_2.default.getMediaByType(record.id, 'personality_profile', 'audio'), request),
            }
        };
    }
}
module.exports = AdminUserProfiles;
//# sourceMappingURL=AdminUserProfiles.js.map