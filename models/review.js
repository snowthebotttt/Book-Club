const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Review extends Model { }

Review.init({
    reviewerName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    review: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,

    },
    rating: {
        type: DataTypes.INTEGER            ,
        allowNull: false,
        unique: true,
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "review",
  }
);