module.exports = (sequelize, DataTypes) => {
  const restaurants = sequelize.define('restaurants', {
    name: {
      type: DataTypes.STRING(255)
    },
    cuisine: {
      type: DataTypes.STRING(255)
    },
    address: {
      type: DataTypes.STRING(500)
    },
    province: {
      type: DataTypes.STRING(100)
    },
    district: {
      type: DataTypes.STRING(100)
    },
    phone: {
      type: DataTypes.STRING(100)
    },
    open_hours: {
      type: DataTypes.STRING(100)
    },
    price_range: {
      type: DataTypes.STRING(100)
    },
    user_like: {
      type: DataTypes.INTEGER
    },
    rating: {
      type: DataTypes.FLOAT(2)
    },
    total_review: {
      type: DataTypes.INTEGER
    },
    image_url: {
      type: DataTypes.STRING(1000)
    },
    description: {
      type: DataTypes.STRING(1000)
    }
  });

  restaurants.associate = models => {
    restaurants.hasMany(models.reviews, {
      foreignKey: 'restaurant_id'
    });
  };
  return restaurants;
};
