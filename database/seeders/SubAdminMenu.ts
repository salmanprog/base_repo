import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Database from '@ioc:Adonis/Lucid/Database'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('cms_module_permissions').insert([
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
