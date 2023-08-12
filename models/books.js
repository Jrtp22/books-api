const mongoose = require('mongoose');
const { model,Schema  } = mongoose;

const bookSchema = new mongoose.Schema({
        
        "title": { type: String, required: true },
        "description": { type: String, required: true },
        "year": {
            type: Number,
            max: new Date().getFullYear(),
        },
        "quantity": { type: Number, required: true},
        "imageURL":  { type: String, default: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" },
    
});    


module.exports = mongoose.model('Book', bookSchema);