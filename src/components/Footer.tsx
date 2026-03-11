import { X_MARX_USERNAME } from '@/data/tweetsMarx'

export function Footer() {
  return (
    <footer className="mt-8 bg-marx-rojo-oscuro text-marx-crema text-center">
      <div className="h-1 bg-marx-dorado" />
      <div className="max-w-3xl mx-auto px-4 pt-6">
        <p className="font-display font-semibold text-xs uppercase tracking-wider text-marx-dorado-claro mb-3">
          Síguenos
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href={`https://twitter.com/${X_MARX_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-marx-crema hover:text-marx-dorado font-semibold text-sm transition-colors"
          >
            <span aria-hidden>𝕏</span>
            @{X_MARX_USERNAME}
          </a>
        </div>
      </div>
      <p className="max-w-3xl mx-auto py-4 px-6 text-sm opacity-95">
        Marx en el siglo XXI — Herramienta didáctica de historia económica y economía marxista. Basado en <em>El Capital</em> (Marx) y fuentes del materialismo histórico.
      </p>
    </footer>
  )
}
