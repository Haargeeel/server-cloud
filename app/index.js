const express = require('express')
const bodyparser = require('body-parser')

const reduxer = require('./controller/reduxer')
const meal = require('./controller/meal')

const app = express()

const jsonParser = bodyparser.json()

app.use(express.static(__dirname + '/../build/public'));

app.get('/',
  reduxer.buildInitialState,
  reduxer.render
)

app.get('/meals',
  meal.getMeals,
  reduxer.buildInitialState,
  reduxer.render
)

app.post('/meals',
  jsonParser,
  meal.addMeal
)

app.get('/meals/add',
  reduxer.buildInitialState,
  reduxer.render
)

app.listen(3000, () => {
  console.log('server listening on port 3000')
})
