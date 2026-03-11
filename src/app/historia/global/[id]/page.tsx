import Link from 'next/link'
import { notFound } from 'next/navigation'
import { periodosGlobal } from '@/data/periodos'
import { PageHero } from '@/components/PageHero'

export async function generateStaticParams() {
  return periodosGlobal.map((p) => ({ id: p.id }))
}

export default function PeriodoGlobalPage({ params }: { params: { id: string } }) {
  const periodo = periodosGlobal.find((p) => p.id === params.id)
  if (!periodo) notFound()

  return (
    <div className="min-h-screen">
      <p className="max-w-3xl mx-auto px-4 pt-6 pb-2">
        <Link href="/historia/global" className="link-concepto">← Historia global</Link>
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
      <p className="mt-6">
        <Link href="/historia/global" className="link-concepto">Ver todos los periodos globales →</Link>
      </p>
      </div>
    </div>
  )
}
