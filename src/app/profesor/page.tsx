import Link from 'next/link'

export default function ProfesorPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <p className="mb-6">
        <Link href="/" className="link-concepto">← Inicio</Link>
      </p>
      <section className="panel panel-profesor" aria-label="Para el profesor">
        <h1 className="seccion-titulo">Para el profesor</h1>
        <p className="mb-5 text-marx-crema-oscuro">
          Sugerencias de uso de Marx en el siglo XXI en clase de economía o historia. Sin evaluación; solo apoyo didáctico.
        </p>
        <ul className="list-disc list-inside text-marx-crema-oscuro leading-relaxed space-y-4">
          <li><strong>Simulador en 15 minutos:</strong> Que el alumnado juegue 5–10 turnos cambiando salarios, contratando/despidiendo e invirtiendo en capital constante. Después comentar: ¿qué pasó con la plusvalía cuando bajaron salarios? ¿Y cuando despidieron obreros? Enlazar con <Link href="/conceptos" className="link-concepto">Conceptos</Link> (plusvalía, capital variable/constante, ejército de reserva).</li>
          <li><strong>Historia México en 2 sesiones:</strong> Sesión 1: <Link href="/historia/mexico/periodo-colonia" className="link-concepto">Colonia</Link>, <Link href="/historia/mexico/periodo-porfiriato" className="link-concepto">Porfiriato</Link>, <Link href="/historia/mexico/periodo-revolucion-mexico" className="link-concepto">Revolución</Link> (quién extrae plusvalía, quién resiste). Sesión 2: <Link href="/historia/mexico/periodo-cardenismo" className="link-concepto">Cardenismo</Link>, <Link href="/historia/mexico/periodo-isi" className="link-concepto">ISI</Link>, <Link href="/historia/mexico/periodo-neoliberalismo" className="link-concepto">neoliberalismo</Link> (papel del Estado, precarización). Usar la <Link href="/linea-tiempo" className="link-concepto">línea de tiempo</Link> para ubicar periodos.</li>
          <li><strong>Historia global + El Capital:</strong> <Link href="/historia/global/periodo-revolucion-industrial" className="link-concepto">Revolución industrial</Link> como ejemplo del Libro I (fábrica, plusvalía, ejército de reserva). <Link href="/historia/global/periodo-crisis-29" className="link-concepto">Crisis 1929</Link> y <Link href="/historia/global/periodo-crisis-08" className="link-concepto">2008</Link> para hablar de realización y de quién paga las crisis. Enlaces a <Link href="/conceptos" className="link-concepto">Conceptos</Link> en cada ficha.</li>
          <li><strong>Repaso antes del examen:</strong> Usar las Preguntas de repaso al final de cada sección (México, Global, Conceptos) para debate en clase o como guía de estudio.</li>
          <li><strong>Recursos:</strong> <em>El Capital</em>, Libro I (cap. 1 valor; cap. 7–8 plusvalía; cap. 25 ejército de reserva). <em>Manifiesto del Partido Comunista</em> (lucha de clases). Lenin, <em>El imperialismo…</em> para colonialismo/imperialismo.</li>
        </ul>
        <p className="mt-6 text-marx-crema-oscuro">
          Más actividades: <Link href="/teorias" className="link-concepto">Teorías</Link>, <Link href="/libros" className="link-concepto">Libros</Link>, <Link href="/ejercicios" className="link-concepto">Ejercicios</Link> y <Link href="/juegos" className="link-concepto">Juegos</Link>.
        </p>
      </section>
    </div>
  )
}
