const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../config/passport/passport');
const bcrypt = require('bcryptjs');

module.exports = (app, db) => {
  app.post('/userRegistation', (req, res, next) => {
    passport.authenticate('register', (err, user, info) => {
      const { first_name, last_name, email, phone, img_url } = req.body;
      if (err) {
        console.error(err);
      }
      if (info !== undefined) {
        console.error(info.message);
        res.status(403).send(info.message);
      } else {
        db.users
          .findOne({
            where: {
              username: user.username
            }
          })
          .then(foundUser => {
            foundUser
              .update({
                first_name,
                last_name,
                email,
                phone,
                profile_img_url: img_url,
                role: 'user'
              })
              .then(() => {
                console.log('user created in db');
                res.status(200).send({ message: 'user created' });
              });
          })
          .catch(error => {
            console.log(' ❌ :: error message: ', error);
          });
      }
    })(req, res, next);
  });

  app.post('/userLogin', (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
      // error handle
      if (err) console.error(`error ${err}`);
      if (info !== undefined) {
        console.error(' ❌ :: ', info.message);
        if (info.message === 'username not found') {
          res.status(401).send(info.message);
        } else {
          res.status(403).send(info.message);
        }
      }
      // if not have error
      else {
        db.users
          .findOne({
            where: {
              username: req.body.username
            }
          })
          .then(userFound => {
            const token = jwt.sign(
              {
                id: userFound.id,
                role: userFound.role,
                name: userFound.name,
                profilePic: userFound.profile_img_url
              },
              config.jwtOptions.secretOrKey,
              {
                expiresIn: 9000
              }
            );
            res.status(200).send({
              auth: true,
              token,
              message: 'user found & logged in'
            });
          });
      }
    })(req, res, next);
  });

  app.get(
    '/protected-routes',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      res.status(200).send(req.user);
    }
  );
};
