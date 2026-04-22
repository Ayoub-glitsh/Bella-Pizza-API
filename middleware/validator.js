const { body, validationResult } = require('express-validator');

const validateCommande = [
    body('idpizza').isNumeric().withMessage('idpizza doit être un nombre'),
    body('tel').isString().notEmpty().withMessage('Le téléphone est obligatoire'),
    body('qte').isNumeric().isInt({ min: 1 }).withMessage('La quantité doit être au moins 1'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateCommande
};
