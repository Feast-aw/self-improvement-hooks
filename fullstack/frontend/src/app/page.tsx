import './globals.css'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-sky-900 text-white">
      <div className="max-w-md w-full p-8 bg-white/5 rounded-2xl backdrop-blur">
        <h1 className="text-3xl font-semibold mb-4">Welcome to Fullstack MVP</h1>
        <p className="text-slate-200">Login to continue or create an account. The login page is being styled with Tailwind + shadcn components.</p>
      </div>
    </main>
  )
}
