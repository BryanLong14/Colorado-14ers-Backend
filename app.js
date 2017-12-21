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

app.get('/merged', function (req, res) {
  res.send(mergedArray);
});


console.log(mergedArray);
// Returns:
// [ { id: 1,
//     attributes:
//      { peak_name: 'Mt. Elbert',
//        range: 'Sawatch Range',
//        rank: '1',
//        elevation: '14433',
//        towns: 'Leadville, Twin Lakes, Aspen',
//        latitude: '39.117777777777775',
//        longitude: '-106.44472222222223' },
//     new_attributes:
//      { peak_name: 'Mt. Elbert',
//        class: 1,
//        standard_route: 'Northeast Ridge',
//        roundtrip_distance: 10,
//        difficulty: 'easiest' } },
//        ...
