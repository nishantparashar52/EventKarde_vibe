import { NavLink, Outlet } from 'react-router-dom'

import { Breadcrumbs, Container } from '../components'
import { siteConfig } from '../constants/siteConfig'
import { primaryNavigationRoutes } from '../routes/routeMeta'
import { routePaths } from '../routes/routePaths'

export function MainLayout() {
  return (
    <div className="app-shell">
      <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-background/80 backdrop-blur-xl">
        <Container className="flex items-center justify-between py-4">
          <NavLink
            to={routePaths.home}
            className="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-brand-text-primary uppercase"
          >
            <span className="glass-panel flex h-11 w-11 items-center justify-center rounded-[1rem] border-brand-border-strong text-base text-brand-accent shadow-[var(--shadow-glow)]">
              EK
            </span>
            <span>{siteConfig.name}</span>
          </NavLink>

          <nav aria-label="Primary navigation" className="hidden gap-6 md:flex">
            {primaryNavigationRoutes.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [isActive ? 'nav-link nav-link-active' : 'nav-link'].join(' ')
                }
                end={item.path === routePaths.home}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </Container>
      </header>

      <Breadcrumbs />

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-brand-border bg-brand-background/95">
        <Container className="py-8">
          <p className="text-sm text-brand-text-muted">
            Premium event experiences across Delhi NCR for weddings, corporate celebrations, and curated social occasions.
          </p>
        </Container>
      </footer>
    </div>
  )
}
