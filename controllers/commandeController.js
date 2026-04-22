const Commande = require('../models/Commande');
const Pizza = require('../models/Pizza');
const Client = require('../models/Client');

// @desc    Créer une commande
// @route   POST /commandes
exports.createCommande = async (req, res) => {
    try {
        const { idpizza, tel, qte } = req.body;

        // Vérifier si la pizza existe
        const pizza = await Pizza.findOne({ idPizza: idpizza });
        if (!pizza) {
            return res.status(404).json({ message: "Pizza non trouvée" });
        }

        // Vérifier si le client existe
        const client = await Client.findOne({ tel: tel });
        if (!client) {
            return res.status(404).json({ message: "Client non trouvé" });
        }

        const commande = await Commande.create({
            idpizza,
            tel,
            qte
        });

        res.status(201).json(commande);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Lister toutes les commandes
// @route   GET /commandes
exports.getCommandes = async (req, res) => {
    try {
        const commandes = await Commande.find();
        res.status(200).json(commandes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Récupérer les commandes d’une pizza spécifique
// @route   GET /commandes/:idpizza
exports.getCommandesByPizza = async (req, res) => {
    try {
        const commandes = await Commande.find({ idpizza: req.params.idpizza });
        res.status(200).json(commandes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Supprimer les commandes d’un client par numéro de téléphone
// @route   DELETE /commandes/:tel
exports.deleteCommandesByTel = async (req, res) => {
    try {
        const result = await Commande.deleteMany({ tel: req.params.tel });
        res.status(200).json({ message: `${result.deletedCount} commandes supprimées` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
