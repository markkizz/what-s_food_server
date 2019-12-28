module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'restaurants',
      [
        {
          id: 1,
          name: 'markmean',
          cuisine: 'japanese',
          address: 'any',
          province: 'bkk',
          district: 'nuanjan',
          phone: '0847211814',
          open_hours: '09.00-10.00',
          price_range: '$$$',
          user_like: 1000,
          rating: 4.5,
          total_review: 456,
          image_url: 'http://meanmean',
          createdAt: '2019-12-28 22:27:00',
          updatedAt: '2019-12-28 22:27:00'
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', [{}]);
  }
};
