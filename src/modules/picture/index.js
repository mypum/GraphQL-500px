import {
  GraphQLInt
} from 'graphql'

import PictureType from './schema'
import resolver from './resolver'

export default {
  type: PictureType,
  args: {
    id: {
      type: GraphQLInt
    }
  },
  resolve: resolver
}
