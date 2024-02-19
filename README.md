# Puissance 4 - React

Ce projet est une reprise du jeu [Puissance 4](https://fr.wikipedia.org/wiki/Puissance_4) conçu en [React](https://react.dev/).

Deux versions du jeu sont proposées :
- "Local Game" : pour jouer sur un seul PC, chaque joueur à tour de rôle (version accessible depuis la [branche local-game](https://github.com/GABLRM/React-Puissance-4/tree/local-game) / actuellement sur la branche main)
- "Online Game" **En cours de développement** : pour jouer à distance, avec un ordinateur par joueur (version accessible depuis la branche [websockets](https://github.com/GABLRM/React-Puissance-4/tree/websockets))

## Sommaire

- [I - Jouer au Puissance 4](#i---jouer-au-puissance-4)
- [II - Lancer une instance en local](#ii---lancer-une-instance-en-local)
	- [A - Prérequis](#a---prérequis)
	- [B - Installation](#b---installation)
	- [C - Lancement](#c---lancement)
- [III - Fonctionnement](#iii---fonctionnement)
- [IV - Crédits](#iv---crédits)

## I - Jouer au Puissance 4

Ce projet est disponible en ligne grâce à Vercel.app. Vous pouvez donc jouer en ligne depuis l'adresse : [https://react-puissance-4.vercel.app](https://react-puissance-4.vercel.app/)

## II - Lancer une instance en local

### A - Prérequis

Pour lancer les projet initial, il est nécessaire d'avoir d'installé sur sa machine :
- Node.js

La version en Websockets nécessite d'avoir également l'API de lancée. Elle est disponible à cette adresse : [https://github.com/GABLRM/api-react-puissance-4](https://github.com/GABLRM/api-react-puissance-4)

### B - Installation

Pour récupérer le projet, vous devez clone ce répository avec la commande

```bash
git clone https://github.com/GABLRM/React-Puissance-4.git
```

Ensuite, il est nécessaire d'installer les dépendences du projet avec la commande

```bash
npm i
```

### C - Lancement

Pour lancer le projet en environnement de dev, il est possible d'utiliser la commande

```
npm run dev
```

## III - Fonctionnement

Pour utiliser le projet, il est possible ensuite de se rendre sur l'adresse [http://localhost:5173/](http://localhost:5173/)

- La version initiale du projet permet de jouer au puissance 4 à tour de rôle sur une seule machine, en ayant chacun entré son pseudo.
- La version websockets du projet devrait permettre de jouer au puissance 4 avec deux joueurs sur des machines distinctes, à distance. Des "rooms" avec des identifiants uniques sont crées. **En cours de développement**

## IV - Crédits

Ce projet a été réalisé par Luka GARCIA et Gabriel LAROUMANIE dans le cadre de notre Bachelor 3 Informatique chez Bordeaux YNOV Campus.
