const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({id}, "react_native_crud", { expiresIn: "30d", })}

module.exports = generateToken;