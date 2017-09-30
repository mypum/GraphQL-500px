import express from 'express'
import { graphqlExpress } from 'graphql-server-express'
import bodyParser from 'body-parser'
import cors from 'cors'

import error404Handler from './middlewares/error404Handler'
import graphiqlMiddleware from './middlewares/graphiql'
import schema from '../schema/schema'

const app = express()

app.options('/', cors())

app.post('/',
  bodyParser.json(),
  cors(),
  graphqlExpress({ schema })
)
app.get('/explorer', graphiqlMiddleware)

app.get('*', error404Handler)

app.listen(4000, () => {
  console.info(`App is running on http://localhost:4000`)
})
