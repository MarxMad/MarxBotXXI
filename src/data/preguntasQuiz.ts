/**
 * Cuestionario de repaso: conceptos y tesis marxistas.
 * correcta = índice de la opción correcta (0-based).
 */
export interface PreguntaQuiz {
  id: number
  tema: string
  pregunta: string
  opciones: string[]
  correcta: number
  repasa?: string // enlace o texto para repasar, ej. "/conceptos" o "Conceptos → Plusvalía"
  explicacion?: string // por qué es correcta la respuesta (opcional; si no hay, se usa la opción correcta + repasa)
}

export const preguntasQuiz: PreguntaQuiz[] = [
  // Valor y plusvalía (1-6)
  {
    id: 1,
    tema: 'Valor y plusvalía',
    pregunta: 'Según Marx, ¿qué determina el valor de una mercancía?',
    opciones: [
      'La oferta y la demanda en el mercado',
      'El tiempo de trabajo socialmente necesario para producirla',
      'El precio que fija el vendedor',
      'La escasez del bien',
    ],
    correcta: 1,
    repasa: '/conceptos#concepto-valor',
  },
  {
    id: 2,
    tema: 'Valor y plusvalía',
    pregunta: 'La plusvalía es:',
    opciones: [
      'El salario del obrero',
      'El valor creado por el obrero que no le es pagado y se apropia el capitalista',
      'El beneficio del comerciante',
      'El impuesto al capital',
    ],
    correcta: 1,
    repasa: '/conceptos#concepto-plusvalia',
  },
  {
    id: 3,
    tema: 'Valor y plusvalía',
    pregunta: 'Fórmula marxista: Valor producido − Salarios =',
    opciones: ['Capital constante', 'Capital variable', 'Plusvalía', 'Tasa de ganancia'],
    correcta: 2,
    repasa: '/simulador',
  },
  {
    id: 4,
    tema: 'Valor y plusvalía',
    pregunta: '¿Quién crea el valor nuevo (y por tanto la plusvalía) en la producción capitalista?',
    opciones: [
      'Solo las máquinas (capital constante)',
      'Solo el trabajo vivo (fuerza de trabajo)',
      'Las máquinas y el trabajo por igual',
      'El capitalista con su inversión',
    ],
    correcta: 1,
    repasa: '/conceptos#concepto-capital-variable',
  },
  {
    id: 5,
    tema: 'Valor y plusvalía',
    pregunta: 'Capital variable es, en Marx:',
    opciones: [
      'El dinero invertido en máquinas',
      'El gasto en fuerza de trabajo (salarios)',
      'La plusvalía reinvertida',
      'El capital que cambia de sector',
    ],
    correcta: 1,
    repasa: '/conceptos#concepto-capital-variable',
  },
  {
    id: 6,
    tema: 'Valor y plusvalía',
    pregunta: 'Capital constante es:',
    opciones: [
      'Los salarios',
      'Los medios de producción (máquinas, materias primas) que transfieren su valor al producto',
      'La plusvalía',
      'El dinero en efectivo del capitalista',
    ],
    correcta: 1,
    repasa: '/conceptos#concepto-capital-constante',
  },
  // Lucha de clases y materialismo (7-10)
  {
    id: 7,
    tema: 'Materialismo y lucha de clases',
    pregunta: '¿Qué determina en última instancia la estructura de la sociedad, según el materialismo histórico?',
    opciones: [
      'Las ideas de los gobernantes',
      'Las relaciones de producción (base económica)',
      'La religión',
      'La tecnología por sí sola',
    ],
    correcta: 1,
    repasa: '/teorias#materialismo-historico',
  },
  {
    id: 8,
    tema: 'Materialismo y lucha de clases',
    pregunta: '«Proletarios de todos los países, uníos» aparece en:',
    opciones: [
      'El Capital',
      'Manifiesto del Partido Comunista',
      'La ideología alemana',
      'Crítica del programa de Gotha',
    ],
    correcta: 1,
    repasa: '/libros',
  },
  {
    id: 9,
    tema: 'Materialismo y lucha de clases',
    pregunta: 'Para Marx, la historia de las sociedades es fundamentalmente:',
    opciones: [
      'La historia de las ideas',
      'La historia de la lucha de clases',
      'La historia de los grandes hombres',
      'La historia del progreso técnico',
    ],
    correcta: 1,
    repasa: '/teorias#lucha-clases',
  },
  {
    id: 10,
    tema: 'Materialismo y lucha de clases',
    pregunta: 'La alienación del trabajador en Marx incluye:',
    opciones: [
      'Solo no tener propiedad',
      'Enajenarse del producto de su trabajo, del acto de trabajar y de su humanidad genérica',
      'Solo trabajar muchas horas',
      'Solo tener un salario bajo',
    ],
    correcta: 1,
    repasa: '/teorias#alienacion',
  },
  // Ejército de reserva y acumulación (11-14)
  {
    id: 11,
    tema: 'Ejército de reserva y acumulación',
    pregunta: '¿Qué es el ejército industrial de reserva?',
    opciones: [
      'Los soldados que defienden las fábricas',
      'Los desempleados que presionan los salarios a la baja y permiten al capital disponer de mano de obra barata',
      'Los obreros que tienen trabajo estable',
      'El capital constante acumulado',
    ],
    correcta: 1,
    repasa: '/conceptos#concepto-ejercito-reserva',
  },
  {
    id: 12,
    tema: 'Ejército de reserva y acumulación',
    pregunta: 'La acumulación del capital es, en Marx:',
    opciones: [
      'El ahorro del capitalista',
      'La reinversión de la plusvalía en más capital (constante y variable)',
      'La compra de oro',
      'El aumento de los salarios',
    ],
    correcta: 1,
    repasa: '/conceptos#concepto-acumulacion',
  },
  {
    id: 13,
    tema: 'Ejército de reserva y acumulación',
    pregunta: 'Composición orgánica del capital mide:',
    opciones: [
      'El número de obreros por fábrica',
      'La relación entre capital constante y capital variable (tecnología frente a trabajo vivo)',
      'La tasa de plusvalía',
      'El salario medio',
    ],
    correcta: 1,
    repasa: '/conceptos#concepto-composicion-organica',
  },
  {
    id: 14,
    tema: 'Ejército de reserva y acumulación',
    pregunta: '¿Por qué al capital le “conviene” mantener un ejército de reserva (desempleados)?',
    opciones: [
      'Para pagar menos subsidios',
      'Para presionar los salarios a la baja y tener mano de obra disponible',
      'Para reducir la jornada laboral',
      'Para aumentar la productividad',
    ],
    correcta: 1,
    repasa: '/simulador',
  },
  // Circuitos y matemáticas (15-18)
  {
    id: 15,
    tema: 'Circuitos y esquemas',
    pregunta: 'En la circulación M-D-M (mercancía-dinero-mercancía), el objetivo es:',
    opciones: [
      'Acumular más dinero (D′ > D)',
      'Obtener un valor de uso: vender para comprar otra mercancía',
      'Producir plusvalía',
      'Invertir en capital constante',
    ],
    correcta: 1,
    repasa: '/matematicas-marx',
  },
  {
    id: 16,
    tema: 'Circuitos y esquemas',
    pregunta: 'En la circulación D-M-D′, el capitalista busca:',
    opciones: [
      'Solo reponer lo gastado',
      'Recuperar D′ mayor que D (plusvalía)',
      'Consumir las mercancías compradas',
      'Reducir el capital variable',
    ],
    correcta: 1,
    repasa: '/matematicas-marx',
  },
  {
    id: 17,
    tema: 'Circuitos y esquemas',
    pregunta: 'En los esquemas de reproducción (Libro II), el Sector I produce:',
    opciones: [
      'Medios de consumo',
      'Medios de producción',
      'Solo fuerza de trabajo',
      'Plusvalía en dinero',
    ],
    correcta: 1,
    repasa: '/matematicas-marx',
  },
  {
    id: 18,
    tema: 'Circuitos y esquemas',
    pregunta: 'En reproducción simple, la condición de equilibrio entre sectores es (simplificado):',
    opciones: [
      'I(c) = II(v)',
      'I(v + p) = II(c)',
      'I(v) = II(p)',
      'I(p) = II(c + v)',
    ],
    correcta: 1,
    repasa: '/matematicas-marx',
  },
  // Subsunción y jornada (19-22)
  {
    id: 19,
    tema: 'Subsunción y jornada',
    pregunta: 'Subsunción formal del capital significa:',
    opciones: [
      'El capital revoluciona el proceso de trabajo con máquinas',
      'El capital se apropia de un proceso de trabajo ya existente sin transformarlo de raíz',
      'El obrero es dueño de los medios de producción',
      'No hay plusvalía',
    ],
    correcta: 1,
    repasa: '/subsuncion-formal',
  },
  {
    id: 20,
    tema: 'Subsunción y jornada',
    pregunta: 'El plustrabajo es:',
    opciones: [
      'Las horas extra pagadas',
      'La parte de la jornada en que el obrero crea valor que se apropia el capitalista (plusvalía)',
      'El tiempo de descanso',
      'El trabajo del capitalista',
    ],
    correcta: 1,
    repasa: '/simulador',
  },
  {
    id: 21,
    tema: 'Subsunción y jornada',
    pregunta: 'Plusvalía absoluta se obtiene principalmente:',
    opciones: [
      'Aumentando la productividad con máquinas',
      'Alargando la jornada o intensificando el trabajo sin subir el salario',
      'Bajando el capital constante',
      'Reduciendo el ejército de reserva',
    ],
    correcta: 1,
    repasa: '/conceptos',
  },
  {
    id: 22,
    tema: 'Subsunción y jornada',
    pregunta: 'Plusvalía relativa se obtiene principalmente:',
    opciones: [
      'Solo alargando la jornada',
      'Aumentando la productividad para que el trabajo necesario (que repone el salario) ocupe menos tiempo',
      'Bajando el capital variable a cero',
      'Aumentando el ejército de reserva',
    ],
    correcta: 1,
    repasa: '/conceptos',
  },
  // Historia y realización (23-27)
  {
    id: 23,
    tema: 'Historia y crisis',
    pregunta: 'En la crisis de 1929, desde una óptica marxista, el “ejército de reserva” se dispara porque:',
    opciones: [
      'Los obreros se van de vacaciones',
      'Hay desempleo masivo: el capital no puede realizar (vender) toda la producción y despide',
      'Aumenta la productividad',
      'Bajan los salarios voluntariamente',
    ],
    correcta: 1,
    repasa: '/historia/global/periodo-crisis-29',
  },
  {
    id: 24,
    tema: 'Historia y crisis',
    pregunta: '“Realización” de la plusvalía significa en Marx:',
    opciones: [
      'Producir la plusvalía',
      'Vender la mercancía en el mercado para convertir la plusvalía en dinero (que alguien compre)',
      'Repartir la plusvalía entre obreros',
      'Invertir en capital constante',
    ],
    correcta: 1,
    repasa: '/conceptos',
  },
  {
    id: 25,
    tema: 'Historia y crisis',
    pregunta: 'En el México neoliberal, el ejército de reserva se relaciona con:',
    opciones: [
      'Solo el sector agrícola',
      'La precarización, la migración y la flexibilización laboral',
      'El aumento del salario mínimo',
      'La reducción de la jornada',
    ],
    correcta: 1,
    repasa: '/historia/mexico/periodo-neoliberalismo',
  },
  {
    id: 26,
    tema: 'Proletariado hoy',
    pregunta: 'Para Marx, el proletariado es:',
    opciones: [
      'Quien tiene propiedades',
      'La clase que no posee medios de producción y vive de vender su fuerza de trabajo',
      'Solo los obreros de fábrica',
      'Los desempleados únicamente',
    ],
    correcta: 1,
    repasa: '/proletariado-crisis',
  },
  {
    id: 27,
    tema: 'Proletariado hoy',
    pregunta: '¿Por qué en Marx la plusvalía solo la crea el trabajo vivo y no las máquinas ni la IA?',
    opciones: [
      'Porque las máquinas no existen',
      'Porque solo el trabajo humano añade valor nuevo; las máquinas transfieren su valor al producto',
      'Porque la IA no trabaja',
      'Porque el capitalista no invierte en máquinas',
    ],
    correcta: 1,
    repasa: '/proletariado-crisis',
  },
  // Libros y citas (28-30)
  {
    id: 28,
    tema: 'Obras y citas',
    pregunta: '«No es la conciencia la que determina la vida, sino la vida la que determina la conciencia» expresa:',
    opciones: [
      'El idealismo',
      'El materialismo histórico (la base material determina las ideas)',
      'La teoría del valor',
      'La circulación D-M-D′',
    ],
    correcta: 1,
    repasa: '/teorias#materialismo-historico',
  },
  {
    id: 29,
    tema: 'Obras y citas',
    pregunta: '«El capital es trabajo muerto que solo se reanima, a manera de vampiro, chupando trabajo vivo» se refiere a:',
    opciones: [
      'El dinero en efectivo',
      'La plusvalía: el capital se alimenta del trabajo no pagado',
      'El capital constante',
      'El salario',
    ],
    correcta: 1,
    repasa: '/teorias#plusvalia',
  },
  {
    id: 30,
    tema: 'Obras y citas',
    pregunta: 'En Marx, la “tasa de explotación” o tasa de plusvalía se expresa como:',
    opciones: [
      'Plusvalía ÷ capital constante',
      'Plusvalía ÷ capital variable (p/v)',
      'Capital variable ÷ plusvalía',
      'Valor producido ÷ salarios',
    ],
    correcta: 1,
    repasa: '/simulador',
  },
]
