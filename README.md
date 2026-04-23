<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="70"/>
  <img src="https://cdn.simpleicons.org/express/white" width="70"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="70"/>
  <img src="https://res.cloudinary.com/dqgsl5uu4/image/upload/q_auto/f_auto/v1776906183/mongoose-removebg-preview_qindku.png" width="90"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="70"/>
</p>



<!-- HEADER ANIMÉ -->
<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=42&pause=1000&color=F7B733&center=true&vCenter=true&width=900&height=120&lines=Gestion+de+Pizzeria+Moderne;API+REST+Performante;Node.js+%2B+Express+%2B+MongoDB;Bienvenue+chez+Bella+Pizza!" alt="Typing SVG" />
</p>

# 🍕 Bella Pizza API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)



---

**Bella Pizza API** est une solution backend complète et professionnelle conçue pour gérer les opérations quotidiennes d'une pizzeria. Elle permet de gérer efficacement les pizzas, les clients et le cycle de vie des commandes avec des fonctionnalités avancées de calcul de facturation.


---

## 🛠️ Stack Technologique

| Technologie | Logo | Usage | 
| :--- | :---: | :--- |
| **Node.js** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="35"/> | Environnement d'exécution JavaScript côté serveur. |
| **Express.js** | <img src="https://cdn.simpleicons.org/express/white" width="35"/> | Framework web pour la création d'APIs REST. |
| **MongoDB** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="35"/> | Base de données NoSQL orientée documents. |
| **Mongoose** | <img src="https://res.cloudinary.com/dqgsl5uu4/image/upload/q_auto/f_auto/v1776906183/mongoose-removebg-preview_qindku.png" width="55"/> | ODM pour la modélisation des données MongoDB. |
| **JavaScript** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="35"/> | Langage de programmation principal du projet. |

---




## 🚀 Fonctionnalités

-   **Gestion des Commandes** : Création, listage complet et suppression.
-   **Suivi Client** : Récupération de l'historique des commandes d'un client spécifique.
-   **Calculs Automatisés** : Calcul dynamique du montant par commande et du total général pour chaque client.
-   **Validation Robuste** : Utilisation d'un middleware de validation pour garantir l'intégrité des données entrantes.
-   **Architecture Pro** : Structure de projet modulaire (MVC) facile à maintenir et à faire évoluer.
-   **Logs & Monitoring** : Intégration de Morgan pour le suivi des requêtes HTTP.

---

## 📂 Structure du Projet

```text
/
├── config/         # Connexion à la base de données
├── controllers/    # Logique métier et manipulation des données
├── middleware/     # Validation et traitements intermédiaires
├── models/         # Définition des schémas Mongoose (Pizza, Client, Commande)
├── routes/         # Définition des points d'entrée (Endpoints)
├── .env            # Configuration des variables d'environnement
├── .gitignore      # Exclusion des fichiers sensibles
├── server.js       # Point d'entrée principal de l'application
└── package.json    # Dépendances et scripts
```

---

## 🛠️ Installation et Configuration

### Prérequis
-   [Node.js](https://nodejs.org/) (v14+)
-   [MongoDB](https://www.mongodb.com/) (Local ou Atlas)

### Étapes
1.  **Cloner le dépôt**
    ```bash
    git clone https://github.com/Ayoub-glitsh/Bella-Pizza-API.git
    cd Bella-Pizza-API
    ```

2.  **Installer les dépendances**
    ```bash
    npm install
    ```

3.  **Configurer les variables d'environnement**
    Créez un fichier `.env` à la racine :
    ```env
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/BD_Pizza
    NODE_ENV=development
    ```

4.  **Démarrer le serveur**
    ```bash
    npm start
    ```

---

## 🛣️ API Endpoints

### Commandes
| Méthode | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/commandes` | Liste toutes les commandes |
| `GET` | `/commandes/:idpizza` | Liste les commandes pour une pizza donnée |
| `POST` | `/commandes` | Crée une nouvelle commande |
| `DELETE`| `/commandes/:tel` | Supprime toutes les commandes d'un client |

### Clients
| Méthode | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/clients/:tel/commandes`| Liste les commandes d'un client + Totaux |

---

## 🧪 Tests avec Postman
Vous pouvez importer les endpoints dans Postman pour tester la logique. Assurez-vous d'avoir préalablement créé des entrées dans les collections `Pizzas` et `Clients` pour lier les commandes correctement.

---

## 📜 Licence
Distribué sous la licence MIT. Voir `LICENSE` pour plus d'informations.

---

## 👨‍💻 Auteur
**Ayoub** - [Ayoub-glitsh](https://github.com/Ayoub-glitsh)
