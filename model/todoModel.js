const mongoose = require('../config/mongoose'); // Import DB

const todoSchema = new mongoose.Schema({ // Stuktur Schema
    TODO: String,
    DATE : Date,
    STATUS: Boolean,
});

const todoModel = mongoose.model('todo_data', todoSchema); // Declare model.  

module.exports = todoModel;