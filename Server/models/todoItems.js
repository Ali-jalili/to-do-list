const mongoose = require('mongoose');

const TodoItem = new mongoose.Schema({
    item: {
        type: String,
        required: true,
    }
})


module.exports = mongoose.model('todo', TodoItem);