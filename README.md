# Lab 1 – Premier projet mobile avec React Native

Premier projet **React Native** (Expo) : structure de base et composants UI réutilisables.

## Aperçu

L'écran est composé de trois parties empilées verticalement :

- un **header** jaune en haut (`AppHeader`),
- un **contenu** centré (texte blanc sur fond vert),
- un **footer** jaune en bas avec le copyright (`AppFooter`).

<img width="739" height="1600" alt="WhatsApp Image 2026-11-19 at 19 19 05 (1)" src="https://github.com/user-attachments/assets/b923e11a-5f94-47c0-8d6f-4fdeaefd0852" />

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


## Technologies

- React Native
- Expo
