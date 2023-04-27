const express = require('express')
const logger = require('morgan')
const mysql = require('mysql')
const path = require('path')
const server = express()
server.use(express.urlencoded({'extended': true}))
server.use(logger('dev'))

const con = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "Sidequests123!!",
  database: "sidequests",
  port: 3306
});

// handle the POST request from sign up page to login page
server.post('/index.html', (req, res) => {
  console.log("Post successful");
  var username = req.body.username
  var password = req.body.password

  var name = '"name"'
  var occupation = '"occupation"'
  var birthday = '"2023-04-26"'
  var points = 0
  var tasks_completed = 0

  con.getConnection(function(err) {
    if (err) throw err;
    var sql1 = `select identification from Users`;
    con.query(sql1, function (err, result) {
      if (err) throw err;
      n = []
      for (let i = 0; i < result.length; i++){
        n.push(result[i].identification);
      }
      var id = (Math.max(...n) + 1);
      var sql = `INSERT INTO sidequests.Users (identification, username, password, name, 
        occupation, birthday, points, completed_tasks) values (${id}, "${username}", 
        "${password}", ${name}, ${occupation}, ${birthday}, ${points}, ${tasks_completed})`;
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    });
  });

  res.redirect("../index.html");
})

// handle the POST request from login page to homepage
server.post('/homepage/index.html', (req, res) => {
  console.log("Post successful");
  var given_username = req.body.username
  var given_password = req.body.password

  // get list of usernames
  con.getConnection(function(err) {
    if (err) throw err;
    console.log("connected to get usernames");
    var sql1 = `select username from users`;
    con.query(sql1, function (err, result) {
      if (err) throw err;
      n = []
      for (let i = 0; i < result.length; i++){
        n.push(result[i].username);
      }
      console.log(n);

      // if given username is in the list
      if (n.includes(given_username)) {
        var username = given_username;

        // get the real password for the username
        var sql2 = `select password from users where username='${username}'`
        con.query(sql2, function (err, result) {
          console.log("made second query");
          if (err) throw err;
          password = result[0].password;
          console.log(password);

          // if the passwords match, redirect to homepage
          if ( password === given_password ) {
            res.redirect("./index.html");
          }

          // passwords do not match -> reload login page
          else {
            res.redirect("../index.html");
          }
        });
      }

      // username does not exist -> reload login page
      else {
        res.redirect("../index.html");
      }

    });

  });
})

// Setup static page serving for all the pages in "public"
const publicServedFilesPath = path.join(__dirname, 'public')
server.use(express.static(publicServedFilesPath))

// The server uses port 80 by default unless you start it with the extra
// command line argument 'local' like this:
//       node server.js local
let port = 80
if (process.argv[2] === 'local') {
  port = 8080
}

server.listen(port, () => console.log('Ready on localhost!'))
