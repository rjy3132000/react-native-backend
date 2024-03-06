const jwt = require("jsonwebtoken");

const protect = async(req, res, next) => {
    const token = req.header("token");
    

    if(!token) {
        return res.status(401).json({
            message : "No token, authorization denied."
        });
    }
    try {
        const JWT_SECRET = "react_native_crud";
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded
        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid token, authorization denied.",
        });
    }
}

module.exports = { protect }