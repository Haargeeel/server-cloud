const mongo = require('../plugins/mongo')

const me = module.exports = {}

me.getMealCount = () =>
  new Promise((resolve, reject) => {
    mongo.get('dinner').then(db => {
      const col = db.collection('meals')
      col.count().then(n => {
        resolve(n)
      })
      .catch(err => {
        reject(err)
      })
    })
    .catch(err => {
      reject(err)
    })
  })

me.addMeal = meal =>
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

me.findMeal = query =>
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

me.getAllMeals = () =>
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

me.getRandomMeal = () =>
  new Promise((resolve, reject) => {
    mongo.get('dinner').then(db => {
      const col = db.collection('meals')
      const cursor = col.aggregate([{ $sample: { size: 1 } }])
      cursor.toArray().then(docs => {
        resolve(docs[0])
      })
    })
      .catch(err => {
        reject(err)
      })
  })
