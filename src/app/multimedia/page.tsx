import Link from 'next/link'

export default function MultimediaPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <p className="mb-6">
        <Link href="/" className="link-concepto">← Inicio</Link>
      </p>
      <section aria-label="Recursos y multimedia">
        <h1 className="seccion-titulo">Recursos y multimedia</h1>
        <p className="mb-5 text-marx-crema-oscuro">
          Vídeos, diagramas y animaciones para apoyar las clases de economía. Todo en el navegador, sin instalar nada.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="panel">
            <h2 className="font-display font-semibold text-sm text-marx-dorado uppercase tracking-wide mb-3">Vídeos didácticos</h2>
            <p className="text-[0.95rem] text-marx-crema-oscuro mb-3">
              Aquí puedes incrustar vídeos de YouTube o Vimeo: explicaciones de <em>El Capital</em>, documentales sobre historia económica de México o del movimiento obrero.
            </p>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded border-2 border-marx-dorado bg-marx-negro">
              <iframe
                src="https://www.youtube.com/embed/3H_Ol2Q4sEU"
                title="Vídeo: introducción a la economía marxista (ejemplo)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <p className="mt-2 text-sm italic text-marx-crema-oscuro">
              Ejemplo: canal de economía. Cambia el <code className="bg-marx-negro px-1 rounded text-[0.9em]">embed</code> por el ID de tu vídeo para clase.
            </p>
          </div>
          <div className="panel">
            <h2 className="font-display font-semibold text-sm text-marx-dorado uppercase tracking-wide mb-3">Flujo: trabajo → valor → plusvalía</h2>
            <p className="text-[0.95rem] text-marx-crema-oscuro mb-3">
              Esquema simplificado de cómo el trabajo vivo crea valor y cómo una parte se convierte en plusvalía apropiada por el capital.
            </p>
            <figure className="m-0 mt-2 max-w-full" aria-describedby="desc-diagrama">
              <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" className="w-full h-auto block">
                <defs>
                  <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="#DAA520" />
                  </marker>
                </defs>
                <rect x="20" y="70" width="70" height="40" rx="4" fill="#8B0000" stroke="#DAA520" strokeWidth="2"/>
                <text x="55" y="95" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="sans-serif">Fuerza de trabajo</text>
                <line x1="90" y1="90" x2="125" y2="90" stroke="#DAA520" strokeWidth="2" markerEnd="url(#arrow)"/>
                <rect x="130" y="70" width="70" height="40" rx="4" fill="#1A1A1A" stroke="#DAA520" strokeWidth="2"/>
                <text x="165" y="95" textAnchor="middle" fill="#E8E0D0" fontSize="12" fontFamily="sans-serif">Valor producido</text>
                <line x1="200" y1="90" x2="235" y2="90" stroke="#DAA520" strokeWidth="2" markerEnd="url(#arrow)"/>
                <rect x="240" y="50" width="70" height="35" rx="4" fill="#5A9C4A" stroke="#DAA520" strokeWidth="2"/>
                <text x="275" y="72" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="sans-serif">Salarios</text>
                <line x1="200" y1="90" x2="235" y2="130" stroke="#DAA520" strokeWidth="2" markerEnd="url(#arrow)"/>
                <rect x="240" y="135" width="70" height="35" rx="4" fill="#B22222" stroke="#DAA520" strokeWidth="2"/>
                <text x="275" y="157" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="sans-serif">Plusvalía</text>
              </svg>
              <figcaption id="desc-diagrama" className="mt-2 text-sm text-marx-crema-oscuro italic">
                El trabajo crea el valor; de ese valor, una parte paga los salarios (capital variable) y el resto es plusvalía que se apropia el capitalista. Fuente: <em>El Capital</em>, Libro I.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  )
}
