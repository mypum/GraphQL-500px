import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} from 'graphql'

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
    imageUrl: {
      type: GraphQLString,
      resolve: (photo) => photo.image_url
    },
    votesCount: {
      type: GraphQLString,
      resolve: (photo) => photo.votes_count
    },
    createdAt: {
      type: GraphQLString,
      resolve: (photo) => photo.created_at
    }
  }
})

export default PhotoType
