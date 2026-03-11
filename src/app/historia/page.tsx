import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { Timeline } from '@/components/Timeline'

export default function HistoriaPage() {
  return (
    <div className="min-h-screen">
      <p className="max-w-4xl mx-auto px-4 pt-6 pb-2">
        <Link href="/" className="link-concepto">← Inicio</Link>
      </p>
      <PageHero
        title="Historia económica"
        subtitle="Línea de tiempo · México y mundo"
        description="Línea de tiempo con hitos de México y del mundo. Desde aquí accede a los periodos por país o explora la cronología."
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Línea de tiempo integrada */}
        <Timeline />

        {/* Acceso rápido a México y Global */}
        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          <Link
            href="/historia/mexico"
            className="group p-6 rounded-2xl bg-marx-negro-surface border-2 border-white/10 hover:border-marx-dorado/50 transition-all flex flex-col"
          >
            <span className="font-display font-semibold text-xs uppercase tracking-wider text-marx-dorado mb-2">
              Por país
            </span>
            <h2 className="font-display font-bold text-xl text-marx-blanco mb-2 group-hover:text-marx-dorado-claro transition-colors">
              Historia económica — México
            </h2>
            <p className="text-marx-crema-oscuro text-sm leading-relaxed flex-1">
              Conquista, colonia, Reforma, Porfiriato, Revolución, Cardenismo, ISI, neoliberalismo. Incluye conquista, encomienda, haciendas.
            </p>
            <span className="mt-4 text-sm font-bold text-marx-dorado-claro group-hover:underline">
              Ver periodos de México →
            </span>
          </Link>
          <Link
            href="/historia/global"
            className="group p-6 rounded-2xl bg-marx-negro-surface border-2 border-white/10 hover:border-marx-dorado/50 transition-all flex flex-col"
          >
            <span className="font-display font-semibold text-xs uppercase tracking-wider text-marx-dorado mb-2">
              Por país
            </span>
            <h2 className="font-display font-bold text-xl text-marx-blanco mb-2 group-hover:text-marx-dorado-claro transition-colors">
              Historia económica — Global
            </h2>
            <p className="text-marx-crema-oscuro text-sm leading-relaxed flex-1">
              Revolución industrial, imperialismo, crisis de 1929 y 2008. Hitos mundiales desde la economía política marxista.
            </p>
            <span className="mt-4 text-sm font-bold text-marx-dorado-claro group-hover:underline">
              Ver periodos globales →
            </span>
          </Link>
        </div>

        <p className="mt-10 text-center text-marx-crema-oscuro text-sm">
          <Link href="/conceptos" className="link-concepto">Conceptos</Link>
          {' · '}
          <Link href="/ejercicios" className="link-concepto">Ejercicios y repaso</Link>
        </p>
      </div>
    </div>
  )
}
