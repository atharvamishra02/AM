# AM Portfolio Project - Complete Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Setup and Installation](#setup-and-installation)
6. [Running the Application](#running-the-application)
7. [Features](#features)
8. [API Endpoints](#api-endpoints)
9. [Deployment](#deployment)
10. [Development Guidelines](#development-guidelines)
11. [Troubleshooting](#troubleshooting)

---

## Project Overview

The **AM Portfolio** is a modern, full-stack web application built as a personal portfolio website. It showcases a developer's skills, projects, and services with an interactive and responsive design. The application consists of a React frontend and an Express.js backend, both deployable on Vercel.

### Key Highlights
- **Developer**: Atharva Mishra
- **Type**: Personal Portfolio Website
- **Architecture**: Full-Stack Application (Frontend + Backend)
- **Deployment**: Vercel (Both frontend and backend)
- **Purpose**: Professional portfolio showcasing development skills and services

---

## Architecture

The project follows a **monorepo structure** with separate frontend and backend applications:

```
AM/
├── Frontend/          # React + Vite application
├── Backend/           # Express.js API server
└── package.json       # Root package.json with scripts
```

### Communication Flow
1. **Frontend** → Makes API calls to Backend
2. **Backend** → Handles contact form submissions via email
3. **Both** → Deployed separately on Vercel

---

## Technology Stack

### Frontend Technologies
- **React 19.1.0** - UI library
- **Vite 6.3.5** - Build tool and development server
- **React Router DOM 7.6.2** - Client-side routing
- **Tailwind CSS 4.1.10** - Utility-first CSS framework
- **Framer Motion 12.18.1** - Animation library
- **React Icons 5.5.0** - Icon components
- **React Simple Typewriter 5.0.1** - Typewriter effect
- **React GitHub Calendar 4.5.7** - GitHub contribution calendar

### Backend Technologies
- **Express.js 4.18.2** - Web framework
- **Nodemailer 6.9.8** - Email sending functionality
- **CORS 2.8.5** - Cross-origin resource sharing
- **Dotenv 16.0.3** - Environment variables management

### Development Tools
- **Concurrently 9.1.2** - Run multiple scripts simultaneously
- **ESLint** - Code linting
- **Vercel** - Deployment platform

---

## Project Structure

```
AM/
│
├── package.json                 # Root package with concurrent scripts
│
├── Backend/
│   ├── index.js                # Main server file with email API
│   ├── package.json            # Backend dependencies
│   └── vercel.json             # Vercel deployment config
│
└── Frontend/
    ├── public/                 # Static assets
    ├── src/
    │   ├── App.jsx            # Main app component with routing
    │   ├── App.css            # Global styles
    │   ├── main.jsx           # React app entry point
    │   ├── assets/            # Images, videos, etc.
    │   ├── components/
    │   │   └── Navbar.jsx     # Navigation component
    │   └── pages/
    │       ├── Home.jsx       # Landing page
    │       ├── About.jsx      # About page
    │       ├── Services.jsx   # Services page
    │       ├── Contact.jsx    # Contact form page
    │       ├── Frontend.jsx   # Frontend services
    │       ├── Backend.jsx    # Backend services
    │       └── Fullstack.jsx  # Full-stack services
    ├── package.json           # Frontend dependencies
    ├── vite.config.js         # Vite configuration
    ├── eslint.config.js       # ESLint configuration
    ├── vercel.json            # Frontend deployment config
    └── README.md              # React + Vite template info
```

---

## Setup and Installation

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/atharvamishra02/AM.git
   cd AM
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install Backend dependencies**
   ```bash
   cd Backend
   npm install
   cd ..
   ```

4. **Install Frontend dependencies**
   ```bash
   cd Frontend
   npm install
   cd ..
   ```

### Environment Configuration

Create a `.env` file in the **Backend** directory:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=3001
```

**Important**: 
- Use Gmail App Password (not regular password)
- Enable 2-factor authentication in Gmail
- Generate App Password from Google Account settings

---

## Running the Application

### Development Mode

#### Option 1: Run Both Frontend and Backend Simultaneously
```bash
# From the root directory
npm start
```

This command uses `concurrently` to run both:
- Backend server on `http://localhost:3001`
- Frontend development server on `http://localhost:5173`

#### Option 2: Run Individually

**Backend Only:**
```bash
cd Backend
npm start
```

**Frontend Only:**
```bash
cd Frontend
npm run dev
```

### Production Build

**Frontend:**
```bash
cd Frontend
npm run build
npm run preview
```

### Available Scripts

**Root Level:**
- `npm start` - Run both frontend and backend
- `npm run server` - Run backend only
- `npm run client` - Run frontend only

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

**Backend:**
- `npm start` - Start Express server

---

## Features

### 1. **Multi-Page Portfolio**
- **Home**: Hero section with video background, typewriter effect, social links
- **About**: Developer information and background
- **Services**: Three service categories (Frontend, Backend, Full-stack)
- **Contact**: Contact form with email integration

### 2. **Interactive Elements**
- **Framer Motion Animations**: Smooth page transitions and element animations
- **Typewriter Effect**: Dynamic text on homepage
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Lazy Loading**: Pages are loaded on-demand for better performance

### 3. **Modern UI/UX**
- **Tailwind CSS**: Utility-first styling
- **Dark Theme**: Professional dark color scheme
- **Video Background**: Engaging homepage with video backdrop
- **Icon Integration**: React Icons for consistent iconography

### 4. **Contact System**
- **Email Integration**: Contact form sends emails via Nodemailer
- **Form Validation**: Client and server-side validation
- **Success/Error Feedback**: User feedback for form submissions

### 5. **Social Integration**
- **GitHub Calendar**: Display GitHub contributions
- **Social Links**: Direct links to GitHub, LinkedIn, and email
- **Professional Links**: WhatsApp and phone contact options

---

## API Endpoints

### Backend API (Express.js)

**Base URL (Development):** `http://localhost:3001`
**Base URL (Production):** `https://your-backend-url.vercel.app`

#### Endpoints

##### 1. Health Check
- **URL:** `GET /`
- **Response:** `"API is working"`
- **Purpose:** Verify server is running

##### 2. Contact Form
- **URL:** `POST /contact`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Portfolio Inquiry",
    "message": "Hello, I'd like to discuss a project..."
  }
  ```
- **Success Response:**
  ```json
  {
    "message": "Message sent successfully!"
  }
  ```
- **Error Response:**
  ```json
  {
    "message": "Failed to send message."
  }
  ```

### CORS Configuration
- **Origin:** `*` (Allow all origins)
- **Methods:** `GET, POST, PUT, DELETE`
- **Credentials:** `true`

---

## Deployment

The application is deployed using Docker and Nginx on a self-hosted VPS, automated via GitHub Actions CI/CD.

### Production Environment Details
- **Server OS**: Linux (VPS)
- **Host**: `151.243.146.243`
- **SSH Port**: `2222`
- **Orchestration**: Docker Compose
- **Web Server / Reverse Proxy**: Nginx (configured within the frontend container)

### Docker Configuration

The application is split into two containers:
1. **Frontend**: Custom multi-stage build (Node.js builds the static assets, and Nginx serves them and proxies API requests starting with `/api/` to the backend container).
2. **Backend**: Lightweight Node.js container executing the Express server on port `5000`.

To build and run the services locally using Docker:
```bash
# Build and run containers
docker compose up --build -d

# Stop containers
docker compose down
```

### CI/CD Pipeline (GitHub Actions)

The deployment pipeline is automated in `.github/workflows/deploy.yml` on push to the `main` branch.

#### Required GitHub Secrets
To make the deployment work, configure the following secrets in your GitHub repository under **Settings > Secrets and variables > Actions**:
1. `SSH_PRIVATE_KEY`: The SSH private key corresponding to the public key authorized on the target server (e.g. your `id_rsa` or similar).
2. `EMAIL_USER`: Gmail user address used by the backend to send mail.
3. `EMAIL_PASS`: Gmail App password used by the backend.

#### What the CI/CD Pipeline Does:
1. **Build and Tag**: Builds Docker images for the Frontend and Backend services and tags them with `latest`.
2. **Push to GHCR**: Pushes the compiled images to the GitHub Container Registry (`ghcr.io`).
3. **Copy Orchestration**: Copies the `docker-compose.yml` to the production server.
4. **Deploy**: SSHs into the server, authenticates Docker with GHCR, pulls the fresh images, and runs `docker compose up -d` with the secret environment variables.

---

## Development Guidelines

### Code Structure
1. **Components**: Reusable UI components in `src/components/`
2. **Pages**: Route-based components in `src/pages/`
3. **Assets**: Static files in `src/assets/`
4. **Styling**: Tailwind CSS classes, global styles in `App.css`

### Best Practices
1. **Lazy Loading**: Use React.lazy() for page components
2. **Error Boundaries**: Wrap components with Suspense
3. **Responsive Design**: Mobile-first approach with Tailwind
4. **Performance**: Optimize images and videos
5. **SEO**: Add proper meta tags and titles

### State Management
- **Local State**: useState for component-level state
- **Navigation**: React Router for client-side routing
- **Forms**: Controlled components with validation

### Styling Guidelines
- **Utility Classes**: Prefer Tailwind utility classes
- **Custom CSS**: Only when Tailwind is insufficient
- **Responsive**: Use Tailwind responsive prefixes (sm:, md:, lg:)
- **Colors**: Consistent color palette (orange-400, zinc-900, etc.)

---

## Troubleshooting

### Common Issues

#### 1. **Email Not Sending**
- **Problem**: Contact form not sending emails
- **Solutions:**
  - Check Gmail App Password (not regular password)
  - Verify environment variables are set
  - Ensure 2FA is enabled on Gmail account
  - Check spam folder

#### 2. **CORS Errors**
- **Problem**: Frontend can't connect to backend
- **Solutions:**
  - Verify backend CORS configuration
  - Check frontend API URLs
  - Ensure backend is running

#### 3. **Build Failures**
- **Problem**: Vite build fails
- **Solutions:**
  - Check for TypeScript errors (if using TS)
  - Verify all imports are correct
  - Clear node_modules and reinstall

#### 4. **Performance Issues**
- **Problem**: Slow loading times
- **Solutions:**
  - Optimize video file sizes
  - Implement proper lazy loading
  - Use image optimization
  - Check bundle size

### Debug Commands

```bash
# Check if ports are in use
netstat -an | findstr :3001
netstat -an | findstr :5173

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check for outdated packages
npm outdated
```

### Environment Variables Checklist
- [ ] `EMAIL_USER` set in backend environment
- [ ] `EMAIL_PASS` set in backend environment
- [ ] Gmail App Password generated
- [ ] 2FA enabled on Gmail account
- [ ] Environment variables added to Vercel (for production)

### Contact Information
- **GitHub**: https://github.com/atharvamishra02
- **LinkedIn**: https://www.linkedin.com/in/atharvamishra02/
- **Email**: Available through contact form

---

## Additional Notes

### Future Enhancements
1. **Blog Section**: Add markdown-based blog functionality
2. **Project Gallery**: Detailed project showcases with GitHub integration
3. **Admin Panel**: Content management system
4. **Analytics**: Google Analytics integration
5. **SEO**: Meta tags and OpenGraph optimization
6. **Dark/Light Mode**: Theme switcher
7. **Internationalization**: Multi-language support

### Performance Optimizations
1. **Image Optimization**: WebP format, lazy loading
2. **Code Splitting**: Route-based and component-based
3. **Caching**: Service worker implementation
4. **CDN**: Static asset delivery optimization

### Security Considerations
1. **Rate Limiting**: Implement on contact form
2. **Input Validation**: Server-side validation
3. **HTTPS**: Ensure secure connections
4. **Environment Security**: Secure API keys and secrets

---

**Last Updated**: October 13, 2025
**Version**: 1.0.0
**Maintained By**: Atharva Mishra