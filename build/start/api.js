"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default
    .group(() => {
    Route_1.default.post('generate-video-thumb', 'Api/GeneralController.generateVideoThumb').as('generate-video-thumb');
    Route_1.default.post('user/resend/code', 'Api/UsersController.resendCode').as('user.resent-code').middleware('apiAuth');
    Route_1.default.post('user/verify/code', 'Api/UsersController.verifyCode').as('user.verify-code').middleware('apiAuth');
    Route_1.default.post('user/social-login', 'Api/UsersController.socialLogin').as('user.social-login');
    Route_1.default.post('user/change-password', 'Api/UsersController.changePassword').as('user.change-password').middleware('apiAuth');
    Route_1.default.post('user/forgot-password', 'Api/UsersController.forgotPassword').as('user.forgot-password');
    Route_1.default.post('user/login', 'Api/UsersController.login').as('user.login');
    Route_1.default.resource('gender', 'Api/GenderController').except(['create', 'update', 'destroy']);
    Route_1.default.resource('type_of_x', 'Api/SexController').except(['create', 'update', 'destroy']);
    Route_1.default.resource('type_x_orientation', 'Api/SexOrientationController').except(['create', 'update', 'destroy']);
    Route_1.default.resource('abuse_status', 'Api/AbuseStatusesController').except(['create', 'update', 'destroy']);
    Route_1.default.resource('martial_status', 'Api/MartialStatusController').except(['create', 'update', 'destroy']);
    Route_1.default.resource('user', 'Api/UsersController')
        .except(['destroy'])
        .middleware({
        index: ['apiAuth'],
        show: ['apiAuth'],
        update: ['apiAuth'],
    });
})
    .prefix('api')
    .as('api')
    .middleware(['apiAuthorization']);
Route_1.default
    .group(() => {
    Route_1.default.post('user/logout', 'Api/UsersController.userLogout').as('user.logout');
    Route_1.default.get('user_log', 'Api/UsersController.getUserLogs').as('user_log.getUserLogs');
    Route_1.default.resource('abuse_types', 'Api/AbuseTypeController').except(['create', 'update', 'destroy']);
    Route_1.default.resource('ancillary_realationship', 'Api/AncillaryRealtionshipController').except(['create', 'update', 'destroy']);
    Route_1.default.resource('congnitive_distortions', 'Api/CognitiveDistortionsController').except(['create', 'update', 'destroy']);
    Route_1.default.resource('dark_core_traits', 'Api/DarkCoreTraitController').except(['create', 'update', 'destroy']);
    Route_1.default.resource('interactual_patterns', 'Api/InteractualPatternsController').except(['create', 'update', 'destroy']);
    Route_1.default.resource('power_dynamic', 'Api/PowerDynamicController').except(['create', 'update', 'destroy']);
    Route_1.default.resource('relationships', 'Api/RelationShipController').except(['create', 'update', 'destroy']);
    Route_1.default.resource('warnings', 'Api/WarningController').except(['create', 'update', 'destroy']);
    Route_1.default.resource('contact_statuses', 'Api/ContactUsStatusController').except(['create', 'update', 'destroy']);
    Route_1.default.get('categories', 'Api/CategoryController.getCategory').as('category.getCategory');
    Route_1.default.get('view_categories', 'Api/CategoryController.viewCategory').as('viewcategory.viewCategory');
    Route_1.default.resource('all_logs', 'Api/UserLogsController').except(['create', 'update', 'destroy']);
    Route_1.default.resource('incident_serverity_logs', 'Api/IncidentSeverityLogsController').except(['create', 'update', 'destroy']);
    Route_1.default.resource('media', 'Api/MediaController').except(['update', 'destroy']);
    Route_1.default.resource('user_profiles', 'Api/UserProfilesController');
    Route_1.default.resource('detail_log', 'Api/DetailLogController');
    Route_1.default.resource('quick_log', 'Api/UserQuickLogController');
    Route_1.default.resource('flow_log', 'Api/FlowLogController');
    Route_1.default.resource('selfcare_log', 'Api/SelfCareLogController');
    Route_1.default.resource('type', 'Api/TypeController');
    Route_1.default.resource('resource', 'Api/ResourceController').except(['create', 'update', 'destroy']);
    Route_1.default.resource('user_quiz', 'Api/QuestionerController').except(['create', 'update', 'destroy']);
    Route_1.default.post('submit_user_quiz', 'Api/QuestionerController.submitQuizResult').as('submit_user_quiz.submitQuizResult');
    Route_1.default.get('view_user_quiz', 'Api/QuestionerController.getQuizResult').as('view_user_quiz.getQuizResult');
    Route_1.default.post('notification/test-notification', 'Api/NotificationController.sendTestNotification').as('test-notification');
})
    .prefix('api')
    .as('api')
    .middleware(['apiAuthorization', 'apiAuth']);
//# sourceMappingURL=api.js.map