const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');

// Charger les variables d'environnement
dotenv.config();

// Connexion à la base de données
connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else {
    app.use(morgan('combined'));
}

// Routes
app.use('/commandes', require('./routes/commandeRoutes'));
app.use('/clients', require('./routes/clientRoutes'));

// Route pour tester le serveur
app.get('/', (req, res) => {
    res.json({ message: "Bienvenue sur l'API Pizza Restaurant" });
});

// Gestion des erreurs 404
app.use((req, res) => {
    res.status(404).json({ message: "Route non trouvée" });
});

const PORT = process.env.PORT || 3000;

// Animation de frappe pour le console log
const typeText = (text, delay = 50) => {
    let i = 0;
    const interval = setInterval(() => {
        process.stdout.write(text[i]);
        i++;
        if (i === text.length) {
            clearInterval(interval);
            console.log('\n');
        }
    }, delay);
};

app.listen(PORT, () => {
    const message = `🚀 Serveur démarré avec succès sur le port ${PORT}... Prêt pour les commandes !`;
    typeText(message);
});
