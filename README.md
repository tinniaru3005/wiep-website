# WiEP Website - Women in Ethereum Protocol Study Group

A modern, responsive website for the Women in Ethereum Protocol (WiEP) Study Group, built with React and Tailwind CSS.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/wiepteam/wiep-website.git
cd wiep-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Repository Structure

```
wiep-website/
├── public/
│   ├── index.html              # Main HTML template
│   ├── favicon.ico            # Website favicon
│   └── manifest.json          # PWA manifest
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx     # Navigation header
│   │   │   └── Footer.jsx     # Footer with links and CTA
│   │   ├── sections/
│   │   │   ├── Hero.jsx       # Hero/landing section
│   │   │   ├── About.jsx      # About WiEP section
│   │   │   ├── Stats.jsx      # Statistics section
│   │   │   ├── CurrentCohort.jsx # Active cohort information
│   │   │   ├── PreviousCohorts.jsx # Historical cohorts
│   │   │   └── Resources.jsx  # Learning resources
│   │   └── ui/
│   │       ├── Button.jsx     # Reusable button component
│   │       └── Card.jsx       # Reusable card component
│   │
│   ├── data/
│   │   ├── cohorts.js         # Cohort information and history
│   │   ├── mentors.js         # Mentor profiles and repositories
│   │   ├── resources.js       # Learning resources and links
│   │   └── sessions.js        # Session schedules and content
│   │
│   ├── hooks/
│   │   └── useLocalStorage.js # Local storage hook utility
│   │
│   ├── utils/
│   │   └── constants.js       # App constants and configuration
│   │
│   ├── styles/
│   │   └── globals.css        # Global styles and Tailwind imports
│   │
│   ├── App.jsx                # Main application component
│   └── index.js               # React DOM entry point
│
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind CSS configuration
├── vite.config.js            # Vite build configuration
├── postcss.config.js         # PostCSS configuration
└── README.md                 # This file
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel/Netlify ready

## 📋 Features

### ✅ Current Features
- **Responsive Design**: Mobile-first approach with full desktop support
- **Modern UI**: Clean, professional design with smooth animations
- **Current Cohort Display**: Live information about Cohort 4
- **Session Tracking**: Expandable session cards with recordings and assignments
- **Mentor Profiles**: Detailed mentor information with repository links
- **Resource Library**: Categorized learning resources and documentation
- **Community Links**: Direct integration with Discord, GitHub, and social media
- **SEO Optimized**: Complete meta tags, structured data, and performance optimization

### 🔄 Modular Architecture
- **Component-based**: Easily maintainable and reusable components
- **Data-driven**: Centralized data management for easy updates
- **Configurable**: Constants file for easy configuration changes
- **Extensible**: Simple to add new cohorts, mentors, and resources

## 📊 Managing Cohort Data

### Adding a New Cohort

1. **Update `src/data/cohorts.js`**:
```javascript
export const cohorts = {
  5: { // New cohort number
    id: 5,
    status: 'active',
    startDate: '2026-03-01',
    endDate: '2026-05-15',
    registrationUrl: 'https://forms.google.com/...',
    classroomUrl: 'https://classroom.google.com/...',
    participants: [],
    description: 'Spring 2026 cohort focusing on...',
    outcomes: {
      expectedPRs: '1-2 per participant',
      focusAreas: ['New focus areas...']
    }
  },
  // Move previous cohort to completed status
  4: {
    // ... update status to 'completed'
    // ... add final outcomes
  }
}
```

2. **Update `src/data/sessions.js`**:
```javascript
export const sessions = {
  cohort5: [
    {
      week: 1,
      type: 'Kickoff',
      date: '1st March 2026 - 16:00 UTC',
      speaker: 'WiEP Team',
      topic: 'Opening Ceremony & Program Overview',
      // ... other session data
    }
    // ... add all sessions
  ]
}
```

3. **Update `src/data/mentors.js`**:
```javascript
export const mentors = {
  cohort5: [
    {
      name: 'New Mentor',
      role: 'Client Mentor',
      discord: 'mentor_discord',
      repository: 'Client Name',
      repositoryUrl: 'https://github.com/...',
      // ... mentor details
    }
    // ... add all mentors
  ]
}
```

4. **Update main component references**:
   - Update `CurrentCohort.jsx` to reference the new cohort data
   - Update `src/utils/constants.js` with new cohort number

### Adding New Mentors

```javascript
// In src/data/mentors.js
{
  name: 'Mentor Name',
  role: 'Repository Mentor',
  discord: 'discord_username',
  repository: 'Repository Name',
  repositoryUrl: 'https://github.com/org/repo',
  language: 'Programming Language',
  issuesUrl: 'https://github.com/org/repo/issues?q=label%3A"good+first+issue"',
  discordChannel: 'Discord Server # channel-name', // Optional
  discordUrl: 'https://discord.gg/invite', // Optional
  expertise: ['Skill 1', 'Skill 2', 'Skill 3']
}
```

### Adding New Resources

```javascript
// In src/data/resources.js
{
  name: 'Resource Name',
  url: 'https://example.com',
  description: 'Brief description of the resource',
  category: 'Category Name', // Optional
  language: 'Programming Language' // Optional for code resources
}
```

## 🎨 Customization

### Updating Brand Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      purple: {
        // Update purple color palette
        600: '#your-primary-color',
        700: '#your-primary-hover',
      },
    },
  },
}
```

### Adding New Sections
1. Create component in `src/components/sections/`
2. Import and add to `App.jsx`
3. Add navigation link to `src/utils/constants.js`

### Custom Styling
- Global styles: `src/styles/globals.css`
- Component-specific: Use Tailwind classes
- Custom animations: Add to `globals.css`

## 🚀 Deployment

### Vercel (Recommended)
1. Fork/clone the repository
2. Connect to Vercel
3. Deploy automatically on push to main

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Node version: 18+

### Manual Deployment
```bash
# Build the project
npm run build

# Upload dist/ folder to your web server
```

## 📱 SEO & Performance

### Built-in Optimizations
- **Meta tags**: Complete OpenGraph and Twitter Card support
- **Structured data**: Schema.org markup for search engines
- **Performance**: Vite optimization and lazy loading
- **Accessibility**: ARIA labels and semantic HTML
- **Mobile-first**: Responsive design principles

### Analytics Setup
Add your analytics code to `public/index.html`:
```html
<!-- Google Analytics example -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔧 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint (if configured)
```

### Environment Variables (Optional)
Create `.env.local` for environment-specific settings:
```env
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

## 🤝 Contributing

### Quick Contribution Guide
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes
4. Test thoroughly
5. Commit: `git commit -m 'Add new feature'`
6. Push: `git push origin feature/new-feature`
7. Create a Pull Request

### Code Style
- Use functional components with hooks
- Follow existing naming conventions
- Keep components small and focused
- Use TypeScript-style prop documentation (comments)
- Ensure mobile responsiveness

## 📞 Support

- **Discord**: [WiEP Discord Server](https://discord.gg/JvEVfKBY6W) - #studygroup channel
- **GitHub Issues**: For bugs and feature requests
- **Documentation**: [WiEP Handbook](https://hackmd.io/@poojaranjan/WiEPHandbook)

## 📄 License

This project is part of the Women in Ethereum Protocol initiative, a community project by the Ethereum Foundation and Ethereum Cat Herders.

---

**Made with ❤️ by the WiEP community**
│   │