/**
 * Citas de Marx/Engels en formato "tweet" para el carrusel.
 * Enlazan con la cuenta de Instagram donde se publican.
 */
export interface TweetMarx {
  texto: string
  obra?: string
}

export const tweetsMarx: TweetMarx[] = [
  { texto: 'La historia de todas las sociedades hasta ahora existentes es la historia de la lucha de clases.', obra: 'Manifiesto del Partido Comunista' },
  { texto: 'El capital es trabajo muerto que solo se reanima, a manera de vampiro, chupando trabajo vivo.', obra: 'El Capital' },
  { texto: 'Proletarios de todos los países, uníos!', obra: 'Manifiesto del Partido Comunista' },
  { texto: 'No es la conciencia la que determina la vida, sino la vida la que determina la conciencia.', obra: 'La ideología alemana' },
  { texto: 'Cuanto más produce el obrero, menos puede consumir; cuanto más valor crea, más se desvaloriza.', obra: 'Manuscritos económicos y filosóficos' },
  { texto: 'Los filósofos no han hecho más que interpretar el mundo de diversos modos; de lo que se trata es de transformarlo.', obra: 'Tesis sobre Feuerbach' },
  { texto: 'La religión es el opio del pueblo.', obra: 'Contribución a la crítica de la filosofía del derecho de Hegel' },
]

/** URL de la cuenta de Instagram donde se publican los tweets de Marx. Cambiar por la cuenta real. */
export const INSTAGRAM_MARX_URL = 'https://www.instagram.com/marxensiglo21/'

/** Usuario de X (Twitter) de la cuenta que publica tweets/citas de Marx. Sin @. Ejemplo: MarxBotXXI */
export const X_MARX_USERNAME = 'AiMarx55909'
