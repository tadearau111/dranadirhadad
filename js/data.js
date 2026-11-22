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
    foto: "img/dra-nadir.jpg?v=202611220216",
  },

  // Categorías en el orden en que se muestran en la página de Tratamientos
  categorias: ["Rostro", "Corporal", "Capilar"],

  /*
   * Cada tratamiento puede tener:
   *  slug, nombre, categoria, zona, resumen, descripcion[]
   *  datos: [["Etiqueta", "Valor"], ...]          → tarjetas de datos rápidos
   *  opcionesTitulo + opciones: [{ nombre, texto, meta: [] }]  → protocolos / productos / zonas
   *  indicacionesTitulo + indicaciones: []        → chips
   *  extras: [{ titulo, parrafos: [], lista: [] }] → secciones adicionales
   *  cuidados: []                                 → cuidados posteriores
   *  cta: texto del botón de consulta
   *  casos: [{ antes, despues, detalle }]         → fotos de antes y después
   */
  tratamientos: [
    // ---------------------------------------------------------------- ROSTRO
    {
      slug: "toxina-botulinica",
      nombre: "Toxina botulínica",
      categoria: "Rostro",
      zona: "Rostro",
      resumen: "Suaviza las arrugas de expresión y ayuda a prevenir que se profundicen, con una apariencia relajada y natural.",
      descripcion: [
        "La toxina botulínica es una proteína utilizada en medicina estética que actúa de manera temporal sobre la actividad de determinados músculos.",
        "Al disminuir la contracción muscular, ayuda a suavizar las arrugas dinámicas o de expresión que aparecen como consecuencia de los movimientos faciales repetitivos, y puede contribuir a prevenir que estas líneas se profundicen con el tiempo.",
        "El objetivo es lograr una apariencia más relajada y natural, respetando la expresión y las características individuales de cada paciente. Las zonas a tratar y la cantidad de producto se determinan mediante una evaluación médica personalizada, de acuerdo con la anatomía, la fuerza muscular y los objetivos de cada paciente.",
      ],
      datos: [
        ["Sesión", "20 a 30 minutos"],
        ["Resultados", "Desde los 3 a 7 días"],
        ["Duración", "4 a 6 meses"],
      ],
      indicacionesTitulo: "¿Para qué está indicada?",
      indicaciones: ["Arrugas de la frente", "Entrecejo", "Patas de gallo", "Prevención del envejecimiento", "Sudoración excesiva (hiperhidrosis)", "Bruxismo"],
      cuidados: [
        "No acostarte durante las 4 horas siguientes.",
        "No masajear ni presionar la zona tratada ese día.",
        "Evitar ejercicio intenso, sauna y calor durante 24 horas.",
      ],
      destacado: true,
      casos: [],
    },
    {
      slug: "armonizacion-facial",
      nombre: "Ácido hialurónico · Armonización facial",
      categoria: "Rostro",
      zona: "Rostro y labios",
      resumen: "Equilibra, define y mejora las proporciones del rostro con un resultado armónico, sutil y natural. Incluye labios, mentón, pómulos, ojeras y más.",
      descripcion: [
        "La armonización facial con ácido hialurónico es un tratamiento médico-estético que busca equilibrar, definir y mejorar las proporciones del rostro, respetando siempre las características naturales de cada paciente y priorizando un resultado armónico, sutil y natural.",
        "Hay diferentes zonas que pueden tratarse. Cada tratamiento requiere una evaluación y un diagnóstico médico previo, ya que la indicación depende de la edad, la pérdida de volumen, la estructura facial, las proporciones y las necesidades de cada paciente.",
      ],
      datos: [
        ["Sesión", "30 a 60 minutos"],
        ["Resultados", "Inmediatos"],
        ["Duración", "6 a 12 meses (según zona y producto)"],
      ],
      opcionesTitulo: "Zonas que tratamos",
      opciones: [
        { nombre: "Labios", texto: "Perfilado y definición del contorno, aumento y proyección del volumen, hidratación y mejora de la calidad del labio." },
        { nombre: "Mentón", texto: "Mejora la proyección, definición y proporción del mentón, favoreciendo la armonía del perfil. Puede complementar la rinomodelación o la armonización de labios." },
        { nombre: "Mandíbula", texto: "Define y resalta el contorno mandibular, especialmente cuando hay pérdida de proyección o definición." },
        { nombre: "Pómulos", texto: "Repone volumen y aporta proyección al tercio medio del rostro, mejorando el equilibrio y la estructura facial." },
        { nombre: "Ojeras", texto: "Mejora el aspecto del hundimiento o surco de la zona infraorbitaria, siempre que el paciente sea candidato." },
        { nombre: "Surcos nasogenianos", texto: "Suaviza la transición entre la nariz y la mejilla, reduciendo la apariencia marcada del surco." },
        { nombre: "Líneas de marioneta", texto: "Mejora las líneas que se forman desde las comisuras de los labios hacia el mentón, asociadas al descenso de los tejidos." },
        { nombre: "Rinomodelación", texto: "Mejora y armoniza determinadas características de la nariz sin cirugía, integrando sus proporciones con el resto del rostro.", meta: ["Ácido hialurónico de mayor viscosidad y reticulación"] },
        { nombre: "Fosas temporales", texto: "Repone volumen en la región temporal cuando hay pérdida de soporte. Puede formar parte de protocolos como el efecto “foxy eyes”." },
      ],
      extras: [
        {
          titulo: "Importante",
          parrafos: [
            "El tratamiento con ácido hialurónico no consiste en aplicar relleno en todas las zonas mencionadas, sino en identificar qué necesita cada rostro.",
            "La evaluación médica personalizada es fundamental para determinar las zonas a tratar, el producto adecuado y la cantidad necesaria, siempre buscando preservar la naturalidad.",
          ],
        },
      ],
      cuidados: [
        "Es normal una leve inflamación durante 48 a 72 horas.",
        "No maquillar la zona durante 24 horas.",
        "Evitar ejercicio intenso, sol y calor durante 48 horas.",
      ],
      destacado: true,
      casos: [],
    },
    {
      slug: "bioestimuladores",
      nombre: "Bioestimuladores",
      categoria: "Rostro",
      zona: "Rostro",
      resumen: "Estimulan la producción natural de colágeno para una piel más firme, elástica y con mejor estructura. Radiesse®, Olidia®, Harmonyca®, Fulloria® e hilos tensores.",
      descripcion: [
        "Los bioestimuladores de colágeno son sustancias que se aplican mediante técnicas médicas para estimular los procesos naturales de producción de colágeno y, según el producto, otros componentes de la piel como la elastina.",
        "A diferencia de los tratamientos que buscan únicamente aportar volumen, trabajan sobre la propia piel, con una mejora natural y gradual. El resultado es una piel con mayor firmeza, elasticidad, estructura y mejor calidad.",
      ],
      datos: [
        ["Resultados", "Progresivos"],
        ["Sesiones", "Según producto y evaluación"],
        ["Objetivo", "Firmeza, estructura y calidad de piel"],
      ],
      opcionesTitulo: "Bioestimuladores que trabajamos",
      opciones: [
        { nombre: "Radiesse®", texto: "A base de hidroxiapatita de calcio. Estimula la producción de colágeno y mejora la firmeza y calidad de la piel. Según la técnica, también aporta soporte y definición." },
        { nombre: "Olidia®", texto: "A base de ácido poli-L-láctico. Favorece una producción progresiva de colágeno y mejora la firmeza y estructura de los tejidos." },
        { nombre: "Harmonyca®", texto: "Combina ácido hialurónico e hidroxiapatita de calcio, para trabajar tanto el soporte y la estructura como la calidad de la piel." },
        { nombre: "Fulloria®", texto: "A base de ácido hialurónico de alta densidad. Aporta estructura y soporte y mejora determinadas características de la piel." },
        { nombre: "Hilos tensores", texto: "Hilos de PDO (polidioxanona) que, colocados con técnicas médicas, generan un efecto tensor y estimulan la producción de colágeno." },
      ],
      extras: [
        {
          titulo: "Evaluación médica personalizada",
          parrafos: [
            "La elección del bioestimulador, la técnica, la cantidad de producto y el número de sesiones dependen de las características anatómicas, la calidad de la piel, el grado de flacidez y los objetivos de cada paciente.",
          ],
        },
      ],
      destacado: false,
      casos: [],
    },
    {
      slug: "skinboosters",
      nombre: "Skinboosters",
      categoria: "Rostro",
      zona: "Calidad de piel",
      resumen: "Mejoran la calidad de la piel desde el interior: más hidratada, luminosa, suave y uniforme. Belotero Revive®, Exoglow y NCTF®.",
      descripcion: [
        "Los skinboosters son tratamientos médico-estéticos diseñados para mejorar la calidad de la piel desde el interior, aportando hidratación y una apariencia más luminosa, uniforme y saludable.",
        "A diferencia de los rellenos, su objetivo no es modificar el volumen o las facciones, sino mejorar la hidratación, luminosidad, elasticidad y textura. Son una excelente opción para pieles deshidratadas, apagadas, con textura irregular o signos iniciales de envejecimiento.",
      ],
      opcionesTitulo: "Tratamientos que trabajamos",
      opciones: [
        { nombre: "Belotero Revive®", texto: "Combina ácido hialurónico y glicerol para mejorar la hidratación y la calidad de la piel, con una apariencia más suave y luminosa." },
        { nombre: "Exoglow", texto: "Combina exosomas, ácido hialurónico y vitaminas para revitalizar y mejorar progresivamente la calidad, luminosidad e hidratación de la piel." },
        { nombre: "NCTF®", texto: "Complejo revitalizante con ácido hialurónico, vitaminas y otros nutrientes, para mejorar hidratación, luminosidad y textura." },
      ],
      indicacionesTitulo: "¿Qué buscamos lograr?",
      indicaciones: ["Piel más hidratada", "Más luminosa", "Mejor textura y calidad", "Más suave y uniforme", "Apariencia fresca y saludable"],
      destacado: false,
      casos: [],
    },
    {
      slug: "mesoterapia-facial",
      nombre: "Mesoterapia facial",
      categoria: "Rostro",
      zona: "Rostro",
      resumen: "Microinyecciones de activos elegidos para cada piel: flacidez, hidratación, manchas, vitaminas o anti-age. Incluye limpieza facial previa.",
      descripcion: [
        "Las mesoterapias faciales son tratamientos médicos que consisten en la aplicación de microinyecciones de productos específicos, seleccionados según las necesidades y objetivos de cada paciente.",
        "Contamos con diferentes protocolos, que se adaptan al diagnóstico y al producto utilizado. Todos incluyen una limpieza facial previa (microdermoabrasión con punta de diamante y dermaplaning) para preparar la piel.",
        "La frecuencia y cantidad de sesiones varían según el objetivo y la respuesta de cada paciente. El valor puede variar según el producto, su formulación y su procedencia (nacional o importada).",
      ],
      datos: [
        ["Frecuencia", "1 sesión cada 15 días"],
        ["Sesiones", "Mínimo 10 recomendadas"],
        ["Incluye", "Limpieza facial previa"],
      ],
      opcionesTitulo: "Nuestros protocolos",
      opciones: [
        { nombre: "Flacidez cutánea", texto: "Mejora la firmeza, elasticidad y calidad de la piel, para una apariencia más firme y tonificada.", meta: ["Activos: DMAE, silicio, Laureth y ácido hialurónico", "1 sesión cada 15 días · mínimo 10"] },
        { nombre: "Hidratante", texto: "Mejora la hidratación y calidad de la piel, con un aspecto más luminoso, fresco y saludable.", meta: ["Activo principal: ácido hialurónico", "1 sesión cada 15 días · mínimo 10"] },
        { nombre: "Despigmentante", texto: "Mejora la apariencia de manchas e irregularidades de pigmentación, para un tono más uniforme y luminoso.", meta: ["Activos: ácido tranexámico, acetil glucosamina, vitamina C e idebenona", "1 sesión cada 15 días · mínimo 10"] },
        { nombre: "Shock de vitaminas · Exoglow", texto: "Tratamiento intensivo para revitalizar, hidratar y mejorar la luminosidad y calidad general de la piel.", meta: ["Complejo de vitaminas y ácido hialurónico", "3 sesiones · 1 por mes"] },
        { nombre: "Anti-age", texto: "Mejora la calidad de la piel y acompaña la prevención y el tratamiento de los signos del envejecimiento.", meta: ["1 sesión cada 15 días · mínimo 10"] },
      ],
      extras: [
        {
          titulo: "Evaluación personalizada",
          parrafos: [
            "El protocolo, los activos y la cantidad de sesiones se eligen según las características de la piel, el diagnóstico médico y los objetivos de cada paciente.",
            "La combinación de tratamientos puede adaptarse durante el proceso para acompañar la evolución de la piel y obtener resultados progresivos y naturales.",
          ],
        },
      ],
      cta: "Consultá por tu pack",
      destacado: false,
      casos: [],
    },
    {
      slug: "peelings-quimicos",
      nombre: "Peelings químicos",
      categoria: "Rostro",
      zona: "Piel",
      resumen: "Renuevan la piel y mejoran manchas, textura, acné y signos de envejecimiento. Protocolos profesionales Mesoestetic®.",
      descripcion: [
        "Los peelings químicos son tratamientos médico-estéticos que utilizan soluciones profesionales con agentes quimioexfoliantes, seleccionados según las necesidades de la piel y el objetivo del tratamiento.",
        "Favorecen la renovación de la piel y mejoran progresivamente signos de envejecimiento, manchas, irregularidades de textura y lesiones asociadas al acné.",
        "Utilizamos productos profesionales de Mesoestetic®, laboratorio de origen español, y los protocolos son seleccionados y realizados por médicos especializados en dermatología y medicina estética.",
      ],
      opcionesTitulo: "Nuestros protocolos",
      opciones: [
        { nombre: "Mesopeel® Jessner Pro", texto: "Para signos de envejecimiento cutáneo: mejora la textura, luminosidad y apariencia general de la piel." },
        { nombre: "Mesopeel® Eyecoon", texto: "Diseñado para la zona periocular, una de las áreas más delicadas del rostro. Mejora la apariencia y calidad de la piel alrededor de los ojos." },
        { nombre: "Mesopeel® TCA / Phen TCA", texto: "Para envejecimiento cutáneo más marcado y determinadas alteraciones de pigmentación localizadas, según evaluación médica." },
        { nombre: "Mesopeel® Melanostop Tran3x", texto: "Despigmentante: mejora la apariencia de manchas e irregularidades de pigmentación para un tono más uniforme." },
        { nombre: "Mesopeel® Blemiskin", texto: "Para pieles con tendencia acneica: mejora imperfecciones, textura y apariencia general." },
      ],
      extras: [
        {
          titulo: "Evaluación médica personalizada",
          parrafos: [
            "No todos los peelings son adecuados para todas las pieles. Antes del tratamiento evaluamos el tipo de piel, la alteración a tratar y el protocolo más adecuado.",
            "El producto, la concentración, el número de sesiones y la frecuencia se adaptan a cada paciente, para una renovación progresiva, segura y controlada.",
          ],
        },
      ],
      cuidados: [
        "Usar protector solar todos los días.",
        "No exponerse al sol durante los días posteriores.",
        "Seguir la rutina domiciliaria indicada por la doctora.",
      ],
      destacado: false,
      casos: [],
    },
    {
      slug: "plasma-rico-en-plaquetas",
      nombre: "Plasma rico en plaquetas (PRP)",
      categoria: "Rostro",
      zona: "Rostro",
      resumen: "Utiliza componentes de tu propia sangre para regenerar la piel y mejorar su luminosidad, hidratación y textura.",
      descripcion: [
        "El plasma rico en plaquetas (PRP) es un tratamiento médico-estético que utiliza componentes obtenidos de la propia sangre del paciente para favorecer los procesos naturales de regeneración y bioestimulación de la piel.",
        "Mejora progresivamente la calidad y apariencia de la piel. Todos nuestros tratamientos de PRP facial incluyen una limpieza y preparación previa de la piel.",
      ],
      datos: [
        ["Frecuencia", "1 sesión mensual"],
        ["Duración del plan", "6 meses"],
        ["Incluye", "Limpieza y preparación de la piel"],
      ],
      indicacionesTitulo: "Beneficios",
      indicaciones: ["Regeneración y renovación celular", "Bioestimulación", "Mayor luminosidad", "Hidratación", "Mejor textura y calidad", "Apariencia más fresca"],
      extras: [
        {
          titulo: "Evaluación médica personalizada",
          parrafos: ["La indicación y el protocolo pueden adaptarse según las características de la piel y los objetivos de cada paciente."],
        },
      ],
      destacado: false,
      casos: [],
    },
    {
      slug: "hifu-25d",
      nombre: "HIFU 25D",
      categoria: "Rostro",
      zona: "Facial y corporal",
      resumen: "Ultrasonido focalizado de alta intensidad: efecto lifting y tensado sin cirugía.",
      descripcion: [
        "HIFU (ultrasonido focalizado de alta intensidad) concentra energía en distintas profundidades de la piel y de los tejidos de sostén. Eso genera una retracción inmediata y estimula la producción de colágeno nuevo.",
        "El resultado es un efecto tensor y de lifting sin cirugía ni agujas, que sigue mejorando durante las semanas posteriores al tratamiento.",
      ],
      datos: [
        ["Sesión", "30 a 60 minutos (según la zona)"],
        ["Resultados", "Progresivos, máximo a los 2 a 3 meses"],
        ["Recuperación", "Sin tiempo de recuperación"],
      ],
      indicacionesTitulo: "¿Para qué está indicado?",
      indicaciones: ["Flacidez facial y de cuello", "Definición del óvalo facial", "Papada", "Flacidez corporal", "Arrugas"],
      cuidados: [
        "Puede haber enrojecimiento o sensibilidad leve que pasa en horas.",
        "Usar protector solar e hidratar la piel.",
        "Podés retomar tus actividades normalmente.",
      ],
      destacado: false,
      casos: [],
    },

    // -------------------------------------------------------------- CORPORAL
    {
      slug: "plan-integral-corporal",
      nombre: "Plan Integral Corporal",
      categoria: "Corporal",
      zona: "Corporal",
      resumen: "Un abordaje que combina diferentes tecnologías para trabajar piel, tejido celular subcutáneo y tejido adiposo.",
      descripcion: [
        "El Plan Integral Corporal combina distintas tecnologías en un mismo programa, para potenciar los resultados trabajando cada capa: la piel, el tejido celular subcutáneo y el tejido adiposo.",
        "Todas las sesiones terminan con electroestimulación.",
      ],
      datos: [
        ["Sesiones", "Según cada tecnología"],
        ["Resultados", "Progresivos"],
        ["Plan", "Personalizado"],
      ],
      opcionesTitulo: "¿Qué incluye?",
      opciones: [
        { nombre: "Venus Legacy", texto: "Radiofrecuencia y campos electromagnéticos para flacidez, celulitis y contorno.", enlace: "venus-legacy" },
        { nombre: "HIFU 25D", texto: "Ultrasonido focalizado con efecto tensor.", enlace: "hifu-25d" },
        { nombre: "Liposonix", texto: "Ultrasonido focalizado para reducir grasa localizada.", enlace: "liposonix" },
        { nombre: "Carboxiterapia", texto: "CO₂ medicinal para mejorar circulación y oxigenación.", enlace: "carboxiterapia" },
        { nombre: "Electroestimulación", texto: "Al finalizar cada tratamiento." },
      ],
      destacado: true,
      casos: [],
    },
    {
      slug: "mesoterapia-corporal",
      nombre: "Mesoterapia corporal",
      categoria: "Corporal",
      zona: "Celulitis y flacidez",
      resumen: "Microinyecciones de mesofármacos elegidos según tu tipo de celulitis o flacidez: Cellushock, Lipolytic Solution y Body Firming.",
      descripcion: [
        "La mesoterapia corporal consiste en la aplicación de microinyecciones de productos específicos, llamados mesofármacos, directamente en las zonas a tratar.",
        "Los protocolos se eligen según el tipo de celulitis, el grado de flacidez y las características de cada paciente. Todos incluyen una limpieza y preparación previa de la zona. El valor depende de la formulación y de si los productos son nacionales o importados.",
      ],
      datos: [
        ["Frecuencia", "1 sesión cada 15 días"],
        ["Sesiones", "Mínimo 8"],
        ["Incluye", "Limpieza y preparación de la zona"],
      ],
      opcionesTitulo: "Nuestros protocolos",
      opciones: [
        { nombre: "Celulitis edematosa", texto: "Para la celulitis de aspecto acolchado o esponjoso, con volumen, hinchazón y textura irregular, similar a la “piel de naranja”.", meta: ["Producto: Cellushock", "Activos: cafeína, L-carnitina, capsaicina, rutina y centella asiática"] },
        { nombre: "Celulitis compacta", texto: "Para la celulitis de aspecto firme y duro, con hoyuelos definidos y profundos.", meta: ["Producto: Lipolytic Solution", "Activos: alcachofa, silicio, teofilina, L-carnitina y centella asiática"] },
        { nombre: "Flacidez corporal", texto: "Para la flacidez blanda, con piel más fina, ondulada, móvil o con tendencia al descenso.", meta: ["Producto: Body Firming", "Activos: silicio, DMAE, piruvato sódico, hidroxiprolina y centella asiática"] },
      ],
      extras: [
        {
          titulo: "¿Cómo identificamos cada tipo?",
          lista: [
            "Celulitis compacta: hoyuelos definidos y profundos, con piel firme y tejido más duro.",
            "Celulitis edematosa: sensación de volumen o hinchazón, con textura más difusa y aspecto acolchado.",
            "Flacidez corporal: piel más fina, móvil, ondulada o con pérdida de firmeza y tendencia a la caída.",
          ],
        },
        {
          titulo: "Evaluación personalizada",
          parrafos: [
            "No todas las celulitis ni todos los tipos de flacidez requieren el mismo tratamiento. Antes de comenzar evaluamos la zona para determinar el diagnóstico y elegir el protocolo y los activos adecuados.",
            "El tratamiento puede adaptarse según la evolución, buscando una mejora progresiva de la textura, firmeza y apariencia de la piel.",
          ],
        },
      ],
      destacado: false,
      casos: [],
    },
    {
      slug: "fosfatidilcolina",
      nombre: "Fosfatidilcolina · Lipólisis química",
      categoria: "Corporal",
      zona: "Grasa localizada",
      resumen: "Microinyecciones que actúan sobre pequeños depósitos de grasa localizada en abdomen, flancos, papada y otras zonas.",
      descripcion: [
        "La fosfatidilcolina es un tratamiento médico-estético para pequeños depósitos de grasa localizada mediante una técnica de lipólisis química.",
        "Consiste en microinyecciones distribuidas en la zona a tratar (hipodermis), dividiéndola en pequeños cuadrantes para lograr una aplicación precisa y uniforme. El producto actúa sobre las células grasas, favoreciendo su eliminación por los mecanismos naturales del organismo.",
      ],
      datos: [
        ["Frecuencia", "1 sesión cada 15 días"],
        ["Sesiones", "Mínimo 8"],
        ["Resultados", "Progresivos"],
      ],
      indicacionesTitulo: "Zonas que podemos tratar",
      indicaciones: ["Abdomen", "Flancos", "“Pantalón de montar”", "Papada", "Otras zonas pequeñas, según indicación médica"],
      extras: [
        {
          titulo: "Evaluación médica",
          parrafos: [
            "Antes de comenzar evaluamos si sos candidata o candidato al tratamiento, identificamos las zonas adecuadas y armamos un protocolo a tu medida.",
            "La cantidad de sesiones y la respuesta pueden variar según la zona, la cantidad de tejido adiposo y las características de cada paciente.",
          ],
        },
      ],
      destacado: false,
      casos: [],
    },
    {
      slug: "carboxiterapia",
      nombre: "Carboxiterapia",
      categoria: "Corporal",
      zona: "Corporal y facial",
      resumen: "Mejora la circulación y la oxigenación de los tejidos. Ideal para celulitis, estrías, flacidez y ojeras.",
      descripcion: [
        "La carboxiterapia consiste en aplicar dióxido de carbono (CO₂) medicinal debajo de la piel con una aguja muy fina. El organismo responde aumentando la circulación y la oxigenación de la zona.",
        "Esto ayuda a mejorar la calidad de la piel, la celulitis, la grasa localizada y la flacidez. Se realiza en un ciclo de sesiones que definimos según cada caso.",
      ],
      datos: [
        ["Sesión", "15 a 30 minutos"],
        ["Resultados", "Progresivos, desde las primeras sesiones"],
        ["Plan", "Ciclo de 8 a 10 sesiones (según el caso)"],
      ],
      indicacionesTitulo: "¿Para qué está indicada?",
      indicaciones: ["Celulitis", "Grasa localizada", "Estrías", "Flacidez", "Ojeras", "Mala circulación"],
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
      categoria: "Corporal",
      zona: "Corporal y facial",
      resumen: "Tecnología que combina radiofrecuencia y campos electromagnéticos para mejorar flacidez, celulitis y contorno.",
      descripcion: [
        "Venus Legacy combina radiofrecuencia multipolar con campos electromagnéticos pulsados. Juntas, calientan suavemente el tejido y estimulan la producción de colágeno, mejorando la firmeza de la piel.",
        "Es un tratamiento no invasivo y sin tiempo de recuperación: la sensación es similar a un masaje cálido y podés retomar tus actividades en el momento.",
      ],
      datos: [
        ["Sesión", "30 a 40 minutos"],
        ["Resultados", "Progresivos"],
        ["Plan", "Ciclo de sesiones según la zona"],
      ],
      indicacionesTitulo: "¿Para qué está indicado?",
      indicaciones: ["Flacidez corporal y facial", "Celulitis", "Remodelado del contorno", "Arrugas y líneas finas", "Calidad de la piel"],
      cuidados: [
        "Tomar abundante agua antes y después de la sesión.",
        "Podés retomar tus actividades de inmediato.",
        "Mantener una rutina de actividad física para sostener los resultados.",
      ],
      destacado: false,
      casos: [],
    },
    {
      slug: "liposonix",
      nombre: "Liposonix",
      categoria: "Corporal",
      zona: "Grasa localizada",
      resumen: "Ultrasonido focalizado que reduce la grasa localizada sin cirugía.",
      descripcion: [
        "Liposonix utiliza ultrasonido focalizado de alta intensidad dirigido al tejido adiposo. La energía destruye las células de grasa de la zona tratada, que luego el organismo elimina de forma natural.",
        "Es una alternativa no quirúrgica para reducir medidas en zonas puntuales como abdomen y flancos, sin tiempo de recuperación.",
      ],
      datos: [
        ["Sesión", "Aprox. 1 hora (según la zona)"],
        ["Resultados", "Visibles entre las 8 y 12 semanas"],
        ["Recuperación", "Sin tiempo de recuperación"],
      ],
      indicacionesTitulo: "¿Para qué está indicado?",
      indicaciones: ["Grasa localizada en abdomen", "Flancos", "Reducción de medidas", "Remodelado corporal"],
      cuidados: [
        "Tomar abundante agua.",
        "Mantener actividad física y alimentación saludable.",
        "Puede haber sensibilidad leve en la zona durante algunos días.",
      ],
      destacado: false,
      casos: [],
    },

    // --------------------------------------------------------------- CAPILAR
    {
      slug: "recuperacion-capilar",
      nombre: "Recuperación capilar e implantes",
      categoria: "Capilar",
      zona: "Capilar",
      resumen: "Diagnóstico médico y un plan integral para frenar la caída y recuperar densidad. Implante capilar cuando está indicado.",
      descripcion: [
        "La recuperación capilar comienza con un diagnóstico médico adecuado. Cada caso de caída o pérdida de densidad es diferente, por eso realizamos una evaluación personalizada para identificar las posibles causas, el grado de pérdida y el estado del cabello y del cuero cabelludo.",
        "Nuestro abordaje es una estrategia integral, adaptada a cada paciente, que combina tres pilares de tratamiento.",
      ],
      opcionesTitulo: "Tríada terapéutica",
      opciones: [
        { nombre: "Tratamiento vía oral", texto: "Según el diagnóstico, puede indicarse tratamiento médico por vía oral, siempre con seguimiento profesional y controles periódicos." },
        { nombre: "Tratamiento tópico", texto: "Tratamientos tópicos específicos según el diagnóstico, el tipo de caída y las características del cuero cabelludo." },
        { nombre: "Tratamientos en consultorio", texto: "Procedimientos en la clínica que estimulan y fortalecen el folículo piloso, mejoran la calidad del cabello y favorecen la recuperación de la densidad." },
      ],
      extras: [
        {
          titulo: "Implantes capilares",
          parrafos: [
            "Cuando hay una pérdida capilar avanzada o áreas con una disminución importante de la densidad, el implante capilar puede ser una alternativa a evaluar.",
            "Antes de indicarlo realizamos una valoración médica integral: tipo y grado de alopecia, zona donante, calidad y densidad del cabello y expectativas. El objetivo es un resultado natural y armónico, respetando la fisonomía de cada paciente.",
          ],
        },
        {
          titulo: "Un tratamiento personalizado",
          parrafos: [
            "La recuperación capilar requiere un diagnóstico temprano y un abordaje individualizado. No todos los pacientes necesitan el mismo tratamiento ni requieren un implante: la indicación se define luego de la evaluación médica.",
          ],
        },
      ],
      destacado: false,
      casos: [],
    },
  ],
};
