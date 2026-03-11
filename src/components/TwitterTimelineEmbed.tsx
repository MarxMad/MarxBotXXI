'use client'

import Script from 'next/script'
import { useRef, useState, useCallback, useEffect } from 'react'
import { X_MARX_USERNAME } from '@/data/tweetsMarx'

declare global {
  interface Window {
    twttr?: {
      ready: (fn: () => void) => void
      widgets?: { load: (el?: HTMLElement) => void }
    }
  }
}

const timelineUrl = `https://twitter.com/${X_MARX_USERNAME}`

export function TwitterTimelineEmbed() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)
  const initializedRef = useRef(false)

  const initTimeline = useCallback(() => {
    if (typeof window === 'undefined' || !containerRef.current || !window.twttr?.widgets || initializedRef.current) return
    initializedRef.current = true
    const container = containerRef.current
    container.innerHTML = ''
    const anchor = document.createElement('a')
    anchor.className = 'twitter-timeline'
    anchor.href = timelineUrl
    anchor.setAttribute('data-theme', 'dark')
    anchor.setAttribute('data-height', '500')
    anchor.setAttribute('data-chrome', 'noheader nofooter')
    anchor.textContent = `Tweets por @${X_MARX_USERNAME}`
    container.appendChild(anchor)
    window.twttr.ready(() => {
      window.twttr?.widgets?.load(container)
      setLoaded(true)
    })
  }, [])

  // Si el script ya estaba cargado (p. ej. navegación client-side), inicializar
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.twttr?.widgets) initTimeline()
  }, [initTimeline])

  return (
    <div className="w-full">
      <Script
        id="twitter-widgets"
        src="https://platform.twitter.com/widgets.js"
        strategy="afterInteractive"
        onLoad={() => initTimeline()}
      />
      <div className="relative min-h-[320px]">
        {/* Estado de carga en un sibling: así React no gestiona nodos dentro del div que Twitter muta */}
        {!loaded && (
          <div className="flex flex-col items-center justify-center gap-3 py-12 text-marx-crema-oscuro absolute inset-0 z-0">
            <p className="text-sm">Cargando timeline de X…</p>
            <a
              href={timelineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-marx-dorado-claro hover:underline"
            >
              Ver @{X_MARX_USERNAME} en X →
            </a>
          </div>
        )}
        {/* Contenedor vacío: el <a class="twitter-timeline"> se crea en JS y widgets.js lo sustituye por el iframe */}
        <div ref={containerRef} className="relative z-10 flex justify-center min-h-[320px]" aria-label={`Timeline de @${X_MARX_USERNAME} en X`} />
      </div>
      <p className="mt-2 text-center text-xs text-marx-crema-oscuro/80">
        Si no se muestra el timeline, abre la cuenta directamente en{' '}
        <a href={timelineUrl} target="_blank" rel="noopener noreferrer" className="text-marx-dorado-claro hover:underline">
          X (Twitter)
        </a>.
      </p>
    </div>
  )
}
