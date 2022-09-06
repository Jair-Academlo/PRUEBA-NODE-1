const express = require('express');
const cors = require('cors');
const { db } = require('./utils/database');
const { registrationRouter } = require('./routes/registration.router');

//Initial server Express
const app = express();

//using cors, json
app.use(cors());
app.use(express.json());

//Endpoonts
app.use('/api/v1/registration', registrationRouter);

//database autenticate, sync
db.authenticate()
  .then(() => {
    console.log('datos autenticados'.magenta);
  })
  .catch(err => console.log(err));

db.sync({ force: false })
  .then(() => {
    console.log('base sincronizada'.magenta);
  })
  .catch(err => console.log(err));

module.exports = { app };
