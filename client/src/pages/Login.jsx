import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError('')

    // Only allow JNN college email addresses
    const collegeEmailRegex = /^[^\s@]+@jnn\.edu\.in$/i

    if (!collegeEmailRegex.test(email.trim())) {
      setError('Please use your JNN college email ID (@jnn.edu.in)')
      return
    }

    setLoading(true)

    try {
      await login(
        email.trim().toLowerCase(),
        password
      )

      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-78px)] flex items-center justify-center px-4 py-12">

      {/* =====================================================
          LOGIN CARD
      ====================================================== */}

      <div className="relative w-full max-w-md">

        {/* Ambient glow behind card */}
        <div
          className="
            absolute
            -inset-1
            rounded-3xl
            bg-emerald-400/10
            blur-2xl
            pointer-events-none
          "
        />

        <div
          className="
            relative
            rounded-3xl
            border
            border-slate-700/60
            bg-slate-950/75
            backdrop-blur-xl
            shadow-2xl
            overflow-hidden
          "
        >

          {/* =================================================
              TOP ACCENT
          ================================================== */}

          <div
            className="
              h-1
              w-full
              bg-gradient-to-r
              from-emerald-400
              via-cyan-400
              to-emerald-400
            "
          />

          <div className="px-7 py-8 sm:px-9 sm:py-10">

            {/* =================================================
                LOGO / ICON
            ================================================== */}

            <div className="flex justify-center mb-6">

              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-14
                  h-14
                  rounded-2xl
                  border
                  border-emerald-400/20
                  bg-emerald-400/10
                  text-emerald-400
                  text-xl
                  font-bold
                  shadow-lg
                  shadow-emerald-500/10
                "
              >
                &lt;/&gt;
              </div>

            </div>

            {/* =================================================
                HEADING
            ================================================== */}

            <div className="text-center mb-8">

              <h1
                className="
                  text-3xl
                  sm:text-4xl
                  font-bold
                  tracking-tight
                  text-white
                "
              >
                Welcome Back
              </h1>

              <p className="mt-3 text-sm sm:text-base text-slate-400">
                Sign in to continue your A R C journey
              </p>

            </div>

            {/* =================================================
                FORM
            ================================================== */}

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* EMAIL */}

              <div>

                <label
                  htmlFor="email"
                  className="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-slate-300
                  "
                >
                  Email Address
                </label>

                <div className="relative">

                  <span
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-slate-500
                      pointer-events-none
                    "
                  >
                    @
                  </span>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@jnn.edu.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="
                      w-full
                      h-12
                      rounded-xl
                      border
                      border-slate-700
                      bg-slate-900/80
                      pl-11
                      pr-4
                      text-white
                      placeholder:text-slate-600
                      outline-none
                      transition-all
                      duration-200
                      focus:border-emerald-400
                      focus:ring-4
                      focus:ring-emerald-400/10
                    "
                    required
                  />

                </div>

              </div>


              {/* PASSWORD */}

              <div>

                <div className="flex items-center justify-between mb-2">

                  <label
                    htmlFor="password"
                    className="
                      text-sm
                      font-medium
                      text-slate-300
                    "
                  >
                    Password
                  </label>

                </div>

                <div className="relative">

                  <span
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-slate-500
                      pointer-events-none
                    "
                  >
                    •••
                  </span>

                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="
                      w-full
                      h-12
                      rounded-xl
                      border
                      border-slate-700
                      bg-slate-900/80
                      pl-11
                      pr-14
                      text-white
                      placeholder:text-slate-600
                      outline-none
                      transition-all
                      duration-200
                      focus:border-emerald-400
                      focus:ring-4
                      focus:ring-emerald-400/10
                    "
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="
                      absolute
                      right-3
                      top-1/2
                      -translate-y-1/2
                      px-2
                      py-1
                      text-xs
                      font-medium
                      text-slate-500
                      hover:text-emerald-400
                      transition-colors
                    "
                  >
                    {showPassword ? 'HIDE' : 'SHOW'}
                  </button>

                </div>

              </div>


              {/* =================================================
                  ERROR
              ================================================== */}

              {error && (
                <div
                  className="
                    rounded-xl
                    border
                    border-red-500/20
                    bg-red-500/10
                    px-4
                    py-3
                    text-sm
                    text-red-300
                  "
                >
                  {error}
                </div>
              )}


              {/* =================================================
                  LOGIN BUTTON
              ================================================== */}

              <button
                type="submit"
                disabled={loading}
                className="
                  group
                  relative
                  w-full
                  h-12
                  rounded-xl
                  overflow-hidden
                  bg-emerald-500
                  text-white
                  font-semibold
                  shadow-lg
                  shadow-emerald-500/10
                  transition-all
                  duration-300
                  hover:bg-emerald-400
                  hover:shadow-emerald-500/25
                  hover:-translate-y-0.5
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                  disabled:hover:translate-y-0
                "
              >

                <span className="relative z-10">

                  {loading ? (
                    <span className="flex items-center justify-center gap-2">

                      <span
                        className="
                          w-4
                          h-4
                          rounded-full
                          border-2
                          border-white/30
                          border-t-white
                          animate-spin
                        "
                      />

                      Signing in...

                    </span>
                  ) : (
                    'Login'
                  )}

                </span>

              </button>

            </form>


            {/* =================================================
                DIVIDER
            ================================================== */}

            <div className="flex items-center gap-4 my-7">

              <div className="flex-1 h-px bg-slate-800" />

              <span className="text-xs text-slate-600 uppercase tracking-wider">
                Coding Club J.N.N
              </span>

              <div className="flex-1 h-px bg-slate-800" />

            </div>


            {/* =================================================
                REGISTER
            ================================================== */}

            <p className="text-center text-sm text-slate-500">

              Don't have an account?{' '}

              <Link
                to="/register"
                className="
                  font-semibold
                  text-emerald-400
                  hover:text-emerald-300
                  transition-colors
                "
              >
                Create an account
              </Link>

            </p>


          </div>

        </div>

      </div>

    </div>
  )
}