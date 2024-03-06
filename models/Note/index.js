const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    author : {
        type: String,
        required: true
    },
    insertedAt: {
        type: Date,
        default: Date.now,
    },
    insertedBy: {
        type: mongoose.Schema.Types.ObjectId,
    },
});

const note = mongoose.model("note", noteSchema);
module.exports = note;
