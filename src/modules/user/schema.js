import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} from 'graphql'

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLInt },
    username: { type: GraphQLString },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    fullname: { type: GraphQLString },
    userPicUrl: {
      type: GraphQLString,
      resolve: (user) => user.userpic_url
    }
  }
})

export default UserType
