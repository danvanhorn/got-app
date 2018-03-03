const mysql = require('mysql');

module.exports = class DbConnection {
  constructor(host, user, password, database) {
    this.connection = mysql.createConnection({ host, user, password, database });
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
