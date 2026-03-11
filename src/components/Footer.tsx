import { CarouselTweetsMarx } from '@/components/CarouselTweetsMarx'

export function Footer() {
  return (
    <footer className="mt-8 bg-marx-rojo-oscuro text-marx-crema text-center">
      <div className="h-1 bg-marx-dorado" />
      {/* Carrusel de citas de Marx + Instagram */}
      <div className="max-w-3xl mx-auto px-4 pt-6">
        <p className="font-display font-semibold text-xs uppercase tracking-wider text-marx-dorado-claro mb-2">
          Tweets de Marx
        </p>
        <CarouselTweetsMarx variant="compact" />
      </div>
      <p className="max-w-3xl mx-auto py-4 px-6 text-sm opacity-95">
        Marx en el siglo XXI — Herramienta didáctica de historia económica y economía marxista. Basado en <em>El Capital</em> (Marx) y fuentes del materialismo histórico.
      </p>
    </footer>
  )
}
