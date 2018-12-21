const express = require("express");
const massive = require("massive");
require("dotenv").config();
const ctrl = require('./controller');

const app = express();
app.use(express.json());


app.get('/api/houses', ctrl.getAllHouses)
app.post('/api/add', ctrl.addHouse)
app.delete('/api/delete/:id', ctrl.deleteHouse)



massive(process.env.CONNECTION_STRING)
  .then(connection => {
    app.set("db", connection);
  })
  .catch(err => {
    console.log(err);
  });

app.listen(process.env.SERVER_PORT, () =>
  console.log(`listening on port ${process.env.SERVER_PORT}`)
);
