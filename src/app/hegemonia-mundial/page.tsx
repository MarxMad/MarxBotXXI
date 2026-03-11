import Link from 'next/link'
import { PageHero } from '@/components/PageHero'

const secciones = [
  { id: 'que-es-hegemonia', label: '¿Qué es la hegemonía?' },
  { id: 'produccion-estrategica', label: 'Producción estratégica' },
  { id: 'recursos', label: 'Recursos que mueven el mundo' },
  { id: 'actores', label: 'Actores y bloques' },
  { id: 'casos', label: 'Casos y ejemplos' },
  { id: 'imperialismo', label: 'Imperialismo y realización de la plusvalía' },
  { id: 'mexico', label: 'México en la hegemonía' },
  { id: 'debatir', label: 'Para pensar y debatir' },
]

export default function HegemoniaMundialPage() {
  return (
    <div className="min-h-screen">
      <p className="max-w-3xl mx-auto px-4 pt-6 pb-2">
        <Link href="/" className="link-concepto">← Inicio</Link>
      </p>

      <PageHero
        title="Hegemonía mundial"
        subtitle="Producción estratégica, recursos, tecnología y poder"
        description="Quién controla qué (energía, industria, tecnología) condiciona el dominio del capital a escala global. Aquí verás los pilares, los actores y la conexión con el pensamiento marxista."
        ctaLabel="Empezar: Producción estratégica"
        ctaHref="#produccion-estrategica"
      />

      {/* Índice */}
      <nav className="bg-marx-negro-surface border-b border-white/10 py-6" aria-label="Índice de la página">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display font-semibold text-xs text-marx-dorado uppercase tracking-wider mb-3">
            Contenido
          </h2>
          <ul className="flex flex-wrap gap-2 sm:gap-3">
            {secciones.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-sm text-marx-crema-oscuro hover:text-marx-dorado-claro border-b border-dotted border-marx-crema-oscuro/50 hover:border-marx-dorado transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Contenido: 8 secciones */}
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">
        <article id="que-es-hegemonia" className="card-periodo scroll-mt-24">
          <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide mb-3 border-b border-marx-dorado/50 pb-2">
            1. ¿Qué es la hegemonía?
          </h2>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed">
            Hegemonía es el <strong>dominio</strong> de un Estado o bloque sobre otros en lo económico, militar, tecnológico o cultural. En clave marxista se relaciona con el <strong>imperialismo</strong>: la necesidad del capital de <strong>realizar la plusvalía</strong> (encontrar mercados y materias primas), la <strong>acumulación</strong> y el papel del <strong>Estado</strong>. Profundiza en <Link href="/historia/global/periodo-imperialismo" className="link-concepto">Historia global – Imperialismo</Link> y en <Link href="/teorias" className="link-concepto">Teorías</Link>.
          </p>
        </article>

        <article id="produccion-estrategica" className="card-periodo scroll-mt-24">
          <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide mb-3 border-b border-marx-dorado/50 pb-2">
            2. Producción estratégica
          </h2>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-4">
            Son los sectores que condicionan la capacidad productiva y militar de un país o bloque. Quien controla estos pilares tiene ventaja para imponer condiciones al resto del mundo.
          </p>
          <ul className="list-disc list-inside text-marx-crema-oscuro text-sm space-y-1">
            <li><strong>Energía:</strong> carbón, petróleo, gas; después renovables y nuclear.</li>
            <li><strong>Industria pesada:</strong> siderurgia, maquinaria, química.</li>
            <li><strong>Infraestructura de transporte:</strong> puertos, oleoductos, rutas marítimas, ferrocarriles.</li>
            <li><strong>Tecnología:</strong> semiconductores, 5G, IA, datos; competencia entre potencias por el control.</li>
          </ul>
        </article>

        <article id="recursos" className="card-periodo scroll-mt-24">
          <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide mb-3 border-b border-marx-dorado/50 pb-2">
            3. Recursos que mueven el mundo
          </h2>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed">
            Además de la energía (petróleo, gas, carbón, uranio), cuentan los <strong>minerales estratégicos</strong> (litio, tierras raras, cobalto) para la tech y la transición energética; los <strong>datos y plataformas</strong> (poder sobre información y mercados); y el <strong>armamento</strong>. Quién los controla y cómo se relacionan con la plusvalía y la realización es central para entender la hegemonía.
          </p>
        </article>

        <article id="actores" className="card-periodo scroll-mt-24">
          <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide mb-3 border-b border-marx-dorado/50 pb-2">
            4. Actores y bloques
          </h2>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed">
            Los principales son <strong>Estados y bloques</strong> (EEUU, China, UE, Rusia, potencias emergentes) y <strong>corporaciones</strong> (petroleras, tech, armamento, finanzas), que se entrelazan con los Estados. La hegemonía ha ido cambiando (británica, luego estadounidense; hoy competencia con China y multipolaridad).
          </p>
        </article>

        <article id="casos" className="card-periodo scroll-mt-24">
          <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide mb-3 border-b border-marx-dorado/50 pb-2">
            5. Casos y ejemplos
          </h2>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-3">
            <strong>Fracking en EEUU:</strong> con la fractura hidráulica, Estados Unidos ganó relevancia en el comercio mundial de petróleo y gas; refuerza su posición hegemónica. <strong>Recursos que controla EEUU:</strong> gas natural, petróleo, tecnología, armamento, redes financieras, dólar.
          </p>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-3">
            <strong>Pemex y contratos mixtos (México):</strong> tensión entre control estatal del recurso estratégico y apertura al capital privado (e influencia de potencias y corporaciones). <strong>OPEP</strong> ejerce poder sobre precios del crudo. Las <strong>guerras por recursos</strong> (petróleo, agua, rutas) y el dominio <strong>tech y datos</strong> (GAFA, chips, 5G) completan el panorama.
          </p>
        </article>

        <article id="imperialismo" className="card-periodo scroll-mt-24">
          <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide mb-3 border-b border-marx-dorado/50 pb-2">
            6. Imperialismo y realización de la plusvalía
          </h2>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed">
            El capital necesita <strong>realizar</strong> la plusvalía: vender la mercancía, encontrar mercados y materias primas baratas. El <strong>imperialismo</strong> es la expansión del capital y el control de recursos y territorios. Lenin lo analiza en <em>El imperialismo, fase superior del capitalismo</em>. Ver <Link href="/historia/global/periodo-imperialismo" className="link-concepto">Historia global – Imperialismo</Link> y <Link href="/conceptos" className="link-concepto">Conceptos</Link> (realización, plusvalía).
          </p>
        </article>

        <article id="mexico" className="card-periodo scroll-mt-24">
          <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide mb-3 border-b border-marx-dorado/50 pb-2">
            7. México en la hegemonía mundial
          </h2>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed">
            Pemex y los <strong>contratos mixtos</strong> con privados muestran la tensión entre soberanía energética y dependencia. La <strong>migración</strong>, la <strong>maquila</strong> y los tratados comerciales (TLCAN, etc.) explican cómo México encaja en la división global del trabajo y en la hegemonía de otros. Ver <Link href="/historia/mexico/periodo-neoliberalismo" className="link-concepto">Historia México – Neoliberalismo</Link> y <Link href="/proletariado-crisis" className="link-concepto">Proletariado y crisis</Link>.
          </p>
        </article>

        <article id="debatir" className="card-periodo scroll-mt-24">
          <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide mb-3 border-b border-marx-dorado/50 pb-2">
            8. Para pensar y debatir
          </h2>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-4">
            Preguntas guía: ¿Por qué el petróleo es “estratégico”? ¿Qué tiene que ver la hegemonía con la plusvalía? ¿Cómo se relaciona el fracking en EEUU con el poder mundial? Usa las <Link href="/ejercicios" className="link-concepto">preguntas de repaso</Link> del sitio y el <Link href="/conceptos" className="link-concepto">glosario</Link> (imperialismo, realización, acumulación, Estado).
          </p>
        </article>
      </div>

      {/* Footer: strip de conceptos y enlaces */}
      <footer className="mt-12 py-8 border-t border-white/10 bg-marx-negro-surface">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs font-display font-semibold text-marx-dorado uppercase tracking-wider mb-3">
            Para seguir
          </p>
          <p className="text-marx-crema-oscuro text-sm mb-4">
            <Link href="/historia/global" className="link-concepto">Historia global</Link>
            {' · '}
            <Link href="/teorias" className="link-concepto">Teorías</Link>
            {' · '}
            <Link href="/proletariado-crisis" className="link-concepto">Proletariado y crisis</Link>
            {' · '}
            <Link href="/conceptos" className="link-concepto">Conceptos</Link>
            {' · '}
            <Link href="/ejercicios" className="link-concepto">Ejercicios</Link>
          </p>
          <p>
            <Link href="/" className="link-concepto">← Inicio</Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
