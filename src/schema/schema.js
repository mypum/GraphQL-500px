import {
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql'

import photo from '../modules/photo'
import photos from '../modules/photos'

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    photo,
    photos
  }
})

export default new GraphQLSchema({
  query: RootQuery
})
