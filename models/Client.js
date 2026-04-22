const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    tel: {
        type: String,
        required: true,
        unique: true
    },
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Client', clientSchema);
