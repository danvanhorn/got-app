const mysql = require('mysql');

module.exports = class DbConnection {
  constructor(password) {
    this.connection = mysql.createConnection({
      host: "classmysql.engr.oregonstate.edu",
      user: "cs340_singletb",
      password,
      database: "cs340_singletb"
    });
    this.connect();
  }

  connect() {
    this.connection.connect((err) => {
      if (err) {
        console.log('Error connecting to Db');
        return;
      }
      console.log('Connection established');
    });
  }

  getConnection() {
    return this.connection;
  }
}
