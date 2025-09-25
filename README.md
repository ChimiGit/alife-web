## 🚀 Project Structure

The ALIFE web project is built with Astro and includes the following structure:

```text
/
├── public/
│   ├── assets/
│   │   ├── logo/
│   │   └── team/
│   └── fonts/
├── src/
│   ├── components/
│   │   ├── home-slider/
│   │   └── *.tsx
│   ├── content/
│   │   ├── blog/
│   │   ├── jobs/
│   │   ├── support-team/
│   │   ├── team/
│   │   └── *.md
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── astro.config.mjs
├── tailwind.config.js
└── package.json
```

## 🎯 Features

- **Modern Design**: Clean, professional interface with Tailwind CSS
- **Content Management**: Astro Content Collections for blog posts, team members, and job listings
- **Interactive Components**: React components for team modals and dynamic content
- **Responsive Layout**: Mobile-first design with smooth animations
- **SEO Optimized**: Meta tags, structured data, and performance optimization

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 📁 Content Collections

The project uses Astro Content Collections for organized content management:

- **`blog/`**: Research articles and news updates
- **`jobs/`**: Career opportunities and job descriptions
- **`team/`**: Team member profiles and biographies
- **`support-team/`**: Supporters and donors information
- **`team-categories/`**: Team organization categories
- **`support-categories/`**: Support organization categories

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd alife-web
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

4. **Build for production**
   ```bash
   pnpm build
   ```

## 📄 Pages

- **Home** (`/`) - Landing page with dynamic backgrounds
- **About** (`/about`) - Organization overview and mission
- **People** (`/people`) - Team members and supporters
- **Career** (`/career`) - Job opportunities and company culture
- **Support** (`/support`) - Ways to support ALIFE's mission
- **Blog** (`/blog`) - Research articles and updates

---

_Built with ❤️ for advancing artificial life research_
