import React from "react";

function CardZodiaco({ signo, fechaNacimiento }) {
  // Diccionario de información de horóscopos (esto es solo un ejemplo, debes ajustarlo)
  const horoscopoInfo = {
    Aries: {
      imagen:
        "https://tierrahechicera.com/wp-content/uploads/2018/08/Aries-150x150.png",
      presagio:
        "En octubre tienes que sanar Aries, tienes que progresar y tienes que avanzar como sea y sí, dejar atrás esos miedos que a menudo te frenan y te paralizan. Tienes que hacerlo por ti Aries, por tu vida, porque aún quedan muchas cosas que hacer, emocionantes oportunidades de crecimiento y avance. Tienes que creer y que confiar un poquito más en ti misma/o, ser más proactiva/o en todo y por supuesto no dejar cosas a medias. Sabes que a veces se te cruza el cable y eso que empezaste con tantas ganas, eres capaz de abandonarlo de un plumazo sólo porque algo no se dio como esperabas. Cuidado con esto Aries, ten confianza y proyecta una buena energía al exterior. Recuerda que somos lo que proyectamos, y el mundo ahora, te devolverá lo mismo. No dudes de tu talento y de tu capacidad para avanzar y progresar, para tener eso que quieres, de verdad. ",
      fechaInicio: "21 de marzo",
      fechaFin: "19 de abril",
      consejo: "Ya no sigas viejas costumbres y patrones",
    },
    Tauro: {
      imagen:
        "https://tierrahechicera.com/wp-content/uploads/2018/08/Tauro-150x150.png",
      presagio:
        "Vamos Tauro, comienza un mes nuevo y la verdad es que de alguna manera, lo estabas deseando. No lo has pasado bien del todo este tiempo atrás, andabas de lo más reivindicativo, había muchas cosas que no te parecían bien y lo cierto es que andabas más malhumorado de lo normal… Pero bueno, no hay nada que no cure una buena fiesta con amigas/os y con las personas que te quieren. Octubre será diferente Tauro.",
      fechaInicio: "20 de abril",
      fechaFin: "20 de mayo",
      consejo: "Ya no te aferres tanto a tus memorias",
    },
    Géminis: {
      imagen:
        "https://tierrahechicera.com/wp-content/uploads/2018/08/Geminis-150x150.png",
      presagio:
        "Vamos Géminis, comienza un nuevo mes y la verdad es que vas a estar on fire, créeme. Después de una temporada un poquito bajita de ánimos e incluso saturada/o de ciertas situaciones que hacían que tu cabeza explotara, se viene lo bueno. No será raro que comiences a tener un sentimiento mucho más ambicioso para asumir nuevos retos o para iniciar ese proyecto que tantas ganas tienes. Tu claridad mental aumenta Géminis, tu concentración también y eso será necesario para darle un empujón a todo. Intenta comprometerte con lo que haces por favor, no dejes las cosas a medias. ",
      fechaInicio: "21 de mayo",
      fechaFin: "20 de junio",
      consejo:
        "¡Disfruta todo como quieras! Vida solo una, experiencias varias.",
    },
    Cáncer: {
      imagen:
        "https://tierrahechicera.com/wp-content/uploads/2018/08/cancer-150x150.png",
      presagio:
        "Empieza octubre Cáncer, y la verdad es que la energía ahora se está alineando completamente a tu favor. Vas a vivir un momento en tu vida súper motivador, estarás lleno de confianza, de entusiasmo, preparada/o para asumir nuevos desafíos, responsabilidades, nuevas metas… Y lo más importante de todo esto es que tienes una determinación increíble para triunfar, para darle la vuelta a todo, para encontrar lo bueno en lo malo, la luz en la oscuridad Cáncer. Ahora ya no hay dramas ni mierdas que te frenen, te pondrás primero sobre todas las cosas, serás un poco más egoísta y aunque puedas dejarte llevar o conocer otro círculo de personas importante, te pondrás delante de todo.",
      fechaInicio: "21 de junio",
      fechaFin: "22 de julio",
      consejo:
        "Recuerda uno de los 4 acuerdos, ¡No te lo tomes personal!, si sigues los demas acuerdos ya la hiciste.",
    },
    Leo: {
      imagen:
        "https://tierrahechicera.com/wp-content/uploads/2018/08/leo-150x150.png",
      presagio:
        "Octubre será para ti un mes de sanación Leo, y ahora, lo necesitas más que nunca. Tragas con muchas cosas, por fuera, siempre bien, siempre alegre, siempre contenta/o, siempre dando lo mejor de ti. Por dentro sin embargo estás llena/o de dudas, de problemas, de incertidumbre, de miedo… Y es que, aunque por norma general seas una persona alegre y llena de vida, tu interior es un torbellino de emociones que no siempre están en paz. Este mes hay muchas cosas que replantearse.",
      fechaInicio: "23 de julio",
      fechaFin: "22 de agosto",
      consejo: "¡Hey! Analisa primero, nunca te precipites a una decición.",
    },
    Virgo: {
      imagen:
        "https://tierrahechicera.com/wp-content/uploads/2018/08/virgo-150x150.png",
      presagio:
        "Octubre se viene lleno de esperanza Virgo pero también de momentos agridulces. Estás pasando por un momento en tu vida un poco crítico. Hay una preocupación fuerte por algo o por alguien y últimamente la tienes en la cabeza casi 24/7. Estas cosas son complicadas Virgo, y sólo las sabe la persona que las está pasando, pero recuerda que a veces el destino es caprichoso, y por más que te preocupes o no, si algo tiene que pasar, va a pasar. Intenta emplear tu tiempo en cosas que te reporten momentos felices. Ahora es más importante que nunca que le pongas ganas y positividad a todo",
      fechaInicio: "23 de agosto",
      fechaFin: "22 de septiembre",
      consejo: "En el pedir esta el dar.",
    },
    Libra: {
      imagen:
        "https://tierrahechicera.com/wp-content/uploads/2018/08/libra-150x150.png",
      presagio:
        "Comienza un nuevo mes Libra, y ¡es TU MES Libra! Hay que celebrar muchas cosas así que, que ese ánimo no decaiga, por favor… Es verdad que en lo emocional, aunque por momentos te esté costando encontrarte un poco, hay muchas dudas que serán resueltas este mes. A ti te va la marcha y sientes que cuando de alguna manera te estancas en algo, las cosas no van bien. Pero no es tan así Libra, en serio, no hagas un drama por todo por favor. Hay etapas que son así en la vida, momentos en los que estamos más tranquilos, en los que hay que ponerse a prueba y trabajarlo todo desde la calma. Vamos, que estar en la zona de confort un tiempo tampoco es algo malo, no es un drama ¿ok? No hace falta estar constantemente con las emociones a flor de piel y súper excitada/o con todo. No es necesario",
      fechaInicio: "23 de septiembre",
      fechaFin: "22 de octubre",
      consejo: "¡Avanza! Ya no queda nada atrás",
    },
    Escorpio: {
      imagen:
        "https://tierrahechicera.com/wp-content/uploads/2018/08/Escorpio-150x150.png",
      presagio:
        "Llegamos a octubre Escorpio y lo cierto es que, ahora tienes un mes por delante para hacer las cosas mejor de lo que las estaban haciendo hasta ahora. Tienes que centrarte en tu futuro profesional, darle duro a todo lo que hagas y conseguir tus objetivos. Este mes será clave. Si estás estudiando, no seas vaga/o y vayas sólo a sacar la nota mínima para no suspender ¿ok? Ve a por tus máximas y rétate. El Universo conspirará a tu favor, los planetas están alineados y las oportunidades van a darse cada muy poco tiempo. Quizás en algún momento hasta llegues a pensar que es cuestión de suerte, pero NO Escorpio. Tu energía está vibrando en la frecuencia que debe, estás alejando malos pensamientos de tu cabeza, no quieres quedarte ahí donde sufres y estás poniendo todo de tu parte para hacer las cosas bien. Pues todo eso, unido al clima astral que se viene, lo hace posible.",
      fechaInicio: "23 de octubre",
      fechaFin: "21 de noviembre",
      consejo: "¡Confia en tus capacidades!",
    },
    Sagitario: {
      imagen:
        "https://tierrahechicera.com/wp-content/uploads/2018/08/Sagitario-150x150.png",
      presagio:
        "Vamos Sagi, tienes que cambiar un poco esa actitud que tienes. Es verdad que se han venido un montón de situaciones de mi3rda últimamente, situaciones que no esperabas que pasaran y que te han puesto la vida un poco patas arriba. Pero ya está, la vida sigue y si no, acuérdate de la de veces que te has levantado y que has empezado algo nuevo. Eres una persona increíble, puedes con todo y desde luego una caída no va a joderte la vida, y lo sabes.",
      fechaInicio: "22 de noviembre",
      fechaFin: "21 de diciembre",
      consejo: "Define tus ideas, puede sobre salir una de ellas.",
    },
    Capricornio: {
      imagen:
        "https://tierrahechicera.com/wp-content/uploads/2023/07/Capricornio-150x150.webp",
      presagio:
        "Vamos Capri, mes nuevo, energías renovadas, por dentro y por fuera… Cuando hay luz dentro de ti, lo iluminas todo, y en octubre, créeme que será así. Tienes una luz especial y has sabido dejar todo el mal rollo atrás, de hecho, en octubre te sentirás mejor porque cerrarás una conversación con alguien muy importante para ti y que, de alguna manera, te estaba empezando a incomodar. Octubre será un mes en el que vas a empezar a encontrarte muchísimo mejor contigo misma/o, con tu cuerpo, con tu cara, con tu físico en general.",
      fechaInicio: "22 de diciembre",
      fechaFin: "19 de enero",
      consejo: "Rompe un poco las reglas, ser rebelde un poco no hace mal",
    },
    Acuario: {
      imagen:
        "https://tierrahechicera.com/wp-content/uploads/2018/08/Acuario-150x150.png",
      presagio:
        "Vamos Acuario, octubre se viene lleno de emociones un poco contradictorias, cambios potentes de opinión y mucha lucha por no perder esa autoestima y ese amor propio. Estás en un momento muy bueno de tu vida Acuario, profesionalmente se vienen tiempos de mucha prosperidad, avanzas como profesional y como persona y créeme que son muchos los que pagarían por tenerte al lado. Al final, eres una persona que da un buen rollo a los demás increíble, una persona llena de carisma y de buen rollo capaz de elevar a los demás a lo más alto.",
      fechaInicio: "20 de enero",
      fechaFin: "18 de febrero",
      consejo: "¡Honra tu casa! Es tu espacio",
    },
    Piscis: {
      imagen:
        "https://tierrahechicera.com/wp-content/uploads/2018/08/Piscis-150x150.png",
      presagio:
        "Comienza un nuevo mes Piscis y la verdad es que no deberías meterte en camisas de once varas ahora. Confías mucho en personas que tarde o temprano terminarán por traicionarte, hay gente que no es quien dice ser Pececito, de verdad. No confíes tanto en las palabras y céntrate más en los hechos. Te empezarán a descuadrar ciertas cosas de repente. El consejo sin duda es que te vayas alejando poco a poco, que no des tanto de golpe. No la cagues de nuevo.",
      fechaInicio: "19 de febrero",
      fechaFin: "20 de marzo",
      consejo: "¡Nunca esperes a que llegue! Ve por ello, que ganaras",
    },
  };

  // Lógica para obtener la información del horóscopo según el signo
  const infoHoroscopo = horoscopoInfo[signo];

  if (!infoHoroscopo) {
    return <div>No se encontró información para este signo.</div>;
  }

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h1 className="card-title">{signo}</h1>
        <img src={infoHoroscopo.imagen} alt={signo} className="img-fluid" />
        <h2>Presagio:</h2>
        <h3 id="pa2" className="mt-3">
          {infoHoroscopo.presagio}
        </h3>
        <h3 id="pa">
          Horóscopo desde {infoHoroscopo.fechaInicio} hasta{" "}
          {infoHoroscopo.fechaFin}
        </h3>
        <h2>Consejo para la semana:</h2>
        <h3 id="pa">{infoHoroscopo.consejo}</h3>
      </div>
    </div>
  );
}

export default CardZodiaco;
