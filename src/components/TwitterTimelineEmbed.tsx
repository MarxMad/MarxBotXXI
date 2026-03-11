'use client'

import Script from 'next/script'
import { useRef, useState, useCallback } from 'react'
import { X_MARX_USERNAME } from '@/data/tweetsMarx'

declare global {
  interface Window {
    twttr?: {
      ready: (fn: () => void) => void
      widgets?: {
        load: (el?: HTMLElement) => void
        createTimeline: (
          data: { sourceType: string; screenName: string },
          el: HTMLElement,
          opts?: { theme?: string; height?: number; chrome?: string }
        ) => Promise<unknown>
      }
    }
  }
}

export function TwitterTimelineEmbed() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)
  const createdRef = useRef(false)

  const initTimeline = useCallback(() => {
    if (typeof window === 'undefined' || !containerRef.current || createdRef.current) return
    const twttr = window.twttr
    if (!twttr?.widgets?.createTimeline) return

    twttr.ready(() => {
      if (!containerRef.current || createdRef.current) return
      createdRef.current = true
      containerRef.current.innerHTML = ''
      twttr.widgets
        ?.createTimeline(
          { sourceType: 'profile', screenName: X_MARX_USERNAME },
          containerRef.current,
          {
            theme: 'dark',
            height: 500,
            chrome: 'noheader nofooter',
          }
        )
        ?.then(() => setLoaded(true))
        ?.catch(() => setLoaded(true))
    })
  }, [])

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
              href={`https://twitter.com/${X_MARX_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-marx-dorado-claro hover:underline"
            >
              Ver @{X_MARX_USERNAME} en X →
            </a>
          </div>
        )}
        {/* Contenedor solo para el widget: sin hijos de React para evitar removeChild al mutar el DOM */}
        <div
          ref={containerRef}
          className="flex justify-center min-h-[320px] relative z-10"
          aria-label={`Timeline de @${X_MARX_USERNAME} en X`}
        />
      </div>
      <p className="mt-2 text-center text-xs text-marx-crema-oscuro/80">
        Si no se muestra el timeline, abre la cuenta directamente en{' '}
        <a href={`https://twitter.com/${X_MARX_USERNAME}`} target="_blank" rel="noopener noreferrer" className="text-marx-dorado-claro hover:underline">
          X (Twitter)
        </a>.
      </p>
    </div>
  )
}
