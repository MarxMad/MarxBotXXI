import Link from 'next/link'
import { notFound } from 'next/navigation'
import { periodosMexico } from '@/data/periodos'
import { PageHero } from '@/components/PageHero'

export async function generateStaticParams() {
  return periodosMexico.map((p) => ({ id: p.id }))
}

export default function PeriodoMexicoPage({ params }: { params: { id: string } }) {
  const periodo = periodosMexico.find((p) => p.id === params.id)
  if (!periodo) notFound()

  return (
    <div className="min-h-screen">
      <p className="max-w-3xl mx-auto px-4 pt-6 pb-2">
        <Link href="/historia/mexico" className="link-concepto">← Historia México</Link>
      </p>
      <PageHero
        title={periodo.titulo}
        subtitle={periodo.fechas}
        description={periodo.contenido}
      />
      <div className="max-w-3xl mx-auto px-4 py-8">
      <article className="card-periodo">
        <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-4">
          {periodo.contenido}
        </p>
        <p className="text-[0.88rem] text-marx-dorado">
          <strong className="text-marx-dorado-claro">Conceptos:</strong> {periodo.conceptos}
        </p>
      </article>
      {periodo.id === 'periodo-conquista' && (
        <p className="mt-4">
          <Link href="/historia/mexico/conquista" className="link-concepto">Ver desarrollo: Conquista, encomienda, repartición y haciendas →</Link>
        </p>
      )}
      {periodo.id === 'periodo-haciendas' && (
        <p className="mt-4">
          <Link href="/historia/mexico/haciendas" className="link-concepto">Ver desarrollo: Las haciendas como centro de producción →</Link>
        </p>
      )}
      <p className="mt-6">
        <Link href="/historia/mexico" className="link-concepto">Ver todos los periodos de México →</Link>
      </p>
      </div>
    </div>
  )
}
