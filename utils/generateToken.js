const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({id}, "scheduler", {
            expiresIn: "30d",
    })}

module.exports = generateToken;