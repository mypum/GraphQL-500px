import express from 'express'
import expressGraphQL from 'express-graphql'
import schema from '../schema/schema'

const app = express()

app.use('/explore', expressGraphQL({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.info(`App is running on http://localhost:4000`)
})
