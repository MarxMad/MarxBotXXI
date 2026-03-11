'use client'

import { useState } from 'react'

const VALOR_POR_DIA = 100

export function SimuladorUnDia() {
  const [salario, setSalario] = useState(40)
  const plusvalia = Math.max(0, VALOR_POR_DIA - salario)
  const porcentajeSalario = (salario / VALOR_POR_DIA) * 100
  const porcentajePlusvalia = (plusvalia / VALOR_POR_DIA) * 100

  return (
    <div className="panel border-l-marx-good">
      <h3 className="text-marx-dorado">1. Un día de trabajo: ¿de dónde sale la plusvalía?</h3>
      <p className="text-sm text-marx-crema-oscuro mb-4">
        Para Marx, el <strong>valor</strong> de lo producido lo crea el <strong>trabajo</strong>. En este ejemplo, <strong>un obrero en un día</strong> crea {VALOR_POR_DIA} unidades de valor. El capitalista le paga un <strong>salario</strong>. Lo que sobra es la <strong>plusvalía</strong>: se la queda el capitalista.
      </p>
      <p className="text-center font-mono text-marx-crema text-lg mb-2">
        Valor creado − Salario = Plusvalía
      </p>
      <p className="text-center font-mono text-marx-dorado-claro text-xl mb-4">
        {VALOR_POR_DIA} − <input
          type="number"
          min={0}
          max={VALOR_POR_DIA}
          value={salario}
          onChange={(e) => setSalario(Math.max(0, Math.min(VALOR_POR_DIA, Number(e.target.value) || 0)))}
          className="w-14 px-1 py-0.5 bg-marx-negro border border-marx-dorado rounded text-center inline-block"
        /> = <strong>{plusvalia}</strong>
      </p>
      <div className="h-8 flex rounded overflow-hidden border border-marx-dorado/50">
        <div
          className="bg-marx-good transition-all flex items-center justify-center text-xs font-bold text-white"
          style={{ width: `${porcentajeSalario}%` }}
        >
          {salario} salario
        </div>
        <div
          className="bg-marx-rojo transition-all flex items-center justify-center text-xs font-bold text-white"
          style={{ width: `${porcentajePlusvalia}%` }}
        >
          {plusvalia} plusvalía
        </div>
      </div>
      <p className="text-xs text-marx-crema-oscuro mt-2 text-center">
        La barra es el valor que creaste en un día. Verde = lo que te pagan. Rojo = lo que se apropia el capitalista.
      </p>
    </div>
  )
}
