module.exports = (sequelize, DataTypes) => {
  const reviews = sequelize.define('reviews', {
    id: {
      type: DataTypes.INTEGER(20),
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(150)
    },
    content: {
      type: DataTypes.STRING(500)
    },
    rating: {
      type: DataTypes.FLOAT(2)
    },
    user_like: {
      type: DataTypes.STRING(500)
    }
  });

  reviews.associate = models => {
    reviews.belongsTo(models.users, {
      foreignKey: 'user_id'
    });
  };
  return reviews;
};
