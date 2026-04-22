const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    idPizza: {
        type: Number,
        required: true,
        unique: true
    },
    nomPizza: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    prix: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Pizza', pizzaSchema);
