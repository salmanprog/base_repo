import _ from 'lodash';

class PublicUser
{

  public static async initResponse(data: object,request:object)
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
          name: record.name,
          slug: record.slug,
          image_url: record.image_url,
          created_at: record.created_at
      }
  }

}
module.exports = PublicUser;
