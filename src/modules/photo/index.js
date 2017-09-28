import {
  GraphQLInt
} from 'graphql'

import PhotoType from './schema'
import resolver from './resolver'

export default {
  type: PhotoType,
  args: {
    id: {
      type: GraphQLInt
    }
  },
  resolve: resolver
}
