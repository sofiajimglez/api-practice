const express = require('express');
const router = express.Router();

const fishingZones = require('../controllers/fishingZones.controllers');

router.get('/fishing-zones', fishingZones.list);
router.get('/fishing-zones/:id', fishingZones.detail);

module.exports = router;