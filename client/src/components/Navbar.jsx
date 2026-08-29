import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Navbar() {
  const { user, logout } = useAuth()

  const [careerOpen, setCareerOpen] = useState(false)
  const [communityOpen, setCommunityOpen] = useState(false)

  const closeMenus = () => {
    setCareerOpen(false)
    setCommunityOpen(false)
  }

  return (
    <header className="site-navbar">
      <nav className="navbar-inner">

        {/* =====================================================
            LOGO
        ====================================================== */}
        <Link
          to="/"
          onClick={closeMenus}
          className="navbar-logo"
        >
          <span className="navbar-logo-symbol">
            &lt;/&gt;
          </span>

          <span>
            Coding Club J.N.N
          </span>
        </Link>


        {/* =====================================================
            NAVIGATION
        ====================================================== */}
        <div className="navbar-links">

          {/* HOME */}
          <Link
            to="/"
            onClick={closeMenus}
            className="navbar-link"
          >
            Home
          </Link>


          {/* =================================================
              CAREER TRACKS
          ================================================== */}
          <div className="navbar-dropdown">

            <button
              type="button"
              onClick={() => {
                setCareerOpen(!careerOpen)
                setCommunityOpen(false)
              }}
              className="navbar-link navbar-dropdown-button"
            >
              <span>Career Tracks</span>

              <span
                className={`navbar-arrow ${
                  careerOpen ? 'navbar-arrow-open' : ''
                }`}
              >
                ▾
              </span>
            </button>


            {careerOpen && (
              <div className="navbar-menu navbar-menu-career">

                <Link
                  to="/roadmap"
                  onClick={closeMenus}
                  className="navbar-menu-item"
                >
                  <div className="navbar-menu-title">
                    🧩 DSA Roadmap
                  </div>

                  <div className="navbar-menu-description">
                    Master Data Structures & Algorithms
                  </div>
                </Link>


                <Link
                  to="/roadmap/gate"
                  onClick={closeMenus}
                  className="navbar-menu-item"
                >
                  <div className="navbar-menu-title">
                    🎯 GATE Preparation
                  </div>

                  <div className="navbar-menu-description">
                    Structured preparation for GATE
                  </div>
                </Link>


                <Link
                  to="/roadmap/interview"
                  onClick={closeMenus}
                  className="navbar-menu-item"
                >
                  <div className="navbar-menu-title">
                    💼 Interview Preparation
                  </div>

                  <div className="navbar-menu-description">
                    Prepare for technical interviews
                  </div>
                </Link>


                <Link
                  to="/projects"
                  onClick={closeMenus}
                  className="navbar-menu-item"
                >
                  <div className="navbar-menu-title">
                    🚀 Projects by JNN'ians
                  </div>

                  <div className="navbar-menu-description">
                    Explore projects built by students
                  </div>
                </Link>

              </div>
            )}
          </div>


          {/* =================================================
              COMMUNITY
          ================================================== */}
          <div className="navbar-dropdown">

            <button
              type="button"
              onClick={() => {
                setCommunityOpen(!communityOpen)
                setCareerOpen(false)
              }}
              className="navbar-link navbar-dropdown-button"
            >
              <span>Community</span>

              <span
                className={`navbar-arrow ${
                  communityOpen ? 'navbar-arrow-open' : ''
                }`}
              >
                ▾
              </span>
            </button>


            {communityOpen && (
              <div className="navbar-menu navbar-menu-community">

                <Link
                  to="/posts"
                  onClick={closeMenus}
                  className="navbar-menu-item navbar-simple-item"
                >
                  💬 Posts
                </Link>


                <Link
                  to="/leaderboard"
                  onClick={closeMenus}
                  className="navbar-menu-item navbar-simple-item"
                >
                  🏆 Leaderboard
                </Link>


                <Link
                  to="/student-of-the-week"
                  onClick={closeMenus}
                  className="navbar-menu-item navbar-simple-item"
                >
                  🌟 Student of the Week
                </Link>


                <Link
                  to="/events"
                  onClick={closeMenus}
                  className="navbar-menu-item navbar-simple-item"
                >
                  📢 Events
                </Link>

              </div>
            )}
          </div>


          {/* ABOUT */}
          <Link
            to="/about"
            onClick={closeMenus}
            className="navbar-link"
          >
            About
          </Link>


          {/* =================================================
              AUTHENTICATION
          ================================================== */}
          {user ? (
            <>
              <Link
                to="/dashboard"
                onClick={closeMenus}
                className="navbar-link"
              >
                Dashboard
              </Link>

              <button
                type="button"
                onClick={() => {
                  closeMenus()
                  logout()
                }}
                className="navbar-button navbar-logout"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={closeMenus}
                className="navbar-link"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={closeMenus}
                className="navbar-button navbar-join"
              >
                Join Us
              </Link>
            </>
          )}

        </div>

      </nav>
    </header>
  )
}