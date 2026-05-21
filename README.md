# 🐱 Kdev Portfolio

A modern, minimalist fullstack developer portfolio with vivid colors, smooth animations, and a cat mascot!

## ✨ Features

- **Minimalist + Vivid Design** — Clean layout with indigo, pink, and emerald accents
- **Cat Mascot** — Animated SVG cat in the hero, plus a surprise walking cat
- **Smooth Animations** — Powered by Framer Motion
- **Functional Contact Form** — Saves messages to PostgreSQL database
- **Fully Responsive** — Mobile-first design
- **SPA-like Navigation** — Smooth scroll between sections

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| ORM | Prisma |
| Database | PostgreSQL |
| Forms | React Hook Form + Zod |
| Notifications | React Hot Toast |
| Deployment | Vercel + Railway/Supabase |

## 🚀 Getting Started

### 1. Clone & Install

```bash
npm install
```

### 2. Set Up Database

```bash
# Copy env file
cp .env.example .env
# Edit .env with your PostgreSQL connection string

# Run database migrations
npx prisma migrate dev --name init

# Generate Prisma client
npx prisma generate
```

### 3. Run Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📦 Deployment

### Vercel (Frontend + API)

1. Connect your GitHub repo to Vercel
2. Add `DATABASE_URL` in environment variables

### Database Options

- **Supabase** — Free PostgreSQL with generous limits
- **Railway** — Simple PostgreSQL deployment
- **Neon** — Serverless PostgreSQL

## 🗄️ Database Schema

```prisma
model ContactMessage {
  id        String   @id @default(cuid())
  name      String
  email     String
  subject   String
  message   String
  createdAt DateTime @default(now())
  read      Boolean  @default(false)
}
```

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/route.ts   # Contact form API endpoint
│   ├── globals.css            # Global styles & animations
│   ├── layout.tsx             # Root layout with metadata
│   └── page.tsx               # Main page
├── components/
│   ├── Navbar.tsx             # Sticky navbar with active state
│   ├── Hero.tsx               # Hero section
│   ├── CatMascot.tsx          # Animated SVG cat mascot
│   ├── About.tsx              # About section with stats
│   ├── Skills.tsx             # Skills with animated bars
│   ├── Projects.tsx           # Projects grid
│   ├── Contact.tsx            # Contact form with DB
│   ├── Footer.tsx             # Footer
│   └── FloatingCat.tsx        # Walking cat easter egg
└── lib/
    └── prisma.ts              # Prisma client singleton
```

---

Made with ♥ and cat energy 🐱
