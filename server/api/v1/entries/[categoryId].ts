import { gql } from 'graphql-tag'
import { getClient, getDecodedRouterParam } from '../../../helper'

const client = getClient();

export default defineEventHandler( async(event) => {
    const categoryId = getDecodedRouterParam(event, 'categoryId');

    const query = gql`
query($categoryId: String!) {
  listJobEntries(
    where: { category:{ id: $categoryId } }
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
    
    const { listJobEntries:{ data } = {} } = await client.request<any>(query, { categoryId })
        .catch(error => {
          throw createError({
            statusCode: 501,
            statusMessage: error.message,
          })
        });
    
      return { data, categoryId }

  });