# Landing Page - YourBrand

A modern, responsive landing page built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with Next.js 16 and React 19
- 🎨 Styled with Tailwind CSS
- 📝 TypeScript for type safety
- 🎯 SEO optimized
- 🚀 Fast performance

## Components

- **Header**: Fixed navigation with mobile menu
- **Hero**: Eye-catching hero section with CTA buttons
- **Benefits**: Showcase key features with icons
- **Testimonials**: Customer reviews and ratings
- **Newsletter Subscribe**: Email subscription form
- **CTA Section**: Call-to-action section
- **FAQ**: Accordion-style frequently asked questions
- **Footer**: Site footer with links and social media

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd landing-page
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Create a production build:
```bash
npm run build
```

### Start Production Server

After building, start the production server:
```bash
npm start
```

## Project Structure

```
landing-page/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Benefits.tsx
│   ├── Testimonials.tsx
│   ├── NewsletterSubscribe.tsx
│   ├── CTASection.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── next.config.ts        # Next.js configuration
└── package.json          # Dependencies
```

## Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... customize your colors
  },
}
```

### Content

Update the content in each component file:
- Brand name in `components/Header.tsx`
- Hero text in `components/Hero.tsx`
- Benefits in `components/Benefits.tsx`
- Testimonials in `components/Testimonials.tsx`
- FAQ items in `components/FAQ.tsx`

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## License

ISC

## Author

Your Name
