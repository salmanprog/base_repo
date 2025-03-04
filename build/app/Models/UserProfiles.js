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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
const Index_1 = global[Symbol.for('ioc.use')]("App/Helpers/Index");
const luxon_1 = require("luxon");
const RestModel_1 = __importDefault(require("./RestModel"));
const Gender_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Gender"));
const Sex_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Sex"));
const SexOrientation_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/SexOrientation"));
const RelationShip_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/RelationShip"));
const AncillaryRealtionship_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/AncillaryRealtionship"));
const ContactUsStatus_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ContactUsStatus"));
const AbuseStatuses_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/AbuseStatuses"));
const MartialStatus_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/MartialStatus"));
class UserProfiles extends RestModel_1.default {
    static fillable() {
        return [
            'slug', 'user_id', 'image_url', 'name', 'nick_name', 'dob', 'martial_status', 'other_martial_status', 'gender', 'other_gender', 'sex', 'other_sex', 'sex_orientation', 'other_sex_orientation', 'age', 'relationship', 'other_relationship', 'ancillary_relationship', 'abuse_status', 'contact_status', 'contact_status_updated_at', 'created_at', 'updated_at', 'deleted_at'
        ];
    }
    static async getProfileById(id) {
        let record = await this.query().preload('Gender').preload('Sex').preload('SexOrientation').preload('RelationShip').preload('AncillaryRealtionship').preload('ContactUsStatus').where('id', id).whereNull('deleted_at').first();
        return record;
    }
    static async getProfileCount(user_id) {
        let record = await this.query().where('user_id', user_id).whereNull('deleted_at').getCount();
        return record;
    }
    static async getProfileBySlug(slug) {
        let record = await this.query().preload('Gender').preload('Sex').preload('SexOrientation').preload('RelationShip').preload('AncillaryRealtionship').preload('ContactUsStatus').where('slug', slug).whereNull('deleted_at').first();
        return record;
    }
    static async generateSlug(name) {
        let slug = (0, Index_1.strSlug)(name);
        let query = await this.query().where('slug', slug).count('id as total');
        return query[0].$extras.total == 0 ? slug : slug + query[0].$extras.total + (0, Index_1.rand)(111, 999);
    }
}
UserProfiles.table = 'user_profiles';
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], UserProfiles.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], UserProfiles.prototype, "user_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], UserProfiles.prototype, "slug", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], UserProfiles.prototype, "image_url", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], UserProfiles.prototype, "name", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], UserProfiles.prototype, "nick_name", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], UserProfiles.prototype, "dob", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], UserProfiles.prototype, "martial_status", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], UserProfiles.prototype, "other_martial_status", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], UserProfiles.prototype, "gender", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], UserProfiles.prototype, "other_gender", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], UserProfiles.prototype, "sex", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], UserProfiles.prototype, "other_sex", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], UserProfiles.prototype, "sex_orientation", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], UserProfiles.prototype, "other_sex_orientation", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], UserProfiles.prototype, "age", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], UserProfiles.prototype, "relationship", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], UserProfiles.prototype, "other_relationship", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], UserProfiles.prototype, "ancillary_relationship", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], UserProfiles.prototype, "abuse_status", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], UserProfiles.prototype, "contact_status", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], UserProfiles.prototype, "contact_status_updated_at", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], UserProfiles.prototype, "status", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], UserProfiles.prototype, "created_at", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], UserProfiles.prototype, "updated_at", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Object)
], UserProfiles.prototype, "deleted_at", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => Gender_1.default, {
        foreignKey: 'gender'
    }),
    __metadata("design:type", Object)
], UserProfiles.prototype, "Gender", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => Sex_1.default, {
        foreignKey: 'sex'
    }),
    __metadata("design:type", Object)
], UserProfiles.prototype, "Sex", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => SexOrientation_1.default, {
        foreignKey: 'sex_orientation'
    }),
    __metadata("design:type", Object)
], UserProfiles.prototype, "SexOrientation", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => RelationShip_1.default, {
        foreignKey: 'relationship'
    }),
    __metadata("design:type", Object)
], UserProfiles.prototype, "RelationShip", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => AncillaryRealtionship_1.default, {
        foreignKey: 'ancillary_relationship'
    }),
    __metadata("design:type", Object)
], UserProfiles.prototype, "AncillaryRealtionship", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => ContactUsStatus_1.default, {
        foreignKey: 'contact_status'
    }),
    __metadata("design:type", Object)
], UserProfiles.prototype, "ContactUsStatus", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => AbuseStatuses_1.default, {
        foreignKey: 'abuse_status'
    }),
    __metadata("design:type", Object)
], UserProfiles.prototype, "AbuseStatuses", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => MartialStatus_1.default, {
        foreignKey: 'martial_status'
    }),
    __metadata("design:type", Object)
], UserProfiles.prototype, "MartialStatus", void 0);
exports.default = UserProfiles;
module.exports = UserProfiles;
//# sourceMappingURL=UserProfiles.js.map