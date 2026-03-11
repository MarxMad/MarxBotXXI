'use client'

import Link from 'next/link'
import { TwitterTimelineEmbed } from '@/components/TwitterTimelineEmbed'
import { X_MARX_USERNAME } from '@/data/tweetsMarx'

const pilares = [
  { numero: '4', label: 'Simuladores' },
  { numero: '2', label: 'Historias (México + Global)' },
  { numero: '30+', label: 'Conceptos' },
  { numero: '30', label: 'Preguntas de repaso' },
]

const features = [
  {
    titulo: 'Simuladores marxistas',
    desc: 'Plusvalía en un día, jornada laboral, fábrica con N obreros y ejército de reserva. Interactivos y con fórmulas.',
    icon: '📐',
    href: '/simulador',
  },
  {
    titulo: 'Historia económica',
    desc: 'México (conquista a neoliberalismo) y mundo (revolución industrial, crisis, imperialismo). Por periodos.',
    icon: '📅',
    href: '/historia/mexico',
  },
  {
    titulo: 'Hegemonía mundial',
    desc: 'Producción estratégica, recursos, tecnología y poder. Proletariado y crisis en la era tech.',
    icon: '🌍',
    href: '/hegemonia-mundial',
  },
  {
    titulo: 'Ejercicios y repaso',
    desc: 'Cuestionario en carrusel con explicaciones. Preguntas abiertas por tema para debate en clase.',
    icon: '✏️',
    href: '/ejercicios',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-marx-negro">
      {/* Hero: 2 columnas como Econosfera, izquierda texto, derecha mockup */}
      <section className="relative min-h-[90vh] flex flex-col justify-center bg-marx-negro text-marx-crema overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-[20%] w-[800px] h-[800px] bg-marx-rojo/20 blur-[150px] rounded-full animate-pulse mix-blend-screen" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-marx-dorado/15 blur-[150px] rounded-full animate-pulse mix-blend-screen" style={{ animationDuration: '6s', animationDelay: '1s' }} />
          <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-marx-rojo-oscuro/20 blur-[120px] rounded-full animate-pulse mix-blend-screen" style={{ animationDuration: '5s', animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f2a2a2e_1px,transparent_1px),linear-gradient(to_bottom,#4f2a2a2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-left">
            {/* Pill badge */}
            <div className="relative inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-marx-negro-surface/80 border border-white/10 text-xs sm:text-sm font-bold mb-5 sm:mb-8 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-marx-dorado/50 transition-colors cursor-default">
              <div className="absolute inset-0 bg-gradient-to-r from-marx-rojo/10 via-marx-dorado/10 to-marx-rojo/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-marx-crema-oscuro relative z-10 flex items-center gap-1.5 sm:gap-2">
                Para <span className="text-marx-blanco">estudiantes y docentes</span>
                <span className="w-1.5 h-1.5 rounded-full bg-marx-dorado animate-ping ml-0.5 sm:ml-1" />
              </span>
            </div>

            {/* Headline estilo Econosfera: marca + título grande */}
            <h1 className="font-display font-black tracking-tighter text-marx-blanco mb-5 sm:mb-8 leading-tight">
              <span className="block text-marx-dorado text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 tracking-wider uppercase drop-shadow-[0_0_15px_rgba(218,165,32,0.4)]">
                Marx en el siglo XXI
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl max-w-full">
                <span className="block whitespace-nowrap">TESIS MARXISTA,</span>
                <span className="relative block mt-1 sm:mt-2">
                  <span className="absolute -inset-2 bg-marx-rojo/20 blur-2xl opacity-40 animate-pulse" />
                  <span className="relative text-marx-blanco whitespace-nowrap block">
                    HISTORIA Y HEGEMONÍA
                  </span>
                </span>
              </span>
            </h1>

            {/* Description con palabras resaltadas */}
            <p className="text-marx-crema-oscuro text-base sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-2xl leading-relaxed font-medium">
              El puente entre la teoría marxista y la <span className="text-marx-blanco font-bold">historia económica</span>. Simuladores, conceptos y análisis de la <span className="text-marx-dorado-claro border-b border-marx-dorado/40 pb-0.5">hegemonía del capital</span>; didáctico y pensado para clase.
            </p>

            {/* CTAs: primario + secundario */}
            <div className="flex flex-col-reverse sm:flex-row gap-4 sm:gap-5 mb-8 sm:mb-12 relative z-20">
              <Link
                href="/simulador"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-5 text-base sm:text-lg font-bold tracking-wide rounded-2xl text-marx-blanco overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(204,51,51,0.5)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-marx-rojo to-marx-rojo-oscuro group-hover:from-marx-rojo-claro group-hover:to-marx-rojo transition-colors" />
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                <span className="relative flex items-center gap-2">
                  Ir a simuladores
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </Link>
              <Link
                href="/historia/mexico"
                className="group w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-5 text-base sm:text-lg font-bold rounded-2xl bg-white/[0.08] border-2 border-white/20 text-marx-crema hover:bg-white/15 hover:border-marx-dorado/50 transition-all duration-300 shadow-xl backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Historia
              </Link>
            </div>

            {/* Móvil: preview tipo terminal */}
            <div id="simuladores-preview" className="lg:hidden mt-6 sm:mt-8 -mx-2 sm:mx-0">
              <div className="rounded-2xl sm:rounded-3xl border border-white/15 bg-marx-negro-surface/90 shadow-[0_0_40px_rgba(0,0,0,0.4)] overflow-hidden backdrop-blur-sm">
                <div className="h-8 sm:h-9 bg-marx-negro-surface border-b border-white/10 flex items-center px-3 sm:px-4 gap-1.5">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-marx-rojo/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-marx-dorado/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-marx-dorado-claro/60" />
                  <span className="ml-auto text-[9px] sm:text-[10px] uppercase font-bold text-marx-crema-oscuro tracking-widest">Simuladores</span>
                </div>
                <div className="p-4 space-y-2 text-sm text-marx-crema-oscuro">
                  <p>· Un día de trabajo (valor − salario = plusvalía)</p>
                  <p>· Jornada laboral (trabajo necesario vs plustrabajo)</p>
                  <p>· Fábrica con N obreros</p>
                  <p>· Ejército de reserva</p>
                </div>
                <div className="px-3 sm:px-4 py-2.5 bg-marx-negro-surface/80 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs text-marx-crema-oscuro font-medium">Vista previa</span>
                  <Link href="/simulador" className="text-[10px] sm:text-xs font-bold text-marx-dorado-claro hover:text-marx-dorado transition-colors">
                    Ir al simulador →
                  </Link>
                </div>
              </div>
            </div>

            {/* “Usada por” / Para clase */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 opacity-60 mt-8 sm:mt-10">
              <span className="text-xs font-black uppercase tracking-[0.2em]">Para clase en:</span>
              <div className="flex flex-wrap gap-4 sm:gap-6 items-center">
                <span className="font-serif italic font-bold text-sm sm:text-base text-marx-crema-oscuro">UNAM</span>
                <span className="font-serif italic font-bold text-sm sm:text-base text-marx-crema-oscuro">UAM</span>
                <span className="font-serif italic font-bold text-sm sm:text-base text-marx-crema-oscuro">universidades</span>
              </div>
            </div>
          </div>

          {/* Desktop: floating terminal mockup (derecha) */}
          <div className="hidden lg:block w-full relative h-[700px]">
            <div className="absolute top-10 right-0 w-[480px] bg-marx-negro-surface rounded-3xl border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="h-8 bg-marx-negro border-b border-white/5 flex items-center px-4 gap-1.5">
                <div className="w-3 h-3 rounded-full bg-marx-rojo/60" />
                <div className="w-3 h-3 rounded-full bg-marx-dorado/60" />
                <div className="w-3 h-3 rounded-full bg-marx-dorado-claro/50" />
                <span className="ml-auto text-[10px] uppercase font-bold text-marx-crema-oscuro tracking-widest">marx-siglo-xxi</span>
              </div>
              <div className="p-5 space-y-4 text-sm text-marx-crema-oscuro">
                <p className="text-marx-dorado font-semibold">Simuladores</p>
                <ul className="space-y-2 pl-2">
                  <li>· Un día de trabajo → plusvalía</li>
                  <li>· Jornada laboral → plustrabajo</li>
                  <li>· Fábrica (N obreros)</li>
                  <li>· Ejército de reserva</li>
                </ul>
                <p className="pt-2 border-t border-white/5 text-marx-crema">
                  <Link href="/simulador" className="text-marx-dorado-claro hover:underline">Abrir simuladores →</Link>
                </p>
              </div>
              <div className="p-4 bg-marx-negro border-t border-white/5">
                <p className="text-xs italic text-marx-crema-oscuro">
                  «El capital es trabajo muerto que solo se reanima, a manera de vampiro, chupando trabajo vivo.»
                </p>
                <p className="text-[10px] text-marx-dorado mt-1">— Marx, El Capital</p>
              </div>
            </div>
            {/* Tarjeta pequeña flotante */}
            <div className="absolute bottom-10 left-0 w-[260px] bg-marx-rojo-oscuro rounded-3xl p-5 shadow-2xl border border-marx-dorado/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-xl">📐</div>
                <span className="font-display font-bold text-marx-blanco">Tesis marxista</span>
              </div>
              <p className="text-xs text-marx-crema-oscuro leading-relaxed">
                Valor, plusvalía, capital variable y constante. Simuladores + conceptos + teorías.
              </p>
              <Link href="/teorias" className="inline-block mt-3 text-xs font-bold text-marx-dorado-claro hover:underline">Ver teorías →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats ticker */}
      <div className="bg-marx-negro-surface border-y border-white/10 py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-8">
          {pilares.map((p) => (
            <div key={p.label} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black text-marx-dorado-claro">{p.numero}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-marx-crema-oscuro">{p.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cita Marx en banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-marx-rojo-oscuro/90 via-marx-rojo/80 to-marx-rojo-oscuro/90" />
        <div className="relative max-w-7xl mx-auto px-4 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <blockquote className="text-marx-blanco font-medium text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
            «La historia de todas las sociedades hasta ahora existentes es la historia de la lucha de clases.»
            <cite className="block mt-2 text-sm not-italic text-marx-dorado-claro">— Marx y Engels, Manifiesto del Partido Comunista, 1848</cite>
          </blockquote>
        </div>
      </div>

      {/* Tweets reales de X */}
      <section className="py-8 sm:py-12 bg-marx-negro border-t border-white/5">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-marx-blanco mb-2 text-center">
            Tweets de Marx
          </h2>
          <p className="text-center text-marx-crema-oscuro text-sm mb-6">
            Cronología real de nuestra cuenta en X (Twitter). Citas y fragmentos de Marx y Engels.
          </p>
          <TwitterTimelineEmbed />
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <a
              href={`https://twitter.com/${X_MARX_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-marx-dorado-claro hover:text-marx-dorado font-display font-semibold text-sm transition-colors"
            >
              <span aria-hidden>𝕏</span>
              @{X_MARX_USERNAME} en X
            </a>
          </div>
        </div>
      </section>

      {/* Grid features: 4 cards como Econosfera */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-marx-negro">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-marx-blanco mb-4 tracking-tight">
              Pensado para la <br /> <span className="text-marx-rojo-claro">clase y el estudio</span>
            </h2>
            <p className="text-lg sm:text-xl text-marx-crema-oscuro leading-relaxed">
              Simuladores interactivos, historia económica, conceptos y hegemonía. Todo en un solo lugar, con enfoque marxista y didáctico.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <Link
                key={f.href}
                href={f.href}
                className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-marx-negro-surface border border-white/10 hover:border-marx-dorado/50 transition-all duration-500 hover:shadow-xl hover:shadow-marx-rojo/5 flex flex-col items-start"
              >
                <div className="text-3xl sm:text-4xl mb-4 bg-marx-negro p-3 rounded-xl border border-white/5">{f.icon}</div>
                <h3 className="font-display font-bold text-lg text-marx-blanco mb-3 group-hover:text-marx-dorado-claro transition-colors">{f.titulo}</h3>
                <p className="text-marx-crema-oscuro text-sm leading-relaxed flex-1">{f.desc}</p>
                <span className="mt-4 text-sm font-bold text-marx-dorado-claro group-hover:underline">Ver más →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 sm:py-20 bg-marx-negro-surface border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-marx-blanco mb-6">
            ¿Listo para estudiar la tesis marxista y la historia económica?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/simulador" className="px-8 py-4 font-display font-bold bg-marx-rojo text-marx-blanco rounded-2xl hover:bg-marx-rojo-claro transition-all border-2 border-marx-dorado">
              Ir a simuladores
            </Link>
            <Link href="/ejercicios" className="px-8 py-4 font-display font-bold bg-marx-negro text-marx-crema border-2 border-marx-dorado/60 rounded-2xl hover:bg-white/10 transition-all">
              Ejercicios
            </Link>
          </div>
          <p className="mt-8 text-sm text-marx-crema-oscuro">
            Menú arriba: Conceptos · Teorías · Historia · Hegemonía mundial · Matemáticas de Marx · Juegos
          </p>
        </div>
      </section>
    </div>
  )
}
