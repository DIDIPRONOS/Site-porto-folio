# 🚀 Guide de Démarrage Rapide

## Installation et Lancement

### 1. Accéder au projet
```bash
cd /vercel/sandbox/ruth-portfolio
```

### 2. Installer les dépendances (déjà fait)
```bash
npm install
```

### 3. Lancer le serveur de développement
```bash
npm run dev
```

Le site sera accessible sur: **http://localhost:5173**

---

## 🎯 Commandes Essentielles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Compile pour la production |
| `npm run preview` | Prévisualise le build de production |
| `npm run lint` | Vérifie le code avec ESLint |

---

## 📝 Personnalisation Rapide

### Modifier les Couleurs

Éditez `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#3b82f6',  // Changez cette couleur
    dark: '#2563eb',
  },
  secondary: {
    DEFAULT: '#8b5cf6',  // Changez cette couleur
    dark: '#7c3aed',
  },
}
```

### Modifier le Contenu

1. **Nom et informations** → `src/components/Header.tsx` et `src/components/Footer.tsx`
2. **Texte d'accueil** → `src/components/Hero.tsx`
3. **Services** → `src/components/Benefits.tsx`
4. **Témoignages** → `src/components/Testimonials.tsx`
5. **Questions FAQ** → `src/components/FAQ.tsx`

### Changer les Images

Remplacez les URLs dans les composants:
- `src/components/Hero.tsx` (ligne ~51) - Image de profil
- `src/components/Testimonials.tsx` (lignes ~8-22) - Photos des clients

---

## 🌐 Déploiement

### Option 1: Vercel (Recommandé)

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Importez votre projet depuis GitHub/GitLab/Bitbucket
3. Vercel détectera automatiquement Vite
4. Cliquez sur "Deploy"

### Option 2: Netlify

1. Créez un compte sur [netlify.com](https://netlify.com)
2. Glissez-déposez le dossier `dist/` après avoir exécuté `npm run build`
3. Ou connectez votre repo Git

### Option 3: GitHub Pages

```bash
# Installez gh-pages
npm install -D gh-pages

# Ajoutez dans package.json:
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}

# Déployez
npm run deploy
```

---

## 🔧 Résolution de Problèmes

### Le serveur ne démarre pas
```bash
# Supprimez node_modules et réinstallez
rm -rf node_modules package-lock.json
npm install
```

### Erreurs TypeScript
```bash
# Vérifiez la configuration
cat tsconfig.app.json

# Le baseUrl et paths doivent être présents
```

### Tailwind CSS ne fonctionne pas
```bash
# Vérifiez que les directives sont présentes dans index.css
head -3 src/index.css
# Devrait afficher:
# @tailwind base;
# @tailwind components;
# @tailwind utilities;
```

---

## 📦 Structure du Projet

```
ruth-portfolio/
├── src/
│   ├── components/          # 8 composants créés
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Benefits.tsx
│   │   ├── Testimonials.tsx
│   │   ├── NewsletterSubscribe.tsx
│   │   ├── CTASection.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   └── Index.tsx        # Page principale
│   ├── App.tsx
│   └── index.css
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## ✅ Vérifications

- [x] Build réussi sans erreurs
- [x] 0 vulnerabilities npm
- [x] TypeScript configuré correctement
- [x] Tailwind CSS fonctionnel
- [x] Tous les composants créés
- [x] Navigation responsive
- [x] Design mobile-first

---

## 🎨 Fonctionnalités

- ✅ Navigation sticky avec menu mobile
- ✅ Smooth scroll entre sections
- ✅ Formulaire newsletter avec validation
- ✅ FAQ accordéon interactif
- ✅ Design responsive (mobile/tablet/desktop)
- ✅ Images optimisées
- ✅ Animations CSS fluides
- ✅ Footer complet avec réseaux sociaux

---

## 📞 Support

Pour plus d'informations:
- **README.md** - Documentation complète
- **CHANGEMENTS.md** - Liste des corrections effectuées
- **Vite docs** - https://vitejs.dev
- **React docs** - https://react.dev
- **Tailwind docs** - https://tailwindcss.com

---

## 🎉 C'est Prêt!

Le site est maintenant prêt à être utilisé et déployé!

```bash
npm run dev  # Lancer le projet
```

Bonne chance! 🚀
