module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'meanmean',
          password: '1234',
          first_name: 'mean',
          last_name: 'mean',
          phone: '123456789',
          profile_img_url: 'https://www.svgrepo.com/show/92827/avatar.svg',
          role: 'user',
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
