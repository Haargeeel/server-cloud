module.exports = {
  servers: [
    // { addr: 'localhost', port: 27017 },
    // { addr: 'localhost', port: 27018 },
    // { addr: 'localhost', port: 27019 }
    { addr: 'mongo1', port: 27017 },
    { addr: 'mongo2', port: 27017 },
    { addr: 'mongo3', port: 27017 }
  ],
  dbs: ['main']
}
