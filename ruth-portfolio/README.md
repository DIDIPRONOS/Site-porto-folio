# Portfolio Ruth Nouatin - Site de Coaching

Un site web moderne et professionnel pour Ruth Nouatin, coach professionnelle certifiée.

## 🚀 Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Navigation fluide avec scroll smooth
- ✅ Section Hero avec présentation
- ✅ Section Services/Bénéfices
- ✅ Témoignages clients
- ✅ Newsletter avec validation d'email
- ✅ Section Call-to-Action
- ✅ FAQ avec accordéon interactif
- ✅ Footer complet avec liens sociaux et contact
- ✅ Optimisé pour mobile et desktop
- ✅ Performance optimisée

## 🛠️ Technologies Utilisées

- **React 18** - Bibliothèque JavaScript pour l'interface utilisateur
- **TypeScript** - Typage statique pour plus de robustesse
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS 3** - Framework CSS utility-first
- **PostCSS** - Transformation CSS

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

## 📁 Structure du Projet

```
ruth-portfolio/
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── Header.tsx       # En-tête avec navigation
│   │   ├── Hero.tsx         # Section héro
│   │   ├── Benefits.tsx     # Section des bénéfices
│   │   ├── Testimonials.tsx # Témoignages clients
│   │   ├── NewsletterSubscribe.tsx # Formulaire newsletter
│   │   ├── CTASection.tsx   # Call-to-action
│   │   ├── FAQ.tsx          # Questions fréquentes
│   │   └── Footer.tsx       # Pied de page
│   ├── pages/
│   │   └── Index.tsx        # Page principale
│   ├── App.tsx              # Composant racine
│   └── index.css            # Styles globaux avec Tailwind
├── public/                  # Fichiers statiques
├── tailwind.config.js       # Configuration Tailwind
├── vite.config.ts          # Configuration Vite
└── package.json            # Dépendances du projet
```

## 🎨 Personnalisation

### Couleurs

Les couleurs principales sont définies dans `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#3b82f6',  // Bleu
    dark: '#2563eb',
  },
  secondary: {
    DEFAULT: '#8b5cf6',  // Violet
    dark: '#7c3aed',
  },
}
```

### Contenu

Pour modifier le contenu du site, éditez les fichiers dans `src/components/`:

- **Header.tsx** - Menu de navigation
- **Hero.tsx** - Titre et description principale
- **Benefits.tsx** - Liste des services
- **Testimonials.tsx** - Témoignages clients
- **FAQ.tsx** - Questions et réponses
- **Footer.tsx** - Informations de contact

## 🔧 Améliorations Apportées

### Corrections des Erreurs

1. ✅ Configuration TypeScript corrigée avec path aliases
2. ✅ Import de types corrigé (FormEvent)
3. ✅ Configuration Vite avec résolution de paths
4. ✅ Tailwind CSS correctement configuré

### Améliorations du Code

1. ✅ Navigation fluide avec scroll smooth
2. ✅ Menu mobile responsive
3. ✅ Validation d'email dans la newsletter
4. ✅ FAQ avec accordéon interactif
5. ✅ Footer complet avec tous les liens
6. ✅ Boutons accessibles (aria-label)
7. ✅ Images optimisées avec Unsplash
8. ✅ Transitions et animations CSS

### Design

1. ✅ Dégradés de couleurs modernes
2. ✅ Ombres et effets de profondeur
3. ✅ Espacement cohérent
4. ✅ Typographie claire et lisible
5. ✅ Responsive sur tous les écrans

## 📱 Responsive

Le site est entièrement responsive avec:
- Design mobile-first
- Breakpoints Tailwind (sm, md, lg, xl)
- Menu hamburger sur mobile
- Grille adaptative pour les cartes

## 🚀 Déploiement

Le site peut être déployé sur:
- Vercel (recommandé)
- Netlify
- GitHub Pages
- Tout hébergeur supportant les sites statiques

```bash
# Build pour la production
npm run build

# Le dossier dist/ contient les fichiers à déployer
```

## 📄 Licence

© 2025 Ruth Nouatin. Tous droits réservés.

---

**Développé avec ❤️ en utilisant React + TypeScript + Tailwind CSS**
