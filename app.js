const express = require('express');
const app = express();
const data = require("./data.js");

app.get('/', function (req, res) {
  res.send(data);
});


app.listen(process.env.PORT || 3000, () => {
  console.log('Example app listening on port 3000!');
});

module.exports= {
  data
}
