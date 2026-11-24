/*
 * Ilustraciones de línea fina para cada tratamiento (estilo de la marca).
 * Cada una se dibuja sobre un lienzo de 160 x 120.
 * Para usar una foto en lugar de la ilustración, agregá `imagen: "img/..."` al tratamiento en data.js.
 */
(function () {
  const L = "#8a6545";   // línea
  const S = "#ecd9c5";   // relleno suave
  const A = "#dcbc9b";   // relleno acento
  const I = "#3d3c40";   // tinta
  const line = `fill="none" stroke="${L}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"`;
  const disco = `<circle cx="80" cy="62" r="46" fill="#f5e7d8"/>`;
  const brillo = (x, y, r = 4) => `<path d="M${x} ${y - r}V${y + r}M${x - r} ${y}H${x + r}" ${line} stroke-width="1"/>`;
  const torso = `
    <path d="M64 22C60 40 70 52 62 70C55 86 58 100 64 112" ${line}/>
    <path d="M96 22C100 40 90 52 98 70C105 86 102 100 96 112" ${line}/>
    <path d="M72 36C76 38 84 38 88 36" ${line} stroke-width="1"/>`;

  window.ILUSTRACIONES = {
    "toxina-botulinica": `${disco}
      <rect x="54" y="44" width="26" height="50" rx="6" fill="#fffaf5" ${line}/>
      <rect x="52" y="32" width="30" height="13" rx="3" fill="${I}"/>
      <rect x="54" y="62" width="26" height="15" fill="${A}"/>
      <path d="M58 52V58" ${line} stroke="#fff" stroke-width="2"/>
      <g transform="rotate(32 108 62)">
        <rect x="102" y="38" width="12" height="44" rx="2" fill="#fffaf5" ${line}/>
        <path d="M102 50H108M102 58H110M102 66H108" ${line} stroke-width="1"/>
        <path d="M108 38V28M100 28H116M108 82V100" ${line}/>
      </g>
      ${brillo(42, 34)}${brillo(122, 96, 3)}`,

    "armonizacion-facial": `${disco}
      <path d="M46 64C58 50 70 52 80 59C90 52 102 50 114 64C100 68 90 69 80 69C70 69 60 68 46 64Z" fill="${A}" ${line}/>
      <path d="M46 64C58 86 102 86 114 64" fill="${S}" ${line}/>
      <path d="M46 64C60 66 100 66 114 64" ${line} stroke-width="1"/>
      <path d="M70 76C76 78 84 78 90 76" ${line} stroke="#fff" stroke-width="1.6"/>
      ${brillo(40, 40)}${brillo(120, 42, 3)}${brillo(118, 92, 3)}`,

    "bioestimuladores": `${disco}
      <path d="M26 62C40 38 54 38 68 62S96 86 110 62 134 38 140 50" ${line} stroke-width="1.6"/>
      <path d="M26 62C40 86 54 86 68 62S96 38 110 62 134 86 140 74" ${line} stroke-width="1.6"/>
      <path d="M26 62C40 50 54 74 68 62S96 50 110 62 134 74 140 62" ${line} stroke="${A}" stroke-width="2.2"/>
      <circle cx="47" cy="45" r="2.2" fill="${L}"/><circle cx="89" cy="79" r="2.2" fill="${L}"/><circle cx="124" cy="45" r="2.2" fill="${L}"/>`,

    "skinboosters": `${disco}
      <path d="M80 26C80 26 106 58 106 76A26 26 0 0 1 54 76C54 58 80 26 80 26Z" fill="${S}" ${line}/>
      <path d="M80 40C80 40 98 62 98 76A18 18 0 0 1 62 76" fill="${A}" opacity="0.55"/>
      <path d="M66 72C66 82 72 88 80 90" ${line} stroke="#fff" stroke-width="2.2"/>
      ${brillo(116, 38)}${brillo(44, 48, 3)}${brillo(120, 90, 3)}`,

    "mesoterapia-facial": `${disco}
      <ellipse cx="80" cy="62" rx="27" ry="35" fill="#fffaf5" ${line}/>
      <path d="M66 54C69 57 73 57 76 54M84 54C87 57 91 57 94 54" ${line}/>
      <path d="M78 64C77 70 79 72 82 72" ${line} stroke-width="1"/>
      <path d="M73 82C77 85 83 85 87 82" ${line}/>
      ${[[64,66],[68,72],[62,74],[92,66],[96,72],[98,64],[70,44],[80,40],[90,44]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="1.5" fill="${A}"/>`).join("")}
      <g transform="rotate(-40 122 40)"><rect x="118" y="26" width="8" height="26" rx="2" fill="#fffaf5" ${line}/><path d="M122 52V62M122 26V20" ${line}/></g>`,

    "peelings-quimicos": `${disco}
      <path d="M30 92C50 86 70 96 90 90S120 86 130 90" ${line}/>
      <path d="M30 80C50 74 70 84 90 78S120 74 130 78" ${line}/>
      <path d="M30 68C48 62 62 70 76 66C88 62 96 50 108 44C116 40 124 44 120 52C117 57 110 55 112 50" fill="${S}" ${line}/>
      <path d="M30 68C48 62 62 70 76 66" ${line} stroke="${A}" stroke-width="2.4"/>
      ${brillo(54, 44)}${brillo(130, 64, 3)}`,

    "plasma-rico-en-plaquetas": `${disco}
      <g transform="rotate(14 80 62)">
        <rect x="68" y="28" width="24" height="12" rx="3" fill="#e6cf7a"/>
        <path d="M70 40V94A10 10 0 0 0 90 94V40" fill="#fffaf5" ${line}/>
        <path d="M70 46H90V70H70Z" fill="#efdc9a"/>
        <path d="M70 70H90V74H70Z" fill="#f6ecd8"/>
        <path d="M70 74H90V94A10 10 0 0 1 70 94Z" fill="#a8604a"/>
        <path d="M70 40V94A10 10 0 0 0 90 94V40" ${line}/>
      </g>
      ${brillo(46, 42)}${brillo(118, 88, 3)}`,

    "hifu-25d": `${disco}
      <rect x="62" y="22" width="36" height="12" rx="6" fill="${I}"/>
      <path d="M66 40Q80 34 94 40M60 50Q80 42 100 50M56 60Q80 50 104 60" ${line}/>
      <path d="M64 36L80 86M96 36L80 86" ${line} stroke-dasharray="2 4"/>
      <circle cx="80" cy="86" r="4" fill="${A}" ${line}/>
      <path d="M36 80C56 76 104 76 124 80M36 92C56 88 104 88 124 92" ${line} stroke-width="1"/>`,

    "plan-integral-corporal": `${disco}${torso}
      <path d="M58 64C70 70 90 70 102 64" ${line} stroke="${A}" stroke-width="2"/>
      ${brillo(40, 44)}${brillo(120, 40, 3)}${brillo(122, 88)}${brillo(38, 92, 3)}`,

    "mesoterapia-corporal": `${disco}${torso}
      ${[[64,82],[68,88],[62,92],[96,82],[92,88],[98,92],[66,96],[94,96]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="1.6" fill="${L}"/>`).join("")}
      <g transform="rotate(-38 122 50)"><rect x="118" y="36" width="8" height="26" rx="2" fill="#fffaf5" ${line}/><path d="M122 62V72M122 36V30" ${line}/></g>`,

    "fosfatidilcolina": `${disco}
      ${[[62,56,14],[86,50,12],[78,76,13],[102,72,10],[56,82,9]].map(([x,y,r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${S}" ${line}/>`).join("")}
      <circle cx="112" cy="46" r="9" ${line} stroke-dasharray="2 3"/>
      <circle cx="122" cy="62" r="5" ${line} stroke-dasharray="1.5 3"/>
      <circle cx="128" cy="74" r="2.5" fill="${A}"/>`,

    "carboxiterapia": `${disco}
      ${[[62,92,10],[86,78,7],[70,62,6],[96,52,5],[80,40,4],[104,34,3],[60,40,3]].map(([x,y,r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${S}" ${line}/>`).join("")}
      <path d="M58 88C59 85 61 84 64 84" ${line} stroke="#fff" stroke-width="1.6"/>
      <text x="104" y="96" font-family="Cormorant Garamond, Georgia, serif" font-style="italic" font-size="18" fill="${L}">CO₂</text>`,

    "venus-legacy": `${disco}
      <path d="M28 62C38 48 48 48 58 62S78 76 88 62 108 48 118 62 132 70 134 66" ${line} stroke-width="1.8"/>
      <path d="M28 76C38 66 48 66 58 76S78 86 88 76 108 66 118 76" ${line} stroke="${A}" stroke-width="1.6"/>
      <path d="M60 44A20 20 0 0 1 100 44M67 48A13 13 0 0 1 93 48" ${line} stroke-width="1"/>
      <path d="M60 90A20 20 0 0 0 100 90" ${line} stroke-width="1"/>`,

    "liposonix": `${disco}
      <rect x="62" y="22" width="36" height="12" rx="6" fill="${I}"/>
      <path d="M64 36L80 72M96 36L80 72M80 36V72" ${line} stroke-dasharray="2 4"/>
      ${[[80,80,8],[66,88,7],[94,88,7],[80,96,6],[56,96,5],[104,96,5]].map(([x,y,r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${S}" ${line}/>`).join("")}
      <circle cx="80" cy="80" r="3" fill="${A}"/>`,

    "recuperacion-capilar": `${disco}
      <path d="M36 92H124" ${line}/>
      ${[52,66,80,94,108].map((x, i) => `<path d="M${x} 92C${x - 2} 70 ${x + 10} 56 ${x + 4} ${30 + (i % 2) * 6}" ${line} stroke-width="1.6"/><circle cx="${x}" cy="96" r="3.4" fill="${A}" ${line} stroke-width="1"/>`).join("")}
      ${brillo(124, 40, 3)}`,
  };

  window.ilustracion = (slug) => {
    const d = window.ILUSTRACIONES[slug];
    return d ? `<svg class="ilus" viewBox="0 0 160 120" role="img" aria-hidden="true">${d}</svg>` : "";
  };
})();
