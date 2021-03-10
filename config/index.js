const database = require('./database');
const session = require('./session');
const layout = require('./layout');

module.exports = {
    database,
    session,
    layout,
    port : process.env.APPLICATION_PORT,
    cookie_secretkey : process.env.COOKIE_SECRETKEY,
    debuger : true,
    siteurl : process.env.WEBSITE_URL,
    jwt : {
        secret_key : 'JyH3E6lDv3tCZh5s3gmp7D8c5tpiF!$#FkbK%u6*'
    }
}