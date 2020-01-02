const passport = require('passport');
const Sequelize = require('sequelize');

const { Op } = Sequelize;

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

  app.get('/searchRestaurant/:district', async (req, res) => {
    const { district } = req.params;
    const { q } = req.query;
    let findRestaurant;
    try {
      if (!q) {
        findRestaurant = await db.restaurants.findAll({ where: { district } });
      } else {
        findRestaurant = await db.restaurants.findAll({
          where: { [Op.or]: [{ name: { [Op.like]: `%${q}%` } }, { district }] }
        });
      }
      if (!findRestaurant) {
        throw new Error('can not find restaurant');
      }
      res.status(200).send(findRestaurant);
    } catch (err) {
      console.error(' ❌ ::  ', err);
      res.status(400).json({ message: 'restaurant not found' });
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
