'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import Link from 'next/link'

interface Estado {
  obreros: number
  salarioPorObrero: number
  capitalConstante: number
  reservaObreros: number
  dinero: number
  turno: number
  valorProducidoEsteTurno: number
  plusvaliaEsteTurno: number
}

const estadoInicial: Estado = {
  obreros: 0,
  salarioPorObrero: 10,
  capitalConstante: 0,
  reservaObreros: 100,
  dinero: 500,
  turno: 0,
  valorProducidoEsteTurno: 0,
  plusvaliaEsteTurno: 0,
}

function getCapitalVariable(estado: Estado) {
  return estado.obreros * estado.salarioPorObrero
}

function avanzarTurno(
  estado: Estado,
  acciones: { salario: number; contratar: number; despedir: number; invertir: number }
): Estado {
  const salario = Math.max(1, acciones.salario || estado.salarioPorObrero)
  const contratar = Math.max(0, acciones.contratar || 0)
  const despedir = Math.max(0, acciones.despedir || 0)
  let invertir = Math.max(0, acciones.invertir || 0)

  let obreros = estado.obreros + contratar - despedir
  obreros = Math.max(0, obreros)
  let reservaObreros = estado.reservaObreros - contratar + despedir
  reservaObreros = Math.max(0, reservaObreros)

  if (invertir > estado.dinero) invertir = estado.dinero
  const capitalConstante = estado.capitalConstante + invertir
  let dinero = estado.dinero - invertir

  const productividad = 1 + capitalConstante / 2000
  const valorProducidoEsteTurno = obreros * 8 * productividad
  const plusvaliaEsteTurno = Math.max(
    0,
    valorProducidoEsteTurno - obreros * salario
  )
  dinero += valorProducidoEsteTurno - obreros * salario

  return {
    obreros,
    salarioPorObrero: salario,
    capitalConstante,
    reservaObreros,
    dinero,
    turno: estado.turno + 1,
    valorProducidoEsteTurno,
    plusvaliaEsteTurno,
  }
}

export function SimuladorFabrica() {
  const [estado, setEstado] = useState<Estado>(estadoInicial)
  const [salarioInput, setSalarioInput] = useState(10)
  const [contratarInput, setContratarInput] = useState(0)
  const [despedirInput, setDespedirInput] = useState(0)
  const [invertirInput, setInvertirInput] = useState(0)
  const [historial, setHistorial] = useState<{ turno: number; plusvalia: number; valor: number; valorPorObrero: number; plusvaliaPorObrero: number }[]>([])
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstanceRef = useRef<{ destroy: () => void } | null>(null)
  const [vista, setVista] = useState<'capitalista' | 'obrero'>('capitalista')

  const capitalVariable = getCapitalVariable(estado)

  const handleAvanzar = useCallback(() => {
    const acciones = {
      salario: salarioInput,
      contratar: contratarInput,
      despedir: despedirInput,
      invertir: invertirInput,
    }
    setEstado((e) => {
      const next = avanzarTurno(e, acciones)
      setHistorial((h) => [
        ...h,
        {
          turno: next.turno,
          plusvalia: next.plusvaliaEsteTurno,
          valor: next.valorProducidoEsteTurno,
          valorPorObrero: next.obreros > 0 ? next.valorProducidoEsteTurno / next.obreros : 0,
          plusvaliaPorObrero: next.obreros > 0 ? (next.valorProducidoEsteTurno - next.obreros * next.salarioPorObrero) / next.obreros : 0,
        },
      ])
      return next
    })
    setContratarInput(0)
    setDespedirInput(0)
    setInvertirInput(0)
  }, [salarioInput, contratarInput, despedirInput, invertirInput])

  useEffect(() => {
    setSalarioInput(estado.salarioPorObrero)
  }, [estado.salarioPorObrero])

  useEffect(() => {
    if (typeof window === 'undefined' || !chartRef.current) return
    import('chart.js/auto').then(({ default: Chart }) => {
      const ctx = chartRef.current!.getContext('2d')
      if (!ctx) return
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy()
        chartInstanceRef.current = null
      }
      chartInstanceRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: historial.map((h) => String(h.turno)),
          datasets: [
            {
              label: 'Plusvalía (este turno)',
              data: historial.map((h) => h.plusvalia),
              borderColor: '#B22222',
              backgroundColor: 'rgba(178, 34, 34, 0.1)',
              fill: true,
              tension: 0.3,
            },
            {
              label: 'Valor producido (este turno)',
              data: historial.map((h) => h.valor),
              borderColor: '#DAA520',
              backgroundColor: 'rgba(218, 165, 32, 0.1)',
              fill: true,
              tension: 0.3,
            },
            {
              label: 'Valor por obrero',
              data: historial.map((h) => h.valorPorObrero),
              borderColor: '#5A9C4A',
              backgroundColor: 'rgba(90, 156, 74, 0.1)',
              fill: false,
              tension: 0.3,
            },
            {
              label: 'Plusvalía por obrero',
              data: historial.map((h) => h.plusvaliaPorObrero),
              borderColor: '#CC3333',
              backgroundColor: 'rgba(204, 51, 51, 0.1)',
              fill: false,
              tension: 0.3,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 2,
          plugins: {
            legend: { labels: { color: '#E8E0D0' } },
          },
          scales: {
            x: {
              ticks: { color: '#E8E0D0', maxTicksLimit: 12 },
              grid: { color: 'rgba(255,255,255,0.1)' },
            },
            y: {
              ticks: { color: '#E8E0D0' },
              grid: { color: 'rgba(255,255,255,0.1)' },
            },
          },
        },
      }) as { destroy: () => void }
    })
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy()
        chartInstanceRef.current = null
      }
    }
  }, [historial])

  const mostrarResumen = estado.turno > 0
  const salariosTurno = (estado.obreros * estado.salarioPorObrero).toFixed(0)
  const valorPorObrero = estado.obreros > 0 ? estado.valorProducidoEsteTurno / estado.obreros : 0
  const plusvaliaPorObrero = estado.obreros > 0 ? estado.plusvaliaEsteTurno / estado.obreros : 0
  const tasaExplotacion = estado.salarioPorObrero > 0 ? (plusvaliaPorObrero / estado.salarioPorObrero) * 100 : 0

  return (
    <section id="simulador" className="mb-10" aria-label="Simulador de la fábrica">
      <h2 className="seccion-titulo">Simulador de la Fábrica</h2>
      <p className="mb-5 text-marx-crema-oscuro">
        Cada <strong>turno = 1 día</strong>: los obreros producen valor, reciben un salario y el resto es plusvalía que se apropia el capital. Puedes jugar como <strong>capitalista</strong> (contratar, fijar salario, invertir) y ver la misma situación desde el <strong>lado del proletariado</strong>: cuánto crea cada obrero, cuánto recibe y cuánto se lleva el patrón.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        <button
          type="button"
          onClick={() => setVista('capitalista')}
          className={`px-4 py-2 rounded border-2 font-display font-semibold text-sm uppercase transition-all ${
            vista === 'capitalista'
              ? 'bg-marx-rojo text-marx-blanco border-marx-dorado'
              : 'bg-marx-negro-surface text-marx-crema-oscuro border-white/20 hover:border-marx-dorado'
          }`}
        >
          Vista capitalista
        </button>
        <button
          type="button"
          onClick={() => setVista('obrero')}
          className={`px-4 py-2 rounded border-2 font-display font-semibold text-sm uppercase transition-all ${
            vista === 'obrero'
              ? 'bg-marx-rojo text-marx-blanco border-marx-dorado'
              : 'bg-marx-negro-surface text-marx-crema-oscuro border-white/20 hover:border-marx-dorado'
          }`}
        >
          Vista obrera (proletariado)
        </button>
      </div>

      <div className="panel border-l-marx-dorado mb-4">
        <h3>Cómo jugar</h3>
        <ol className="list-decimal list-inside text-marx-crema-oscuro text-[0.95rem] space-y-1">
          <li><strong>Contrata obreros</strong> (hay gente desempleada en el “ejército de reserva” que puedes contratar).</li>
          <li>Fija el <strong>salario</strong> que pagas por obrero y día.</li>
          <li>Opcional: <strong>invierte en máquinas</strong> para que cada obrero produzca más (en Marx: “capital constante”).</li>
          <li>Pulsa <strong>«Avanzar turno»</strong>: ese día trabajan, ves cuánto produjeron, cuánto pagaste y cuánto te quedaste (plusvalía).</li>
        </ol>
        <p className="mt-3 text-sm text-marx-crema-oscuro">
          Para las fórmulas de circulación del capital (D-M-D′) y los esquemas de reproducción: <Link href="/matematicas-marx" className="link-concepto">Matemáticas de Marx</Link>.
        </p>
      </div>

      {mostrarResumen && vista === 'obrero' && estado.obreros > 0 && (
        <div className="panel border-l-marx-dorado-claro mb-4 bg-marx-negro-surface/80" aria-live="polite">
          <h3>Desde el obrero: ¿qué pasa con tu trabajo?</h3>
          <p className="text-marx-crema-oscuro mb-3">
            Eres uno de los <strong>{estado.obreros} obreros</strong>. Este día creaste <strong>{valorPorObrero.toFixed(1)} €</strong> de valor (tu trabajo vivo). De eso, te pagaron <strong>{estado.salarioPorObrero} €</strong>. Lo que el capitalista se llevó de <em>tu</em> trabajo —la plusvalía extraída de ti— es <strong>{plusvaliaPorObrero.toFixed(1)} €</strong>.
          </p>
          <p className="text-marx-dorado-claro font-medium">
            Tasa de explotación (plusvalía ÷ salario) ≈ <strong>{tasaExplotacion.toFixed(0)}%</strong>. Por cada euro que te pagan, el capital se apropia <strong>{(tasaExplotacion / 100).toFixed(2)} €</strong> de tu trabajo.
          </p>
        </div>
      )}

      {mostrarResumen && vista === 'capitalista' && (
        <div className="panel border-l-marx-good mb-4" aria-live="polite">
          <h3>Qué pasó este turno</h3>
          {estado.obreros === 0 ? (
            <p className="text-marx-warn">
              No tienes obreros: no se produjo nada este día. Contrata obreros para que trabajen y generar plusvalía.
            </p>
          ) : estado.plusvaliaEsteTurno >= 0 ? (
            <p>
              Hoy tus <strong>{estado.obreros} obreros</strong> produjeron <strong>{estado.valorProducidoEsteTurno.toFixed(1)} €</strong> de valor. Les pagaste <strong>{salariosTurno} €</strong> en salarios. Lo que te quedaste (tu ganancia, en Marx la <em>plusvalía</em>) es <strong>{estado.plusvaliaEsteTurno.toFixed(1)} €</strong>.
            </p>
          ) : (
            <p className="text-marx-warn">
              Hoy tus <strong>{estado.obreros} obreros</strong> produjeron <strong>{estado.valorProducidoEsteTurno.toFixed(1)} €</strong>, pero les pagaste <strong>{salariosTurno} €</strong>. Pagaste más de lo que produjeron: <strong>plusvalía negativa</strong>. Para tener ganancia, el valor producido debe ser mayor que lo que pagas en salarios.
            </p>
          )}
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <div className="panel">
          <h3>Tu fábrica hoy</h3>
          <ul className="space-y-1.5 text-sm">
            <li className="flex justify-between gap-4 py-1 border-b border-white/10">
              <span className="text-marx-crema/90">Obreros trabajando</span>
              <span className="tabular-nums font-semibold text-marx-good">{estado.obreros}</span>
            </li>
            <li className="flex justify-between gap-4 py-1 border-b border-white/10">
              <span className="text-marx-crema/90">Salario por obrero (€/día)</span>
              <span className="tabular-nums font-semibold text-marx-good">{estado.salarioPorObrero}</span>
            </li>
            <li className="flex justify-between gap-4 py-1 border-b border-white/10">
              <span className="text-marx-crema/90">Capital constante (€)</span>
              <span className="tabular-nums font-semibold text-marx-good">{estado.capitalConstante}</span>
            </li>
            <li className="flex justify-between gap-4 py-1 border-b border-white/10">
              <span className="text-marx-crema/90">Capital variable (salarios turno)</span>
              <span className="tabular-nums font-semibold text-marx-good">{capitalVariable}</span>
            </li>
            <li className="flex justify-between gap-4 py-1 border-b border-white/10">
              <span className="text-marx-crema/90">Valor producido hoy</span>
              <span className="tabular-nums font-semibold text-marx-good">{estado.valorProducidoEsteTurno.toFixed(1)}</span>
            </li>
            <li className="flex justify-between gap-4 py-1 border-b border-white/10">
              <span className="text-marx-crema/90">Plusvalía hoy</span>
              <span className="tabular-nums font-semibold text-marx-good">{estado.plusvaliaEsteTurno.toFixed(1)}</span>
            </li>
            <li className="flex justify-between gap-4 py-1 border-b border-white/10">
              <span className="text-marx-crema/90">Ejército de reserva</span>
              <span className="tabular-nums font-semibold text-marx-good">{estado.reservaObreros}</span>
            </li>
            <li className="flex justify-between gap-4 py-1 border-b border-white/10">
              <span className="text-marx-crema/90">Tu caja (€)</span>
              <span className="tabular-nums font-semibold text-marx-good">{Math.round(estado.dinero)}</span>
            </li>
            <li className="flex justify-between gap-4 py-1 border-b border-white/10">
              <span className="text-marx-crema/90">Día (turno)</span>
              <span className="tabular-nums font-semibold text-marx-good">{estado.turno}</span>
            </li>
          </ul>
        </div>

        <div className="panel">
          <h3>Decide y avanza un día</h3>
          <div className="flex flex-wrap gap-4 items-end">
            <div className="flex flex-col gap-1">
              <label htmlFor="input-salario" className="text-sm text-marx-crema/90">Salario por obrero (€/día)</label>
              <input
                id="input-salario"
                type="number"
                min={1}
                value={salarioInput}
                onChange={(e) => setSalarioInput(Number(e.target.value) || 1)}
                className="w-32 px-2 py-1.5 bg-marx-negro border border-white/20 rounded text-marx-crema text-base"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="input-contratar" className="text-sm text-marx-crema/90">Contratar obreros</label>
              <input
                id="input-contratar"
                type="number"
                min={0}
                value={contratarInput}
                onChange={(e) => setContratarInput(Number(e.target.value) || 0)}
                className="w-24 px-2 py-1.5 bg-marx-negro border border-white/20 rounded text-marx-crema"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="input-despedir" className="text-sm text-marx-crema/90">Despedir obreros</label>
              <input
                id="input-despedir"
                type="number"
                min={0}
                value={despedirInput}
                onChange={(e) => setDespedirInput(Number(e.target.value) || 0)}
                className="w-24 px-2 py-1.5 bg-marx-negro border border-white/20 rounded text-marx-crema"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="input-invertir" className="text-sm text-marx-crema/90">Invertir en máquinas (€)</label>
              <input
                id="input-invertir"
                type="number"
                min={0}
                value={invertirInput}
                onChange={(e) => setInvertirInput(Number(e.target.value) || 0)}
                className="w-28 px-2 py-1.5 bg-marx-negro border border-white/20 rounded text-marx-crema"
              />
            </div>
            <button type="button" onClick={handleAvanzar} className="btn-marx">
              Avanzar turno (1 día)
            </button>
          </div>
        </div>
      </div>

      <div className="panel mt-5 md:col-span-2">
        <h3>Evolución por día</h3>
        <p className="text-sm text-marx-crema-oscuro mb-3">
          Cada turno se añade un punto. <strong>Valor por obrero</strong> y <strong>Plusvalía por obrero</strong> muestran la situación desde el lado del proletariado (cuánto crea y cuánto le extraen a cada obrero).
        </p>
        <div className="relative h-[220px] max-w-full">
          <canvas ref={chartRef} width={400} height={220} />
        </div>
      </div>
    </section>
  )
}
