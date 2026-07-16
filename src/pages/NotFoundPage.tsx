import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-950 px-4 text-stone-100">
      <div className="max-w-xl space-y-6 text-center">
        <p className="text-sm font-medium tracking-[0.3em] text-amber-200 uppercase">404</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white">Page not found</h1>
        <p className="text-lg leading-8 text-stone-300">
          The page you are looking for does not exist or may have moved.
        </p>
        <Link
          to="/"
          className="inline-flex rounded-full bg-amber-200 px-6 py-3 text-sm font-semibold text-stone-950 transition-transform duration-200 hover:scale-[1.02]"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
