# Marketplace Entrepreneurs

Plateforme Next.js pour aider les entrepreneurs et commerciaux à promouvoir leurs produits.

## Démarrer

Prérequis: Node 18+.

```bash
npm install
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

- Accueil: http://localhost:3000
- Produits: http://localhost:3000/produits
- Détail produit: http://localhost:3000/produits/[id]
- Vendre: http://localhost:3000/vendre

## Fonctionnalités
- Liste des produits publiés
- Détail produit avec formulaire de contact
- Publication d'un produit (API POST /api/products)
- Envoi de leads (API POST /api/leads)

## Configuration
- `next.config.ts` autorise les images depuis `images.unsplash.com`.
- Base de données SQLite locale: `prisma/dev.db`.

