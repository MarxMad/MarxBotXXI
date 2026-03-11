import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { teorias } from '@/data/teorias'

export default function TeoriasPage() {
  return (
    <div className="min-h-screen">
      <p className="max-w-4xl mx-auto px-4 pt-6 pb-2">
        <Link href="/" className="link-concepto">← Inicio</Link>
      </p>
      <PageHero
        title="Teorías de Marx"
        subtitle="Conceptos centrales del pensamiento marxista"
        description="Explicaciones didácticas de las ideas centrales. Ideal para estudiantes y para quien quiera una base sólida antes de leer las obras completas."
        ctaLabel="Practicar con ejercicios"
        ctaHref="/ejercicios"
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
      <p className="text-marx-crema-oscuro mb-10 text-lg">
        Aquí encontrarás los conceptos centrales del pensamiento marxista explicados de forma didáctica.
      </p>
      <ul className="space-y-8">
        {teorias.map((t) => (
          <li key={t.id} id={t.id} className="card-periodo scroll-mt-24">
            <h2 className="font-display text-xl font-bold text-marx-rojo-claro mb-2">{t.titulo}</h2>
            <p className="text-marx-crema-oscuro mb-4">{t.resumen}</p>
            <ul className="list-disc list-inside text-marx-crema-oscuro space-y-1 mb-4">
              {t.puntos.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
            <blockquote className="border-l-4 border-marx-dorado pl-4 py-2 bg-marx-negro rounded-r text-marx-rojo-claro italic">
              {t.cita}
            </blockquote>
          </li>
        ))}
      </ul>
      <div className="mt-12 text-center">
        <Link href="/ejercicios" className="btn-marx">Practicar con ejercicios</Link>
      </div>
      </div>
    </div>
  )
}
