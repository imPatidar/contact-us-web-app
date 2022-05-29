let express = require('express');
const jwt = require("jsonwebtoken");
const config = require("../config/config");
let router = express.Router();
let {user: Users} = require('../sequelize').models


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/login', async function (req, res, next) {
    let body = req.body;

    try {
        let user = await Users.findOne({
            user_name: body.user_name,
            password: body.password
        });

        if (user) {
            //Generate token
            const token = jwt.sign(
                {user_name: body.user_name},
                config.tokenKey,
                {expiresIn: "20d"}
            );

            res.status(200).json({
                success: true,
                user: user,
                token: token
            });
        } else {
            res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
});

module.exports = router;
