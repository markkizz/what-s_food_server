const passport = require('passport');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = (app, db) => {
  app.get('/allRestaurants', async (req, res) => {
    try {
      const allRestaurants = await db.restaurants.findAll();
      res.status(200).send(allRestaurants);
    } catch (err) {
      console.log(' ❌ ::  ', err);
      res.status(400).json({ message: 'can not send any data' });
    }
  });
};

// attributes: [
//   'name',
//   'cuisine',
//   'district',
//   'open_hours',
//   'price_range',
//   'userlike',
//   'rating',
//   'total_review',
//   'image_url'
// ]
