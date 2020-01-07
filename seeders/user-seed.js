module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', [{}]);
  }
};
