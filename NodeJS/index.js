const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController');

var app = express();
app.use(cors({ origin: 'http://localhost:4200' }));

app.use(bodyparser.json());
app.use('/employees', employeeController);

app.listen(3000, () => console.log('Node Server is running.'));