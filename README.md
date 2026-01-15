# Keng Her - Creative Developer Portfolio

🚀 A modern, immersive portfolio website built with Next.js 16, featuring scroll-driven animations, a futuristic dark theme, and responsive design.

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

- **Scroll-Driven Animations** - 240-frame image sequence synced to scroll for immersive storytelling
- **Skills Page** - Interactive skill bars with proficiency levels and certifications
- **Experience Page** - Professional timeline with project highlights
- **Resume Page** - Comprehensive CV with downloadable option
- **Mobile Navigation** - Animated hamburger menu with slide-in drawer
- **Language Toggle** - Prepared for EN/Lao internationalization
- **Dark Theme** - Futuristic design with blue accent colors
- **Responsive Design** - Optimized for all devices

## 🛠️ Tech Stack

| Category  | Technologies                      |
| --------- | --------------------------------- |
| Framework | Next.js 16 (App Router)           |
| Language  | TypeScript                        |
| Styling   | Tailwind CSS                      |
| Animation | Framer Motion                     |
| Fonts     | Orbitron, Rajdhani (Google Fonts) |

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/hmongcodequest/keng-her.git

# Navigate to project
cd keng-her/portfolio-app

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📂 Project Structure

```
portfolio-app/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── skills/       # Skills page
│   │   ├── experience/   # Experience page
│   │   └── resume/       # Resume page
│   ├── components/       # React components
│   │   ├── Navbar.tsx    # Navigation with mobile menu
│   │   ├── SkillsPage.tsx
│   │   ├── ExperiencePage.tsx
│   │   └── ResumePage.tsx
│   └── data/             # Data files
│       ├── skillsData.ts
│       ├── experienceData.ts
│       └── resumeData.ts
├── messages/             # i18n translations (EN, Lao)
└── public/images/        # Image assets
```

## 📱 Pages

| Page       | Route         | Description                       |
| ---------- | ------------- | --------------------------------- |
| Home       | `/`           | Hero with scroll animation        |
| Skills     | `/skills`     | Technical skills & certifications |
| Experience | `/experience` | Work history timeline             |
| Resume     | `/resume`     | Comprehensive CV                  |

## 🎨 Design System

- **Primary Color**: `#3B82F6` (Blue)
- **Accent Color**: `#60A5FA` (Light Blue)
- **Background**: `#1a1a1a` (Dark)
- **Heading Font**: Orbitron
- **Body Font**: Rajdhani

## 📄 License

MIT License - feel free to use this as inspiration for your own portfolio!

## 👤 Author

**Keng Her** - Creative Developer

- GitHub: [@hmongcodequest](https://github.com/hmongcodequest)
