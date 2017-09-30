import express from 'express'
import expressGraphQL from 'express-graphql'
import cors from 'cors'

import schema from '../schema/schema'

const app = express()

app.use(cors())

app.use('/explorer', expressGraphQL({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.info(`App is running on http://localhost:4000`)
})
