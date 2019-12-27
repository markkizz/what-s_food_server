module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define('review', {
    title: {
      type: DataTypes.STRING(150)
    },
    content: {
      type: DataTypes.STRING(500)
    },
    rating: {
      type: DataTypes.FLOAT(2)
    },
    price_range: {
      type: DataTypes.STRING(10)
    },
    user_like: {
      type: DataTypes.STRING(500)
    }
  })

  review.associate = (models) => {

  }
  return review
}
