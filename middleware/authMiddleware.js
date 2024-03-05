const jwt = require("jsonwebtoken");
const User = require("../models/user/userModel");

const protect = async (req, res) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {

            token = req.headers.authorization.split(" ")[1];
            // decodes token Id
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-password");

            next()

        } catch (error) {
            res.status(401);
            throw new Error("Not authrozied, token Failed");
        }
    }
    if (!token) {
        res.status(401);
        throw new Error("Not authrozied, token Failed");
    }
}