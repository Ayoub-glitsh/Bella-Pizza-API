const express = require('express');
const router = express.Router();
const { getClientCommandesWithTotal } = require('../controllers/clientController');

router.get('/:tel/commandes', getClientCommandesWithTotal);

module.exports = router;
