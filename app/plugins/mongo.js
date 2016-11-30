const MongoClient = require('mongodb').MongoClient
// const config = require('./config')

// const servers = config.servers

let dbs

const _ = module.exports = {}

// const connections = servers.map(s => `${s.addr}:${s.port}`)

const init = (dbName) => {
  return new Promise((resolve, reject) => {
    // console.log('mongostring', `mongodb://${connections.join(',')}/${dbName}?replicaSet=rs0&readPreference=nearest`)
    // MongoClient.connect(`mongodb://${connections.join(',')}/${dbName}?replicaSet=rs0&readPreference=nearest`, (err, db) => {
    // MongoClient.connect(`mongodb://localhost:27018/${dbName}`, (err, db) => {
    MongoClient.connect(`mongodb://mongo1:27017/${dbName}?readPreference=nearest`, (err, db) => {
      if (err) return reject(err)
      resolve(db)
    })
  })
}

_.get = (dbName) => {
  return new Promise((resolve, reject) => {
    if (!dbs) dbs = {}
    if (dbs[dbName]) return resolve(dbs[dbName])
    init(dbName).then(db => {
      dbs[dbName] = db
      resolve(db)
    })
    .catch(err => {
      reject(err)
    })
  })
}
