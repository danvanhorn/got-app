import mysql from "mysql";

export default class Connection {
    constructor(host, user, password, database){
        this.host = host;
        this.user = user;
        this.password = password;
        this.database = database;
    }

    get Connection() {
        return mysql.createConnection({

        })
    }
}
