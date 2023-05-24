const cors = require('cors');

module.exports = cors({
  origin: process.env.WEB_URL || 'http://localhost:5173'
});