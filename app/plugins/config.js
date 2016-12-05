module.exports = {
  servers: [
    { addr: 'mongo1', port: 27017 },
    { addr: 'mongo2', port: 27018 },
    { addr: 'mongo3', port: 27019 }
    // { addr: 'mongo1', port: 27017 },
    // { addr: 'mongo2', port: 27017 },
    // { addr: 'mongo3', port: 27017 }
  ],
  dbs: ['main']
}
