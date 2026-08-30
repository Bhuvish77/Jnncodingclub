import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rollNumber, setRollNumber] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const { register } = useAuth()
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
      await register(
        name.trim(),
        email.trim().toLowerCase(),
        password,
        rollNumber.trim()
      )

      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-78px)] flex items-center justify-center px-4 py-10">

      {/* Main Container */}
      <div className="relative w-full max-w-md">

        {/* Ambient Glow */}
        <div
          className="
            absolute
            -inset-1
            rounded-[2rem]
            bg-gradient-to-r
            from-emerald-400/20
            via-cyan-400/10
            to-emerald-400/20
            blur-2xl
            pointer-events-none
          "
        />

        {/* Card */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-slate-700/60
            bg-slate-950/80
            backdrop-blur-2xl
            shadow-2xl
          "
        >

          {/* Top Accent */}
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

          <div className="px-7 py-8 sm:px-9 sm:py-9">

            {/* Logo */}
            <div className="flex justify-center mb-5">

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

            {/* Heading */}
            <div className="text-center mb-7">

              <h1
                className="
                  text-3xl
                  sm:text-4xl
                  font-bold
                  tracking-tight
                  text-white
                "
              >
                Join the Club
              </h1>

              <p className="mt-3 text-sm sm:text-base text-slate-400">
                Create your account and become part of
                <span className="text-emerald-400 font-medium">
                  {' '}A R C
                </span>
              </p>

            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Full Name */}
              <div>

                <label
                  htmlFor="name"
                  className="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-slate-300
                  "
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="
                    w-full
                    h-12
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-900/80
                    px-4
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


              {/* Roll Number */}
              <div>

                <label
                  htmlFor="rollNumber"
                  className="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-slate-300
                  "
                >
                  Roll Number
                  <span className="text-slate-600 ml-1">
                    (Optional)
                  </span>
                </label>

                <input
                  id="rollNumber"
                  type="text"
                  placeholder="Enter your roll number"
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                  className="
                    w-full
                    h-12
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-900/80
                    px-4
                    text-white
                    placeholder:text-slate-600
                    outline-none
                    transition-all
                    duration-200
                    focus:border-emerald-400
                    focus:ring-4
                    focus:ring-emerald-400/10
                  "
                />

              </div>


              {/* College Email */}
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
                  College Email
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
                      font-medium
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

                <p className="mt-2 text-xs text-slate-600">
                  Only JNN college email addresses are allowed.
                </p>

              </div>


              {/* Password */}
              <div>

                <label
                  htmlFor="password"
                  className="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-slate-300
                  "
                >
                  Password
                </label>

                <div className="relative">

                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a strong password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="
                      w-full
                      h-12
                      rounded-xl
                      border
                      border-slate-700
                      bg-slate-900/80
                      px-4
                      pr-16
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
                      font-semibold
                      text-slate-500
                      hover:text-emerald-400
                      transition-colors
                    "
                  >
                    {showPassword ? 'HIDE' : 'SHOW'}
                  </button>

                </div>

              </div>


              {/* Error */}
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


              {/* Register Button */}
              <button
                type="submit"
                disabled={loading}
                className="
                  group
                  relative
                  w-full
                  h-12
                  mt-2
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

                      Creating account...

                    </span>
                  ) : (
                    'Create Account'
                  )}

                </span>

              </button>

            </form>


            {/* Divider */}
            <div className="flex items-center gap-4 my-6">

              <div className="flex-1 h-px bg-slate-800" />

              <span className="text-xs text-slate-600 uppercase tracking-wider">
                A R C
              </span>

              <div className="flex-1 h-px bg-slate-800" />

            </div>


            {/* Login */}
            <p className="text-center text-sm text-slate-500">

              Already have an account?{' '}

              <Link
                to="/login"
                className="
                  font-semibold
                  text-emerald-400
                  hover:text-emerald-300
                  transition-colors
                "
              >
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

