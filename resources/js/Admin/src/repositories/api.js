const api = {
    login: {
      url: 'admin/login',
      method: "POST",
    },
    logout: {
      url: 'admin/logout',
      method: "POST",
    },
    get_dashboard: {
      url: 'admin/dashboard',
      method: "GET",
    },
    create_users: {
      url: 'admin/users',
      method: "POST",
    },
    get_users: {
      url: 'admin/users',
      method: "GET",
    },
    update_users: {
      url: 'admin/users',
      method: "PUT",
    },
    get_users_profiles: {
      url: 'admin/user_profiles',
      method: "GET",
    },
    get_users_logs: {
      url: 'admin/user_logs',
      method: "GET",
    },
    change_password: {
      url: 'admin/user/change-password',
      method: "POST",
    },
    update_users: {
      url: 'admin/user',
      method: "PUT",
    },
    get_application_settings: {
      url: 'admin/application/setting',
      method: "GET",
    },
    post_application_settings: {
      url: 'admin/application/setting',
      method: "POST",
    },
    get_application_content: {
      url: 'admin/application-content',
      method: "GET",
    },
    add_application_content: {
      url: 'admin/application-content',
      method: "POST",
    },
    update_application_content: {
      url: 'admin/application-content',
      method: "PUT",
    },
    delete_application_content: {
      url: 'admin/application-content',
      method: "DELETE",
    },
    get_cms_user: {
      url: 'admin/cms-user',
      method: "GET",
    },
    get_cms_user_by_slug: {
      url: 'admin/cms-user',
      method: "GET",
    },
    update_cms_user: {
      url: 'admin/cms-user',
      method: "PUT",
    },
    view_application_category: {
      url: 'admin/application-category',
      method: "GET",
    },
    get_application_category: {
      url: 'admin/application-category',
      method: "GET",
    },
    add_application_category: {
      url: 'admin/application-category',
      method: "POST",
    },
    update_application_category: {
      url: 'admin/application-category',
      method: "PUT",
    },
    delete_application_category: {
      url: 'admin/application-category',
      method: "DELETE",
    },
    get_application_resource: {
      url: 'admin/resources',
      method: "GET",
    },
    add_application_resource: {
      url: 'admin/resources',
      method: "POST",
    },
    update_application_resource: {
      url: 'admin/resources',
      method: "PUT",
    },
    delete_application_resource: {
      url: 'admin/resources',
      method: "DELETE",
    },
    import_application_resource: {
      url: 'admin/import/resources',
      method: "POST",
    },
    get_application_questions: {
      url: 'admin/questioner',
      method: "GET",
    },
    add_application_questions: {
      url: 'admin/questioner',
      method: "POST",
    },
    update_application_questions: {
      url: 'admin/questioner',
      method: "PUT",
    },
    delete_application_questions: {
      url: 'admin/questioner',
      method: "DELETE",
    },
  };
  
  
  export default api;