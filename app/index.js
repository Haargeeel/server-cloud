const express = require('express')

const reduxer = require('./controller/reduxer')
const test = require('./models/test')

const app = express()

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

app.listen(3000, () => {
  console.log('server listening on port 3000')
})
