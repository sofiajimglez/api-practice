require('dotenv').config();

const express = require('express');

const app = express();

app.use(require('./config/cors.config'));

app.use(express.json());
app.use('/api/v1', require('./config/fishingZones.config'));

const errors = (error, req, res, next) => {
  console.error(error);
  res.status(500).json({error: 'Server error'});
}

app.use(errors);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.info(`Server listenning at port ${PORT}`));