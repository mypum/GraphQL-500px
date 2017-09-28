import {
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql'

import picture from '../modules/picture'

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    picture
  }
})

export default new GraphQLSchema({
  query: RootQuery
})
