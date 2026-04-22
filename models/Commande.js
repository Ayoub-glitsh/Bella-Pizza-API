const mongoose = require('mongoose');

const commandeSchema = new mongoose.Schema({
    idpizza: {
        type: Number,
        ref: 'Pizza',
        required: true
    },
    tel: {
        type: String,
        ref: 'Client',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    qte: {
        type: Number,
        required: true,
        min: 1
    }
}, { timestamps: true });

module.exports = mongoose.model('Commande', commandeSchema);
