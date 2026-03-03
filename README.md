#  Application Web de Réservation Hôtel & Vol

## 📌 Description

Cette application web permet la réservation en ligne de vols et d’hôtels.

🎯 **Objectif :**  
Faciliter et simplifier le processus de réservation pour les utilisateurs grâce à une plateforme rapide, moderne et performante.

L’application permet :
- La consultation des offres de vols et d’hôtels
- La réservation en ligne
- Le paiement sécurisé
- La gestion complète des offres  par un administrateur

---

## 🏗️ Architecture du Projet

Le système repose sur une architecture hybride utilisant :

- Backend principal : Spring Boot  
- Service d’affichage des offres : Node.js  
- Base de données relationnelle : MySQL  
- Base de données NoSQL : MongoDB  
- Broker de messages : Apache ActiveMQ  
- Conteneurisation : Docker  
- Service de paiement : PayPal  

---

## ⚙️ Fonctionnement Technique

### 🔹 Spring Boot
- Contient tous les services principaux du système
- Connecté directement à MySQL
- Gère :
  - Les utilisateurs
  - Les réservations
  - Les offres (vols et hôtels)
- Agit comme **Publisher** via ActiveMQ

### 🔹 Node.js
- Connecté à MongoDB
- Consomme les messages envoyés par Spring Boot via ActiveMQ
- Stocke les offres dans MongoDB
- Permet un affichage rapide des offres

### 🎯 Pourquoi cette architecture ?

Cette architecture permet :
- D’éviter les jointures complexes dans MySQL
- D’améliorer la performance d’affichage des offres
- D’assurer une communication asynchrone entre les services

  <img width="787" height="472" alt="image" src="https://github.com/user-attachments/assets/4c8eb6c4-415e-479d-bcc3-a56ac55d2ec3" />


---

## 🚀 Installation et Démarrage

Le projet est entièrement dockerisé.

### 1️⃣ Construire les images Docker

```bash
docker-compose build
