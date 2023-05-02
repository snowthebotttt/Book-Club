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
      autoIncrement: true,
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
        validate: {
          isEmail: true,
        },
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8],
        },
      },
      ISBN: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
  },

  {
    hooks: {
      beforeCreate: async (newBookReview) => {
        newUserData.password = await bcrypt.hash(newBookReview.password, 10);
        return newUserData;
      },
      beforeUpdate: async (newBookReview) => {
        newBookReview.password = await bcrypt.hash(
            newBookReview.password,
          10
        );
        return newBookReview;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "recommend",
  }
);

module.exports = Recommend;