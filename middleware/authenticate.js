const jwt = require("jsonwebtoken");
const config = require("../config/config");

let authenticate = async (req, res, next) => {
    if(!req.headers.authorization) {
        return res.status(401).send({ message: 'Unauthorized request' });
    }
    let token = req.headers.authorization.split(' ')[1];

    try {
        req.user = jwt.verify(token, config.tokenKey);
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};

module.exports = authenticate;