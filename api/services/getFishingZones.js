const fishingZones = require('../data/parana.json');

module.exports = function getFishingZones() {
  return new Promise((resolve, reject) => {
    resolve(fishingZones)
  })
};