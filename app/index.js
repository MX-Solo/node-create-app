const express = require("express");
const app = express();
const http = require("http");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const sequelize = require("./../utils/database.js");
const flash = require("connect-flash");

//──── config

module.exports = class Application {
	constructor() {
		this.setupExpress();
		this.setSqlConnection();
		this.setConfig();
		this.setRouters();
	}

	setupExpress() {
		const server = http.createServer(app);
		server.listen(config.port, () =>
			console.log(`Listening on port ${config.port}`)
		);
	}

	//──── connect MongoDB
	setSqlConnection() {
		sequelize
			.sync()
			.then((result) => {
				console.log("Connection has been established successfully.");
			})
			.catch((err) => {
				console.error("Unable to connect to the database:", err);
			});
	}

	//──── express config
	setConfig() {
		app.use(express.static(config.layout.public_dir));
		app.set("view engine", config.layout.view_engine);
		app.set("views", config.layout.view_dir);

		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: true }));
		app.use(session({ ...config.session }));
		app.use(cookieParser(config.cookie_secretkey));
		app.use(flash());
	}

	setRouters() {
		app.use(require("app/routes/api"));
	}
};
