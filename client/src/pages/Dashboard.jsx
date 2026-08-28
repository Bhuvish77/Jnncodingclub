import { useAuth } from '../context/AuthContext.jsx'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-2">Welcome{user ? `, ${user.name}` : ''}</h1>
      <p className="text-gray-600 mb-8">Your progress overview will appear here.</p>

      <div className="grid grid-cols-3 gap-4">
        <div className="border rounded-lg p-4 text-center">
          <p className="text-2xl font-bold">0</p>
          <p className="text-sm text-gray-500">Solved</p>
        </div>
        <div className="border rounded-lg p-4 text-center">
          <p className="text-2xl font-bold">0</p>
          <p className="text-sm text-gray-500">Attempted</p>
        </div>
        <div className="border rounded-lg p-4 text-center">
          <p className="text-2xl font-bold">0</p>
          <p className="text-sm text-gray-500">Streak</p>
        </div>
      </div>
    </div>
  )
}
