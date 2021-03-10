const session = require('express-session');


module.exports = {
    secret : process.env.SESSION_SECRETKEY,
    resave : true,
    saveUninitialized : true,
    cookie : {  expires : new Date(Date.now() + 1000 * 60 * 60 * 6)},
}