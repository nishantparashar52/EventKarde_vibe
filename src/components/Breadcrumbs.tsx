import { Link, useLocation } from 'react-router-dom'

import { routeMeta } from '../routes/routeMeta'
import { routePaths } from '../routes/routePaths'

const routeEntries = Object.values(routeMeta)

export function Breadcrumbs() {
  const location = useLocation()

  if (location.pathname === routePaths.home) {
    return null
  }

  const segments = location.pathname.split('/').filter(Boolean)
  const crumbs = segments
    .map((_, index) => `/${segments.slice(0, index + 1).join('/')}`)
    .map((path) => routeEntries.find((route) => route.path === path))
    .filter(Boolean)

  return (
    <nav aria-label="Breadcrumb" className="border-b border-brand-border/70 bg-brand-background/60">
      <div className="app-container flex flex-wrap items-center gap-2 py-3 text-sm text-brand-text-muted">
        <Link className="transition-colors duration-200 hover:text-brand-text-primary" to={routePaths.home}>
          Home
        </Link>
        {crumbs.map((crumb) => {
          if (!crumb) {
            return null
          }

          const isCurrentPage = crumb.path === location.pathname

          return (
            <span key={crumb.path} className="inline-flex items-center gap-2">
              <span aria-hidden="true">/</span>
              {isCurrentPage ? (
                <span aria-current="page" className="text-brand-text-secondary">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  className="transition-colors duration-200 hover:text-brand-text-primary"
                  to={crumb.path}
                >
                  {crumb.label}
                </Link>
              )}
            </span>
          )
        })}
      </div>
    </nav>
  )
}
