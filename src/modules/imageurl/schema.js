import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

import { find, get } from 'lodash'

const ImageUrlType = new GraphQLObjectType({
  name: 'ImageUrl',
  fields: {
    small: {
      type: GraphQLString,
      resolve: (item) => get(find(item, { size: 440 }), 'url')
    },
    medium: {
      type: GraphQLString,
      resolve: (item) => get(find(item, { size: 21 }), 'url')
    },
    full: {
      type: GraphQLString,
      resolve: (item) => get(find(item, { size: 1600 }), 'url')
    }
  }
})

export default ImageUrlType
