# 🚀 Next-Gen Interactive 3D Developer Portfolio

A high-performance, responsive developer portfolio featuring an interactive **3D Physics-Based Lanyard Badge** (`Three.js` + `@react-three/fiber` + `@react-three/rapier`), built on **TanStack Start (SSR)**, **React 19**, **Vite**, and **Tailwind CSS v4**.

---

## ✨ Key Features

- **🎮 Interactive 3D Lanyard Profile Card**: Real-time physics simulation allowing visitors to grab, pull, stretch, and swing the 3D ID badge across the entire viewport with realistic inertia and rope joints.
- **🎨 Dual-Sided 3D Badge Customization**: Aspect-preserving front face rendering (your portrait photo) paired with a procedurally generated VIP Engineering Access Pass on the reverse side.
- **⚡ Blazing-Fast SSR & Zero Hydration Mismatches**: Powered by TanStack Start and Nitro with client-only 3D mount guards.
- **🎯 100% Data-Driven Architecture**: Single configuration file (`src/lib/portfolio-data.ts`) controls all portfolio content, social links, projects, skills, services, and experience.
- **🌗 Sleek Light / Dark Mode**: Curated OKLCH-based theme palette with smooth CSS transitions and persistent local storage state.
- **📱 Fully Responsive**: Tailored layouts across mobile, tablet, and ultra-wide displays.
- **💨 Optimized Performance**: Viewport-aware rendering (`IntersectionObserver`), direct lighting, and DPR clamping ensuring consistent 60–120 FPS.

---

## 🏛️ Project Architecture

```
portfolio/
├── public/                     # Static public assets
├── src/
│   ├── assets/                 # Local media, images, models, & PDFs
│   │   ├── lanyard/            # 3D assets (card.glb, lanyard.png)
│   │   ├── portrait.webp       # Profile portrait photo
│   │   ├── workstation.jpg     # About section workspace photo
│   │   ├── project-*.jpg       # Project thumbnail previews
│   │   └── Resume.pdf          # Downloadable resume
│   │
│   ├── components/
│   │   ├── site/               # Domain-specific portfolio sections
│   │   │   ├── Hero.tsx        # Hero section with typewriter effect
│   │   │   ├── LanyardCard.tsx # 3D Physics Lanyard badge component
│   │   │   ├── About.tsx       # Bio, vision & animated stats counter
│   │   │   ├── Services.tsx    # Services offered grid
│   │   │   ├── Skills.tsx      # Categorized tech stack groups
│   │   │   ├── Projects.tsx    # Filterable projects showcase
│   │   │   ├── Experience.tsx  # Work history & career timeline
│   │   │   ├── Education.tsx   # Degrees & Azure certifications
│   │   │   ├── Resume.tsx      # Resume preview and download modal
│   │   │   ├── Blog.tsx        # Technical articles & insights
│   │   │   ├── Contact.tsx     # Contact form with validation & social links
│   │   │   ├── Nav.tsx         # Glassmorphic navbar with scroll-spy
│   │   │   ├── Footer.tsx      # Footer with quick links & back-to-top
│   │   │   ├── Reveal.tsx      # Scroll reveal animation wrapper
│   │   │   └── Decor.tsx       # Vector illustrations & decorative accents
│   │   │
│   │   └── ui/                 # Reusable Radix UI & Shadcn primitives
│   │
│   ├── lib/
│   │   ├── portfolio-data.ts   # ⭐ Single source of truth for all content
│   │   ├── utils.ts            # Class merging utility (clsx + tw-merge)
│   │   └── error-capture.ts    # SSR & runtime error logging
│   │
│   ├── routes/                 # TanStack Router file-based routes
│   │   ├── __root.tsx          # Root layout (Theme, Fonts, Toasts)
│   │   └── index.tsx           # Main single-page portfolio view
│   │
│   ├── styles.css              # Tailwind CSS v4 theme, fonts, and utilities
│   ├── router.tsx              # Router instantiation
│   ├── server.ts               # SSR entry wrapper
│   └── vite-env.d.ts           # Ambient type declarations (*.glb, meshline)
│
├── vite.config.ts              # Vite configuration with 3D asset inclusion
└── tsconfig.json               # TypeScript configuration
```

---

## 🛠️ Technology Stack

| Layer                 | Technology                                                                                                       | Purpose                                                       |
| :-------------------- | :--------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------ |
| **Framework**         | [TanStack Start](https://tanstack.com/start)                                                                     | Full-stack React framework with SSR and streaming             |
| **Runtime & Bundler** | [Vite 8](https://vitejs.dev/)                                                                                    | Ultra-fast development server & production bundler            |
| **Core UI**           | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)                                   | Type-safe declarative user interfaces                         |
| **3D & Physics**      | [Three.js](https://threejs.org/) + [React Three Fiber](https://r3f.docs.pmnd.rs/) + [Rapier](https://rapier.rs/) | 3D scene rendering, GLTF loaders, and rigid-body rope physics |
| **Ribbon Rendering**  | [`meshline`](https://github.com/spite/THREE.MeshLine)                                                            | Thick, smooth line geometry for the lanyard band              |
| **Styling**           | [Tailwind CSS v4](https://tailwindcss.com/)                                                                      | Modern utility-first CSS using OKLCH colors                   |
| **UI Components**     | [Radix UI](https://www.radix-ui.com/)                                                                            | Headless, accessible interactive primitives                   |
| **Icons & Fonts**     | [Lucide React](https://lucide.dev/) + Google Fonts                                                               | Modern icons with Space Grotesk & Playfair Display            |

---

## 🚀 Quickstart Guide for Developers

Follow these steps to clone this repository and spin up your local development environment.

### 1. Prerequisites

- **Node.js**: `v20.x` or higher
- **npm** (or `pnpm` / `bun`)

### 2. Clone & Install

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio.git

# Navigate into the project directory
cd portfolio

# Install dependencies
npm install
```

### 3. Run Locally

```bash
npm run dev
```

Open **`http://localhost:8080/`** (or the port indicated in your terminal) in your browser.

---

## 🎨 How to Customize for Your Own Portfolio

You can completely personalize this portfolio in **4 simple steps** without having to rewrite complex component code.

### Step 1: Update Your Information (`src/lib/portfolio-data.ts`)

Open `src/lib/portfolio-data.ts` and modify your details:

```typescript
export const profile = {
  name: "Your Full Name",
  shortName: "Your Nickname",
  role: "Senior Full Stack Engineer",
  email: "your.email@example.com",
  phone: "+1 (555) 000-0000",
  location: "San Francisco, CA",
  linkedin: "https://www.linkedin.com/in/yourprofile",
  linkedinHandle: "yourprofile",
  github: "https://github.com/yourusername",
  githubHandle: "yourusername",
  roles: [
    "Full Stack Developer",
    "React & Next.js Specialist",
    "Cloud Solutions Architect",
    "Open Source Contributor",
  ],
  heroLead:
    "Architecting scalable web applications, real-time distributed systems, and modern AI-driven user experiences.",
};
```

Update your **Skills**, **Projects**, **Experience**, **Education**, **Services**, and **Articles** in the same file.

---

### Step 2: Swap Image & Document Assets (`src/assets/`)

Replace the media files in `src/assets/` with your own:

1. **`portrait.webp`**: Your profile photo (rendered on the front face of the 3D lanyard badge).
2. **`workstation.jpg`**: A photo of your desk, setup, or workspace.
3. **`project-*.jpg`**: Thumbnails for your featured projects.
4. **`Muhammad_Riaz_Resume.pdf`**: Your downloadable PDF resume (update the import in `src/components/site/Resume.tsx`).

---

### Step 3: Customize the 3D Lanyard Card (`src/components/site/LanyardCard.tsx`)

The 3D lanyard component automatically uses your `portrait.webp` on the front and your `profile.name` on the back.

- **Custom Front / Back Image**: Pass custom images via props:
  ```tsx
  <ProfileLanyardCard frontImage="/my-custom-front.png" backImage="/my-custom-back.png" />
  ```
- **Lanyard Band Texture**: Replace `src/assets/lanyard/lanyard.png` with your own repeating ribbon logo pattern.
- **Physics Tuning**: Adjust `gravity={[0, -40, 0]}`, `lanyardWidth={1.2}`, or `maxSpeed={45}` inside `LanyardCard.tsx`.

---

### Step 4: Adjust Theme Colors & Fonts (`src/styles.css`)

Tailwind CSS v4 tokens are defined in `src/styles.css`:

```css
:root {
  --primary: oklch(0.552 0.171 38); /* Primary brand accent */
  --background: oklch(0.973 0.012 85); /* Light mode background */
  --card: oklch(0.995 0.005 90); /* Light mode card surface */
}

.dark {
  --primary: oklch(0.665 0.16 40); /* Dark mode brand accent */
  --background: oklch(0.185 0.012 55); /* Dark mode background */
  --card: oklch(0.235 0.014 55); /* Dark mode card surface */
}
```

---

## 📜 Available NPM Scripts

| Command           | Action                                                |
| :---------------- | :---------------------------------------------------- |
| `npm run dev`     | Starts the Vite development server with HMR           |
| `npm run build`   | Compiles client and SSR bundles with Nitro output     |
| `npm run preview` | Previews the production build locally                 |
| `npm run lint`    | Runs ESLint to check for code quality and type issues |
| `npm run format`  | Formats all files using Prettier                      |

---

## 🌐 Production Deployment

This project is configured with **Nitro** for universal, zero-config deployment.

### Cloudflare Pages / Workers

```bash
npm run build
npx wrangler pages deploy .output/public
```

### Vercel / Netlify

1. Connect your GitHub repository to Vercel / Netlify.
2. Build command: `npm run build`
3. Output directory: `.output/public`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
Feel free to fork, customize, and build your own developer portfolio!
