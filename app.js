const express = require('express');
const cors = require('cors');
const data = require("./data.js");
const peakClass = require("./class.js");
const app = express();

app.use(cors());

app.get('/data', function (req, res) {
  res.send(data);
});

app.get('/class', function (req, res) {
  res.send(peakClass);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Example app listening on port 3000!');
});

// Merging Two Arrays
function mergedPeakData(data, peakClass) {
  let dataArray = Object.values(data)[0];
  let classArray = Object.values(peakClass)[0];
  let mergedArray= [];
  dataArray.forEach(function(item, i) {
    mergedArray.push(Object.assign(item, classArray[i]))
  })
  return mergedArray;
}

let mergedArray= mergedPeakData(data, peakClass);

app.get('/merged', function(request, response) {
    response.json(mergedArray);
});

let suggestions = [];

app.post('/suggestions', function(request, response) {
  suggestions.push(request.body);
  response.json({
    "Thanks for your comment or suggestion!": request.body
  })
});

app.get('/suggestions', function(request, response) {
  response.json(suggestions);
});

module.exports = {
  mergedPeakData
}
