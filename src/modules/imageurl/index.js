import {
  GraphQLInt
} from 'graphql'

import ImageUrlType from './schema'
import resolver from './resolver'

export default {
  type: ImageUrlType,
  args: {
    id: {
      type: GraphQLInt
    }
  },
  resolve: resolver
}
