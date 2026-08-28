# Coding Club J.N.N — MERN Stack Project

A DSA practice platform for the college coding club: roadmap of problems, student login, and progress tracking.

## Structure
- `client/` — React app (Vite + Tailwind)
- `server/` — Express API + MongoDB (Mongoose)

## Setup

### 1. Server
```bash
cd server
npm install
cp .env.example .env
# fill in MONGO_URI (from MongoDB Atlas) and JWT_SECRET in .env
npm run dev
```
Server runs on http://localhost:5000

### 2. Client
```bash
cd client
npm install
cp .env.example .env
npm run dev
```
Client runs on http://localhost:5173

## What's already built
- Full auth flow: register, login, JWT-protected `/api/auth/me`
- Mongoose models: User, Topic, Problem, Progress
- React pages: Home, About (needs your content), Roadmap, Dashboard, Login, Register
- AuthContext wired to the backend via axios

## What's next
- Build Topic/Problem CRUD routes (admin-only) — see the project plan doc
- Build Progress routes (mark problem as solved/attempted)
- Fill in About page content and Code of Conduct
- Connect Roadmap page to display problems (currently shows topics only)
- Style pass with Tailwind once features work
