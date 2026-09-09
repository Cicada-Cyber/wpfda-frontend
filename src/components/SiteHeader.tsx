import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { isGroup, primaryNav } from './nav'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-brand text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/logo.svg" alt="" className="h-9 w-9" />
          <span className="leading-tight">
            <span className="block text-lg font-bold tracking-wide">WPFDA</span>
            <span className="hidden text-xs text-white/70 sm:block">
              Western Province Flying Disc Association
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 text-sm md:flex" aria-label="Primary">
          {primaryNav.map((item) =>
            isGroup(item) ? (
              <div key={item.label} className="group relative">
                <Link
                  to={item.to ?? item.children[0].to}
                  className="hover:text-accent [&.active]:text-accent inline-flex items-center gap-1 rounded px-3 py-2"
                  activeOptions={{ exact: false }}
                >
                  {item.label}
                  <Chevron />
                </Link>
                <div className="invisible absolute left-0 z-20 min-w-52 pt-1 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="rounded-md border border-gray-200 bg-white py-1 text-gray-800 shadow-lg">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <Link
                          to={child.to}
                          activeOptions={{ exact: true }}
                          className="hover:bg-brand-blue/10 [&.active]:text-brand-blue block px-4 py-2 [&.active]:font-semibold"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="hover:text-accent [&.active]:text-accent rounded px-3 py-2 [&.active]:font-semibold"
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            to="/portal"
            className="bg-brand-blue hover:bg-brand-blue-dark ml-2 rounded-md px-3 py-2 font-semibold"
          >
            Club login
          </Link>
        </nav>

        <button
          type="button"
          className="rounded p-2 hover:bg-white/10 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        id="mobile-nav"
        hidden={!open}
        className="border-t border-white/10 md:hidden"
        aria-label="Primary"
      >
        <ul className="mx-auto max-w-5xl px-4 py-2">
          {primaryNav.map((item) =>
            isGroup(item) ? (
              <li key={item.label} className="py-2">
                <span className="block px-2 text-xs text-white/70 font-semibold tracking-wide uppercase">
                  {item.label}
                </span>
                <ul>
                  {item.children.map((child) => (
                    <li key={child.to}>
                      <Link
                        to={child.to}
                        onClick={() => setOpen(false)}
                        className="[&.active]:text-accent block rounded px-2 py-2 hover:bg-white/10"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="[&.active]:text-accent block rounded px-2 py-2 font-semibold hover:bg-white/10"
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
          <li className="py-3">
            <Link
              to="/portal"
              onClick={() => setOpen(false)}
              className="bg-brand-blue block rounded-md px-3 py-2 text-center font-semibold"
            >
              Club login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

function Chevron() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4z" />
    </svg>
  )
}
