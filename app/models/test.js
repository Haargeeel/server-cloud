const mongo = require('../plugins/mongo')

const _ = module.exports = {}

_.test = new Promise((resolve, reject) => {
  mongo.get('test').then(db => {
    db.collection('test1').findOne().then(doc => {
      resolve(doc)
    })
    .catch(err => {
      reject(err)
    })
  })
  .catch(err => {
    reject(err)
  })
})
