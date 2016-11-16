const express = require('express')

const reduxer = require('./controller/reduxer')

const app = express()

app.use(express.static(__dirname + '/../build/public'));

app.get('/',
  reduxer.buildInitialState,
  reduxer.render
)

app.listen(3000, () => {
  console.log('server listening on port 3000')
})
