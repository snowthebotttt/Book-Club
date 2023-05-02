const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Review extends Model { }

Review.init({
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
    rating: {
        type: DataTypes.INTEGER            ,
        allowNull: false,
        unique: true,
    },
},
);