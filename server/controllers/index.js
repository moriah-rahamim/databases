var models = require('../models');
var mySql = require('mysql');

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
      var username = req.body.username;
      var text = req.body.message;
      var dbConnection = mySql.createConnection({
        user: 'student',
        password: 'student',
        database: 'chat'
      });
      dbConnection.query('SELECT user_id FROM users WHERE user_name = (?)', username, (err, queryRes) => {
        if (err) {
          throw err;
        }
        dbConnection.query('INSERT INTO messages (text, user_id) VALUES (?, ?)', [text, queryRes[0].user_id], (err, queryRes) => {
          if (err) {
            throw err;
          }
          res.send('inserted a message');
        });
      });
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      //connecting to the database: 
      var username = req.body.username;
      var dbConnection = mySql.createConnection({
        user: 'student',
        password: 'student',
        database: 'chat'
      });
      dbConnection.query('INSERT INTO users (user_name) VALUES (?)', [username], (err, queryRes) => {
        if (err) {
          throw err;
        }
        res.send('inserted a username');
      });
    }
  }
};

