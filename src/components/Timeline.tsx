'use client'

import { useState } from 'react'
import Link from 'next/link'
import { timelinePuntos } from '@/data/periodos'

type Filtro = 'todos' | 'mexico' | 'global'

export function Timeline() {
  const [filtro, setFiltro] = useState<Filtro>('todos')

  const puntosVisibles = timelinePuntos.filter(
    (p) => filtro === 'todos' || p.region === filtro
  )

  return (
    <section id="linea-tiempo" className="mb-10" aria-label="Línea de tiempo">
      <h2 className="seccion-titulo">Línea de tiempo</h2>
      <p className="mb-5 text-marx-crema-oscuro">
        Haz clic en un punto para ir al periodo. Filtra por México o Global.
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        <button
          type="button"
          onClick={() => setFiltro('todos')}
          className={`px-3 py-1.5 text-sm border-2 rounded ${
            filtro === 'todos'
              ? 'bg-marx-rojo text-marx-blanco border-marx-dorado'
              : 'bg-marx-negro-surface text-marx-crema-oscuro border-white/20 hover:text-marx-crema hover:border-marx-dorado'
          }`}
        >
          Todos
        </button>
        <button
          type="button"
          onClick={() => setFiltro('mexico')}
          className={`px-3 py-1.5 text-sm border-2 rounded ${
            filtro === 'mexico'
              ? 'bg-marx-rojo text-marx-blanco border-marx-dorado'
              : 'bg-marx-negro-surface text-marx-crema-oscuro border-white/20 hover:text-marx-crema hover:border-marx-dorado'
          }`}
        >
          México
        </button>
        <button
          type="button"
          onClick={() => setFiltro('global')}
          className={`px-3 py-1.5 text-sm border-2 rounded ${
            filtro === 'global'
              ? 'bg-marx-rojo text-marx-blanco border-marx-dorado'
              : 'bg-marx-negro-surface text-marx-crema-oscuro border-white/20 hover:text-marx-crema hover:border-marx-dorado'
          }`}
        >
          Global
        </button>
      </div>
      <div className="relative flex flex-wrap gap-2 md:gap-4 justify-center items-center min-h-16 py-4">
        <div
          className="absolute left-[5%] right-[5%] top-1/2 h-1 -translate-y-1/2 bg-gradient-to-r from-marx-rojo-oscuro via-marx-dorado to-marx-rojo-oscuro rounded z-0"
          aria-hidden
        />
        {puntosVisibles.map((p) => (
          <Link
            key={p.href + p.ano}
            href={p.href}
            className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-marx-rojo text-marx-blanco font-display text-[0.7rem] font-semibold border-2 border-marx-dorado hover:scale-110 hover:bg-marx-dorado hover:text-marx-negro hover:shadow-lg hover:shadow-marx-dorado-claro/30 transition-all"
            title={p.title}
          >
            {p.ano}
          </Link>
        ))}
      </div>
      <p className="mt-4 text-sm italic text-marx-crema-oscuro/85">
        Los años son aproximados y sirven para ordenar; cada punto enlaza a la ficha del periodo.
      </p>
    </section>
  )
}
