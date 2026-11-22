/*
 * CONTENIDO DE LA WEB
 * --------------------------------------------------------------
 * Todo lo que se ve en la página sale de este archivo.
 * Más adelante esto se va a editar desde el panel de administración;
 * por ahora sirve para armar la primera versión y mostrársela a la doctora.
 */
window.SITE = {
  contacto: {
    // Número con código de país, sin "+" ni espacios. Ej: 5491112345678
    whatsapp: "5493424637076",
    instagram: "dranadirhadad",
    direccion: "Urquiza 3668 · Santa Fe",
    horarios: "",             // Ej: "Lunes a viernes · 10 a 19 h"
  },

  // Banner principal (promoción del mes)
  promo: {
    activa: true,
    etiqueta: "Tox Day · Viernes 18 de diciembre",
    titulo: "Toxina botulínica a un precio excepcional",
    precioAntes: "$350.000",
    precioAhora: "$240.000",
    destacado: "",           // texto grande alternativo si no hay precio (ej: "15% off")
    texto: "Una jornada especial dedicada a la aplicación de toxina botulínica. Reservá tu lugar por WhatsApp.",
    boton: "Reservar mi lugar",
    tratamiento: "toxina-botulinica", // a qué tratamiento lleva el banner
    vence: "Viernes 18 de diciembre · Cupos limitados",
    // Imagen del banner (si se deja vacío, se muestra la foto de la doctora)
    imagen: "img/xeomin.jpg",
    imagenTitulo: "Xeomin®",
    imagenTexto: "Toxina botulínica tipo A",
  },

  // Plan destacado en el inicio
  plan: {
    activo: true,
    titulo: "Plan Integral Corporal",
    texto: "Un abordaje que combina diferentes tecnologías para trabajar piel, tejido celular subcutáneo y tejido adiposo.",
    incluye: [
      { nombre: "Venus Legacy", fechas: "2 y 16 de diciembre", enlace: "venus-legacy" },
      { nombre: "HIFU 25D + Liposonix", fechas: "11 de diciembre", enlace: "hifu-25d" },
      { nombre: "Carboxiterapia", fechas: "22 de diciembre", enlace: "carboxiterapia" },
    ],
    nota: "Todos incluyen electroestimulación al finalizar cada tratamiento.",
    boton: "Consultá por tu Plan Integral",
    tratamiento: "plan-integral-corporal",
  },

  // Agenda del mes (fechas ya establecidas)
  agenda: {
    titulo: "Agenda de diciembre",
    fechas: [
      { fecha: "2026-12-02", titulo: "Venus Legacy", detalle: "Plan Integral Corporal · Incluye electroestimulación.", enlace: "venus-legacy" },
      { fecha: "2026-12-11", titulo: "HIFU 25D + Liposonix", detalle: "Plan Integral Corporal · Incluye electroestimulación.", enlace: "hifu-25d" },
      { fecha: "2026-12-16", titulo: "Venus Legacy", detalle: "Plan Integral Corporal · Incluye electroestimulación.", enlace: "venus-legacy" },
      { fecha: "2026-12-18", titulo: "Tox Day", detalle: "Toxina botulínica a $240.000. Cupos limitados.", enlace: "toxina-botulinica", promo: true },
      { fecha: "2026-12-22", titulo: "Carboxiterapia", detalle: "Plan Integral Corporal · Incluye electroestimulación.", enlace: "carboxiterapia" },
    ],
  },

  sobreMi: {
    titulo: "Hola, soy la Dra. Nadir Hadad",
    texto: [
      "Médica especializada en medicina estética. Mi objetivo es acompañarte con tratamientos que realcen tu belleza natural, siempre con resultados armónicos y cuidando tu salud.",
      "Cada consulta empieza escuchándote: evaluamos qué necesitás y armamos un plan pensado para vos.",
    ],
    foto: "img/dra-nadir.jpg?v=202611220205",
  },

  tratamientos: [
    {
      slug: "plan-integral-corporal",
      nombre: "Plan Integral Corporal",
      zona: "Corporal",
      resumen: "Un abordaje que combina diferentes tecnologías para trabajar piel, tejido celular subcutáneo y tejido adiposo.",
      descripcion: [
        "El Plan Integral Corporal combina distintas tecnologías en un mismo programa, para potenciar los resultados trabajando cada capa: la piel, el tejido celular subcutáneo y el tejido adiposo.",
        "Incluye Venus Legacy, HIFU 25D, Liposonix y carboxiterapia. Todas las sesiones terminan con electroestimulación.",
      ],
      indicaciones: ["Venus Legacy", "HIFU 25D", "Liposonix", "Carboxiterapia", "Electroestimulación"],
      indicacionesTitulo: "¿Qué incluye?",
      datos: {
        sesion: "Según cada tecnología",
        resultados: "Progresivos",
        duracion: "Plan personalizado",
      },
      cuidados: ["Se indican en la consulta según las tecnologías de tu plan."],
      destacado: true,
      casos: [],
    },
    {
      slug: "toxina-botulinica",
      nombre: "Toxina botulínica",
      zona: "Rostro",
      resumen: "Suaviza las arrugas de expresión y previene que se marquen, con un resultado natural y descansado.",
      descripcion: [
        "La toxina botulínica relaja de forma temporal los músculos responsables de las arrugas de expresión. Así la piel se ve más lisa y se evita que las líneas se profundicen con el tiempo.",
        "Bien aplicada, el rostro conserva su expresión: el objetivo es lograr un rostro descansado, no \"congelado\".",
      ],
      indicaciones: [
        "Arrugas de la frente",
        "Entrecejo",
        "Patas de gallo",
        "Prevención del envejecimiento",
        "Sudoración excesiva (hiperhidrosis)",
        "Bruxismo",
      ],
      datos: {
        sesion: "20 a 30 minutos",
        resultados: "Desde los 3 a 7 días",
        duracion: "4 a 6 meses",
      },
      cuidados: [
        "No acostarte durante las 4 horas siguientes.",
        "No masajear ni presionar la zona tratada ese día.",
        "Evitar ejercicio intenso, sauna y calor durante 24 horas.",
      ],
      destacado: true,
      casos: [
        // { antes: "img/casos/toxina-1-antes.jpg", despues: "img/casos/toxina-1-despues.jpg", detalle: "Frente y entrecejo · 15 días" }
      ],
    },
    {
      slug: "acido-hialuronico-labios",
      nombre: "Ácido hialurónico en labios",
      zona: "Labios",
      resumen: "Hidratación, contorno y volumen a medida, respetando la armonía de tu rostro.",
      descripcion: [
        "El ácido hialurónico es una sustancia que nuestro cuerpo produce naturalmente. Aplicado en los labios permite definir el contorno, corregir asimetrías, hidratar y dar volumen.",
        "Se puede buscar un resultado sutil o más marcado: lo definimos en la consulta según tus facciones y lo que quieras lograr.",
      ],
      indicaciones: [
        "Labios finos o con poco volumen",
        "Asimetrías",
        "Perfilado del contorno",
        "Labios deshidratados",
        "Código de barras (arrugas peribucales)",
      ],
      datos: {
        sesion: "30 a 45 minutos",
        resultados: "Inmediatos",
        duracion: "6 a 12 meses",
      },
      cuidados: [
        "Es normal una leve inflamación durante 48 a 72 horas.",
        "No maquillar los labios durante 24 horas.",
        "Evitar ejercicio intenso, sol y calor durante 48 horas.",
      ],
      destacado: true,
      casos: [],
    },
    {
      slug: "fulloria",
      nombre: "Fulloria",
      zona: "Rostro",
      resumen: "Bioestimulador que estimula la producción natural de colágeno y elastina para una piel más firme y luminosa.",
      descripcion: [
        "Fulloria es un bioestimulador: un tratamiento inyectable que activa los mecanismos propios de la piel para producir colágeno y elastina, las proteínas que le dan firmeza y elasticidad.",
        "Es conocido por ser uno de los bioestimuladores de efecto más rápido. El resultado es una piel más firme, hidratada y con mejor calidad, de forma natural y progresiva.",
      ],
      indicaciones: [
        "Flacidez facial",
        "Pérdida de firmeza",
        "Piel apagada o deshidratada",
        "Líneas finas",
        "Prevención del envejecimiento",
      ],
      datos: {
        sesion: "Aprox. 45 minutos",
        resultados: "Progresivos",
        duracion: "Según el plan indicado",
      },
      cuidados: [
        "Puede haber leve inflamación o enrojecimiento que pasa en pocos días.",
        "Evitar sol, calor intenso y ejercicio fuerte durante 24 a 48 horas.",
        "Seguir las indicaciones de la doctora para potenciar el efecto.",
      ],
      destacado: false,
      casos: [],
    },
    {
      slug: "carboxiterapia",
      nombre: "Carboxiterapia",
      zona: "Corporal y facial",
      resumen: "Mejora la circulación y la oxigenación de los tejidos. Ideal para celulitis, estrías, flacidez y ojeras.",
      descripcion: [
        "La carboxiterapia consiste en aplicar dióxido de carbono (CO₂) medicinal debajo de la piel con una aguja muy fina. El organismo responde aumentando la circulación y la oxigenación de la zona.",
        "Esto ayuda a mejorar la calidad de la piel, la celulitis, la grasa localizada y la flacidez. Se realiza en un ciclo de sesiones que definimos según cada caso.",
      ],
      indicaciones: [
        "Celulitis",
        "Grasa localizada",
        "Estrías",
        "Flacidez",
        "Ojeras",
        "Mala circulación",
      ],
      datos: {
        sesion: "15 a 30 minutos",
        resultados: "Progresivos, desde las primeras sesiones",
        duracion: "Ciclo de 8 a 10 sesiones (según el caso)",
      },
      cuidados: [
        "La sensación de calor o crepitación en la zona es normal y pasa en minutos.",
        "Tomar abundante agua.",
        "Mantener actividad física para potenciar los resultados.",
      ],
      destacado: false,
      casos: [],
    },
    {
      slug: "venus-legacy",
      nombre: "Venus Legacy",
      zona: "Corporal y facial",
      resumen: "Tecnología que combina radiofrecuencia y campos electromagnéticos para mejorar flacidez, celulitis y contorno.",
      descripcion: [
        "Venus Legacy combina radiofrecuencia multipolar con campos electromagnéticos pulsados. Juntas, calientan suavemente el tejido y estimulan la producción de colágeno, mejorando la firmeza de la piel.",
        "Es un tratamiento no invasivo y sin tiempo de recuperación: la sensación es similar a un masaje cálido y podés retomar tus actividades en el momento.",
      ],
      indicaciones: [
        "Flacidez corporal y facial",
        "Celulitis",
        "Remodelado del contorno",
        "Arrugas y líneas finas",
        "Calidad de la piel",
      ],
      datos: {
        sesion: "30 a 40 minutos",
        resultados: "Progresivos",
        duracion: "Ciclo de sesiones según la zona",
      },
      cuidados: [
        "Tomar abundante agua antes y después de la sesión.",
        "Podés retomar tus actividades de inmediato.",
        "Mantener una rutina de actividad física para sostener los resultados.",
      ],
      destacado: false,
      casos: [],
    },
    {
      slug: "hifu-25d",
      nombre: "HIFU 25D",
      zona: "Corporal y facial",
      resumen: "Ultrasonido focalizado de alta intensidad: efecto lifting y tensado sin cirugía.",
      descripcion: [
        "HIFU (ultrasonido focalizado de alta intensidad) concentra energía en distintas profundidades de la piel y de los tejidos de sostén. Eso genera una retracción inmediata y estimula la producción de colágeno nuevo.",
        "El resultado es un efecto tensor y de lifting sin cirugía ni agujas, que sigue mejorando durante las semanas posteriores al tratamiento.",
      ],
      indicaciones: [
        "Flacidez facial y de cuello",
        "Definición del óvalo facial",
        "Papada",
        "Flacidez corporal",
        "Arrugas",
      ],
      datos: {
        sesion: "30 a 60 minutos (según la zona)",
        resultados: "Progresivos, máximo a los 2 a 3 meses",
        duracion: "Según cada paciente",
      },
      cuidados: [
        "Puede haber enrojecimiento o sensibilidad leve que pasa en horas.",
        "Usar protector solar e hidratar la piel.",
        "Podés retomar tus actividades normalmente.",
      ],
      destacado: false,
      casos: [],
    },
    {
      slug: "liposonix",
      nombre: "Liposonix",
      zona: "Corporal",
      resumen: "Ultrasonido focalizado que reduce la grasa localizada sin cirugía.",
      descripcion: [
        "Liposonix utiliza ultrasonido focalizado de alta intensidad dirigido al tejido adiposo. La energía destruye las células de grasa de la zona tratada, que luego el organismo elimina de forma natural.",
        "Es una alternativa no quirúrgica para reducir medidas en zonas puntuales como abdomen y flancos, sin tiempo de recuperación.",
      ],
      indicaciones: [
        "Grasa localizada en abdomen",
        "Flancos",
        "Reducción de medidas",
        "Remodelado corporal",
      ],
      datos: {
        sesion: "Aprox. 1 hora (según la zona)",
        resultados: "Progresivos, visibles entre las 8 y 12 semanas",
        duracion: "Según cada paciente",
      },
      cuidados: [
        "Tomar abundante agua.",
        "Mantener actividad física y alimentación saludable.",
        "Puede haber sensibilidad leve en la zona durante algunos días.",
      ],
      destacado: false,
      casos: [],
    },
  ],
};
