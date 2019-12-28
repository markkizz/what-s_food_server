const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../config/passport/passport');
const bcrypt = require('bcryptjs');

module.exports = (app, db) => {
  app.post('/registerUser', (req, res, next) => {
    passport.authenticate('register', (err, user, info) => {
      const { first_name, last_name, email } = req.body;
      if (err) {
        console.error(err);
      }
      if (info !== undefined) {
        console.error(info.message);
        res.status(403).send(info.message);
      } else {
        const data = {
          first_name,
          last_name,
          email,
          username: user.username,
          role: 'user'
        };
        console.log(data);
        db.user
          .findOne({
            where: {
              username: data.username
            }
          })
          .then(foundUser => {
            console.log(foundUser);
            foundUser
              .update({
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                role: data.role
              })
              .then(() => {
                console.log('user created in db');
                res.status(200).send({ message: 'user created' });
              });
          })
          .catch(error => {
            console.log('error message: ', error);
          });
      }
    })(req, res, next);
  });
};
