var models = require('../models');
var mySql = require('mysql');
var userId = 1;
var messageId = 1;
module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
      var id = messageId;
      var username = req.body.username;
      var test = req.body.text;
      var dbConnection = mySql.createConnection({
        user: 'student',
        password: 'student',
        database: 'chat'
      });
      dbConnection.query('SELECT user_id FROM users WHERE user_name = ?', username, (err, res) => {
        console.log(res);
        if (err) {
          throw err;
        }
        dbConnection.query('INSERT INTO messages VALUES (?, ?, ?)', [messageId, data.text, res[0].user_id], (err, res) => {
          if (err) {
            throw err;
          }
          console.log('inserted ' + data.text);
          messageId++;
        });
      });
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      //connecting to the database: 
      console.log(userId);
      console.log('request', req.body);
      var id = userId;
      var username = req.body.username;
      var dbConnection = mySql.createConnection({
        user: 'student',
        password: 'student',
        database: 'chat'
      });
      dbConnection.query('INSERT INTO users VALUES (?, ?)', [id, username], (err, res) => {
        if (err) {
          throw err;
        }
        console.log('inserted ' + username);
        userId++;
      });
    }
  }
};

