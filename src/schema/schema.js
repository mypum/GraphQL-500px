import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} from 'graphql'
import { find } from 'lodash'

import photos from '../data/photos'

const PictureType = new GraphQLObjectType({
  name: 'Picture',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    camera: { type: GraphQLString },
    lens: { type: GraphQLString },
    focalLength: {
      type: GraphQLString,
      resolve: (photo) => photo.focal_length
    },
    createdAt: {
      type: GraphQLString,
      resolve: (photo) => photo.created_at
    }
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    picture: {
      type: PictureType,
      args: { id: { type: GraphQLInt } },
      resolve (parentValue, args) {
        return find(photos, { id: args.id })
      }
    }
  }
})

export default new GraphQLSchema({
  query: RootQuery
})
