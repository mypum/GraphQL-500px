import express from 'express'

const app = express()

app.listen(4000, () => {
  console.info(`App is running on http://localhost:4000`)
})
