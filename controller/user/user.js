const User = require("../../models/user/userModel");
const bcrypt = require("bcryptjs");
const generateToken = require("../../utils/generateToken");

const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
        return res.status(422).json({ error: "please add all the fields...!" });
    }
    const userEmail = await User.findOne({ email: email })

    if (userEmail) {
        return res.status(422).json({ error: "user already exists with that email...!" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(String(password), salt)
    const newUser = await new User({ email, password: hashPassword, name }).save();

    if (newUser) res.json({ message: "saved Successfully...!" });
}


const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Please provide email and password."
            });
        }

        const user = await User.findOne({ email });

        if (user) {
            res.json({
                _id: user._id,
                email: user.email,
                token: generateToken(user._id)
            })
        }
        else {
            res.status(400).json({ message: "Invalid Emails and Password...!" })
        }

    } catch (error) {
        console.error("Error during authentication:", error);
        return res.status(500).json({
            message: "Internal server error."
        });
    } 
}

module.exports = {signUp, signIn}