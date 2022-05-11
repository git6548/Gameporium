const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Commentrate extends Model {}

Commentrate.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    game_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
          }
      }
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: true,
    underscored: true,
    modelName: 'commentrate'
  }
);

module.exports = Commentrate;
