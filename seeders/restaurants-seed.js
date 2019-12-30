module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'restaurants',
      [
        {
          id: 1,
          name: 'markmean',
          cuisine: 'japanese',
          address: 'anyanyanyanyany',
          province: 'bkk',
          district: 'nuanjan',
          phone: '0847211814',
          open_hours: '09.00-10.00',
          price_range: '$$$',
          user_like: 1000,
          rating: 4.5,
          total_review: 456,
          image_url: 'http://meanmean',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'Restaurant Name',
          cuisine: 'thai',
          address: 'anyanyanyanyanyanyanyanyany',
          province: 'bkk',
          district: 'Phatumwan',
          phone: '0847211814',
          open_hours: '09.00-10.00',
          price_range: '$$$',
          user_like: 1000,
          rating: 4.5,
          total_review: 456,
          image_url: 'http://restaurantname',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: 'restaurant name',
          cuisine: 'french',
          address: 'anyanyanyany',
          province: 'bkk',
          district: 'siam',
          phone: '0847211814',
          open_hours: '09.00-10.00',
          price_range: '$$$',
          user_like: 1000,
          rating: 4.5,
          total_review: 456,
          image_url: 'http://namename',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          name: 'hahaha restaurant',
          cuisine: 'USA',
          address: 'anyany',
          province: 'bkk',
          district: 'sukumvit',
          phone: '0847211814',
          open_hours: '09.00-10.00',
          price_range: '$$$',
          user_like: 1000,
          rating: 4.5,
          total_review: 456,
          image_url: 'http://meanmean',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', [{}]);
  }
};
