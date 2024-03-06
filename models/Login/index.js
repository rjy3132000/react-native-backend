const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const LoginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
});

LoginSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

LoginSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

const Login = mongoose.model('login', LoginSchema);
module.exports = Login;