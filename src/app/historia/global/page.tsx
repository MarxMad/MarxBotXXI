import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { periodosGlobal } from '@/data/periodos'

export default function HistoriaGlobalPage() {
  return (
    <div className="min-h-screen">
      <p className="max-w-3xl mx-auto px-4 pt-6 pb-2">
        <Link href="/" className="link-concepto">← Inicio</Link>
      </p>
      <PageHero
        title="Historia económica — Global"
        subtitle="Acumulación, plusvalía, crisis y lucha de clases"
        description="Hitos mundiales desde la economía política marxista. Elige un tema para ver su ficha."
      />
      <div className="max-w-3xl mx-auto px-4 py-8">
      <ul className="space-y-4">
        {periodosGlobal.map((p) => (
          <li key={p.id}>
            <Link
              href={`/historia/global/${p.id}`}
              className="card-periodo block hover:border-marx-rojo hover:shadow-xl transition-all group"
            >
              <span className="block font-display text-sm text-marx-dorado tracking-wider mb-1">{p.fechas}</span>
              <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide m-0 group-hover:underline">
                {p.titulo}
              </h2>
              <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mt-2 line-clamp-2">
                {p.contenido}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-10 pt-6 border-t border-white/10">
        <h2 className="font-display font-semibold text-sm text-marx-dorado uppercase mb-3">Preguntas de repaso — Global</h2>
        <p className="text-marx-crema-oscuro text-sm mb-2">
          Las preguntas de repaso de Historia global (y de todos los temas) están reunidas en <Link href="/ejercicios" className="link-concepto">Ejercicios y repaso</Link>.
        </p>
      </div>
      </div>
    </div>
  )
}
