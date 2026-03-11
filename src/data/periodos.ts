export type Region = 'mexico' | 'global'

export interface Periodo {
  id: string
  fechas: string
  titulo: string
  region: Region
  ano?: number
  contenido: string
  conceptos: string
}

export const periodosMexico: Periodo[] = [
  {
    id: 'periodo-conquista',
    fechas: '1519–ca. 1600',
    titulo: 'Conquista y organización colonial',
    region: 'mexico',
    ano: 1519,
    contenido: 'Conquista militar (1519–1521) y establecimiento del dominio español. La Corona reparte tierras y pueblos mediante la encomienda (derecho a tributo y trabajo indígena a cambio de “protección” y evangelización). Luego el repartimiento o cuatequil asigna turnos de trabajo forzado a obras y minas. Con el tiempo surgen las haciendas: grandes propiedades que combinan tierra, ganado y trabajo servil o semilibre (peones, gañanes), y que sustituyen en muchas zonas a la encomienda. La plusvalía se extrae por coerción extraeconómica (tributo, trabajo obligatorio), base de la acumulación colonial.',
    conceptos: 'acumulación originaria, plusvalía, trabajo forzado, explotación.',
  },
  {
    id: 'periodo-haciendas',
    fechas: 's. XVII–XIX',
    titulo: 'Las haciendas coloniales',
    region: 'mexico',
    ano: 1650,
    contenido: 'La hacienda es el centro de producción por excelencia en la era colonial novohispana: gran propiedad que integra tierra, ganado, obrajes y mano de obra (peones, gañanes, trabajadores endeudados). Concentra la producción agropecuaria y la extracción de plusvalía mediante trabajo servil o semilibre; alimenta la acumulación de la clase dominante y el flujo de excedente hacia la metrópoli.',
    conceptos: 'acumulación originaria, plusvalía, trabajo servil, tierra, centro de producción.',
  },
  {
    id: 'periodo-colonia',
    fechas: '1521–1821',
    titulo: 'Colonia',
    region: 'mexico',
    ano: 1521,
    contenido: 'Extracción de plusvalía mediante trabajo forzado (encomienda, repartimiento, esclavitud). La plata y los tributos fluyen hacia la metrópoli; acumulación en España. La tierra y el trabajo indígena y campesino son la base de la riqueza colonial.',
    conceptos: 'plusvalía, acumulación originaria, explotación.',
  },
  {
    id: 'periodo-reforma',
    fechas: 's. XIX (Reforma)',
    titulo: 'Reforma y liberalismo',
    region: 'mexico',
    ano: 1857,
    contenido: 'Desamortización de bienes eclesiásticos y comunales; tierras pasan a manos privadas. Se consolida una lucha de clases entre terratenientes liberales y pueblos que pierden tierras. Inicio de una economía basada en propiedad privada y trabajo asalariado en el campo.',
    conceptos: 'lucha de clases, acumulación originaria, propiedad privada.',
  },
  {
    id: 'periodo-porfiriato',
    fechas: '1876–1911',
    titulo: 'Porfiriato',
    region: 'mexico',
    ano: 1876,
    contenido: 'Industrialización y ferrocarriles financiados por capital extranjero; concentración de tierra y minería. La plusvalía extraída de obreros y campesinos alimenta la acumulación de una oligarquía y de capitales foráneos. Surge el movimiento obrero y la resistencia campesina — antecedentes de la Revolución.',
    conceptos: 'plusvalía, acumulación originaria, composición orgánica, ejército de reserva.',
  },
  {
    id: 'periodo-revolucion-mexico',
    fechas: '1910–1940',
    titulo: 'Revolución y reconstrucción',
    region: 'mexico',
    ano: 1910,
    contenido: 'Lucha por la tierra (ejidos, reparto agrario) y por derechos laborales. El Estado posrevolucionario regula la relación capital–trabajo (Constitución de 1917, artículo 123). Formación de sindicatos y de un mercado interno. Capital variable y reproducción de la fuerza de trabajo.',
    conceptos: 'lucha de clases, capital variable, reproducción de la fuerza de trabajo.',
  },
  {
    id: 'periodo-cardenismo',
    fechas: '1934–1940',
    titulo: 'Cardenismo',
    region: 'mexico',
    ano: 1934,
    contenido: 'Reparto agrario masivo, expropiación petrolera (1938), apoyo a sindicatos y a la organización obrera y campesina. El Estado interviene en la distribución de la riqueza y en la relación entre capital y trabajo. Refuerzo del mercado interno.',
    conceptos: 'lucha de clases, plusvalía, Estado y capital.',
  },
  {
    id: 'periodo-isi',
    fechas: '1940–1982',
    titulo: 'Industrialización por sustitución de importaciones (ISI)',
    region: 'mexico',
    ano: 1940,
    contenido: 'Proteccionismo, industria nacional, capital constante (maquinaria, fábricas) y capital variable (obreros). Crecimiento del proletariado urbano y de la plusvalía realizada en el mercado interno. Crisis de los años 70: límites del modelo.',
    conceptos: 'capital constante, capital variable, composición orgánica, realización.',
  },
  {
    id: 'periodo-neoliberalismo',
    fechas: '1982–hoy',
    titulo: 'Neoliberalismo',
    region: 'mexico',
    ano: 1982,
    contenido: 'Privatizaciones, apertura comercial (TLCAN y sucesivos), flexibilización laboral. Aumento de la explotación (plusvalía absoluta y relativa) y del ejército industrial de reserva; precarización y migración. El capital financiero y las grandes corporaciones concentran la riqueza.',
    conceptos: 'plusvalía relativa, ejército de reserva, composición orgánica, imperialismo.',
  },
]

export const periodosGlobal: Periodo[] = [
  {
    id: 'periodo-revolucion-industrial',
    fechas: 's. XVIII–XIX',
    titulo: 'Revolución industrial',
    region: 'global',
    ano: 1760,
    contenido: 'La fábrica concentra obreros y medios de producción; el valor lo crea el trabajo vivo y la plusvalía se apropia el capitalista. Surge el ejército industrial de reserva (parados que presionan los salarios). Marx analiza este proceso en El Capital, Libro I.',
    conceptos: 'valor, plusvalía absoluta y relativa, capital constante y variable, ejército de reserva.',
  },
  {
    id: 'periodo-imperialismo',
    fechas: 's. XIX–XX',
    titulo: 'Imperialismo y colonialismo',
    region: 'global',
    ano: 1880,
    contenido: 'Expansión del capital en busca de materias primas y mercados; explotación de las colonias como fuente de plusvalía y de acumulación en las metrópolis. Lenin, El imperialismo, fase superior del capitalismo.',
    conceptos: 'acumulación, realización de la plusvalía, superexplotación.',
  },
  {
    id: 'periodo-crisis-29',
    fechas: '1929',
    titulo: 'Crisis de 1929',
    region: 'global',
    ano: 1929,
    contenido: 'Sobreacumulación, caída de la tasa de ganancia, imposibilidad de realizar (vender) toda la plusvalía. La clase trabajadora paga el costo con desempleo masivo — el ejército de reserva se dispara. Marx: crisis como rasgo estructural del capitalismo.',
    conceptos: 'crisis, realización, tasa de ganancia, ejército de reserva.',
  },
  {
    id: 'periodo-crisis-08',
    fechas: '2008',
    titulo: 'Crisis de 2008',
    region: 'global',
    ano: 2008,
    contenido: 'Crisis financiera y de realización; rescates al capital, recortes y precarización para el trabajo. Aumento de la desigualdad y del ejército industrial de reserva. La plusvalía sigue concentrada en pocas manos mientras el salario social se reduce.',
    conceptos: 'crisis, realización, ejército de reserva, financiarización.',
  },
]

export const timelinePuntos = [
  { href: '/historia/mexico/periodo-conquista', region: 'mexico' as Region, title: 'Conquista (1519–ca. 1600)', ano: 1519 },
  { href: '/historia/mexico/periodo-haciendas', region: 'mexico' as Region, title: 'Haciendas coloniales (s. XVII–XIX)', ano: 1650 },
  { href: '/historia/mexico/periodo-colonia', region: 'mexico' as Region, title: 'Colonia (1521–1821)', ano: 1521 },
  { href: '/historia/global/periodo-revolucion-industrial', region: 'global' as Region, title: 'Revolución industrial', ano: 1760 },
  { href: '/historia/mexico/periodo-reforma', region: 'mexico' as Region, title: 'Reforma (s. XIX)', ano: 1857 },
  { href: '/historia/mexico/periodo-porfiriato', region: 'mexico' as Region, title: 'Porfiriato', ano: 1876 },
  { href: '/historia/global/periodo-imperialismo', region: 'global' as Region, title: 'Imperialismo', ano: 1880 },
  { href: '/historia/mexico/periodo-revolucion-mexico', region: 'mexico' as Region, title: 'Revolución y reconstrucción', ano: 1910 },
  { href: '/historia/global/periodo-crisis-29', region: 'global' as Region, title: 'Crisis 1929', ano: 1929 },
  { href: '/historia/mexico/periodo-cardenismo', region: 'mexico' as Region, title: 'Cardenismo', ano: 1934 },
  { href: '/historia/mexico/periodo-isi', region: 'mexico' as Region, title: 'Industrialización ISI', ano: 1940 },
  { href: '/historia/mexico/periodo-neoliberalismo', region: 'mexico' as Region, title: 'Neoliberalismo', ano: 1982 },
  { href: '/historia/global/periodo-crisis-08', region: 'global' as Region, title: 'Crisis 2008', ano: 2008 },
]
