'use client'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
      if (!res.ok) throw new Error('Login failed')
      // redirect home
      window.location.href = '/'
    } catch (err) {
      alert((err as Error).message)
    } finally { setLoading(false) }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-700 to-indigo-900">
      <div className="max-w-4xl w-full grid grid-cols-2 gap-8 items-center p-8">
        <div className="text-white px-6">
          <h2 className="text-4xl font-bold mb-4">Welcome back</h2>
          <p className="text-sky-100/80">Sign in to access your dashboard, chat, and notes.</p>
          <div className="mt-6">
            <img src="/auth-illustration.svg" alt="illustration" className="w-full rounded-lg shadow-xl" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Sign in</h3>
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" required className="mt-1 block w-full border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <input value={password} onChange={e => setPassword(e.target.value)} type="password" required className="mt-1 block w-full border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
            </div>
            <button disabled={loading} type="submit" className="w-full bg-sky-600 text-white py-2 rounded-md hover:bg-sky-500">{loading ? 'Signing in...' : 'Sign in'}</button>
          </form>

          <div className="mt-4 text-center text-sm">
            <a href="#" className="text-sky-600">Forgot password?</a>
          </div>

          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-[#4285F4] flex items-center justify-center text-white">G</span>
              <span className="h-10 w-10 rounded-full bg-[#24292F] flex items-center justify-center text-white">GH</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
