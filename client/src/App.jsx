import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Roadmap from './pages/Roadmap.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

import AnimatedBackground from './components/AnimatedBackground.jsx'


function App() {
  return (
    <div className="min-h-screen site-background">

      {/* =====================================================
          ANIMATED BACKGROUND
      ====================================================== */}
      <AnimatedBackground />


      {/* =====================================================
          WEBSITE
      ====================================================== */}
      <div className="relative z-10">

        {/* 
          IMPORTANT:
          Navbar is NOT fixed.
          Navbar is NOT absolute.
          Navbar is NOT manually positioned.
        */}
        <Navbar />


        {/* =================================================
            PAGE CONTENT
        ================================================== */}
        <main>
          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/roadmap"
              element={<Roadmap />}
            />

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/register"
              element={<Register />}
            />

          </Routes>
        </main>

      </div>

    </div>
  )
}


export default App