import {
  GraphQLInt,
  GraphQLString
} from 'graphql'

import PhotoType from './schema'
import resolver from './resolver'

export default {
  type: PhotoType,
  args: {
    id: {
      type: GraphQLInt
    },
    category: {
      type: GraphQLString
    }
  },
  resolve: resolver
}
