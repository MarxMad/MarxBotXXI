# Marx en el siglo XXI — Next.js

Sitio **Next.js** de historia económica y economía marxista (antes MarxBot / Tesis Marxista). Mantiene la misma identidad visual, estructura y contenido didáctico: simulador de la fábrica, línea de tiempo México/Global, historia económica, conceptos, multimedia y sección para el profesor.

## Origen

Basado en el sitio HTML original (carpeta `FE - 2026/MarxBot` o `Documents/Marxbot`): mismo diseño (tema oscuro, rojo/dorado/negro/crema, Oswald + Source Serif 4), mismas secciones y textos, con el Simulador de la Fábrica, la línea de tiempo con filtros, las fichas de periodos, el glosario de conceptos, el diagrama trabajo→valor→plusvalía y “Para el profesor”.

## Contenido

- **Inicio**: Hero con cita del Manifiesto, Simulador de la Fábrica (contratar/despedir, salario, invertir en máquinas, gráfico por turno), Línea de tiempo (filtros México/Global), Historia económica México y Global, Proletariado y crisis (era tech e IA), Conceptos (glosario), Multimedia (vídeo + diagrama SVG), Para el profesor.
- **Teorías**: Materialismo histórico, plusvalía, lucha de clases, alienación.
- **Libros**: El Capital, Manifiesto, La ideología alemana, Manuscritos 1844, Crítica del programa de Gotha.
- **Ejercicios**: Cuestionario de opción múltiple con corrección y enlace al simulador.
- **Juegos**: Memoria de conceptos marxistas (parejas).

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Chart.js (gráfico del simulador)

## Misión

Herramienta didáctica de historia económica y economía marxista para crear conciencia en la juventud, basada en *El Capital* y fuentes del materialismo histórico.
