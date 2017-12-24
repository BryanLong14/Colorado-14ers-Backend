const assert = require("assert");
const app = require("../app.js");

const data = [{
  "id": 1,
  "attributes": {
    "peak_name": "Mt. Elbert",
    "range": "Sawatch Range",
    "rank": "1st",
    "elevation": "14,433",
    "towns": "Leadville, Twin Lakes, Aspen",
    "latitude": "39.117777777777775",
    "longitude": "-106.44472222222223"
  }
}]
const peakClass = [{
  "id": 1,
  "new_attributes": {
    "peak_name": "Mt. Elbert",
    "class": 1,
    "standard_route": "Northeast Ridge",
    "roundtrip_distance": 10,
    "difficulty": "easier",
    "lengthOfHike": "medium",
    "distance": "close",
    "distance2": "far",
    "link": "https://www.14ers.com/route.php?route=elbe2&peak=Mt.+Elbert"
  }
}]

const mergedArray = [{
  id: 1,
  attributes: {
    peak_name: 'Mt. Elbert',
    range: 'Sawatch Range',
    rank: '1',
    elevation: '14433',
    towns: 'Leadville, Twin Lakes, Aspen',
    latitude: '39.117777777777775',
    longitude: '-106.44472222222223'
  },
  new_attributes: {
    peak_name: 'Mt. Elbert',
    class: 1,
    standard_route: 'Northeast Ridge',
    roundtrip_distance: 10,
    difficulty: 'easiest'
  }
}]

describe("14er Search Tool Merging Data Arrays", () => {
  describe("#mergedPeakData", () => {
    it("creates a merged array from data and class settings based on a shared id", () => {
      assert.deepEqual(app.mergedPeakData(data, peakClass), mergedArray)
    })
  })
})
