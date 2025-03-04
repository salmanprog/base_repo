"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RestController_1 = __importDefault(require(".././RestController"));
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class UsersController extends RestController_1.default {
    constructor() {
        super("User");
        this.__resource = "AdminUsers";
        this.__request;
        this.__response;
        this.__params = {};
        this.__success_store_message = 'messages.success_store_message';
    }
    async validation(action, slug) {
        switch (action) {
            case "store":
                await this.storeValidation();
                break;
            case "update":
                await this.updateValidation();
                break;
        }
    }
    async storeValidation() {
        let validator;
        let validationRules;
        validationRules = Validator_1.schema.create({
            company_name: Validator_1.schema.string({}),
            company_address: Validator_1.schema.string({}),
            user_group_id: Validator_1.schema.string({}),
            name: Validator_1.schema.string({}),
            email: Validator_1.schema.string({}),
        });
        try {
            validator = await this.__request.validate({ schema: validationRules });
        }
        catch (error) {
            this.__is_error = true;
            return this.sendError('Validation Message', this.setValidatorMessagesResponse(error.messages), 400);
        }
        return validator;
    }
    async updateValidation() {
        let validator;
        let validationRules;
        validationRules = Validator_1.schema.create({
            company_name: Validator_1.schema.string({}),
            company_address: Validator_1.schema.string({}),
            name: Validator_1.schema.string({}),
        });
        try {
            validator = await this.__request.validate({ schema: validationRules });
        }
        catch (error) {
            this.__is_error = true;
            return this.sendError('Validation Message', this.setValidatorMessagesResponse(error.messages), 400);
        }
        return validator;
    }
    async beforeIndexLoadModel() {
    }
    async afterIndexLoadModel(records) {
    }
    async beforeStoreLoadModel() {
    }
    async afterStoreLoadModel() {
    }
    async beforeShowLoadModel() {
    }
    async afterShowLoadModel(record) {
    }
    async beforeUpdateLoadModel() {
    }
    async afterUpdateLoadModel() {
    }
    async beforeDestoryLoadModel() {
    }
    async afterDestoryLoadModel() {
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map