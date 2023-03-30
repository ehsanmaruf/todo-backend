const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    text: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Todo-App", todoSchema);