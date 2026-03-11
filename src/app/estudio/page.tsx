'use client'

import Link from 'next/link'
import { PageHero } from '@/components/PageHero'

const iconClass = 'w-8 h-8 text-marx-dorado group-hover:text-marx-dorado-claro transition-colors'

const herramientas = [
  {
    href: '/conceptos',
    titulo: 'Conceptos',
    desc: 'Glosario de términos marxistas con referencia a El Capital y otras fuentes. Incluye subsunción formal y real.',
    icon: (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    href: '/matematicas-marx',
    titulo: 'Matemáticas de Marx',
    desc: 'Circuitos M-D-M y D-M-D′, esquemas de reproducción, fórmulas de tasa de ganancia y plusvalor.',
    icon: (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    href: '/teorias',
    titulo: 'Teorías',
    desc: 'Materialismo histórico, plusvalía, lucha de clases, alienación, subsunción. Resúmenes didácticos y citas.',
    icon: (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    href: '/libros',
    titulo: 'Libros',
    desc: 'Obras de Marx y Engels con resumen, temas y nivel sugerido. Guía de lectura.',
    icon: (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    href: '/ejercicios',
    titulo: 'Ejercicios y repaso',
    desc: 'Cuestionario en carrusel con explicaciones. Preguntas abiertas por tema para debate.',
    icon: (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    href: '/juegos',
    titulo: 'Juegos',
    desc: 'Memoria de conceptos: relacionar término y definición. Aprende jugando.',
    icon: (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function EstudioPage() {
  return (
    <div className="min-h-screen">
      <p className="max-w-3xl mx-auto px-4 pt-6 pb-2">
        <Link href="/" className="link-concepto">← Inicio</Link>
      </p>
      <PageHero
        title="Estudio"
        subtitle="Herramientas para la tesis marxista"
        description="Conceptos, fórmulas, teorías, libros, ejercicios y juegos. Todo en un solo lugar."
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {herramientas.map((h) => (
            <Link
              key={h.href}
              href={h.href}
              className="group p-6 rounded-2xl bg-marx-negro-surface border border-white/10 hover:border-marx-dorado/50 transition-all duration-300 hover:shadow-lg hover:shadow-marx-rojo/5 flex flex-col"
            >
              <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 bg-marx-negro group-hover:border-marx-dorado/40 transition-colors">
                {h.icon}
              </div>
              <h2 className="font-display font-bold text-lg text-marx-blanco mb-2 group-hover:text-marx-dorado-claro transition-colors">
                {h.titulo}
              </h2>
              <p className="text-marx-crema-oscuro text-sm leading-relaxed flex-1">
                {h.desc}
              </p>
              <span className="mt-4 text-sm font-bold text-marx-dorado-claro group-hover:underline">
                Ir a {h.titulo} →
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-marx-crema-oscuro text-sm">
          <Link href="/" className="link-concepto">← Volver al inicio</Link>
          {' · '}
          <Link href="/simulador" className="link-concepto">Simuladores</Link>
          {' · '}
          <Link href="/historia" className="link-concepto">Historia</Link>
        </p>
      </div>
    </div>
  )
}
