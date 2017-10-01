import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} from 'graphql'

import ImageUrlType from '../imageurl/schema'
import UserType from '../user/schema'

const PhotoType = new GraphQLObjectType({
  name: 'Photo',
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
    iso: { type: GraphQLString },
    shutterSpeed: {
      type: GraphQLString,
      resolve: (photo) => photo.shutter_speed
    },
    aperture: { type: GraphQLString },
    timesViewed: {
      type: GraphQLString,
      resolve: (photo) => photo.times_viewed
    },
    width: { type: GraphQLInt },
    height: { type: GraphQLInt },
    rating: { type: GraphQLString },
    category: { type: GraphQLInt },
    imageUrl: {
      type: ImageUrlType,
      resolve: (photo) => photo.images
    },
    votesCount: {
      type: GraphQLString,
      resolve: (photo) => photo.votes_count
    },
    createdAt: {
      type: GraphQLString,
      resolve: (photo) => photo.created_at
    },
    takenAt: {
      type: GraphQLString,
      resolve: (photo) => photo.taken_at
    },
    user: {
      type: UserType,
      resolve: (photo) => photo.user
    }
  }
})

export default PhotoType
