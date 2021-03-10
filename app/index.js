const express = require("express");
const app = express();
const http = require("http");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const flash = require("connect-flash");

//──── config

module.exports = class Application {
	constructor() {
		this.setupExpress();
		this.setMongoConnection();
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
	setMongoConnection() {
		mongoose.Promise = global.Promise;
		mongoose.connect(config.database.url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		mongoose.set("useCreateIndex", true);
		mongoose.set("useFindAndModify", false);
	}

	//──── express config
	setConfig() {
		app.use(express.static(config.layout.public_dir));
		app.set("view engine", config.layout.view_engine);
		app.set("views", config.layout.view_dir);
		app.use(config.layout.ejs.expressLayouts);
		app.set("layout extractScripts", config.layout.ejs.extractScripts);
		app.set("layout extractStyles", config.layout.ejs.extractStyles);
		app.set("layout", config.layout.ejs.master);

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
