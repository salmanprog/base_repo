/*
|--------------------------------------------------------------------------
| Api Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
*/
import Route from '@ioc:Adonis/Core/Route'

//guest routes
Route
  .group(() => {

    Route.post('generate-video-thumb','Api/GeneralController.generateVideoThumb').as('generate-video-thumb');

    Route.post('user/resend/code','Api/UsersController.resendCode').as('user.resent-code').middleware('apiAuth')
    Route.post('user/verify/code','Api/UsersController.verifyCode').as('user.verify-code').middleware('apiAuth')
    Route.post('user/social-login','Api/UsersController.socialLogin').as('user.social-login')
    Route.post('user/change-password','Api/UsersController.changePassword').as('user.change-password').middleware('apiAuth')
    Route.post('user/forgot-password','Api/UsersController.forgotPassword').as('user.forgot-password')
    Route.post('user/login','Api/UsersController.login').as('user.login');
    Route.resource('gender', 'Api/GenderController').except(['create','update','destroy'])
    Route.resource('type_of_x', 'Api/SexController').except(['create','update','destroy'])
    Route.resource('type_x_orientation', 'Api/SexOrientationController').except(['create','update','destroy'])
    // Abuse statuses
    Route.resource('abuse_status', 'Api/AbuseStatusesController').except(['create','update','destroy'])
    // Martial statuses
    Route.resource('martial_status', 'Api/MartialStatusController').except(['create','update','destroy'])
    // Named as api.users.index, api.users.store
    Route.resource('user', 'Api/UsersController')
      .except(['destroy'])
      .middleware({
        index: ['apiAuth'],
        show: ['apiAuth'],
        update: ['apiAuth'],
      })
  })
  .prefix('api')
  .as('api')
  .middleware(['apiAuthorization'])

// authentication routes
Route
  .group(() => {

    //User
    Route.post('user/logout','Api/UsersController.userLogout').as('user.logout');
    //User Logs
    Route.get('user_log', 'Api/UsersController.getUserLogs').as('user_log.getUserLogs')
    //General
    Route.resource('abuse_types', 'Api/AbuseTypeController').except(['create','update','destroy'])
    Route.resource('ancillary_realationship', 'Api/AncillaryRealtionshipController').except(['create','update','destroy'])
    Route.resource('congnitive_distortions', 'Api/CognitiveDistortionsController').except(['create','update','destroy'])
    Route.resource('dark_core_traits', 'Api/DarkCoreTraitController').except(['create','update','destroy'])
    Route.resource('interactual_patterns', 'Api/InteractualPatternsController').except(['create','update','destroy'])
    Route.resource('power_dynamic', 'Api/PowerDynamicController').except(['create','update','destroy'])
    Route.resource('relationships', 'Api/RelationShipController').except(['create','update','destroy'])
    Route.resource('warnings', 'Api/WarningController').except(['create','update','destroy'])
    Route.resource('contact_statuses', 'Api/ContactUsStatusController').except(['create','update','destroy'])
    Route.get('categories', 'Api/CategoryController.getCategory').as('category.getCategory')
    Route.get('view_categories', 'Api/CategoryController.viewCategory').as('viewcategory.viewCategory')

    // User Logs
    Route.resource('all_logs', 'Api/UserLogsController').except(['create','update','destroy'])

    // Incident severity Logs
    Route.resource('incident_serverity_logs', 'Api/IncidentSeverityLogsController').except(['create','update','destroy'])

    // Media
    Route.resource('media', 'Api/MediaController').except(['update','destroy'])

    // UserProfiles
    Route.resource('user_profiles', 'Api/UserProfilesController')

    // UserDetailLog
    Route.resource('detail_log', 'Api/DetailLogController')

    // UserQuickLog
    Route.resource('quick_log', 'Api/UserQuickLogController')

    // UserFlowLog
    Route.resource('flow_log', 'Api/FlowLogController')

    // UserSelfCareLog
    Route.resource('selfcare_log', 'Api/SelfCareLogController')

    // Type
    Route.resource('type', 'Api/TypeController')

    // Resource
    Route.resource('resource', 'Api/ResourceController').except(['create','update','destroy'])

    // Questioner
    Route.resource('user_quiz', 'Api/QuestionerController').except(['create','update','destroy'])
    Route.post('submit_user_quiz','Api/QuestionerController.submitQuizResult').as('submit_user_quiz.submitQuizResult');
    Route.get('view_user_quiz','Api/QuestionerController.getQuizResult').as('view_user_quiz.getQuizResult');

    //Notifications
    Route.post('notification/test-notification','Api/NotificationController.sendTestNotification').as('test-notification');

    // Route.post('gateway/customer','Api/GatewayController.customer').as('gateway-customer');
    // Route.post('gateway/card','Api/GatewayController.customerCard').as('gateway-card');
    // Route.post('gateway/card/default','Api/GatewayController.makeDefaultCard').as('gateway-default-card');
    // Route.post('gateway/card/delete','Api/GatewayController.deleteGatewayCard').as('gateway-delete-card');
    // Route.post('gateway/charge','Api/GatewayController.gatewayCharge').as('gateway-charge');

  })
  .prefix('api')
  .as('api')
  .middleware(['apiAuthorization','apiAuth'])

