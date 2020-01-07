module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          title: 'this is title',
          content: 'hello restaurant',
          rating: 4.5,
          user_like: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          restaurant_id: 1,
          user_id: 1
        },
        {
          id: 2,
          title: 'this is title 2',
          content: 'hello restaurant',
          rating: 4,
          user_like: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          restaurant_id: 1,
          user_id: 2
        },
        {
          id: 3,
          title: 'this is title 3',
          content: 'hello restaurant',
          rating: 2.0,
          user_like: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          restaurant_id: 1,
          user_id: 2
        }
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', [{}]);
  }
};
