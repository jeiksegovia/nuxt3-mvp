import { gql } from 'graphql-tag'
import { getClient, getDecodedRouterParam } from '../../../helper'

const client = getClient();

export default defineEventHandler( async(event) => {
    const authorEmail = getDecodedRouterParam(event, 'authorEmail');

    const query = gql`
      query($authorEmail: String!) {
        listJobEntries(
          where: { contact_contains: $authorEmail  }
        ) {
          data {
            title
            contact
            location
            description
            category{
              title
              id
            }
            createdOn
          }
          meta {
            hasMoreItems
            cursor
            totalCount
          }
          error {
            message
            code
            data
          }
        }
      }`
    
    const { listJobEntries:{ data } = {} } = await client.request<any>(query, { authorEmail })
        .catch(error => {
          throw createError({
            statusCode: 501,
            statusMessage: error.message,
          })
        });
    
      return { data }

  });