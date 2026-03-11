import Link from 'next/link'
import { PageHero } from '@/components/PageHero'

export default function HaciendasPage() {
  return (
    <div className="min-h-screen">
      <p className="max-w-3xl mx-auto px-4 pt-6 pb-2">
        <Link href="/historia/mexico" className="link-concepto">← Historia México</Link>
      </p>
      <PageHero
        title="Las haciendas coloniales"
        subtitle="s. XVII–XIX"
        description="La hacienda como centro de producción en la era colonial novohispana: tierra, trabajo, acumulación y flujo de plusvalía."
      />
      <div className="max-w-3xl mx-auto px-4 py-8">
      <section className="space-y-8">
        <article className="card-periodo">
          <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide mb-3 border-b border-marx-dorado/50 pb-2">
            La hacienda como centro de producción
          </h2>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-2">
            En la Nueva España colonial, la <strong>hacienda</strong> fue el principal <strong>centro de producción</strong>: una gran propiedad que integraba tierra, ganado, cultivos y a menudo obrajes (talleres). A diferencia de la encomienda (derecho a tributo y trabajo sobre pueblos asignados) o del repartimiento (turnos de trabajo obligatorio), la hacienda concentraba en un mismo espacio la producción agropecuaria y la extracción del excedente. Funcionaba como unidad económica autosuficiente y como base de la acumulación de la clase dominante colonial.
          </p>
          <p className="text-sm text-marx-dorado">
            Conceptos: centro de producción, acumulación originaria, plusvalía.
          </p>
        </article>

        <article className="card-periodo">
          <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide mb-3 border-b border-marx-dorado/50 pb-2">
            Tierra, ganado y obrajes
          </h2>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-2">
            La hacienda reunía <strong>tierra</strong> (cultivos: trigo, maíz, caña, etc.), <strong>ganado</strong> (ganadería extensiva) y en muchos casos <strong>obrajes</strong> (telares, talleres de manufactura). Esa combinación permitía producir para el consumo interno de la propiedad, para los mercados locales y regionales, y para la exportación o el abasto de minas y ciudades. La concentración de medios de producción en manos del hacendado era la base material para extraer trabajo excedente de la fuerza de trabajo disponible.
          </p>
          <p className="text-sm text-marx-dorado">
            Conceptos: medios de producción, trabajo excedente.
          </p>
        </article>

        <article className="card-periodo">
          <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide mb-3 border-b border-marx-dorado/50 pb-2">
            Mano de obra: peones, gañanes y endeudamiento
          </h2>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-2">
            La fuerza de trabajo en la hacienda no era libre en sentido capitalista. <strong>Peones</strong> y <strong>gañanes</strong> trabajaban a cambio de un jornal, de acceso a la tierra (colonos) o de adelantos en especie o dinero que generaban <strong>endeudamiento</strong>. El peón acasillado o el gañán atado por la deuda quedaban sujetos al hacendado: la plusvalía se extraía mediante una relación de dominación que combinaba coerción extraeconómica (obligación por deuda, control de la tierra) con formas de pago que mantenían al trabajador en la propiedad. No es aún el obrero libre que vende su fuerza de trabajo en el mercado; es trabajo servil o semilibre que alimenta la acumulación del hacendado.
          </p>
          <p className="text-sm text-marx-dorado">
            Conceptos: plusvalía, trabajo servil, coerción extraeconómica, fuerza de trabajo.
          </p>
        </article>

        <article className="card-periodo">
          <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide mb-3 border-b border-marx-dorado/50 pb-2">
            Relación con encomienda y repartimiento
          </h2>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-2">
            La hacienda no sustituyó de golpe a la encomienda ni al repartimiento: en muchas regiones <strong>convivió</strong> con ellos. Los indígenas o campesinos podían ser repartidos por turnos para trabajar en obras o minas y, al mismo tiempo, la hacienda empleaba peones acasillados o gañanes en sus tierras. Con el tiempo, la hacienda se consolidó como forma dominante de organización de la producción en amplias zonas, sobre todo a partir del siglo XVII, y sentó las bases del <strong>latifundio</strong> que la Reforma liberal y el Porfiriato profundizarían en el siglo XIX.
          </p>
          <p className="text-sm text-marx-dorado">
            Conceptos: acumulación originaria, latifundio.
          </p>
        </article>

        <article className="card-periodo">
          <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide mb-3 border-b border-marx-dorado/50 pb-2">
            Acumulación y flujo hacia la metrópoli
          </h2>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-2">
            El excedente producido en las haciendas (y en minas, obrajes y tributos) alimentaba la <strong>acumulación</strong> de la élite colonial y, vía impuestos, comercio y remesas, el flujo de riqueza hacia la metrópoli española. En clave marxista: la plusvalía extraída del trabajo indígena y campesino en la Nueva España no se realizaba solo en el mercado local; una parte importante se transfería al centro del imperio. La hacienda fue así un pilar del sistema colonial de extracción y centralización del valor.
          </p>
          <p className="text-sm text-marx-dorado">
            Conceptos: plusvalía, acumulación, realización, colonialismo.
          </p>
        </article>

        {/* Por tipo de producción */}
        <article className="card-periodo" id="por-tipo">
          <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide mb-3 border-b border-marx-dorado/50 pb-2">
            Por tipo de producción
          </h2>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-4">
            Las haciendas se clasifican según la actividad principal. Los datos que siguen corresponden a la Nueva España y al México independiente hasta el Porfiriato.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-marx-dorado/50">
                  <th className="text-left py-2 pr-3 font-display font-semibold text-marx-dorado-claro uppercase">Tipo</th>
                  <th className="text-left py-2 pr-3 font-display font-semibold text-marx-dorado-claro uppercase">Producto / Actividad</th>
                  <th className="text-left py-2 font-display font-semibold text-marx-dorado-claro uppercase">Regiones principales</th>
                </tr>
              </thead>
              <tbody className="text-marx-crema-oscuro">
                <tr className="border-b border-white/10"><td className="py-2 pr-3 font-medium text-marx-crema">Cerealeras</td><td className="py-2 pr-3">Trigo, maíz</td><td className="py-2">Meseta Central, Bajío (Guanajuato, Querétaro, Michoacán), tierras altas de Puebla</td></tr>
                <tr className="border-b border-white/10"><td className="py-2 pr-3 font-medium text-marx-crema">Ganaderas</td><td className="py-2 pr-3">Ganado bovino, ovino, caprino</td><td className="py-2">Norte (Coahuila, Durango, Nuevo León), Bajío, Tlaxcala</td></tr>
                <tr className="border-b border-white/10"><td className="py-2 pr-3 font-medium text-marx-crema">Azucareras</td><td className="py-2 pr-3">Caña de azúcar (ingenios)</td><td className="py-2">Morelos (Cuernavaca, Cuautla), Veracruz (Jalapa), Michoacán (Autlán), Puebla (Izúcar)</td></tr>
                <tr className="border-b border-white/10"><td className="py-2 pr-3 font-medium text-marx-crema">Pulqueras</td><td className="py-2 pr-3">Pulque (maguey)</td><td className="py-2">Hidalgo (Apan, Zempoala), Tlaxcala, Estado de México, Puebla</td></tr>
                <tr className="border-b border-white/10"><td className="py-2 pr-3 font-medium text-marx-crema">Henequeneras</td><td className="py-2 pr-3">Henequén (fibra, “oro verde”)</td><td className="py-2">Yucatán (auge s. XIX–XX; &gt;1 200 centros en radio de 80 km de Mérida hacia 1910)</td></tr>
                <tr className="border-b border-white/10"><td className="py-2 pr-3 font-medium text-marx-crema">De beneficio (minería)</td><td className="py-2 pr-3">Plata, oro (método de patio, amalgama)</td><td className="py-2">Hidalgo (Pachuca), Guanajuato, Zacatecas, Oaxaca (Sierra Norte)</td></tr>
                <tr className="border-b border-white/10"><td className="py-2 pr-3 font-medium text-marx-crema">Mixtas</td><td className="py-2 pr-3">Agricultura + ganadería (y a veces obrajes)</td><td className="py-2">Comunes en Bajío, centro y sur; muchas combinaban cereales, maguey y ganado</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-marx-crema-oscuro/80 mt-3">
            Las azucareras requerían más capital (tierra, agua, tecnología); las ganaderas y pulqueras, menos. Fuentes: historiografía económica de la hacienda en Nueva España y México (UNAM, INAH, estudios regionales).
          </p>
        </article>

        {/* Por estado */}
        <article className="card-periodo" id="por-estado">
          <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide mb-3 border-b border-marx-dorado/50 pb-2">
            Por estado de la República (datos históricos)
          </h2>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-4">
            Resumen por entidad, con tipos de producción dominantes y ejemplos de haciendas o zonas documentadas.
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-marx-dorado pl-4">
              <h3 className="font-display font-semibold text-marx-rojo-claro text-sm uppercase mb-1">Morelos</h3>
              <p className="text-[0.95rem] text-marx-crema-oscuro">Principal región <strong>azucarera</strong>. Caña introducida por Cortés en Cuernavaca; desde el s. XVII proliferan ingenios en valles de Cuernavaca y Cuautla. Ejemplo: Hacienda San Antonio El Puente (Xochitepec), más de 5 000 ha; primera en el estado con energía eléctrica.</p>
            </div>
            <div className="border-l-4 border-marx-dorado pl-4">
              <h3 className="font-display font-semibold text-marx-rojo-claro text-sm uppercase mb-1">Hidalgo</h3>
              <p className="text-[0.95rem] text-marx-crema-oscuro"><strong>Pulqueras</strong> en Apan y Zempoala (s. XVIII–XIX); en Zempoala más de 15 haciendas pulqueras tras la llegada del ferrocarril (ca. 1880). <strong>Minera</strong>: Hacienda de La Purísima Concepción (Pachuca), donde Bartolomé de Medina aplicó el método de patio para plata (1554). San Francisco Ocotepec (8 000 ha bajo Leona Vicario).</p>
            </div>
            <div className="border-l-4 border-marx-dorado pl-4">
              <h3 className="font-display font-semibold text-marx-rojo-claro text-sm uppercase mb-1">Tlaxcala</h3>
              <p className="text-[0.95rem] text-marx-crema-oscuro"><strong>Pulqueras y ganaderas</strong>. Hacienda de San Pedro Tenexac (Terrenate), una de las principales; consolidación s. XVIII–XIX.</p>
            </div>
            <div className="border-l-4 border-marx-dorado pl-4">
              <h3 className="font-display font-semibold text-marx-rojo-claro text-sm uppercase mb-1">Guanajuato</h3>
              <p className="text-[0.95rem] text-marx-crema-oscuro"><strong>Cerealeras y ganaderas</strong> en el Bajío (“granero de México”). Hacienda San José de La Quemada (San Felipe Torres Mochas), de las más ricas y extensas; origen s. XVI, dedicada a pastoreo y luego ganado bovino.</p>
            </div>
            <div className="border-l-4 border-marx-dorado pl-4">
              <h3 className="font-display font-semibold text-marx-rojo-claro text-sm uppercase mb-1">Querétaro</h3>
              <p className="text-[0.95rem] text-marx-crema-oscuro"><strong>Cerealeras y ganaderas</strong> en valles de San Juan del Río, El Marqués y Querétaro. Hacienda Jurica (s. XVI): centro agrícola y ganadero con más de 500 trabajadores. Hacienda de Galindo, s. XVI.</p>
            </div>
            <div className="border-l-4 border-marx-dorado pl-4">
              <h3 className="font-display font-semibold text-marx-rojo-claro text-sm uppercase mb-1">Michoacán</h3>
              <p className="text-[0.95rem] text-marx-crema-oscuro"><strong>Azucareras</strong> en tierras bajas (Autlán y otras); <strong>cerealeras</strong> en el Bajío michoacano.</p>
            </div>
            <div className="border-l-4 border-marx-dorado pl-4">
              <h3 className="font-display font-semibold text-marx-rojo-claro text-sm uppercase mb-1">Puebla</h3>
              <p className="text-[0.95rem] text-marx-crema-oscuro"><strong>Cerealeras</strong> en tierras altas; <strong>azucareras</strong> en Izúcar y zonas cálidas.</p>
            </div>
            <div className="border-l-4 border-marx-dorado pl-4">
              <h3 className="font-display font-semibold text-marx-rojo-claro text-sm uppercase mb-1">Oaxaca</h3>
              <p className="text-[0.95rem] text-marx-crema-oscuro"><strong>Haciendas de beneficio minero</strong>: Ex Hacienda de los Cinco Señores (Santa Catarina Lachatao, Sierra Norte), fines s. XVIII; beneficio de plata y oro (veta de Natividad). También producción de grana cochinilla y otros productos.</p>
            </div>
            <div className="border-l-4 border-marx-dorado pl-4">
              <h3 className="font-display font-semibold text-marx-rojo-claro text-sm uppercase mb-1">Yucatán</h3>
              <p className="text-[0.95rem] text-marx-crema-oscuro"><strong>Henequeneras</strong>. Auge desde mediados del s. XIX (Guerra de Castas, máquina desfibradora, demanda de cordel). Entre 1901 y 1916 Yucatán fue el primer productor mundial de fibras duras naturales; &gt;1 200 centros en radio de 80 km de Mérida. Henequén conocido como “oro verde”. Ejemplo: Sotuta de Peón.</p>
            </div>
            <div className="border-l-4 border-marx-dorado pl-4">
              <h3 className="font-display font-semibold text-marx-rojo-claro text-sm uppercase mb-1">Estado de México</h3>
              <p className="text-[0.95rem] text-marx-crema-oscuro"><strong>Pulqueras y cerealeras</strong> en el centro; abasto a la Ciudad de México.</p>
            </div>
            <div className="border-l-4 border-marx-dorado pl-4">
              <h3 className="font-display font-semibold text-marx-rojo-claro text-sm uppercase mb-1">Norte (Coahuila, Durango, Nuevo León, etc.)</h3>
              <p className="text-[0.95rem] text-marx-crema-oscuro"><strong>Ganaderas</strong> (estancias); zonas marginales para la agricultura, abasto de carne y pieles a minas y centros urbanos.</p>
            </div>
          </div>
          <p className="text-xs text-marx-crema-oscuro/80 mt-4">
            Fuentes: UNAM, INAH, Wikipedia (haciendas azucareras Morelos, henequeneras Yucatán, Hacienda de La Purísima Concepción Pachuca, San Pedro Tenexac, San José de La Quemada, Jurica, Cinco Señores Lachatao), México Desconocido, estudios regionales.
          </p>
        </article>
      </section>

      <div className="mt-10 pt-6 border-t border-white/10">
        <p className="text-marx-crema-oscuro text-sm mb-2">
          Relacionado:
        </p>
        <ul className="text-sm space-y-1 mb-2">
          <li>
            <Link href="/historia/mexico/conquista" className="link-concepto">Conquista, encomienda, repartición y haciendas (resumen) →</Link>
          </li>
          <li>
            <Link href="/historia/mexico/periodo-haciendas" className="link-concepto">Ficha del periodo «Las haciendas coloniales» →</Link>
          </li>
        </ul>
        <p className="mt-4">
          <Link href="/historia/mexico" className="link-concepto">Ver todos los periodos de México →</Link>
        </p>
      </div>
      </div>
    </div>
  )
}
