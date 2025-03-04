'use strict'
import _ from 'lodash';
import UserMdle from 'App/Models/User';
import {baseUrl,storageUrl} from 'App/Helpers/Index'

class AdminUsers
{
  protected static async initResponse(data: object,request:object)
  {
      if( _.isEmpty(data) )
        return [];

      let response;
      if( Array.isArray(data) ){
        response = []
        for(var i=0; i < data.length; i++)
        {
          response.push( await this.jsonSchema(data[i],request));
        }
      } else {
        response = await this.jsonSchema(data,request)
      }
      return response;
  }

  private static async jsonSchema(record: object,request:object)
  {
      
      return {
          id: record.id,
          parent_id:record.parent_id,
          user_group_id:record.user_group_id,
          name: record.name,
          slug: record.slug,
          email: record.email,
          mobile_no: record.mobile_no,
          dob:record.dob,
          age:record.age,
          image_url: !_.isEmpty(record.image_url) ?  await storageUrl(record.image_url) : baseUrl('/images/user-placeholder.jpg'),
          company_name:record.company_name,
          company_address:record.company_address,
          company_mobile_number:record.company_mobile_number,
          company_email_address:record.company_email_address,
          is_email_verify:record.is_email_verify,
          platform_type:record.platform_type,
          status_text:(record.status == 1) ? 'Active' : 'Deactive',
          status:record.status,
      }
  }

}
module.exports = AdminUsers;
