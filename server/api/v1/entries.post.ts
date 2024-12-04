import { gql } from 'graphql-tag'
import { getClient } from '../../helper'

const client = getClient('manage');

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const mutation = gql`
        mutation(
            $title: String!
            $price: String!
            $contact: String!
            $location: String!
            $description: String!
            $categoryId: RevisionId!
        ){
        createJobEntry(
            data:{
            title: $title
            price: $price
            contact: $contact
            location: $location
            description: $description
            category:{
                modelId: "serviceCategory"
                id: $categoryId
            }
            }
        ){
            data{
            title
            id
            }
            error{
            code
            message
            }
        }
    }`

    const { title, price, contact, location, description, categoryId } = body;

    const { createJobEntry:{ data } = {}, error = null } = await client.request<any>(mutation, { ...body} )
    .catch(error => {
    throw createError({
        statusCode: 500,
        statusMessage: error.message + categoryId,
    })
    });

    return { data }
  })