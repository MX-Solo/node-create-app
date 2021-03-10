const express = require('express');
const router = express.Router();
//const apiv2 = require('./api-v2');

router.use('/' , (req,res) => {
    res.send('Hello world')
});
//router.use('/api/v2' , apiv2);


module.exports = router;