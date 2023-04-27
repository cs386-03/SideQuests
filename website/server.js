const express = require('express')
const logger = require('morgan')
const mysql = require('mysql')
const path = require('path')
const server = express()
server.use(express.urlencoded({'extended': true}))
server.use(logger('dev'))

const con = mysql.createConnection({
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

  var id = 818
  // NEED TO WRITE get_new_id()
  var name = '"name"'
  var occupation = '"occupation"'
  var birthday = '"2023-04-26"'
  var points = 0
  var tasks_completed = 0

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    var sql = `INSERT INTO Users (identification, username, password, name, 
      occupation, birthday, points, completed_tasks) values (${id}, "${username}", 
      "${password}", ${name}, ${occupation}, ${birthday}, ${points}, ${tasks_completed})`;

    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 user inserted");
      con.end();
    });
  });

  res.redirect("../index.html");
})

// for some reason the data won't return can you look but it should get 
// greatest value of id + 1 in the new_id variable
function get_new_id(){
  con.connect(function(err) {
    if (err) throw err;
    var sql = `select identification from Users`;
    con.query(sql, function (err, result, fields) {
      if (err) throw err;
      n = []
      for (let i = 0; i < result.length; i++){
        n.push(result[i].identification);
      }
      con.end();
      var new_id = (Math.max(...n) + 1);
      return new_id;
    });
  });
}

// handle the POST request from login page to homepage
server.post('/homepage/index.html', (req, res) => {
  console.log("Post successful");
  var username = req.body.username
  var password = req.body.password

  // TO DO: 
  // get actual username and password from database
  // compare them
  // if match: redirect to homepage
  // if not match: do not redirect, add inner html with error message

  res.redirect("/homepage/index.html");
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
