const mysql = require('mysql');






  module.exports = () => {
    return mysql.createConnection({
      host: 'db-instance-demo.cyynfdymeiu6.us-east-2.rds.amazonaws.com',
      user: 'admin',
      password: 'Keezmovie123_',
      database: 'libreria'
    });
  }