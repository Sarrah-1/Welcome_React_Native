# Lab 1 – Premier projet mobile avec React Native

Premier projet **React Native** (Expo) : structure de base et composants UI réutilisables.

## Aperçu

L'écran est composé de trois parties empilées verticalement :

- un **header** jaune en haut (`AppHeader`),
- un **contenu** centré (texte blanc sur fond vert),
- un **footer** jaune en bas avec le copyright (`AppFooter`).

## Objectifs pédagogiques

- Créer un projet avec Expo (`create-expo-app`)
- Lancer l'application sur un téléphone avec Expo Go
- Comprendre la structure d'un projet Expo (`App.js`, `components/`)
- Créer des composants réutilisables dans des fichiers séparés
- Utiliser `View`, `Text` et `StyleSheet`
- Composer un écran avec `flex`

## Structure du projet

```
premier-component-rn/
├── App.js                  # Écran principal (assemble header + contenu + footer)
├── components/
│   ├── AppHeader.js        # Composant header
│   └── AppFooter.js        # Composant footer
├── assets/                 # Icônes et images
├── app.json                # Configuration Expo
└── package.json
```

## Pré-requis

- [Node.js](https://nodejs.org) (version LTS)
- npm (installé avec Node.js)
- L'application **Expo Go** sur ton téléphone (Play Store / App Store)
- Téléphone et ordinateur connectés au **même réseau Wi-Fi**

## Installation et lancement

```bash
# 1. Cloner le dépôt
git clone https://github.com/<TON_PSEUDO>/premier-component-rn.git
cd premier-component-rn

# 2. Installer les dépendances
npm install

# 3. Lancer le projet
npx expo start
```

Un **QR code** s'affiche dans le terminal.

- **Android** : ouvrir Expo Go → « Scan QR code »
- **iPhone** : ouvrir l'appareil photo et scanner le QR code
- **Émulateur** : appuyer sur `a` (Android) ou `i` (iOS) dans le terminal

> Si le téléphone ne se connecte pas (réseau de l'école, pare-feu…), utiliser le mode tunnel :
> `npx expo start --tunnel`

## Mini-défis d'extension

- [ ] Année dynamique dans le footer (`new Date().getFullYear()`) et nom de l'appli
- [ ] Header plus riche (description, taille et couleur de police)
- [ ] Créer un composant `MainCard` (carte centrale à fond clair) et l'intégrer dans le contenu

## Technologies

- React Native
- Expo
