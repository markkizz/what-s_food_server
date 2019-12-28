const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
// services
const userService = require('./services/user.service');
const cors = require('cors');

const app = express();
const PORT = 8080;
// import passport
const passport = require('passport');

// use the strategy
app.use(passport.initialize());
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// import config of passport
require('./config/passport/passport');

db.sequelize.sync({ alter: true }).then(() => {
  // call services
  userService(app, db);

  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});
