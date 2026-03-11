import { Timeline } from '@/components/Timeline'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'

export default function LineaTiempoPage() {
  return (
    <div className="min-h-screen">
      <p className="max-w-4xl mx-auto px-4 pt-6 pb-2">
        <Link href="/" className="link-concepto">← Inicio</Link>
      </p>
      <PageHero
        title="Línea de tiempo"
        subtitle="Historia económica México y global"
        description="Ubica los periodos de la historia económica de México y del mundo en una línea temporal. Enlaza con las fichas de cada periodo."
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Timeline />
      </div>
    </div>
  )
}
