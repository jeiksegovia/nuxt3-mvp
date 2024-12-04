import { gql } from 'graphql-tag'
import { getClient } from '../../helper'

const client = getClient();

export default defineEventHandler(async (event) => {
  
  const query = gql`
query {
  listCategories{
    data{
      id
      title
      description
    }
  }
}`

const { listCategories: { data } = {} } = await client.request<any>(query)
		.catch(error => {
			throw createError({
        statusCode: 500,
        statusMessage: error.message,
      })
		});

  return { data }
})
