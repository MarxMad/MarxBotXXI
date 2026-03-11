import { ReactNode } from 'react'

interface PageHeroProps {
  title: string
  subtitle?: string
  description?: ReactNode
  ctaLabel?: string
  ctaHref?: string
}

export function PageHero({ title, subtitle, description, ctaLabel, ctaHref }: PageHeroProps) {
  return (
    <section className="relative py-10 sm:py-14 overflow-hidden bg-marx-negro border-b-2 border-marx-dorado/30">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-marx-rojo/15 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-marx-dorado/10 blur-[80px] rounded-full" />
      </div>
      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <h1 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-marx-blanco uppercase tracking-tight mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-marx-dorado-claro font-display font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3">
            {subtitle}
          </p>
        )}
        {description && (
          <div className="text-marx-crema-oscuro text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-5">
            {description}
          </div>
        )}
        {ctaLabel && ctaHref && (
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 px-4 py-2.5 font-display font-bold text-sm uppercase bg-marx-rojo text-marx-blanco border-2 border-marx-dorado rounded-lg hover:bg-marx-rojo-claro transition-colors"
          >
            {ctaLabel}
            <span aria-hidden>→</span>
          </a>
        )}
      </div>
    </section>
  )
}
