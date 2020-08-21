const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 4000

const accountQueries = require('./queries/account')
const categoryQueries = require('./queries/category')
const categoryAccountQueries = require('./queries/account_category')
const squadQueries = require('./queries/squad')
const cardQueries = require('./queries/card')

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

/* CATEGORY */
app.get('/category', categoryQueries.getCategoriesByAccountId)
app.post('/category', categoryQueries.createCategories)
app.put('/category', categoryQueries.updateCategory)
app.delete('/category/:id', categoryQueries.deleteCategory)


/* SQUAD */
app.post('/squad', squadQueries.createSquad)
app.get('/squad/:id', squadQueries.getSquadByCategoryId)
app.delete('/squad/:id', squadQueries.deleteSquad)

/* CARD */
app.post('/card', cardQueries.createCard)

/* ACCOUNT CATEGORY */
app.post('/accountCategory', categoryAccountQueries.createAccountCategorie)


  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })