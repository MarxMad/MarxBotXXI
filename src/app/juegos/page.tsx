'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'

const parejas: [string, string][] = [
  ['Plusvalía', 'Trabajo no pagado al obrero'],
  ['Materialismo histórico', 'La vida determina la conciencia'],
  ['Proletariado', 'Clase que vende su fuerza de trabajo'],
  ['Burguesía', 'Clase que posee los medios de producción'],
  ['Alienación', 'Enajenación del producto del trabajo'],
  ['Lucha de clases', 'Motor de la historia para Marx'],
]

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

export default function JuegosPage() {
  const [volteadas, setVolteadas] = useState<Set<number>>(new Set())
  const [acertadas, setAcertadas] = useState<Set<number>>(new Set())
  const [ultimasDos, setUltimasDos] = useState<number[]>([])
  const [items, setItems] = useState(() => {
    const flat: { id: number; texto: string; pareja: number }[] = []
    parejas.forEach(([a, b], i) => {
      flat.push({ id: i * 2, texto: a, pareja: i })
      flat.push({ id: i * 2 + 1, texto: b, pareja: i })
    })
    return shuffle(flat)
  })

  const handleClick = useCallback((index: number) => {
    if (volteadas.has(index) || acertadas.has(items[index].pareja)) return
    if (ultimasDos.length === 2) {
      setVolteadas(new Set())
      setUltimasDos([])
      return
    }
    const nueva = new Set(volteadas).add(index)
    const nuevasDos = [...ultimasDos, index]
    setVolteadas(nueva)
    setUltimasDos(nuevasDos)
    if (nuevasDos.length === 2) {
      const [i, j] = nuevasDos
      if (items[i].pareja === items[j].pareja) {
        setAcertadas((prev) => new Set(prev).add(items[i].pareja))
      }
      setTimeout(() => {
        setVolteadas(new Set())
        setUltimasDos([])
      }, 800)
    }
  }, [volteadas, acertadas, ultimasDos, items])

  const reiniciar = () => {
    setVolteadas(new Set())
    setAcertadas(new Set())
    setUltimasDos([])
    setItems((prev) => shuffle([...prev]))
  }

  const todasAcertadas = acertadas.size === parejas.length

  return (
    <div className="min-h-screen">
      <p className="max-w-4xl mx-auto px-4 pt-6 pb-2">
        <Link href="/" className="link-concepto">← Inicio</Link>
      </p>
      <PageHero
        title="Juegos de Marx"
        subtitle="Aprende jugando"
        description="Conceptos clave en formato juego. Encuentra las parejas: concepto y definición."
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="panel mb-8">
        <h2 className="font-display text-lg font-bold text-marx-dorado mb-4">Memoria: conceptos marxistas</h2>
        <p className="text-sm text-marx-crema-oscuro mb-4">
          Voltea dos tarjetas. Si concepto y definición forman pareja, se quedan descubiertas. Si no, se vuelven a tapar. Encuentra todas las parejas.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {items.map((item, index) => {
            const parejaIndex = item.pareja
            const estaVolteada = volteadas.has(index) || acertadas.has(parejaIndex)
            return (
              <button
                key={`${item.id}-${index}`}
                type="button"
                onClick={() => handleClick(index)}
                className={`min-h-[80px] p-3 rounded-lg border-2 text-left text-sm font-medium transition-all ${
                  acertadas.has(parejaIndex)
                    ? 'bg-marx-good/20 border-marx-good text-marx-good'
                    : estaVolteada
                    ? 'bg-marx-negro-surface border-marx-dorado text-marx-crema'
                    : 'bg-marx-rojo/10 border-marx-rojo/30 text-marx-rojo-claro hover:bg-marx-rojo/20'
                }`}
              >
                {estaVolteada ? item.texto : '?'}
              </button>
            )
          })}
        </div>
        {todasAcertadas && (
          <p className="mt-4 text-center font-display font-bold text-marx-rojo-claro">
            ¡Todas las parejas encontradas!
          </p>
        )}
        <div className="mt-4 flex justify-center">
          <button type="button" onClick={reiniciar} className="btn-marx">
            Reiniciar juego
          </button>
        </div>
      </div>

      <section className="panel">
        <h2 className="font-display text-lg font-bold text-marx-dorado mb-2">Más juegos (próximamente)</h2>
        <ul className="text-marx-crema-oscuro text-sm space-y-1">
          <li>· Simulador de jornada laboral (disponible en <Link href="/simulador" className="link-concepto">Simulador de la Fábrica</Link>)</li>
          <li>· Quiz cronológico: ordenar hitos del pensamiento marxista</li>
          <li>· Relacionar citas con obras</li>
          <li>· Marx vs Capital (juego arcade): en el sitio HTML original de Marx en el siglo XXI</li>
        </ul>
      </section>
      </div>
    </div>
  )
}
