import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { libros } from '@/data/libros'

export default function LibrosPage() {
  return (
    <div className="min-h-screen">
      <p className="max-w-4xl mx-auto px-4 pt-6 pb-2">
        <Link href="/" className="link-concepto">← Inicio</Link>
      </p>
      <PageHero
        title="Libros de Marx (y con Engels)"
        subtitle="Obras fundamentales"
        description="Resúmenes, temas principales y nivel sugerido. Guía de lectura para estudiar en orden o por interés."
        ctaLabel="Ver teorías relacionadas"
        ctaHref="/teorias"
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
      <p className="text-marx-crema-oscuro mb-10 text-lg">
        Obras fundamentales con resumen, temas principales y nivel sugerido.
      </p>
      <ul className="space-y-6">
        {libros.map((libro) => (
          <li key={libro.id} className="card-periodo">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h2 className="font-display text-xl font-bold text-marx-rojo-claro">{libro.titulo}</h2>
              <span className="text-sm px-2 py-0.5 rounded bg-marx-dorado/20 text-marx-crema">
                {libro.nivel}
              </span>
            </div>
            {'subtitulo' in libro && (
              <p className="text-marx-crema-oscuro italic mb-1">{libro.subtitulo}</p>
            )}
            <p className="text-sm text-marx-dorado mb-3">{libro.ano}</p>
            <p className="text-marx-crema-oscuro mb-4">{libro.resumen}</p>
            <p className="text-sm font-medium text-marx-dorado mb-1">Temas:</p>
            <p className="text-marx-crema-oscuro text-sm">{libro.temas.join(' · ')}</p>
          </li>
        ))}
      </ul>
      <div className="mt-12 text-center">
        <Link href="/teorias" className="btn-marx">Ver teorías relacionadas</Link>
      </div>
      </div>
    </div>
  )
}
