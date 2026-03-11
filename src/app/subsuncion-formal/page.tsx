import Link from 'next/link'
import { PageHero } from '@/components/PageHero'

export default function SubsuncionFormalPage() {
  return (
    <div className="min-h-screen">
      <p className="max-w-3xl mx-auto px-4 pt-6 pb-2">
        <Link href="/" className="link-concepto">← Inicio</Link>
      </p>
      <PageHero
        title="Subsunción formal y real"
        subtitle="Trabajo subordinado al capital"
        description="Marx distingue dos modos: subsunción formal (mando sin cambiar la técnica) y subsunción real (cooperación, manufactura, maquinaria). Base: Manuscrito 1861-1863 y El Capital Cap. VI."
      />
      <div className="max-w-3xl mx-auto px-4 py-8">
      <section aria-label="Subsunción formal y real del capital">

        {/* Subsunción formal */}
        <article className="card-periodo mb-6">
          <header className="mb-3">
            <span className="block font-display text-sm text-marx-dorado tracking-wider mb-1">Control sin cambiar la técnica</span>
            <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide m-0">Subsunción formal del trabajo al capital</h2>
          </header>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-3">
            Al formarse, el capital no solo pone bajo su control el proceso de trabajo en general, sino <strong>formas concretas de trabajo ya existentes</strong>, en el estado tecnológico en que las encuentra —desarrolladas en condiciones precapitalistas—. Las subsume al principio <strong>solo formalmente</strong>, sin modificar su determinación técnica.
          </p>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-3">
            Esta subsunción formal consiste en que <strong>el trabajador pasa a estar bajo la vigilancia y el mando del capitalista</strong>. El capital se convierte en capacidad de mando sobre el trabajo: el obrero, en cuanto vende su capacidad de trabajo por un salario y por un tiempo determinado, entra al proceso como uno de los factores que el capital utiliza. Todos los factores —material de trabajo, medio de trabajo y trabajo vivo— le pertenecen al capitalista; vigila que el material se use bien, que los medios no se desperdicien y que el trabajador <strong>trabaje el tiempo completo</strong> y con la intensidad normal. A esto Marx lo llama subsunción formal del proceso de trabajo bajo el capital.
          </p>
          <p className="text-[0.88rem] text-marx-dorado">
            <strong>Conceptos:</strong> <Link href="/conceptos#concepto-subsuncion-formal" className="link-concepto">subsunción formal</Link>, plusvalía absoluta, proceso de trabajo, proceso de valorización.
          </p>
        </article>

        {/* Subsunción real - introducción */}
        <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide mb-3 border-b border-marx-dorado pb-2">
          Subsunción real: el capital revoluciona el modo de producción
        </h2>
        <p className="text-marx-crema-oscuro mb-5">
          En el curso de su desarrollo, el capital ya no subsume solo formalmente el proceso de trabajo: <strong>lo transforma</strong>, le da una figura nueva. La subsunción real tiene varios grados: la <strong>cooperación</strong>, la <strong>división del trabajo</strong> (manufactura) y el <strong>taller automático</strong> basado en la maquinaria.
        </p>

        {/* Cooperación */}
        <article className="card-periodo mb-6">
          <header className="mb-3">
            <span className="block font-display text-sm text-marx-dorado tracking-wider mb-1">Primer grado</span>
            <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide m-0">Subsunción real en la cooperación</h2>
          </header>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-3">
            La <strong>fuerza productiva social que resulta de la cooperación es gratuita</strong> para el capital: paga a cada trabajador individual, pero no paga la cooperación de los 360 (por ejemplo). Esa cooperación se presenta como <strong>fuerza productiva del capital</strong>, no del trabajo. Los obreros entran al proceso ya incorporados al capital; su cooperación no es una relación que ellos establezcan, sino una relación en la que son puestos por el capitalista —una unidad que los domina y cuyo portador es el capital. Su propia unificación en el trabajo es un <strong>poder ajeno a ellos</strong>: el poder del capital frente a los trabajadores aislados.
          </p>
          <p className="text-[0.88rem] text-marx-dorado">
            Con la cooperación aparece ya una diferencia específica respecto a la subsunción formal: el trabajo se cumple en condiciones que no pueden darse como trabajo independiente del individuo; condiciones que se presentan como una relación que domina al individuo.
          </p>
        </article>

        {/* División del trabajo */}
        <article className="card-periodo mb-6">
          <header className="mb-3">
            <span className="block font-display text-sm text-marx-dorado tracking-wider mb-1">Segundo grado</span>
            <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide m-0">Subsunción real en la división capitalista del trabajo (manufactura)</h2>
          </header>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-3">
            Las distintas operaciones que el trabajador ejecutaba una tras otra se <strong>separan y se personifican</strong>: cada proceso simple se convierte en la función exclusiva de un trabajador. No es el trabajo el que se reparte entre ellos; <strong>son ellos los que son repartidos entre los distintos procesos</strong>. La capacidad de trabajo queda reducida, en cada función, a una abstracción marchita, a una cualidad simple y monótona; la totalidad de la capacidad productiva del trabajador queda secuestrada. El trabajador deja de ser productor de una mercancía y pasa a ser solo productor de una <strong>operación parcial</strong>; se convierte en un componente vivo del taller, en un accesorio del capital. Ya no es solo la falta de medios de trabajo lo que lo obliga a vender su fuerza de trabajo: es su propio tipo de trabajo, que solo es efectivo dentro del mecanismo del capital.
          </p>
          <p className="text-[0.88rem] text-marx-dorado">
            La fuerza productiva que resulta de la división del trabajo pertenece al capital; la combinación se le enfrenta al trabajador como una fatalidad a la que está entregado.
          </p>
        </article>

        {/* Taller automático */}
        <article className="card-periodo mb-6">
          <header className="mb-3">
            <span className="block font-display text-sm text-marx-dorado tracking-wider mb-1">Tercer grado</span>
            <h2 className="font-display font-semibold text-lg text-marx-rojo-claro uppercase tracking-wide m-0">Subsunción real en el taller automático (maquinaria)</h2>
          </header>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-3">
            Con la maquinaria, las condiciones objetivas del trabajo se presentan de forma independiente y personificada frente al trabajo vivo: <strong>no es el trabajador el que emplea las condiciones de trabajo, sino estas las que emplean al trabajador</strong>. En el taller automático, el ser humano es el <strong>accesorio viviente</strong> de un cuerpo global que existe aparte de él: la maquinaria automática. El trabajo muerto está dotado de movimiento y el trabajo vivo no es más que un órgano consciente de ese sistema. La disciplina y la subordinación no resultan solo de la cooperación sino de la subordinación al sistema global de la maquinaria.
          </p>
          <p className="text-[0.95rem] text-marx-crema-oscuro leading-relaxed mb-3">
            La maquinaria tiene la tendencia a <strong>volver excedentarios a los trabajadores</strong> (sustituir trabajo vivo) y, a la vez, a atraerlos cuando hace falta más plusvalía mediante más obreros empleados. Esta atracción y repulsión —la inestabilidad constante de la existencia del trabajador— es lo característico. El trabajador combate por primera vez de forma directa la fuerza productiva desarrollada por el capital, considerándola un principio antagónico (destrucción de máquinas, resistencia a su introducción).
          </p>
          <p className="text-[0.88rem] text-marx-dorado">
            <strong>Conceptos:</strong> <Link href="/conceptos#concepto-subsuncion-real" className="link-concepto">subsunción real</Link>, capital constante, composición orgánica, plusvalía relativa.
          </p>
        </article>

        {/* Fuente */}
        <div className="panel border-l-marx-dorado">
          <h3 className="font-display font-semibold text-sm text-marx-dorado uppercase mb-2">Fuentes</h3>
          <p className="text-[0.95rem] text-marx-crema-oscuro mb-2">
            Marx, Manuscrito 1861-1863 (MEGA II/3), fragmentos sobre subsunción formal y real del proceso de trabajo al proceso de valorización. Traducción de Bolívar Echeverría: «La tecnología del capital. Subsunción formal y subsunción real del proceso de trabajo al proceso de valorización», <em>Cuadernos Políticos</em> núm. 37, ERA, México, 1983.
          </p>
          <p className="text-sm text-marx-crema-oscuro">
            También: Marx, <em>El Capital</em>, Libro I, capítulo inédito (Cap. VI). Definiciones breves en <Link href="/conceptos" className="link-concepto">Conceptos</Link>. Para un resumen teórico: <Link href="/teorias#subsuncion-formal" className="link-concepto">Teorías → Subsunción formal y real del capital</Link>.
          </p>
        </div>
      </section>
      </div>
    </div>
  )
}
