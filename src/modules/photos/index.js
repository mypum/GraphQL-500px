import {
  GraphQLInt,
  GraphQLList
} from 'graphql'

import Photo from '../photo/schema'
import resolver from './resolver'

export default {
  type: new GraphQLList(Photo),
  args: {
    limit: {
      type: GraphQLInt
    }
  },
  resolve: resolver
}
