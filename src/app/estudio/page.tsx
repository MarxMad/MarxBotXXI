import Link from 'next/link'
import { PageHero } from '@/components/PageHero'

const herramientas = [
  {
    href: '/conceptos',
    titulo: 'Conceptos',
    desc: 'Glosario de términos marxistas con referencia a El Capital y otras fuentes. Incluye subsunción formal y real.',
    icon: '📖',
  },
  {
    href: '/matematicas-marx',
    titulo: 'Matemáticas de Marx',
    desc: 'Circuitos M-D-M y D-M-D′, esquemas de reproducción, fórmulas de tasa de ganancia y plusvalor.',
    icon: '📐',
  },
  {
    href: '/teorias',
    titulo: 'Teorías',
    desc: 'Materialismo histórico, plusvalía, lucha de clases, alienación, subsunción. Resúmenes didácticos y citas.',
    icon: '💡',
  },
  {
    href: '/libros',
    titulo: 'Libros',
    desc: 'Obras de Marx y Engels con resumen, temas y nivel sugerido. Guía de lectura.',
    icon: '📚',
  },
  {
    href: '/ejercicios',
    titulo: 'Ejercicios y repaso',
    desc: 'Cuestionario en carrusel con explicaciones. Preguntas abiertas por tema para debate.',
    icon: '✏️',
  },
  {
    href: '/juegos',
    titulo: 'Juegos',
    desc: 'Memoria de conceptos: relacionar término y definición. Aprende jugando.',
    icon: '🎯',
  },
]

export default function EstudioPage() {
  return (
    <div className="min-h-screen">
      <p className="max-w-3xl mx-auto px-4 pt-6 pb-2">
        <Link href="/" className="link-concepto">← Inicio</Link>
      </p>
      <PageHero
        title="Dashboard Estudio"
        subtitle="Herramientas para estudiar la tesis marxista"
        description="Acceso rápido a conceptos, fórmulas, teorías, libros, ejercicios y juegos. Todo en un solo lugar."
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {herramientas.map((h) => (
            <Link
              key={h.href}
              href={h.href}
              className="group p-6 rounded-2xl bg-marx-negro-surface border border-white/10 hover:border-marx-dorado/50 transition-all duration-300 hover:shadow-lg hover:shadow-marx-rojo/5 flex flex-col"
            >
              <div className="text-3xl mb-4 bg-marx-negro p-3 rounded-xl border border-white/5 w-fit group-hover:border-marx-dorado/30 transition-colors">
                {h.icon}
              </div>
              <h2 className="font-display font-bold text-lg text-marx-blanco mb-2 group-hover:text-marx-dorado-claro transition-colors">
                {h.titulo}
              </h2>
              <p className="text-marx-crema-oscuro text-sm leading-relaxed flex-1">
                {h.desc}
              </p>
              <span className="mt-4 text-sm font-bold text-marx-dorado-claro group-hover:underline">
                Ir a {h.titulo} →
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-marx-crema-oscuro text-sm">
          <Link href="/" className="link-concepto">← Volver al inicio</Link>
          {' · '}
          <Link href="/simulador" className="link-concepto">Simuladores</Link>
          {' · '}
          <Link href="/historia/mexico" className="link-concepto">Historia México</Link>
        </p>
      </div>
    </div>
  )
}
