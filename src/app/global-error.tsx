'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const isChunkLoad = error?.name === 'ChunkLoadError' || /ChunkLoadError|Loading chunk .* failed/i.test(String(error?.message))

  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#1a0a0a', color: '#e8e0d5', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ maxWidth: '28rem', padding: '1.5rem', textAlign: 'center' }}>
          <h1 style={{ color: '#c94a4a', fontSize: '1.25rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
            {isChunkLoad ? 'Error al cargar la página' : 'Algo salió mal'}
          </h1>
          <p style={{ color: 'rgba(232,224,213,0.85)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
            {isChunkLoad
              ? 'El navegador no pudo cargar una parte de la aplicación (timeout o caché desactualizada). Recarga la página para intentar de nuevo.'
              : 'Ha ocurrido un error inesperado. Puedes intentar recargar.'}
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{
              padding: '0.625rem 1.25rem',
              fontSize: '0.875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              background: '#8b2635',
              color: '#fff',
              border: '2px solid #daa520',
              borderRadius: '0.5rem',
              cursor: 'pointer',
            }}
          >
            Recargar página
          </button>
        </div>
      </body>
    </html>
  )
}
