const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./apiRoutes');
const connection = require('./config/connection');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('build'));
app.use(bodyParser.urlencoded({ extended: false }));

// server logic
app.use('/api/', apiRoutes);
app.listen(port);

// mySQL
const mySQLConnect = () => {
  connection.connect(err => {
    if (err) throw err;
    else console.log(`connected as id ${connection.threadId}`);
  });
};
mySQLConnect();

