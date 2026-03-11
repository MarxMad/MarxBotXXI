import Link from 'next/link'
import { PageHero } from '@/components/PageHero'

export default function ProletariadoCrisisPage() {
  return (
    <div className="min-h-screen">
      <p className="max-w-3xl mx-auto px-4 pt-6 pb-2">
        <Link href="/" className="link-concepto">← Inicio</Link>
      </p>
      <PageHero
        title="Proletariado y crisis"
        subtitle="Era tecnológica y de la IA"
        description="El análisis marxista para entender al proletariado hoy y las crisis del capitalismo cuando la tecnología y la IA cambian el trabajo y la acumulación."
      />
      <div className="max-w-3xl mx-auto px-4 py-8">
      <section aria-label="Proletariado y crisis en la era tecnológica y de la IA">
        <div className="grid gap-5">
          <article className="card-periodo">
            <header className="mb-3">
              <span className="block font-display text-sm text-marx-dorado tracking-wider mb-1">Hoy</span>
              <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide m-0">¿Quién es el proletariado hoy?</h2>
            </header>
            <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-2">
              Para Marx, el <Link href="/conceptos#concepto-lucha-clases" className="link-concepto">proletariado</Link> es la clase que no posee medios de producción y vive de vender su fuerza de trabajo. Eso incluye hoy a obreros de fábrica, repartidores, trabajadores de plataformas (delivery, ride-sharing), empleados de call centers, limpieza, cuidados, y muchos trabajadores de la tecnología que dependen de un salario. La precarización y el trabajo “gig” amplían el <Link href="/conceptos#concepto-ejercito-reserva" className="link-concepto">ejército industrial de reserva</Link>: más gente dispuesta a trabajar por poco para que el capital presione los salarios a la baja.
            </p>
            <p className="text-[0.88rem] text-marx-dorado mt-3"><strong className="text-marx-dorado-claro">Conceptos:</strong> plusvalía, ejército de reserva, fuerza de trabajo, proletariado.</p>
          </article>
          <article className="card-periodo">
            <header className="mb-3">
              <span className="block font-display text-sm text-marx-dorado tracking-wider mb-1">Tecnología e IA</span>
              <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide m-0">Automatización, IA y composición orgánica</h2>
            </header>
            <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-2">
              La automatización y la IA son, en términos de <em>El Capital</em>, un aumento del <Link href="/conceptos#concepto-capital-constante" className="link-concepto">capital constante</Link> (máquinas, algoritmos) frente al <Link href="/conceptos#concepto-capital-variable" className="link-concepto">capital variable</Link> (trabajo vivo). Sube la <Link href="/conceptos#concepto-composicion-organica" className="link-concepto">composición orgánica del capital</Link>: se usa más tecnología por cada obrero. El capital puede producir más con menos trabajadores o sustituir puestos; la plusvalía la sigue creando el trabajo humano (directo o indirecto: quien diseña, mantiene o supervisa los sistemas). Quien se apropia el beneficio sigue siendo el capital; el desempleo y la precariedad crecen — el ejército de reserva se amplía.
            </p>
            <p className="text-[0.88rem] text-marx-dorado mt-3"><strong className="text-marx-dorado-claro">Conceptos:</strong> capital constante/variable, composición orgánica, plusvalía relativa, ejército de reserva.</p>
          </article>
          <article className="card-periodo">
            <header className="mb-3">
              <span className="block font-display text-sm text-marx-dorado tracking-wider mb-1">Crisis</span>
              <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide m-0">Cómo analizamos las crisis del capitalismo (tech e IA)</h2>
            </header>
            <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-2">
              Las crisis en Marx no son “fallos técnicos”, sino rasgos estructurales: <strong>sobreacumulación</strong> (demasiado capital invertido, la tasa de ganancia cae), <strong>realización</strong> (no se puede vender toda la producción: falta demanda porque los salarios están comprimidos). En la era digital y de IA: el capital se concentra en pocas corporaciones tech; la financiarización y las burbujas (dotcom, cripto, “IA”) repiten el ciclo. La clase trabajadora paga con despidos, recortes y más precariedad. Analizar las crisis así permite ver que no es “la tecnología” la que “destruye empleo”, sino la forma en que el capital usa la tecnología para extraer más plusvalía y despedir cuando conviene.
            </p>
            <p className="text-[0.88rem] text-marx-dorado mt-3"><strong className="text-marx-dorado-claro">Conceptos:</strong> crisis, realización, tasa de ganancia, ejército de reserva, lucha de clases.</p>
          </article>
        </div>
        <div className="mt-6 pt-5 border-t border-white/10">
          <h2 className="font-display font-semibold text-sm text-marx-dorado uppercase mb-3">Preguntas de repaso</h2>
          <p className="text-marx-crema-oscuro text-sm">
            Las preguntas de repaso de Proletariado y crisis (y del resto de temas) están reunidas en <Link href="/ejercicios" className="link-concepto">Ejercicios y repaso</Link>.
          </p>
        </div>
      </section>
      </div>
    </div>
  )
}
