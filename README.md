# got-app

First, install the necessary dependencies.

```
$ npm i
```
In `dbconnection.js` you will find the db connection information in the constructor of
the DbConnection class. You can enter your password there but it's preferable to add it 
as a command line arg when you run the server.

```js
  constructor(password) {
    this.connection = mysql.createConnection({ 
      host: "classmysql.engr.oregonstate.edu", 
      user: "cs340_vanhornd", 
      password, 
      database: "cs340_vanhornd" 
    });
    this.connect();
  }
```

Start the server, webpack will compile the client side app and nodemon will restart
the server when it sees file changes. Files are served from a generated `dist/` folder.

```
$ npm run server [db password]
```

In a separate terminal run the following command. It enables webpack watch to recompile to client side app into the `dist/`
folder. When it recompiles, the server will automatically start if you had previously run `npm run server` 

```
$ npm run watch
```



