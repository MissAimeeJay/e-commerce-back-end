const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//example from seeds
// {
//   category_name: 'Shorts',
// }


class Category extends Model {}

Category.init(
  {
    category_name: {
    type: DataTypes.STRING,
    allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
