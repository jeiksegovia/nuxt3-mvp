import { GraphQLClient } from 'graphql-request'

export const getClient = (path:'manage'| 'read' = 'read') => new GraphQLClient(
	`${process.env.CMS_URL}/${path}/es`, {
		headers: {
			authorization: `Bearer ${process.env.CMS_API_KEY}`
		}
	})

// url decode
export function getDecodedRouterParam(event: any, param: string): string {
    return decodeURIComponent( getRouterParam(event, param) || '')
  }