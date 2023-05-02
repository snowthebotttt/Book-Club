const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Recommend extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Recommend.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    reviewerName: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    bookName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
       },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
             },
      ISBN: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "recommend",
  }
);

module.exports = Recommend;