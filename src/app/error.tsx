'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const isChunkLoad = error?.name === 'ChunkLoadError' || /ChunkLoadError|Loading chunk .* failed/i.test(String(error?.message))

  useEffect(() => {
    if (isChunkLoad) {
      console.warn('ChunkLoadError: la caché del navegador puede estar desactualizada. Recarga la página.')
    }
  }, [isChunkLoad])

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 bg-marx-negro text-marx-crema">
      <div className="max-w-md text-center">
        <h1 className="font-display font-bold text-xl text-marx-rojo-claro uppercase tracking-wide mb-3">
          {isChunkLoad ? 'Error al cargar la página' : 'Algo salió mal'}
        </h1>
        <p className="text-marx-crema-oscuro text-sm mb-6">
          {isChunkLoad
            ? 'El navegador no pudo cargar una parte de la aplicación (timeout o caché desactualizada). Recarga la página para intentar de nuevo.'
            : 'Ha ocurrido un error inesperado. Puedes intentar recargar.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="px-5 py-2.5 font-display font-bold text-sm uppercase bg-marx-rojo text-marx-blanco border-2 border-marx-dorado rounded-lg hover:bg-marx-rojo-claro transition-colors"
          >
            Recargar página
          </button>
          {!isChunkLoad && (
            <button
              type="button"
              onClick={() => reset()}
              className="px-5 py-2.5 font-display font-bold text-sm uppercase border-2 border-marx-dorado text-marx-dorado-claro rounded-lg hover:bg-white/10 transition-colors"
            >
              Intentar de nuevo
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
