const express = require('express')
const bodyparser = require('body-parser')

const reduxer = require('./controller/reduxer')
const test = require('./models/test')
const meal = require('./controller/meal')

const app = express()

const jsonParser = bodyparser.json()

app.use(express.static(__dirname + '/../build/public'));

app.get('/',
  (req, res, next) => {
    test.test.then(response => {
      console.log('res', response)
      next()
    })
    .catch(err => {
      console.log('err', err)
      next()
    })
  },
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
