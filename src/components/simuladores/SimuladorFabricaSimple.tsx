'use client'

import { useState } from 'react'

const VALOR_POR_OBRERO_POR_DIA = 100

export function SimuladorFabricaSimple() {
  const [obreros, setObreros] = useState(5)
  const [salario, setSalario] = useState(40)
  const [dias, setDias] = useState(0)
  const valorPorDia = obreros * VALOR_POR_OBRERO_POR_DIA
  const salariosPorDia = obreros * salario
  const plusvaliaPorDia = Math.max(0, valorPorDia - salariosPorDia)
  const totalValor = valorPorDia * dias
  const totalSalarios = salariosPorDia * dias
  const totalPlusvalia = plusvaliaPorDia * dias
  const valorPorObrero = VALOR_POR_OBRERO_POR_DIA
  const plusvaliaPorObrero = obreros > 0 ? plusvaliaPorDia / obreros : 0

  return (
    <div className="panel border-l-marx-rojo">
      <h3 className="text-marx-dorado">3. La fábrica: varios obreros, varios días</h3>
      <p className="text-sm text-marx-crema-oscuro mb-4">
        Misma idea que el simulador 1, pero con <strong>varios obreros</strong> y <strong>varios días</strong>. Cada obrero crea {VALOR_POR_OBRERO_POR_DIA} de valor por día. Fija obreros y salario; avanza días. Abajo ves el total y <strong>por obrero</strong>.
      </p>
      <div className="flex flex-wrap gap-4 items-end mb-4">
        <div>
          <label className="block text-sm text-marx-crema-oscuro mb-1">Nº de obreros</label>
          <input
            type="number"
            min={0}
            max={50}
            value={obreros}
            onChange={(e) => setObreros(Math.max(0, Math.min(50, Number(e.target.value) || 0)))}
            className="w-24 px-2 py-1.5 bg-marx-negro border border-white/20 rounded text-marx-crema"
          />
        </div>
        <div>
          <label className="block text-sm text-marx-crema-oscuro mb-1">Salario por obrero y día</label>
          <input
            type="number"
            min={0}
            max={VALOR_POR_OBRERO_POR_DIA}
            value={salario}
            onChange={(e) => setSalario(Math.max(0, Math.min(VALOR_POR_OBRERO_POR_DIA, Number(e.target.value) || 0)))}
            className="w-24 px-2 py-1.5 bg-marx-negro border border-white/20 rounded text-marx-crema"
          />
        </div>
        <button
          type="button"
          onClick={() => setDias((d) => d + 1)}
          className="btn-marx"
        >
          + 1 día
        </button>
        <button
          type="button"
          onClick={() => setDias(0)}
          className="px-3 py-1.5 border border-white/30 rounded text-sm text-marx-crema-oscuro hover:bg-white/10"
        >
          Reiniciar días
        </button>
      </div>
      {dias > 0 && obreros > 0 && (
        <div className="space-y-3 text-sm">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-marx-negro/50 rounded p-2">
              <p className="text-marx-crema-oscuro">Valor total ({dias} días)</p>
              <p className="text-marx-crema font-bold">{totalValor}</p>
            </div>
            <div className="bg-marx-negro/50 rounded p-2">
              <p className="text-marx-crema-oscuro">Salarios pagados</p>
              <p className="text-marx-good font-bold">{totalSalarios}</p>
            </div>
            <div className="bg-marx-negro/50 rounded p-2">
              <p className="text-marx-crema-oscuro">Plusvalía (ganancia capitalista)</p>
              <p className="text-marx-rojo-claro font-bold">{totalPlusvalia}</p>
            </div>
          </div>
          <p className="text-marx-crema-oscuro border-t border-white/10 pt-2">
            <strong>Por obrero (cada día):</strong> crea {valorPorObrero} de valor, recibe {salario}, el capitalista se lleva <strong>{plusvaliaPorObrero}</strong>. Tasa de explotación: {salario > 0 ? ((plusvaliaPorObrero / salario) * 100).toFixed(0) : 0}%.
          </p>
        </div>
      )}
      {dias === 0 && (
        <p className="text-marx-crema-oscuro text-sm italic">Pulsa «+ 1 día» para simular un día de trabajo.</p>
      )}
    </div>
  )
}
