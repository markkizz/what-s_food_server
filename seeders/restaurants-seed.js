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
          image_url:
            'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
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
          image_url:
            'https://images.unsplash.com/photo-1566830646346-908d87490bba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
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
          image_url:
            'https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1385&q=80',
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
          image_url:
            'https://images.unsplash.com/photo-1569185115737-e027065f7bc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1281&q=80',
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
