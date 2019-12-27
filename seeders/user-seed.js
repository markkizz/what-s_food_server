module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          username: "meanmean",
          password: "1234",
          name: "mean",
          email: "mean@email.xzy",
          full_name: "meansohot",
          phone: "123456789",
          profile_img_url: "https://www.svgrepo.com/show/92827/avatar.svg",
          role: "user"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", [{}]);
  }
};
