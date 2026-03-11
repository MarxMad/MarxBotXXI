import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { conceptos } from '@/data/conceptos'

export default function ConceptosPage() {
  return (
    <div className="min-h-screen">
      <p className="max-w-3xl mx-auto px-4 pt-6 pb-2">
        <Link href="/" className="link-concepto">← Inicio</Link>
      </p>
      <PageHero
        title="Conceptos"
        subtitle="Glosario didáctico"
        description="Términos clave del pensamiento marxista con referencia a El Capital y otras fuentes. Los textos de Historia enlazan aquí."
      />
      <div className="max-w-3xl mx-auto px-4 py-8">
      <section className="panel panel-conceptos" aria-label="Conceptos marxistas">
        <p className="mb-5 text-marx-crema-oscuro">
          Glosario didáctico con referencia a <em>El Capital</em> y otras fuentes. Los textos de Historia enlazan aquí.
        </p>
        <div className="mb-6 p-4 rounded-lg border border-marx-dorado/40 bg-marx-negro-surface/50">
          <h2 className="font-display font-semibold text-sm text-marx-dorado uppercase tracking-wide mb-2">Tema desarrollado</h2>
          <p className="text-marx-crema-oscuro text-sm mb-2">
            Subsunción formal y subsunción real del trabajo al capital (cooperación, manufactura, maquinaria). Texto completo con fuentes.
          </p>
          <Link href="/subsuncion-formal" className="text-marx-dorado-claro font-semibold text-sm hover:underline">
            Ver Subsunción formal y real →
          </Link>
        </div>
        <dl className="m-0">
          {conceptos.map((c) => (
            <div key={c.id} className="mt-4 first:mt-0" id={c.id}>
              <dt className="font-display font-semibold text-base text-marx-dorado uppercase tracking-wide">
                {c.termino}
              </dt>
              <dd className="mt-1 ml-0 text-[0.95rem] text-marx-crema-oscuro leading-relaxed">
                {c.definicion}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 pt-5 border-t border-white/10">
          <h2 className="font-display font-semibold text-sm text-marx-dorado uppercase mb-3">Preguntas de repaso</h2>
          <p className="text-marx-crema-oscuro text-sm mb-2">
            Las preguntas de repaso de Conceptos (y del resto de temas) están reunidas en la página <Link href="/ejercicios" className="link-concepto">Ejercicios y repaso</Link>, junto con el cuestionario de opción múltiple.
          </p>
        </div>
      </section>
      </div>
    </div>
  )
}
