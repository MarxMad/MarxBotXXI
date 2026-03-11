'use client'

import { useState } from 'react'

export function SimuladorEjercitoReserva() {
  const [empleados, setEmpleados] = useState(80)
  const [desempleados, setDesempleados] = useState(20)
  const total = empleados + desempleados
  const tasaDesempleo = total > 0 ? (desempleados / total) * 100 : 0
  const salarioTipico = Math.max(20, Math.min(80, 70 - tasaDesempleo * 0.5))

  return (
    <div className="panel border-l-marx-dorado-claro">
      <h3 className="text-marx-dorado">4. Ejército industrial de reserva</h3>
      <p className="text-sm text-marx-crema-oscuro mb-4">
        Los <strong>desempleados</strong> son el “ejército industrial de reserva”: compiten por los puestos. Cuando hay <strong>muchos desempleados</strong>, el capital puede ofrecer salarios más bajos. Cuando hay <strong>pocos</strong>, los obreros tienen más fuerza. Mueve los sliders y observa el efecto sobre el “salario típico” en este modelo simplificado.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 mb-4">
        <div>
          <label className="block text-sm text-marx-crema-oscuro mb-1">Obreros empleados</label>
          <input
            type="range"
            min={0}
            max={100}
            value={empleados}
            onChange={(e) => setEmpleados(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-marx-crema font-semibold ml-2">{empleados}</span>
        </div>
        <div>
          <label className="block text-sm text-marx-crema-oscuro mb-1">Desempleados (reserva)</label>
          <input
            type="range"
            min={0}
            max={100}
            value={desempleados}
            onChange={(e) => setDesempleados(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-marx-crema font-semibold ml-2">{desempleados}</span>
        </div>
      </div>
      <div className="h-8 flex rounded overflow-hidden border border-marx-dorado/50">
        <div
          className="bg-marx-good flex items-center justify-center text-xs font-bold text-white"
          style={{ width: `${total > 0 ? (empleados / total) * 100 : 50}%` }}
        >
          Empleados
        </div>
        <div
          className="bg-marx-warn flex items-center justify-center text-xs font-bold text-marx-negro"
          style={{ width: `${total > 0 ? (desempleados / total) * 100 : 50}%` }}
        >
          Desempleados
        </div>
      </div>
      <p className="text-sm text-marx-crema-oscuro mt-3">
        Tasa de desempleo: <strong>{tasaDesempleo.toFixed(0)}%</strong>. Salario típico (modelo simplificado): <strong>{salarioTipico.toFixed(0)}</strong> — baja cuando hay más desempleados.
      </p>
    </div>
  )
}
