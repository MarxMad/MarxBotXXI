'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const grupos = [
  {
    titulo: '',
    links: [{ href: '/', label: 'Inicio' }],
  },
  {
    titulo: 'Contenido',
    links: [
      { href: '/simulador', label: 'Simulador' },
      { href: '/historia', label: 'Historia' },
      { href: '/hegemonia-mundial', label: 'Hegemonía mundial' },
      { href: '/proletariado-crisis', label: 'Proletariado y crisis' },
    ],
  },
  {
    titulo: 'Estudio',
    links: [
      { href: '/estudio', label: 'Estudio' },
    ],
  },
  {
    titulo: 'Recursos',
    links: [
      { href: '/multimedia', label: 'Multimedia' },
      { href: '/profesor', label: 'Para el profesor' },
    ],
  },
]

export function Nav() {
  const [abierto, setAbierto] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setAbierto(false)
    }
    if (abierto) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [abierto])

  return (
    <header className="relative bg-marx-rojo-oscuro text-marx-blanco text-center border-b-4 border-marx-dorado">
      <div className="header-band" />
      <div className="px-4 pt-5 pb-4" ref={ref}>
        <Link
          href="/"
          className="font-display font-bold text-3xl md:text-4xl tracking-wider uppercase text-marx-blanco drop-shadow-sm hover:text-marx-crema transition-colors"
        >
          Marx en el siglo XXI
        </Link>
        <p className="mt-1.5 mb-4 text-[0.95rem] text-marx-crema/95">
          Historia económica · México y mundo · Enfoque marxista y didáctico
        </p>

        <div className="relative inline-block">
          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            className="font-display font-semibold text-sm uppercase tracking-wide text-marx-dorado-claro py-2.5 px-5 border-2 border-marx-dorado rounded bg-marx-rojo-oscuro hover:bg-white/15 hover:text-marx-blanco transition-all focus:outline-none focus:ring-2 focus:ring-marx-dorado focus:ring-offset-2 focus:ring-offset-marx-rojo-oscuro"
            aria-expanded={abierto}
            aria-haspopup="true"
            aria-controls="nav-menu"
            id="nav-menu-button"
          >
            {abierto ? 'Cerrar menú' : 'Menú'}
          </button>

          <div
            id="nav-menu"
            role="menu"
            aria-labelledby="nav-menu-button"
            className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[min(90vw,320px)] max-h-[min(75vh,420px)] overflow-y-auto rounded-lg border-2 border-marx-dorado bg-marx-negro-surface shadow-xl z-50 py-3 transition-all ${
              abierto ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
            }`}
          >
            {grupos.map((grupo) => (
              <div key={grupo.titulo || 'inicio'} className={grupo.titulo ? 'mt-4 first:mt-0' : ''}>
                {grupo.titulo && (
                  <p className="px-4 py-1 text-xs font-display font-semibold uppercase tracking-wider text-marx-dorado">
                    {grupo.titulo}
                  </p>
                )}
                <ul className={grupo.titulo ? '' : ''}>
                  {grupo.links.map(({ href, label }) => (
                    <li key={href} role="none">
                      <Link
                        href={href}
                        role="menuitem"
                        onClick={() => setAbierto(false)}
                        className="block px-4 py-2.5 text-left text-marx-crema hover:bg-white/10 hover:text-marx-blanco font-display font-medium text-sm transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
