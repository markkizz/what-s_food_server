// const passport = require('passport');
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

  app.get('/searchRestaurant', async (req, res) => {
    const { district, keyword, q } = req.query;
    console.log(district, keyword);
    console.log(req.query);
    let findRestaurant;
    try {
      if (!keyword && district) {
        findRestaurant = await db.restaurants.findAll({ where: { district } });
      } else if (q && !keyword && !district) {
        findRestaurant = await db.restaurants.findAll({
          where: {
            [Op.or]: [
              { name: { [Op.like]: `%${q}%` } },
              { district: { [Op.like]: `%${q}%` } },
              { cuisine: { [Op.like]: `%${q}%` } }
            ]
          }
        });
      } else {
        findRestaurant = await db.restaurants.findAll({
          where: {
            [Op.or]: [{ name: { [Op.like]: `%${keyword}%` } }, { district }]
          }
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

  app.get('/filterRestaurant', async (req, res) => {
    const { price_range } = req.query;
    const priceRangeParse = price_range.split(',');

    const queryObj = JSON.parse(JSON.stringify(req.query));
    delete queryObj.price_range;
    Object.keys(queryObj).forEach(key => {
      queryObj[`${key}`] = queryObj[key].split(',');
    });
    const dynamicOr = op =>
      [].concat(
        ...Object.keys(queryObj).map(key =>
          queryObj[key].map(keyword => ({ [key]: { [op]: `%${keyword}%` } }))
        )
      );
    try {
      const filterSearch = await db.restaurants.findAll({
        where: {
          [Op.or]: dynamicOr(Op.like),
          price_range: { [Op.between]: priceRangeParse }
        }
      });
      if (!filterSearch) res.status(400).send('cannot find restaurant');
      res.status(200).send(filterSearch);
    } catch (err) {
      console.error(err);
      res.status(400).send('not found restaurant');
    }
  });

  app.get('/selectRestaurant/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
      const restaurant = await db.restaurants.findOne({ where: { id } });
      if (!restaurant) res.status(400).send(restaurant);
      res.status(200).send(restaurant);
    } catch (err) {
      console.error(err);
      res.status(400).send({ message: 'restaurant not found' });
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
