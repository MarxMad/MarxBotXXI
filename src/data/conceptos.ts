export interface Concepto {
  id: string
  termino: string
  definicion: string
}

export const conceptos: Concepto[] = [
  { id: 'concepto-valor', termino: 'Valor', definicion: 'Tiempo de trabajo socialmente necesario para producir una mercancía (El Capital, Libro I, cap. 1).' },
  { id: 'concepto-plusvalia', termino: 'Plusvalía', definicion: 'Trabajo no pagado al obrero; se apropia el capitalista. Plusvalía = valor producido − salarios (Libro I, cap. 7–8).' },
  { id: 'concepto-capital-variable', termino: 'Capital variable', definicion: 'Gasto en fuerza de trabajo (salarios). Es la parte del capital que "crea" plusvalía (Libro I, cap. 8).' },
  { id: 'concepto-capital-constante', termino: 'Capital constante', definicion: 'Medios de producción (máquinas, materias primas). Transfieren su valor al producto pero no crean valor nuevo (Libro I, cap. 8).' },
  { id: 'concepto-ejercito-reserva', termino: 'Ejército industrial de reserva', definicion: 'Desempleados que presionan los salarios a la baja y permiten al capital disponer de mano de obra barata (Libro I, cap. 25).' },
  { id: 'concepto-composicion-organica', termino: 'Composición orgánica del capital', definicion: 'Relación entre capital constante y capital variable; mide el peso de la tecnología frente al trabajo vivo (Libro I, cap. 25).' },
  { id: 'concepto-acumulacion', termino: 'Acumulación', definicion: 'Reinversión de la plusvalía en más capital (constante y variable); ampliación de la escala de producción. Libro I, cap. 24–25.' },
  { id: 'concepto-lucha-clases', termino: 'Lucha de clases', definicion: 'Conflicto entre las clases que producen la riqueza (obreros, campesinos) y las que se apropian del excedente (burguesía, capitalistas). Marx y Engels, Manifiesto del Partido Comunista.' },
  { id: 'concepto-subsuncion-formal', termino: 'Subsunción formal del trabajo al capital', definicion: 'El capital pone bajo su control un proceso de trabajo ya existente (artesanal, gremial) sin transformar su determinación técnica. El trabajador pasa a estar bajo la vigilancia y el mando del capitalista: debe trabajar el tiempo completo y con la intensidad normal; los factores del proceso (material, medios, trabajo vivo) pertenecen al capitalista. La explotación se basa sobre todo en plusvalía absoluta. Marx, Manuscrito 1861-1863; El Capital, Libro I, Cap. VI (inédito).' },
  { id: 'concepto-subsuncion-real', termino: 'Subsunción real del trabajo al capital', definicion: 'El capital revoluciona el proceso de trabajo: ya no solo manda, sino que transforma el modo de producción. Grados: 1) Cooperación (la fuerza productiva social de la cooperación es gratuita para el capital y se presenta como fuerza del capital). 2) División del trabajo manufacturera (los trabajadores son repartidos entre operaciones parciales; la capacidad de trabajo queda reducida a una función del mecanismo). 3) Taller automático basado en maquinaria (el trabajador es accesorio viviente de la maquinaria; tendencia a volver excedentarios a los obreros y a atraer/repeler mano de obra). Marx, Manuscrito 1861-1863.' },
]
