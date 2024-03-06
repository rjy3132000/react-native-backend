const authUser = require("../../models/Login/index");
const generateToken = require("../../utils/generateToken");

const authUserLogin = async (req, res) => {
    try {
        let {username, email, password} = req.body;
        if(!username || !email || !password) {
            return res.status(400).json({
                message : "Please provide the username, email and password"
            });
        }

        const user = await authUser.findOne({email});
        if(user) {
            res.status(200).json({
                _id : user._id,
                username : user.username,
                email : user.email,
                token : generateToken(user._id)
            })
        } else {
            res.status(400).json({ message: "Invalid Credentials...!" });
        }

    } catch (error) {
        console.error("Error during authentication:", error);
        return res.status(500).json({
            message: "Internal server error."
        });
    }
}

module.exports = { authUserLogin }