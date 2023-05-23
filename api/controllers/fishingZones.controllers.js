const getFishingZones = require('../services/getFishingZones');

module.exports.list = async (req, res, next) => {
  try {
    const fishingZones = await getFishingZones();
    res.json(fishingZones);
  } catch (error) {
    next(error);
  }
}

module.exports.detail = async (req, res, next) => {
  try {
    const fishingZones = await getFishingZones();
    const fishingZone = fishingZones.filter(elem => elem.id === parseInt(req.params.id));
    res.json(fishingZone);
  } catch (error) {
    next(error);
  }
}