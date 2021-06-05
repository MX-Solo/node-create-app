const { DataTypes } = require("sequelize");
const sequelize = require("../../utils/database.js");

const User = sequelize.define("user", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},
	firstName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	lastName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
    password : {
        type: DataTypes.STRING,
		allowNull: false,
    }
});

module.exports = User;
