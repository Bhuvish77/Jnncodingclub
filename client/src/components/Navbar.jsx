import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
      <Link to="/" className="font-bold text-lg">Coding Club J.N.N</Link>
      <div className="flex gap-5 items-center text-sm">
        <Link to="/">Home</Link>
        <Link to="/roadmap">Roadmap</Link>
        <Link to="/about">About</Link>
        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logout} className="bg-slate-700 px-3 py-1 rounded">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" className="bg-emerald-600 px-3 py-1 rounded">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}
