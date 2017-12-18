const express = require('express');
const cors = require('cors');
const data = require("./data.js");
const peakClass = require("./class.js");
const app = express();

app.use(cors());

app.get('/', function (req, res) {
  res.send("Listneing on Port 3000");
});

app.get('/data', function (req, res) {
  res.send(data);
});

app.get('/class', function (req, res) {
  res.send(peakClass);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Example app listening on port 3000!');
});



module.exports = {
  data,
  peakClass
}
