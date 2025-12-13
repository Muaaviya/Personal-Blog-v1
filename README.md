# Blog Platform

A modern, responsive blog platform built with React, TypeScript, and Tailwind CSS. Features a beautiful UI with dark mode support, social sharing capabilities, and a smooth reading experience.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager
- **Git** - [Download here](https://git-scm.com/)

## Step-by-Step Setup Guide

### 1. Clone the Repository

```bash
git clone https://github.com/Muaaviya/Personal-Blog-v1.git
cd Personal-Blog-v1
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The application will start on `http://localhost:8080` by default. Your browser should automatically open, or you can manually navigate to this URL.

### 4. Build for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist` folder.

### 5. Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Available Scripts

| Command           | Description                                |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Starts the development server on port 8080 |
| `npm run build`   | Creates an optimized production build      |
| `npm run preview` | Previews the production build locally      |
| `npm run lint`    | Runs ESLint to check code quality          |

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── BlogCard.tsx    # Blog post card component
│   ├── Navigation.tsx  # Main navigation bar
│   ├── SocialShare.tsx # Social media sharing buttons
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── Blogs.tsx       # Blog listing page
│   ├── BlogPost.tsx    # Individual blog post page
│   └── About.tsx       # About page
├── data/               # Static data and content
│   └── blogPosts.ts    # Blog post data
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles and design tokens
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **next-themes** - Dark mode support

## Features

- 📱 Fully responsive design
- 🌓 Dark/Light mode toggle
- 📝 Blog post listing with categories
- 🔍 Reading progress indicator
- 🔗 Social media sharing (Twitter, Facebook, LinkedIn, WhatsApp, Instagram)
- ⚡ Fast page loads with Vite
- 🎨 Beautiful UI with Tailwind CSS
- ♿ Accessible components

## Development Tips

### Hot Module Replacement (HMR)

The development server supports HMR, so your changes will be reflected instantly without a full page reload.

### Adding New Blog Posts

Edit `src/data/blogPosts.ts` to add new blog posts. Each post should follow this structure:

```typescript
{
  id: 9, // Unique numeric ID
  slug: "your-post-url-slug", // URL-friendly slug (used in /blog/:slug)
  title: "Your Post Title",
  excerpt: "Brief description shown on blog cards...",
  content: [
    { type: "heading", content: "Section Heading" },
    { type: "paragraph", content: "Your paragraph text here..." },
    { type: "subheading", content: "Subsection Heading" },
    { type: "image", src: "https://example.com/image.jpg", alt: "Image description", caption: "Optional caption" },
  ],
  category: "Romantic" | "Philosophical" | "Inspiring" | "Daily Blog", // Choose one
  date: "March 15, 2024",
  readTime: "5 min read",
  heroImage: "https://example.com/hero-image.jpg" // Optional hero image URL
}
```

#### Content Block Types

| Type | Required Fields | Optional Fields | Description |
|------|-----------------|-----------------|-------------|
| `heading` | `content` | - | Main section heading (H2) |
| `subheading` | `content` | - | Subsection heading (H3) |
| `paragraph` | `content` | - | Body text |
| `image` | `src`, `alt` | `caption` | Inline image with optional caption |

#### Available Categories

- `Romantic` - Love and relationship content
- `Philosophical` - Deep thoughts and philosophy
- `Inspiring` - Motivational content
- `Daily Blog` - Personal daily musings

### Customizing Styles

The design system is defined in `src/index.css` using CSS custom properties. Modify these variables to change colors, spacing, and other design tokens.

## Troubleshooting

### Port Already in Use

If port 8080 is already in use, you can change it in `vite.config.ts`:

```typescript
server: {
  port: 3000, // Change to your preferred port
}
```

### Dependencies Installation Issues

Try clearing npm cache and reinstalling:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Ensure you're using Node.js v18 or higher:

```bash
node --version
```

## License

This project is open source and available under the MIT License.
