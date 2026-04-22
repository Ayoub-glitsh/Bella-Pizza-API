const express = require('express');
const router = express.Router();
const {
    getCommandes,
    getCommandesByPizza,
    createCommande,
    deleteCommandesByTel
} = require('../controllers/commandeController');
const { validateCommande } = require('../middleware/validator');

router.route('/')
    .get(getCommandes)
    .post(validateCommande, createCommande);

router.route('/:idpizza')
    .get(getCommandesByPizza);

router.route('/:tel')
    .delete(deleteCommandesByTel);

module.exports = router;
