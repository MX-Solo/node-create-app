const Comment = require("../model/Comment");
const User = require("../model/User");

exports.home = async (req, res) => {
    const comments = await Comment.findAll({});
    const users = await User.findAll({});
    res.render('index.ejs' , { comments , users })
};

exports.addcomment = async (req, res) => {
	 await Comment.create({
		Text: "asdadsad",
        user: 1,
	});
    res.redirect('/')
};


exports.adduser = async (req, res) => {
	await User.create({
		firstName: "aliraeza",
		lastName: "mokhtari",
		email: "mokhtari_alireza77@yahoo.com",
		password: "123456am",
	});
    res.redirect('/')
};

exports.loadcomment = async (req, res) => {
	let comment = await Comment.findAll({});
	res.josn(comment);
};

exports.loaduser = async (req, res) => {
	let user = await User.findAll({});
	res.json(user);
};