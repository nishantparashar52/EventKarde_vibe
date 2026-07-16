import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom'

import { routePaths } from '../routes/routePaths'

export function RouteErrorBoundary() {
  const error = useRouteError()

  const message = isRouteErrorResponse(error)
    ? error.statusText || 'Something went wrong while loading this page.'
    : 'Something went wrong while loading this page.'

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-950 px-4 text-stone-100">
      <div className="max-w-xl space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
        <p className="text-sm font-medium tracking-[0.3em] text-amber-200 uppercase">Page error</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white">Unable to load this page</h1>
        <p className="text-lg leading-8 text-stone-300">{message}</p>
        <Link
          to={routePaths.home}
          className="inline-flex rounded-full bg-amber-200 px-6 py-3 text-sm font-semibold text-stone-950 transition-transform duration-200 hover:scale-[1.02]"
        >
          Return home
        </Link>
      </div>
    </main>
  )
}
