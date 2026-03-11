'use client'

import Script from 'next/script'
import { useRef, useEffect } from 'react'
import { X_MARX_USERNAME } from '@/data/tweetsMarx'

const TWITTER_PROFILE_URL = `https://twitter.com/${X_MARX_USERNAME}`

export function TwitterTimelineEmbed() {
  const containerRef = useRef<HTMLDivElement>(null)

  const loadWidget = () => {
    if (typeof window === 'undefined') return
    const twttr = (window as Window & { twttr?: { widgets?: { load: (el?: HTMLElement) => void } } }).twttr
    twttr?.widgets?.load(containerRef.current ?? undefined)
  }

  return (
    <div className="w-full">
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
        onLoad={loadWidget}
      />
      <div ref={containerRef} className="flex justify-center">
        <a
          className="twitter-timeline"
          data-dnt="true"
          data-theme="dark"
          data-chrome="noheader,nofooter"
          data-height="500"
          href={TWITTER_PROFILE_URL}
        >
          Tweets de @{X_MARX_USERNAME}
        </a>
      </div>
    </div>
  )
}
