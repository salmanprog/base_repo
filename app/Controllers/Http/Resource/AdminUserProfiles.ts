'use strict'
import _ from 'lodash';
import {baseUrl,storageUrl} from 'App/Helpers/Index'
import Gender from './Gender';
import Sex from './Sex';
import SexOrientation from './SexOrientation';
import RelationShip from './RelationShip';
import AncillaryRealtionship from './AncillaryRealtionship';
import ContactUsStatus from './ContactUsStatus';
import MediaResource from './Media';
import Media from 'App/Models/Media';
import CategoryMdl from 'App/Models/Category';
import UserSelectedCategory from 'App/Models/UserSelectedCategory';
import UserSelectedCategoryResource from 'App/Controllers/Http/Resource/UserSelectedCategory';
import AbuseStatusesResource from 'App/Controllers/Http/Resource/AbuseStatuses';
import moment from 'moment';

class AdminUserProfiles
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
          slug: record.slug,
          name: record.name,
          nick_name: record.nick_name,
          dob: record.dob,
          age:record.age,
          image_url: !_.isEmpty(record.image_url) ?  await storageUrl(record.image_url) : baseUrl('/images/user-placeholder.jpg'),
          gender: await Gender.initResponse(record.Gender,request),
          other_gender:record.other_gender,
          sex:await Sex.initResponse(record.Sex,request),
          other_sex:record.other_sex,
          sex_orientation:await SexOrientation.initResponse(record.SexOrientation,request),
          other_sex_orientation:record.other_sex_orientation,
          relationship: await RelationShip.initResponse(record.RelationShip,request),
          other_relationship: record.other_relationship,
          ancillary_relationship:await AncillaryRealtionship.initResponse(record.AncillaryRealtionship,request),
          contactus_status: await ContactUsStatus.initResponse(record.ContactUsStatus,request),
          contact_status_updated_at:record.contact_status_updated_at,
          abuse_type: await CategoryMdl.getAllSubCategoriesById('personality_profile',record.id,6),
          abuse_status: await AbuseStatusesResource.initResponse(record.AbuseStatuses,request),
          categories: await UserSelectedCategoryResource.initResponse(await UserSelectedCategory.getSelectedCategoryArr('personality_profile',record.id),request),
          media: {
            'image':await MediaResource.initResponse(await Media.getMediaByType
            (record.id,'personality_profile','image'),request),
            'video':await MediaResource.initResponse(await Media.getMediaByType
              (record.id,'personality_profile','video'),request),
            'audio':await MediaResource.initResponse(await Media.getMediaByType
                (record.id,'personality_profile','audio'),request),
          }
          
      }
  }

}
module.exports = AdminUserProfiles;
