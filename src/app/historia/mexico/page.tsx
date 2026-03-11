import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { periodosMexico } from '@/data/periodos'

export default function HistoriaMexicoPage() {
  return (
    <div className="min-h-screen">
      <p className="max-w-3xl mx-auto px-4 pt-6 pb-2">
        <Link href="/" className="link-concepto">← Inicio</Link>
      </p>
      <PageHero
        title="Historia económica — México"
        subtitle="Trabajo, capital y lucha de clases"
        description="Repaso por periodos. Elige un tema para ver su ficha. Los términos enlazan al glosario de conceptos."
      />
      <div className="max-w-3xl mx-auto px-4 py-8">
      <p className="mb-6 text-sm text-marx-dorado">
        Tema conquista (encomienda, repartición, haciendas): <Link href="/historia/mexico/conquista" className="link-concepto">página detallada</Link>.
        Tema haciendas (centro de producción colonial): <Link href="/historia/mexico/haciendas" className="link-concepto">página dedicada</Link>.
      </p>
      <ul className="space-y-4">
        {periodosMexico.map((p) => (
          <li key={p.id}>
            <Link
              href={`/historia/mexico/${p.id}`}
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
        <h2 className="font-display font-semibold text-sm text-marx-dorado uppercase mb-3">Preguntas de repaso — México</h2>
        <p className="text-marx-crema-oscuro text-sm mb-2">
          Las preguntas de repaso de Historia México (y de todos los temas) están reunidas en <Link href="/ejercicios" className="link-concepto">Ejercicios y repaso</Link>.
        </p>
      </div>
      </div>
    </div>
  )
}
