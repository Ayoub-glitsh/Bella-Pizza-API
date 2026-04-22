const Commande = require('../models/Commande');
const Pizza = require('../models/Pizza');

// @desc    Lister les commandes d’un client avec totaux
// @route   GET /clients/:tel/commandes
exports.getClientCommandesWithTotal = async (req, res) => {
    try {
        const { tel } = req.params;

        // Récupérer les commandes du client
        const commandes = await Commande.find({ tel });

        if (commandes.length === 0) {
            return res.status(200).json({
                tel,
                commandes: [],
                montantTotalGeneral: 0
            });
        }

        // Pour chaque commande, calculer le montant (prix * qte)
        // On doit récupérer le prix de la pizza pour chaque commande
        const resultCommandes = await Promise.all(commandes.map(async (cmd) => {
            const pizza = await Pizza.findOne({ idPizza: cmd.idpizza });
            const montant = pizza ? pizza.prix * cmd.qte : 0;
            return {
                ...cmd._doc,
                nomPizza: pizza ? pizza.nomPizza : 'Inconnue',
                prixUnitaire: pizza ? pizza.prix : 0,
                montantCommande: montant
            };
        }));

        const montantTotalGeneral = resultCommandes.reduce((acc, curr) => acc + curr.montantCommande, 0);

        res.status(200).json({
            tel,
            commandes: resultCommandes,
            montantTotalGeneral
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
