'use client'

import { useState, useEffect } from 'react'

export function SimuladorJornada() {
  const [horasJornada, setHorasJornada] = useState(8)
  const [horasParaSalario, setHorasParaSalario] = useState(3)
  const plustrabajo = Math.max(0, horasJornada - horasParaSalario)
  const pctNecesario = horasJornada > 0 ? (horasParaSalario / horasJornada) * 100 : 0
  const pctPlus = horasJornada > 0 ? (plustrabajo / horasJornada) * 100 : 0

  useEffect(() => {
    if (horasParaSalario > horasJornada) setHorasParaSalario(horasJornada)
  }, [horasJornada, horasParaSalario])

  return (
    <div className="panel border-l-marx-dorado">
      <h3 className="text-marx-dorado">2. La jornada laboral: trabajo necesario y plustrabajo</h3>
      <p className="text-sm text-marx-crema-oscuro mb-4">
        Marx divide tu jornada en dos partes. <strong>Trabajo necesario</strong>: las horas que equivalen a lo que te pagan. <strong>Plustrabajo</strong>: el resto; el valor que creas ahí es la <strong>plusvalía</strong>. Si alargan la jornada sin subirte el sueldo, aumenta el plustrabajo (plusvalía absoluta). Si aumentan la productividad, pueden bajar las “horas necesarias” (plusvalía relativa).
      </p>
      <div className="grid gap-4 sm:grid-cols-2 mb-4">
        <div>
          <label className="block text-sm text-marx-crema-oscuro mb-1">Horas de la jornada</label>
          <input
            type="range"
            min={6}
            max={12}
            value={horasJornada}
            onChange={(e) => setHorasJornada(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-marx-crema font-semibold ml-2">{horasJornada} h</span>
        </div>
        <div>
          <label className="block text-sm text-marx-crema-oscuro mb-1">Horas que “trabajas para tu salario”</label>
          <input
            type="range"
            min={0}
            max={horasJornada}
            value={horasParaSalario}
            onChange={(e) => setHorasParaSalario(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-marx-crema font-semibold ml-2">{horasParaSalario} h</span>
        </div>
      </div>
      <div className="h-10 flex rounded overflow-hidden border border-marx-dorado/50">
        <div
          className="bg-marx-good flex items-center justify-center text-sm font-bold text-white"
          style={{ width: `${pctNecesario}%` }}
        >
          Trabajo necesario
        </div>
        <div
          className="bg-marx-rojo flex items-center justify-center text-sm font-bold text-white"
          style={{ width: `${pctPlus}%` }}
        >
          Plustrabajo
        </div>
      </div>
      <p className="text-sm text-marx-crema-oscuro mt-2">
        En {horasJornada} h trabajas {horasParaSalario} h “para ti” y <strong>{plustrabajo} h para el capitalista</strong> (plustrabajo = plusvalía en tiempo).
      </p>
    </div>
  )
}
