module.exports = (sequelize, DataTypes) => {

  const user = sequelize.define('user', {
    username: {
      type: DataTypes.STRING(255)
    },
    password: {
      type: DataTypes.STRING(255)
    },
    name: {
      type: DataTypes.STRING(100)
    },
    email: {
      type: DataTypes.STRING(100)
    },
    first_name: {
      type: DataTypes.STRING(100)
    },
    last_name: {
      type: DataTypes.STRING(100)
    },
    phone: {
      type: DataTypes.STRING(20)
    },
    profile_img_url: {
      type: DataTypes.STRING(500)
    },
    role: {
      type: DataTypes.ENUM("admin", "user")
    }
  })

  user.associate = (models) => {
    // user.hasMany(models.comment, { onDelete: 'CASCADE', foreignKey: 'user_id' })
    user.belongsToMany(models.restaurant, { onDelete: 'CASCADE', as: 'restaurant', foreignKey: 'user_id', through: models.review })
    // user.belongsToMany(user, { as: 'request_from', foreignKey: 'request_from_id', through: models.friend })
  }

    return user
  }









  //     username: {
  //         type: DataType.UUID,
  //         defaultValue: DataType.UUIDV4,
  //         allowNull: false,
  //         primaryKey: true,
  //         unique: true
  //     },
  //     role: {
  //         type: DataType.STRING,
  //         allowNull: false
  //     },
  //     size: {
  //         type: DataType.INTEGER(10),
  //         allowNull: true
  //     },
  //     date: {
  //         type: DataType.STRING,
  //     },
  //     table_number: {
  //         type: DataType.INTEGER(10)
  //     }
  // }, {
  //     freezeTableName: true,
  //     timestamps: false,
  //     updatedAt: false
  // })

  // user.associate = (models) => {
  //     user.belongsTo(models.restaurants, { foreignKey: { name: 'restaurant_id', allowNull: false } }),
  //     user.hasOne(models.bills, { foreignKey: { name: 'user_key', allowNull: false}})
