const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("relationship", "root", "32499123", {
	host: "localhost",
	dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
	logging: false,
});

module.exports = sequelize;
