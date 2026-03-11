import Link from 'next/link'

export default function MatematicasMarxPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <p className="mb-6">
        <Link href="/" className="link-concepto">← Inicio</Link>
      </p>
      <h1 className="seccion-titulo">Matemáticas de Marx: circuitos y esquemas</h1>
      <p className="mb-8 text-marx-crema-oscuro">
        En <em>El Capital</em>, Marx usa fórmulas y esquemas para analizar la circulación del valor: la circulación simple de mercancías (M-D-M), la circulación del capital (D-M-D′) y los esquemas de reproducción (Libro II). Aquí se resumen de forma didáctica.
      </p>

      {/* M-D-M */}
      <section className="mb-10" aria-labelledby="mdm-title">
        <h2 id="mdm-title" className="font-display font-semibold text-xl text-marx-rojo-claro uppercase tracking-wide mb-4 border-b border-marx-dorado pb-2">
          M − D − M (circulación simple de mercancías)
        </h2>
        <p className="text-marx-crema-oscuro mb-4">
          El productor vende una <strong>mercancía (M)</strong> para obtener <strong>dinero (D)</strong> y con ese dinero compra <strong>otra mercancía (M)</strong>. El objetivo es el <em>valor de uso</em>: conseguir algo que se necesita para consumir o para seguir produciendo (ej. vendo trigo para comprar herramientas).
        </p>
        <div className="panel border-l-marx-dorado mb-4">
          <p className="font-display font-semibold text-marx-dorado text-center text-lg tracking-wider mb-2">Fórmula</p>
          <p className="text-center text-2xl md:text-3xl font-mono text-marx-crema">
            M → D → M
          </p>
          <p className="text-center text-sm text-marx-crema-oscuro mt-2">Mercancía → Dinero → Mercancía</p>
        </div>
        <ul className="list-disc list-inside text-marx-crema-oscuro space-y-1 mb-2">
          <li>El dinero es solo <strong>medio de circulación</strong>.</li>
          <li>No hay acumulación: se vende para comprar. Los extremos (M y M) son valores de uso distintos.</li>
        </ul>
        <p className="text-sm text-marx-crema-oscuro italic">Fuente: <em>El Capital</em>, Libro I, cap. 3–4.</p>
      </section>

      {/* D-M-D' */}
      <section className="mb-10" aria-labelledby="dmd-title">
        <h2 id="dmd-title" className="font-display font-semibold text-xl text-marx-rojo-claro uppercase tracking-wide mb-4 border-b border-marx-dorado pb-2">
          D − M − D′ (circulación del capital)
        </h2>
        <p className="text-marx-crema-oscuro mb-4">
          El capitalista adelanta <strong>dinero (D)</strong>, compra <strong>mercancías (M)</strong> —medios de producción y fuerza de trabajo—, las hace trabajar en la producción y vende el producto para recuperar <strong>más dinero (D′)</strong>. El objetivo es la <strong>plusvalía</strong>: D′ &gt; D.
        </p>
        <div className="panel border-l-marx-rojo mb-4">
          <p className="font-display font-semibold text-marx-dorado text-center text-lg tracking-wider mb-2">Fórmula</p>
          <p className="text-center text-2xl md:text-3xl font-mono text-marx-crema">
            D → M → D′
          </p>
          <p className="text-center text-sm text-marx-crema-oscuro mt-2">Dinero → Mercancía (Ft + Mp) → Dinero′ &nbsp;&nbsp; con D′ = D + ΔD</p>
        </div>
        <p className="text-marx-crema-oscuro mb-2">
          <strong className="text-marx-dorado-claro">ΔD</strong> es la plusvalía. La mercancía M incluye la <strong>fuerza de trabajo (Ft)</strong> y los <strong>medios de producción (Mp)</strong>. Solo el trabajo vivo crea valor nuevo; por tanto D′ crece porque el obrero produce más valor del que recibe como salario.
        </p>
        <ul className="list-disc list-inside text-marx-crema-oscuro space-y-1 mb-2">
          <li>Aquí el dinero es <strong>capital</strong>: valor que se valoriza.</li>
          <li>Comparado con M-D-M: en D-M-D′ los extremos son cualitativamente iguales (dinero) y cuantitativamente distintos (D′ &gt; D).</li>
        </ul>
        <p className="text-sm text-marx-crema-oscuro italic">Fuente: <em>El Capital</em>, Libro I, cap. 4.</p>
      </section>

      {/* Derivados / esquemas */}
      <section className="mb-10" aria-labelledby="esquemas-title">
        <h2 id="esquemas-title" className="font-display font-semibold text-xl text-marx-rojo-claro uppercase tracking-wide mb-4 border-b border-marx-dorado pb-2">
          Esquemas de reproducción (Libro II)
        </h2>
        <p className="text-marx-crema-oscuro mb-4">
          Marx divide la producción social en <strong>dos grandes sectores</strong> (departamentos) para estudiar bajo qué condiciones el valor y la plusvalía se <em>realizan</em> (se venden) y se reponen los medios de producción y el consumo obrero.
        </p>

        <div className="grid gap-4 md:grid-cols-2 mb-4">
          <div className="card-periodo">
            <h3 className="font-display font-semibold text-marx-dorado uppercase text-sm mb-2">Sector I — Medios de producción</h3>
            <p className="text-marx-crema-oscuro text-sm mb-2">
              Produce máquinas, materias primas, etc. Su producto total en valor se descompone en:
            </p>
            <p className="font-mono text-marx-crema text-center text-lg">c₁ + v₁ + p₁</p>
            <p className="text-xs text-marx-crema-oscuro mt-1 text-center">capital constante + variable + plusvalía del Sector I</p>
          </div>
          <div className="card-periodo">
            <h3 className="font-display font-semibold text-marx-dorado uppercase text-sm mb-2">Sector II — Medios de consumo</h3>
            <p className="text-marx-crema-oscuro text-sm mb-2">
              Produce bienes de consumo (obreros y capitalistas). Su producto total:
            </p>
            <p className="font-mono text-marx-crema text-center text-lg">c₂ + v₂ + p₂</p>
            <p className="text-xs text-marx-crema-oscuro mt-1 text-center">capital constante + variable + plusvalía del Sector II</p>
          </div>
        </div>

        <div className="panel border-l-marx-good mb-4">
          <h3 className="font-display font-semibold text-marx-dorado uppercase text-sm mb-2">Reproducción simple</h3>
          <p className="text-marx-crema-oscuro text-sm mb-2">
            Toda la plusvalía se consume (no se acumula). Para que el producto se realice y se repongan medios y fuerza de trabajo, debe cumplirse:
          </p>
          <p className="font-mono text-marx-crema text-center my-3">I(v₁ + p₁) = II(c₂)</p>
          <p className="text-marx-crema-oscuro text-sm">
            Es decir: el valor que el Sector I destina a salarios y consumo capitalista debe igualar al capital constante que el Sector II necesita reponer. Así I vende a II sus medios de producción y II vende a I (y a sus propios obreros) medios de consumo.
          </p>
        </div>

        <div className="panel border-l-marx-dorado mb-4">
          <h3 className="font-display font-semibold text-marx-dorado uppercase text-sm mb-2">Reproducción ampliada</h3>
          <p className="text-marx-crema-oscuro text-sm mb-2">
            Parte de la plusvalía se acumula (se reinvierte en más c y v). Las condiciones de equilibrio son más complejas: una parte de p₁ y p₂ se ahorra e invierte. La condición fundamental sigue siendo el intercambio entre sectores: lo que I no consume de (v₁ + p₁) debe intercambiarse con II para reponer c₂ y permitir la acumulación en ambos sectores.
          </p>
          <p className="text-marx-crema-oscuro text-sm">
            Marx muestra que en el capitalismo real estas condiciones <strong>no se cumplen de forma armónica</strong>: hay desproporciones, crisis de realización y tendencia a la sobreacumulación.
          </p>
        </div>

        <p className="text-sm text-marx-crema-oscuro italic">Fuente: <em>El Capital</em>, Libro II, cap. 20–21.</p>
      </section>

      {/* Resumen fórmulas */}
      <section className="panel">
        <h2 className="font-display font-semibold text-marx-dorado uppercase text-sm mb-3">Resumen de fórmulas</h2>
        <ul className="space-y-2 text-marx-crema-oscuro text-sm">
          <li><strong className="text-marx-dorado-claro">M-D-M:</strong> Circulación simple; objetivo = valor de uso.</li>
          <li><strong className="text-marx-dorado-claro">D-M-D′:</strong> Circulación del capital; D′ = D + plusvalía.</li>
          <li><strong className="text-marx-dorado-claro">Tasa de plusvalía:</strong> p′ = p/v (plusvalía ÷ capital variable).</li>
          <li><strong className="text-marx-dorado-claro">Reproducción simple:</strong> I(v₁ + p₁) = II(c₂).</li>
        </ul>
        <p className="mt-4">
          <Link href="/conceptos" className="link-concepto">Ver glosario de conceptos</Link> · <Link href="/simulador" className="link-concepto">Simulador de la fábrica</Link>
        </p>
      </section>
    </div>
  )
}
