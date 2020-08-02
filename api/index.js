const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 4000

const accountQueries = require('./queries/account')
const Auth = require('./middleware/Auth.js')

app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


/* ACCOUNT */
app.get('/account', accountQueries.getAccount)
app.post('/account', accountQueries.postAccount)
app.post('/login', accountQueries.loginAccount)

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })