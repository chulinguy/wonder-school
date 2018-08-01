const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./apiRoutes');
const connection = require('./config/connection');

const app = express();
const port = process.env.PORT || 3005;
app.use(express.static('build'));
app.use(bodyParser.urlencoded({ extended: false }));

// mySQL
const mySQLConnect = () => {
  connection.connect(err => {
    if (err) throw err;
    else {
      console.log(`connected as id ${connection.threadId}`);
    }
  });
};
mySQLConnect();

// server logic
apiRoutes(app);
app.listen(port);

