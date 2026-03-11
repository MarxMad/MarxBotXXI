'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { preguntasQuiz } from '@/data/preguntasQuiz'

const totalPreguntas = preguntasQuiz.length

/** Preguntas de repaso abiertas (condensadas desde otras páginas) */
const repasoPorTema = [
  {
    titulo: 'Conceptos',
    enlace: '/conceptos',
    preguntas: [
      '¿Por qué el valor de una mercancía no lo determina "el mercado" sino el tiempo de trabajo socialmente necesario?',
      'Explica con un ejemplo numérico: obreros producen X de valor, reciben Y en salarios; ¿qué es la plusvalía?',
      '¿Cómo usa el capital el ejército industrial de reserva para presionar los salarios?',
    ],
  },
  {
    titulo: 'Historia económica — México',
    enlace: '/historia/mexico',
    preguntas: [
      '¿En qué periodos la plusvalía extraída en México fluye sobre todo al exterior (metrópoli o capital extranjero) y en cuáles se reinvierte en industria nacional?',
      '¿Cómo se relaciona el ejército industrial de reserva con la migración y la precarización en el México neoliberal?',
      'Compara el papel del Estado en el Cardenismo y en el neoliberalismo respecto a la relación capital–trabajo.',
    ],
  },
  {
    titulo: 'Historia económica — Global',
    enlace: '/historia/global',
    preguntas: [
      '¿Por qué Marx considera que la plusvalía solo la crea el trabajo vivo (capital variable) y no las máquinas (capital constante)?',
      'Relaciona el imperialismo con la necesidad del capital de realizar la plusvalía (encontrar mercados y fuentes de materias primas baratas).',
      '¿Cómo se manifiesta el ejército industrial de reserva en las crisis de 1929 y 2008?',
    ],
  },
  {
    titulo: 'Proletariado y crisis (era tech e IA)',
    enlace: '/proletariado-crisis',
    preguntas: [
      '¿Por qué en Marx la plusvalía solo la crea el trabajo vivo y no las máquinas ni la IA? ¿Quién se beneficia cuando una empresa "automatiza"?',
      '¿Cómo se relaciona el ejército industrial de reserva con el trabajo en plataformas y la precarización hoy?',
      'Explica con el concepto de "realización" por qué una economía con salarios muy bajos puede entrar en crisis (no se vende lo producido).',
    ],
  },
]

function getExplicacion(p: (typeof preguntasQuiz)[0]): string {
  if (p.explicacion) return p.explicacion
  const correcta = p.opciones[p.correcta]
  if (p.repasa) return `La respuesta correcta es: «${correcta}». Repasa el tema en la sección indicada abajo.`
  return `La respuesta correcta es: «${correcta}».`
}

export default function EjerciciosPage() {
  const [indiceActual, setIndiceActual] = useState(0)
  const [respuestas, setRespuestas] = useState<Record<number, number>>({})
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const [terminado, setTerminado] = useState(false)

  const pregunta = preguntasQuiz[indiceActual]
  const esUltima = indiceActual === totalPreguntas - 1
  const elegida = respuestas[pregunta.id]
  const acerto = elegida !== undefined && elegida === pregunta.correcta
  const explicacion = getExplicacion(pregunta)

  const handleElegir = (opcionIndex: number) => {
    if (mostrarResultado) return
    setRespuestas((r) => ({ ...r, [pregunta.id]: opcionIndex }))
    setMostrarResultado(true)
  }

  const siguiente = () => {
    if (!mostrarResultado) return
    if (esUltima) {
      setTerminado(true)
      return
    }
    setIndiceActual((i) => i + 1)
    setMostrarResultado(false)
  }

  const reiniciar = () => {
    setIndiceActual(0)
    setRespuestas({})
    setMostrarResultado(false)
    setTerminado(false)
  }

  const correctasTotal = preguntasQuiz.filter((p) => respuestas[p.id] === p.correcta).length

  return (
    <div className="min-h-screen">
      <p className="max-w-3xl mx-auto px-4 pt-6 pb-2">
        <Link href="/" className="link-concepto">← Inicio</Link>
      </p>
      <PageHero
        title="Ejercicios y repaso"
        subtitle="Cuestionario y preguntas por tema"
        description="Cuestionario en forma de carrusel: una pregunta cada vez. Revisa el resultado y la explicación, y al final tu puntuación. Incluye preguntas de repaso por tema."
      />
      <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="panel border-l-marx-dorado mb-8">
        <p className="text-marx-crema-oscuro mb-2">
          <strong>Cuestionario en forma de carrusel:</strong> una pregunta cada vez. Elige una opción, revisa el resultado y la explicación, y avanza con «Siguiente». Al final verás tu puntuación total.
        </p>
        <p className="text-sm text-marx-crema-oscuro">
          Recomendado: repasa <Link href="/conceptos" className="link-concepto">Conceptos</Link>, <Link href="/teorias" className="link-concepto">Teorías</Link> y los <Link href="/simulador" className="link-concepto">Simuladores</Link> antes. Si fallas una pregunta, usa el enlace «Repasa» para ir a la sección indicada.
        </p>
      </div>

      {/* Carrusel del cuestionario */}
      <section className="mb-12" aria-label="Cuestionario de opción múltiple">
        <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide mb-4">
          Cuestionario — {totalPreguntas} preguntas
        </h2>

        {terminado ? (
          <div className="panel text-center border-marx-dorado">
            <p className="text-xl font-display font-bold text-marx-rojo-claro">
              Resultado: {correctasTotal} / {totalPreguntas}
            </p>
            <p className="text-marx-crema-oscuro mt-2">
              {correctasTotal === totalPreguntas
                ? '¡Muy bien! Has acertado todas. Sigue con las preguntas de repaso por tema o profundiza en Teorías y Libros.'
                : correctasTotal >= totalPreguntas * 0.7
                ? 'Bien. Repasa las que fallaste usando los enlaces «Repasa» y vuelve a intentar.'
                : 'Repasa Conceptos y Teorías y vuelve a hacer el cuestionario.'}
            </p>
            <button type="button" onClick={reiniciar} className="mt-6 btn-marx">
              Volver a empezar
            </button>
          </div>
        ) : (
          <>
            {/* Barra de progreso */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-sm text-marx-dorado uppercase tracking-wide">
                Pregunta {indiceActual + 1} de {totalPreguntas}
              </span>
              <div className="flex-1 h-2 bg-marx-negro-surface rounded-full overflow-hidden max-w-[200px]">
                <div
                  className="h-full bg-marx-dorado transition-all duration-300"
                  style={{ width: `${((indiceActual + 1) / totalPreguntas) * 100}%` }}
                />
              </div>
            </div>

            <div className="panel">
              <p className="text-xs text-marx-dorado uppercase tracking-wide mb-1">{pregunta.tema}</p>
              <p className="font-medium text-marx-crema mb-4">
                {pregunta.id}. {pregunta.pregunta}
              </p>

              <ul className="space-y-2">
                {pregunta.opciones.map((op, i) => {
                  const esCorrecta = i === pregunta.correcta
                  const esElegida = elegida === i
                  const mostrar = mostrarResultado
                  const estiloCorrecto = mostrar && esCorrecta ? 'bg-marx-good/25 text-marx-good border border-marx-good/50' : ''
                  const estiloError = mostrar && esElegida && !esCorrecta ? 'bg-marx-rojo/20 text-marx-rojo-claro border border-marx-rojo/50' : ''
                  const estiloBase = !mostrar ? 'hover:bg-marx-negro-surface/80' : ''

                  return (
                    <li key={i}>
                      <button
                        type="button"
                        onClick={() => handleElegir(i)}
                        disabled={mostrarResultado}
                        className={`w-full text-left flex items-center gap-3 p-3 rounded border border-transparent transition-colors cursor-pointer disabled:cursor-default ${estiloCorrecto} ${estiloError} ${estiloBase}`}
                      >
                        <span
                          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                            mostrar && esCorrecta
                              ? 'border-marx-good bg-marx-good/20'
                              : mostrar && esElegida && !esCorrecta
                              ? 'border-marx-rojo bg-marx-rojo/20'
                              : 'border-marx-dorado'
                          }`}
                        >
                          {mostrar && esCorrecta ? '✓' : mostrar && esElegida && !esCorrecta ? '✗' : String.fromCharCode(65 + i)}
                        </span>
                        {op}
                      </button>
                    </li>
                  )
                })}
              </ul>

              {/* Resultado y explicación */}
              {mostrarResultado && (
                <div
                  className={`mt-5 pt-4 border-t ${acerto ? 'border-marx-good/40' : 'border-marx-rojo/40'}`}
                  role="status"
                  aria-live="polite"
                >
                  <p className={`font-display font-semibold uppercase text-sm mb-2 ${acerto ? 'text-marx-good' : 'text-marx-rojo-claro'}`}>
                    {acerto ? 'Correcto' : 'Incorrecto'}
                  </p>
                  <p className="text-marx-crema-oscuro text-[0.95rem] leading-relaxed">{explicacion}</p>
                  {pregunta.repasa && (
                    <p className="mt-3 text-sm">
                      Repasa: <Link href={pregunta.repasa} className="link-concepto">Ver sección relacionada →</Link>
                    </p>
                  )}
                </div>
              )}

              {/* Botón Siguiente */}
              {mostrarResultado && (
                <div className="mt-6 flex justify-end">
                  <button type="button" onClick={siguiente} className="btn-marx">
                    {esUltima ? 'Ver resultado final' : 'Siguiente pregunta'}
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </section>

      {/* Preguntas de repaso condensadas */}
      <section className="mb-8" aria-label="Preguntas de repaso por tema">
        <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide mb-4">
          Preguntas de repaso por tema (para debate o estudio)
        </h2>
        <p className="text-marx-crema-oscuro text-sm mb-6">
          Estas preguntas están repartidas en otras páginas del sitio; aquí las reunimos para que puedas usarlas como guía de estudio o para debate en clase. No tienen opción múltiple: son para reflexionar o redactar por escrito.
        </p>
        <div className="space-y-8">
          {repasoPorTema.map((bloque) => (
            <div key={bloque.titulo} className="panel border-l-marx-dorado">
              <h3 className="font-display font-semibold text-marx-dorado uppercase text-sm mb-2">
                <Link href={bloque.enlace} className="hover:underline">{bloque.titulo}</Link>
              </h3>
              <ol className="list-decimal list-inside text-marx-crema-oscuro text-[0.95rem] space-y-2">
                {bloque.preguntas.map((pr, i) => (
                  <li key={i}>{pr}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2 className="font-display text-lg font-bold text-marx-rojo-claro mb-2">Más práctica</h2>
        <p className="text-marx-crema-oscuro text-sm mb-4">
          <Link href="/simulador" className="link-concepto">Simuladores</Link>: un día de trabajo, jornada laboral, fábrica y ejército de reserva. <Link href="/juegos" className="link-concepto">Juegos</Link>: memoria de conceptos marxistas.
        </p>
        <Link href="/juegos" className="link-concepto">Ir a juegos didácticos →</Link>
      </section>
      </div>
    </div>
  )
}
