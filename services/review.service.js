const passport = require('passport');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = (app, db) => {
  app.post(
    '/review-create/:id',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
      const restaurantId = Number(req.params.id);
      const { rating, priceRange } = req.body;
      const title = req.body.title.trim();
      const content = req.body.content.trim();
      try {
        const restaurant = await db.restaurants.findOne({
          where: { id: restaurantId }
        });
        if (restaurant) {
          db.reviews
            .create({
              title,
              content,
              rating,
              price_range: priceRange,
              user_like: 0,
              user_id: req.user.id,
              restaurant_id: restaurantId
            })
            .then(() =>
              res.status(201).json({ message: 'create review success' })
            )
            .catch(error => console.error('reviews error: ', error));
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
