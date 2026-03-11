'use client'

import { useState, useEffect } from 'react'
import { tweetsMarx, INSTAGRAM_MARX_URL } from '@/data/tweetsMarx'

type Variant = 'default' | 'compact'

export function CarouselTweetsMarx({ variant = 'default' }: { variant?: Variant }) {
  const [index, setIndex] = useState(0)
  const tweet = tweetsMarx[index]

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % tweetsMarx.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const goPrev = () => setIndex((i) => (i - 1 + tweetsMarx.length) % tweetsMarx.length)
  const goNext = () => setIndex((i) => (i + 1) % tweetsMarx.length)

  if (variant === 'compact') {
    return (
      <div className="flex flex-col items-center gap-3 py-4">
        <div className="relative w-full max-w-xl mx-auto px-10">
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-marx-dorado/50 text-marx-dorado hover:bg-marx-dorado/20 flex items-center justify-center transition-colors"
            aria-label="Cita anterior"
          >
            ‹
          </button>
          <blockquote className="text-center text-sm sm:text-base text-marx-crema italic min-h-[3rem] flex flex-col justify-center">
            «{tweet.texto}»
            {tweet.obra && (
              <cite className="block mt-1 text-xs not-italic text-marx-dorado-claro">— Marx, {tweet.obra}</cite>
            )}
          </blockquote>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-marx-dorado/50 text-marx-dorado hover:bg-marx-dorado/20 flex items-center justify-center transition-colors"
            aria-label="Siguiente cita"
          >
            ›
          </button>
        </div>
        <div className="flex gap-1.5">
          {tweetsMarx.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-marx-dorado' : 'bg-white/30'}`}
              aria-label={`Ir a cita ${i + 1}`}
            />
          ))}
        </div>
        <a
          href={INSTAGRAM_MARX_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-marx-dorado-claro hover:text-marx-dorado font-semibold text-sm transition-colors"
        >
          <span aria-hidden>📸</span>
          Más citas de Marx en Instagram
        </a>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-marx-negro-surface/80 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8">
        <div className="flex-1 min-w-0">
          <p className="font-display font-semibold text-xs uppercase tracking-wider text-marx-dorado mb-2">
            Tweets de Marx
          </p>
          <blockquote className="text-marx-blanco font-medium text-base sm:text-lg leading-relaxed">
            «{tweet.texto}»
          </blockquote>
          {tweet.obra && (
            <cite className="block mt-2 text-sm not-italic text-marx-dorado-claro">— Marx, {tweet.obra}</cite>
          )}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            type="button"
            onClick={goPrev}
            className="w-10 h-10 rounded-full border-2 border-marx-dorado/50 text-marx-dorado hover:bg-marx-dorado/20 flex items-center justify-center text-xl transition-colors"
            aria-label="Cita anterior"
          >
            ‹
          </button>
          <span className="text-xs text-marx-crema-oscuro tabular-nums">
            {index + 1} / {tweetsMarx.length}
          </span>
          <button
            type="button"
            onClick={goNext}
            className="w-10 h-10 rounded-full border-2 border-marx-dorado/50 text-marx-dorado hover:bg-marx-dorado/20 flex items-center justify-center text-xl transition-colors"
            aria-label="Siguiente cita"
          >
            ›
          </button>
        </div>
      </div>
      <div className="px-6 sm:px-8 pb-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-4">
        <div className="flex gap-1.5">
          {tweetsMarx.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-marx-dorado' : 'bg-white/30 hover:bg-white/50'}`}
              aria-label={`Ir a cita ${i + 1}`}
            />
          ))}
        </div>
        <a
          href={INSTAGRAM_MARX_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-marx-dorado-claro hover:text-marx-dorado font-display font-semibold text-sm transition-colors"
        >
          <span aria-hidden>📸</span>
          Síguenos en Instagram
        </a>
      </div>
    </div>
  )
}
