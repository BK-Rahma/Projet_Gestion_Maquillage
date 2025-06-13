# 💄 Gestion de Make Up – Application Angular

Ce projet Angular est une application simple de gestion de produits de maquillage, divisée en deux modules principaux :

- **Gestion de Maquillage**
- **Gestion de Catégories**

Il s'agit d'une plateforme permettant d'ajouter, modifier, supprimer et lier des produits à des catégories spécifiques.

---

## 🧭 Structure du projet

src/

│

├── app/

│ ├── ajout-category/

│ │ ├── ajout-category.component.ts

│ │ ├── ajout-category.component.html

│ │ ├── ajout-category.component.css

│ │ ├── ajout-category.component.spec.ts

│ │ └── ajout-category.modal.ts

│ │

│ ├── makeup-dashboard/

│ │ ├── makeup-dashboard.component.ts

│ │ ├── makeup-dashboard.component.html

│ │ ├── makeup-dashboard.component.css

│ │ ├── makeup-dashboard.component.spec.ts

│ │ └── makeup-dashboard.modal.ts

│ │

│ ├── shared/

│ │ └── api.service.ts

│ │

│ ├── app.component.ts

│ ├── app.component.html

│ ├── app.component.css

│ ├── app.config.ts

│ ├── app.routes.ts

│ ├── app.config.server.ts

│ ├── app.routes.server.ts

│ └── app.component.spec.ts

│

├── assets/

├── index.html

├── main.ts

├── main.server.ts

└── server.ts

---

## ✨ Fonctionnalités principales

### 🎨 Page d’accueil
- Titre centré : **"Gestion de Make Up"**
- Deux boutons de navigation :
  - `Gestion de Maquillage`
  - `Gestion de Catégorie`

### 💅 Gestion de Maquillage
- Liste de tous les produits de maquillage
- Formulaire pour **ajouter** ou **modifier** un produit
- Suppression d’un produit
- Liaison d’un produit à une **catégorie**

### 🗂️ Gestion de Catégories
- Affichage de toutes les catégories disponibles
- Formulaire pour **ajouter** ou **modifier** une catégorie
- Suppression d’une catégorie

---

## 🧰 Services

- **MakeupService** : gestion des opérations CRUD pour les produits
- **CategoryService** : gestion des catégories

Ces services utilisent `HttpClient` pour interagir avec une API REST (ou des données simulées).

---

## 🎨 Design & CSS

- Design centré et responsive grâce à Flexbox
- Utilisation de **Bootstrap** pour les boutons et la mise en page

---

## 📷 Aperçu

![image](https://github.com/user-attachments/assets/0cf6bddc-faf8-4ef2-a11d-a41de8f98267)

![image](https://github.com/user-attachments/assets/c2d9c67e-3611-4548-85e7-d9244c572e6a)

![image](https://github.com/user-attachments/assets/29122ab6-e50c-4a60-902e-383296ce136c)

---

## 👩‍💻 Développé par
Rahma Bouchnak
Projet réalisé dans le cadre d’un apprentissage Angular.

---
## ▶️ Démarrer le projet

1. Cloner le dépôt :
```bash
git clone https://github.com/rahmouchahd/gestion-makeup.git
cd projet-makeup\AngularCRUD
npm install
ng serve

---


