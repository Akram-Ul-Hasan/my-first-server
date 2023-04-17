const express = require("express");
const cors = require('cors')
const phones = require("./phones.json");
const app = express();
const port = 5000;

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello from my first ever server using nodemon");
});

app.get("/phones", (req, res) => {
  res.send(phones);
});

app.get("/phone/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const phone = phones.find((phone) => phone.id === id) || {};
  res.send(phone);

  //console.log('I need data for id:',id);
});

app.get("/data", (req, res) => {
  res.send("More data are coming soon");
});

app.listen(port, () => {
  console.log(`My first ever server running on port: ${port}`);
});
