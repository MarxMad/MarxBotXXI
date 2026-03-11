import Link from 'next/link'
import { PageHero } from '@/components/PageHero'

export default function ConquistaPage() {
  return (
    <div className="min-h-screen">
      <p className="max-w-3xl mx-auto px-4 pt-6 pb-2">
        <Link href="/historia/mexico" className="link-concepto">← Historia México</Link>
      </p>
      <PageHero
        title="Conquista y organización colonial"
        subtitle="1519 – ca. 1600"
        description="Conquista, encomienda, repartición y haciendas. Formas de dominio español sobre la tierra y el trabajo indígena. En clave marxista: extracción de plusvalía por coerción extraeconómica y base de la acumulación colonial."
      />
      <div className="max-w-3xl mx-auto px-4 py-8">
      <section className="space-y-8">
        <article className="card-periodo">
          <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide mb-3 border-b border-marx-dorado/50 pb-2">
            Conquista
          </h2>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-2">
            Conquista militar de Tenochtitlan (1519–1521) y sometimiento de los pueblos mesoamericanos. La Corona española se erige en dueña del territorio y de la población; el trabajo y los tributos indígenas pasan a ser la base de la riqueza colonial. No hay aún trabajo asalariado libre: la explotación se ejerce por <strong>coerción extraeconómica</strong> (violencia, obligación legal, tributo).
          </p>
          <p className="text-sm text-marx-dorado">
            Conceptos: acumulación originaria, plusvalía, dominio colonial.
          </p>
        </article>

        <article className="card-periodo">
          <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide mb-3 border-b border-marx-dorado/50 pb-2">
            Encomienda
          </h2>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-2">
            Institución por la que la Corona <strong>reparte</strong> grupos de indígenas a conquistadores o colonos (encomenderos). El encomendero no es dueño de la tierra ni de las personas, pero tiene derecho a recibir <strong>tributo</strong> y <strong>trabajo</strong> de los encomendados a cambio de “protección” y evangelización. Es la primera forma masiva de apropiación del excedente indígena por los españoles. Con el tiempo la Corona limita y regula la encomienda (Leyes Nuevas, etc.) y en muchas zonas será sustituida por otras formas (repartimiento, hacienda).
          </p>
          <h3 className="font-display font-semibold text-sm text-marx-dorado uppercase tracking-wide mt-4 mb-2">
            Requisitos de los soldados/colonos que recibían encomienda
          </h3>
          <ul className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed space-y-1 list-disc list-inside mb-2">
            <li>Tener casa, pero <strong>fuera de los pueblos asignados</strong> (no vivir entre los indígenas encomendados).</li>
            <li>Debía estar <strong>casado</strong>.</li>
            <li>Debía <strong>comprobar que al menos sus abuelos fueran cristianos</strong> (limpieza de sangre / requisito de cristiandad).</li>
          </ul>
          <p className="text-sm text-marx-dorado">
            Conceptos: tributo, trabajo forzado, plusvalía extraída por coerción.
          </p>
        </article>

        <article className="card-periodo">
          <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide mb-3 border-b border-marx-dorado/50 pb-2">
            Repartición (repartimiento / cuatequil)
          </h2>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-2">
            Sistema de <strong>trabajo obligatorio por turnos</strong>: las autoridades coloniales asignan a indígenas de un pueblo a trabajar durante un tiempo determinado en obras públicas, minas, obrajes o tierras de españoles. A diferencia de la encomienda, el repartimiento no “asigna” un pueblo a un encomendero de por vida, sino que reparte brazos por periodos. También se le llama <em>cuatequil</em> en algunas regiones. Los trabajadores no son libres ni asalariados en sentido capitalista: su fuerza de trabajo es exigida por la ley y la fuerza. Es otra forma de extracción de plusvalía por coerción extraeconómica.
          </p>
          <p className="text-sm text-marx-dorado">
            Conceptos: trabajo forzado, plusvalía, explotación colonial.
          </p>
        </article>

        <article className="card-periodo">
          <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide mb-3 border-b border-marx-dorado/50 pb-2">
            Haciendas
          </h2>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-2">
            Grandes propiedades (tierra, ganado, a veces obrajes) que se consolidan sobre todo a partir del siglo XVII. La hacienda combina producción agropecuaria y, en muchos casos, trabajo <strong>servil o semilibre</strong>: peones, gañanes, trabajadores atados por deudas (endeudamiento) o por la necesidad de acceder a la tierra. No es aún capitalismo pleno (relación salarial libre), pero concentra tierra y trabajo y extrae excedente que alimenta la acumulación de la clase dominante colonial. En muchas regiones la hacienda sustituye o convive con la encomienda y el repartimiento. Será la base del latifundio que la Reforma y el Porfiriato profundizarán.
          </p>
          <p className="text-sm text-marx-dorado">
            Conceptos: acumulación originaria, tierra, trabajo servil, plusvalía.
          </p>
        </article>
      </section>

      <div className="mt-10 pt-6 border-t border-white/10">
        <p className="text-marx-crema-oscuro text-sm mb-2">
          Resumen del periodo en la lista general:
        </p>
        <p>
          <Link href="/historia/mexico/periodo-conquista" className="link-concepto">Conquista y organización colonial (ficha del periodo) →</Link>
        </p>
        <p className="mt-4">
          <Link href="/historia/mexico" className="link-concepto">Ver todos los periodos de México →</Link>
        </p>
      </div>
      </div>
    </div>
  )
}
