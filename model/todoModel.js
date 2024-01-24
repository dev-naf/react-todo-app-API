const mongoose = require('../config/mongoose'); // Import DB

const todoSchema = new mongoose.Schema({ // Stuktur Schema
    TODO: String,
    DATE : Date,
    STATUS: Boolean,
});

const todoModel = mongoose.model('Todo', todoSchema); // Declare model.  

module.exports = todoModel;