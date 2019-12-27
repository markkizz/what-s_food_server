module.exports = (sequelize, DataTypes) => {
  const restaurant = sequelize.define('restaurant', {
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
    image_url: {
      type: DataTypes.STRING(100)
    },

  })

  restaurant.associate = (models) => {
    restaurant.belongsToMany(models.user, { onDelete: 'CASCADE', as: 'user', foreignKey: 'restaurant_id', through: models.review })
  }
  return restaurant
}
