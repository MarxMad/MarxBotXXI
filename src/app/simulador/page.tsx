import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { SimuladorUnDia } from '@/components/simuladores/SimuladorUnDia'
import { SimuladorJornada } from '@/components/simuladores/SimuladorJornada'
import { SimuladorFabricaSimple } from '@/components/simuladores/SimuladorFabricaSimple'
import { SimuladorEjercitoReserva } from '@/components/simuladores/SimuladorEjercitoReserva'

export default function SimuladorPage() {
  return (
    <div className="min-h-screen">
      <p className="max-w-3xl mx-auto px-4 pt-6 pb-2">
        <Link href="/" className="link-concepto">← Inicio</Link>
      </p>
      <PageHero
        title="Simuladores"
        subtitle="Plusvalía, jornada, fábrica y ejército de reserva"
        description="Cuatro simuladores para entender la tesis marxista paso a paso: qué es la plusvalía, cómo se extrae en la jornada, en la fábrica y el papel del ejército industrial de reserva."
        ctaLabel="Ver primer simulador"
        ctaHref="#simulador-un-dia"
      />
      <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="panel border-l-marx-dorado mb-8" id="simulador-un-dia">
        <p className="text-marx-crema-oscuro mb-2">
          <strong>¿Qué es la plusvalía?</strong> En una frase: es la parte del valor que creas con tu trabajo y que el capitalista no te paga. El valor de lo producido lo crea el <strong>trabajo</strong>; el capitalista paga un <strong>salario</strong> y se queda con el resto (plusvalía). Estos cuatro simuladores ilustran esa idea paso a paso.
        </p>
        <p className="text-sm text-marx-crema-oscuro">
          Orden recomendado: 1 → 2 → 3 → 4. Para las fórmulas de circulación del capital (D-M-D′) y los esquemas de reproducción: <Link href="/matematicas-marx" className="link-concepto">Matemáticas de Marx</Link>.
        </p>
      </div>

      <div className="space-y-8">
        <SimuladorUnDia />
        <SimuladorJornada />
        <SimuladorFabricaSimple />
        <SimuladorEjercitoReserva />
      </div>
      </div>
    </div>
  )
}
