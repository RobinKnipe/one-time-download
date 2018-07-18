'use strict';

const express = require('express');
const router = express.Router();

const catalogue = {
  'media-id-1': 'https://we.tl/VRhnd2dJkN'
};

router.get('/test', (req, res) => {
  res.send('link: ' + catalogue['media-id-1']);
  // next();
});

module.exports = router;
