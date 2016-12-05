const mongo = require('../plugins/mongo')

const _ = module.exports = {}

_.addMeal = meal =>
  new Promise((resolve, reject) => {
    mongo.get('dinner').then(db => {
      const col = db.collection('meals')
      col.insertOne(meal).then(r => {
        resolve(meal)
      })
      .catch(err => {
        reject(err)
      })
    })
    .catch(err => {
      reject(err)
    })
  })

_.findMeal = query =>
  new Promise((resolve, reject) => {
    mongo.get('dinner').then(db => {
      const col = db.collection('meals')
      col.find(query).toArray().then(docs => {
        resolve(docs)
      })
      .catch(err => {
        reject(err)
      })
    })
    .catch(err => {
      reject(err)
    })
  })

_.getAllMeals = () =>
  new Promise((resolve, reject) => {
    mongo.get('dinner').then(db => {
      const col = db.collection('meals')
      col.find({}).toArray().then(docs => {
        resolve(docs)
      })
      .catch(err => {
        reject(err)
      })
    })
    .catch(err => {
      reject(err)
    })
  })
