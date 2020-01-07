const passport = require('passport');

const Sequelize = require('sequelize');
// const Op = Sequelize.Op;

module.exports = (app, db) => {
  app.post(
    '/review-create/:id',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
      const restaurantId = Number(req.params.id);
      const { rating } = req.body;
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

  app.get('/reviewRestaurant/:restaurantId', async (req, res) => {
    const { restaurantId } = req.params;
    try {
      const userReview = await db.reviews.findAll({
        where: { restaurant_id: restaurantId },
        attributes: ['id', 'title', 'content', 'rating', 'user_like'],
        include: [
          {
            model: db.users,
            attributes: [
              'id',
              'username',
              'first_name',
              'last_name',
              'profile_img_url'
            ]
          }
        ]
      });
      res.status(200).send(userReview);
    } catch (err) {
      console.error(err);
      res.status(400).send({ message: 'cannot get restaurant_review' });
    }
  });
};
