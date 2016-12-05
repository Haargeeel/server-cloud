const MongoClient = require('mongodb').MongoClient
const config = require('./config')

const servers = config.servers

let dbs

const _ = module.exports = {}

const connections = servers.map(s => `${s.addr}:${s.port}`).join(',')

const init = (dbName) =>
  new Promise((resolve, reject) => {
    const host = process.env.NODE_ENV === 'development'
      ? `${connections}/${dbName}?replicaSet=rs0&readPreference=nearest`
      : `mongo1:27017/${dbName}`
    MongoClient.connect(`mongodb://${host}`, (err, db) => {
      if (err) return reject(err)
      resolve(db)
    })
  })

_.get = (dbName) =>
  new Promise((resolve, reject) => {
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
