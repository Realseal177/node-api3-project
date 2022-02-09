const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const userRouter = require('./users/users-router');

const server = express();

server.use(express.json());
server.use(cors());
server.use(morgan('tiny'));

server.use('/api/users', userRouter);

// remember express by default cannot parse JSON in request bodies

// global middlewares and the user's router need to be connected here

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use('*', (req, res) => {
  res.status(404).json({ message: `${req.method} ${req.baseUrl} not found!`})
});

module.exports = server;
