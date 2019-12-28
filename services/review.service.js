const passport = require('passport');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = (app, db) => {
  app.post(
    '/review-create/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const restaurantId = req.params.id;
      const { title, content, rating, priceRange } = req.body;
      try {
        const findRestaurant = db.restaurants.findOne({
          where: { id: restaurantId }
        });
        if (findRestaurant) {
          db.reviews
            .create({
              title,
              content,
              rating,
              price_range: priceRange,
              user_like: 0
            })
            .then(() =>
              res.send(201).json({ message: 'create review success' })
            );
        } else {
          res.status(400).json({ message: 'Restaurant not found' });
        }
      } catch (err) {
        console.log(' ❌ :: ', err);
        res.status(401).json({ message: err });
      }
    }
  );
};
