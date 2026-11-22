(function () {
  const S = window.SITE;
  const $ = (sel, el = document) => el.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const ICON = {
    wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3M12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.2C2.2 6.6 6.6 2.2 12 2.2c2.6 0 5.1 1 6.9 2.9 1.8 1.8 2.9 4.3 2.9 6.9 0 5.4-4.4 9.8-9.8 9.8m8.4-18.2A11.8 11.8 0 0 0 12 0C5.5 0 .2 5.3.2 11.8c0 2.1.5 4.1 1.6 5.9L.1 24l6.5-1.7c1.7.9 3.6 1.4 5.6 1.4 6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.6-8.3"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 1 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg>',
  };

  const waLink = (msg) => {
    const n = (S.contacto.whatsapp || "").replace(/\D/g, "");
    const t = encodeURIComponent(msg || "¡Hola! Quisiera consultar por un turno con la Dra. Nadir.");
    return n ? `https://wa.me/${n}?text=${t}` : `https://wa.me/?text=${t}`;
  };

  /* ---------- Header, footer y botón flotante (comunes) ---------- */
  function renderChrome(active) {
    const header = $("#header");
    if (header) {
      header.innerHTML = `
        <div class="wrap header__inner">
          <a class="header__logo" href="#inicio" aria-label="Inicio"><img src="img/logo.png" alt="Dra. Nadir Hadad"></a>
          <button class="menu-toggle" aria-label="Abrir menú" aria-expanded="false"><span></span><span></span><span></span></button>
          <nav class="nav">
            <a href="#inicio" class="${active === "inicio" ? "is-active" : ""}">Inicio</a>
            <a href="#tratamientos" class="${active === "tratamientos" ? "is-active" : ""}">Tratamientos</a>
            <a href="#agenda">Agenda</a>
            <a href="#sobre-mi">Sobre mí</a>
            <a class="btn" href="${waLink()}" target="_blank" rel="noopener">Reservá tu turno</a>
          </nav>
        </div>`;
      const toggle = $(".menu-toggle", header), nav = $(".nav", header);
      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open);
      });
      nav.addEventListener("click", (e) => { if (e.target.tagName === "A") nav.classList.remove("is-open"); });
      const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
      window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    }

    const footer = $("#footer");
    if (footer) {
      footer.innerHTML = `
        <div class="wrap footer__inner">
          <img src="img/logo.png" alt="Dra. Nadir Hadad">
          ${S.contacto.instagram ? `<a class="footer__ig" href="https://instagram.com/${esc(S.contacto.instagram)}" target="_blank" rel="noopener">${ICON.ig}@${esc(S.contacto.instagram)}</a>` : ""}
          <small>© ${new Date().getFullYear()} Dra. Nadir Hadad · Medicina estética</small>
        </div>`;
    }

    const fl = document.createElement("a");
    fl.className = "wa-float"; fl.href = waLink(); fl.target = "_blank"; fl.rel = "noopener";
    fl.setAttribute("aria-label", "Escribir por WhatsApp"); fl.innerHTML = ICON.wa;
    document.body.appendChild(fl);
  }

  /* ---------- Componentes ---------- */
  const HOME_TPL = '\n  <section class="section section--soft about-top" id="sobre-mi">\n    <div class="wrap about" id="about"></div>\n  </section>\n\n  <section class="hero" id="hero"></section>\n\n  <section class="section" id="agenda">\n    <div class="wrap">\n      <div class="section__head reveal">\n        <div><span class="eyebrow">Fechas del mes</span><h2 id="agenda-title">Agenda</h2></div>\n        <p>Jornadas especiales y días de atención. Reservá tu lugar con anticipación.</p>\n      </div>\n      <div class="agenda" id="agenda-list"></div>\n    </div>\n  </section>\n\n  <section class="section" id="plan" style="padding-top:0"></section>\n\n  <section class="section section--soft">\n    <div class="wrap">\n      <div class="section__head reveal">\n        <div><span class="eyebrow">Tratamientos</span><h2>Lo que más nos <em>consultan</em></h2></div>\n        <a class="btn btn--ghost" href="#tratamientos">Ver todos</a>\n      </div>\n      <div class="grid-treat" id="featured"></div>\n    </div>\n  </section>\n\n  <section class="section">\n    <div class="wrap showcase">\n      <div class="reveal" id="showcase-slider"></div>\n      <div class="reveal">\n        <span class="eyebrow">Resultados</span>\n        <h2>Antes y <em>después</em></h2>\n        <p>Cada tratamiento tiene su galería de resultados reales, publicados con el consentimiento de cada paciente. Deslizá sobre la imagen para comparar.</p>\n        <a class="btn" href="#tratamientos">Explorar tratamientos</a>\n      </div>\n    </div>\n  </section>\n\n  <section class="section"><div class="wrap" id="contact"></div></section>\n';
  const LIST_TPL = '\n  <section class="page-hero">\n    <div class="wrap">\n      <div class="breadcrumb"><a href="#inicio">Inicio</a> / Tratamientos</div>\n      <span class="eyebrow">Medicina estética</span>\n      <h1>Tratamientos</h1>\n      <p class="lead">Conocé cada tratamiento: en qué consiste, para quién está indicado, sus cuidados y resultados reales.</p>\n    </div>\n  </section>\n  <section class="section" style="padding-top:24px">\n    <div class="wrap"><div class="grid-treat" id="list"></div></div>\n  </section>\n  <section class="section" style="padding-top:0"><div class="wrap" id="contact"></div></section>\n';

  const treatCard = (t, i) => `
    <a class="treat-card reveal" href="#${t.slug}">
      <div class="treat-card__top">
        <span class="treat-card__zone">${esc(t.zona)}</span>
        ${t.imagen ? `<img src="${esc(t.imagen)}" alt="">` : `<span class="treat-card__num">${String(i + 1).padStart(2, "0")}</span>`}
      </div>
      <div class="treat-card__body">
        <h3>${esc(t.nombre)}</h3>
        <p>${esc(t.resumen)}</p>
        <span class="treat-card__more">Ver tratamiento</span>
      </div>
    </a>`;

  const baSlider = (c = {}) => `
    <div>
      <div class="ba" style="--pos:50%">
        ${c.antes ? `<img class="ba__img" src="${esc(c.antes)}" alt="Antes">` : `<div class="ba__img ba__ph ba__ph--before">Antes</div>`}
        ${c.despues ? `<img class="ba__img ba__after" src="${esc(c.despues)}" alt="Después">` : `<div class="ba__img ba__after ba__ph ba__ph--after">Después</div>`}
        <span class="ba__line"></span>
        <span class="ba__handle">‹ ›</span>
        <span class="ba__tag ba__tag--l">Antes</span>
        <span class="ba__tag ba__tag--r">Después</span>
      </div>
      ${c.detalle ? `<p class="ba-caption">${esc(c.detalle)}</p>` : ""}
    </div>`;

  function initSliders(root = document) {
    root.querySelectorAll(".ba").forEach((ba) => {
      ba.setAttribute("role", "slider");
      ba.setAttribute("tabindex", "0");
      ba.setAttribute("aria-label", "Comparar antes y después");
      let pos = 50, dragging = false;
      const set = (p) => { pos = Math.max(0, Math.min(100, p)); ba.style.setProperty("--pos", pos + "%"); ba.setAttribute("aria-valuenow", Math.round(pos)); };
      const fromEvent = (e) => { const r = ba.getBoundingClientRect(); set(((e.clientX - r.left) / r.width) * 100); };
      ba.addEventListener("pointerdown", (e) => { dragging = true; ba.setPointerCapture(e.pointerId); fromEvent(e); });
      ba.addEventListener("pointermove", (e) => dragging && fromEvent(e));
      ba.addEventListener("pointerup", () => (dragging = false));
      ba.addEventListener("pointercancel", () => (dragging = false));
      ba.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") { set(pos - 5); e.preventDefault(); }
        if (e.key === "ArrowRight") { set(pos + 5); e.preventDefault(); }
      });
    });
  }

  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("is-in")); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
    }), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
  }

  const MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  const DIAS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

  /* ---------- Página: Inicio ---------- */
  function renderHome() {
    $("#app").innerHTML = HOME_TPL;
    const p = S.promo;
    const promoT = S.tratamientos.find((t) => t.slug === p.tratamiento);
    $("#hero").innerHTML = `
      <div class="wrap hero__inner">
        <div class="reveal">
          ${p.activa ? `
            <span class="hero__badge eyebrow">${esc(p.etiqueta)}</span>
            <h1>${esc(p.titulo)}${p.destacado && !p.precioAhora ? `<span class="hero__off">${esc(p.destacado)}</span>` : ""}</h1>
            ${p.precioAhora ? `
              <div class="price">
                ${p.precioAntes ? `<div><span class="price__label">antes</span><s class="price__old">${esc(p.precioAntes)}</s></div>` : ""}
                <div><span class="price__label">ahora</span><span class="price__new">${esc(p.precioAhora)}</span></div>
              </div>` : ""}
            <p>${esc(p.texto)}</p>
            <div class="hero__actions">
              <a class="btn" href="${waLink(`¡Hola! Quiero reservar un lugar para la promo: ${p.etiqueta}.`)}" target="_blank" rel="noopener">${ICON.wa}${esc(p.boton)}</a>
              ${promoT ? `<a class="btn btn--ghost" href="#${promoT.slug}">Ver tratamiento</a>` : ""}
            </div>
            ${p.vence ? `<div class="hero__vence">${esc(p.vence)}</div>` : ""}
          ` : `
            <span class="eyebrow">Medicina estética</span>
            <h1>Realzá tu <em>belleza natural</em></h1>
            <p>Tratamientos personalizados con resultados armónicos.</p>
            <div class="hero__actions"><a class="btn" href="#tratamientos">Ver tratamientos</a></div>
          `}
        </div>
        ${p.activa && p.imagen ? `
        <div class="hero__photo hero__photo--producto reveal">
          <span class="ring"></span>
          <div class="arch"><img src="${esc(p.imagen)}" alt="${esc(p.imagenTitulo || p.titulo)}"></div>
          ${p.imagenTitulo ? `<div class="hero__sign"><strong>${esc(p.imagenTitulo)}</strong>${esc(p.imagenTexto || "")}</div>` : ""}
        </div>` : `
        <div class="hero__photo reveal">
          <span class="ring"></span>
          <div class="arch"><img src="${esc(S.sobreMi.foto)}" alt="Dra. Nadir Hadad en su consultorio"></div>
          <div class="hero__sign"><strong>Dra. Nadir Hadad</strong>Medicina estética</div>
        </div>`}
      </div>`;

    const hoy = new Date(); hoy.setHours(0, 0, 0, 0);
    $("#agenda-title").textContent = S.agenda.titulo;
    $("#agenda-list").innerHTML = S.agenda.fechas
      .slice().sort((a, b) => a.fecha.localeCompare(b.fecha))
      .map((f) => {
        const d = new Date(f.fecha + "T00:00:00");
        return `
          <${f.enlace ? `a href="#${f.enlace}"` : "article"} class="date-card reveal ${d < hoy ? "is-past" : ""} ${f.promo ? "is-promo" : ""}">
            <div class="date-card__day">
              <div class="date-card__num">${d.getDate()}</div>
              <div class="date-card__mon">${MESES[d.getMonth()]}</div>
            </div>
            <div>
              <div class="date-card__wd">${DIAS[d.getDay()]}</div>
              <h3>${esc(f.titulo)}</h3>
              <p>${esc(f.detalle)}</p>
            </div>
          </${f.enlace ? "a" : "article"}>`;
      }).join("");

    const pl = S.plan, planEl = $("#plan");
    if (planEl && pl && pl.activo) {
      planEl.innerHTML = `
        <div class="wrap">
          <div class="plan reveal">
            <div>
              <span class="eyebrow">Plan destacado</span>
              <h2>${esc(pl.titulo)}</h2>
              <p>${esc(pl.texto)}</p>
              <div class="hero__actions">
                <a class="btn btn--light" href="${waLink(`¡Hola! Quisiera consultar por el ${pl.titulo}.`)}" target="_blank" rel="noopener">${ICON.wa}${esc(pl.boton)}</a>
                ${pl.tratamiento ? `<a class="btn btn--ghost-light" href="#${pl.tratamiento}">Más información</a>` : ""}
              </div>
            </div>
            <div>
              <span class="plan__inc">Incluye</span>
              <ul class="plan__list">
                ${pl.incluye.map((i) => `<li>${i.enlace ? `<a href="#${i.enlace}"><strong>${esc(i.nombre)}</strong></a>` : `<strong>${esc(i.nombre)}</strong>`}<span>${esc(i.fechas)}</span></li>`).join("")}
              </ul>
              ${pl.nota ? `<p class="plan__note">${esc(pl.nota)}</p>` : ""}
            </div>
          </div>
        </div>`;
    } else if (planEl) planEl.remove();

    const dest = S.tratamientos.filter((t) => t.destacado);
    $("#featured").innerHTML = (dest.length ? dest : S.tratamientos).slice(0, 3)
      .map(treatCard).join("");

    const conCaso = S.tratamientos.find((t) => t.casos && t.casos.length);
    $("#showcase-slider").innerHTML = baSlider(conCaso ? conCaso.casos[0] : { detalle: "Deslizá para comparar" });

    const a = S.sobreMi;
    $("#about").innerHTML = `
      <div class="about__photo reveal"><img src="${esc(a.foto)}" alt="Dra. Nadir Hadad"></div>
      <div class="reveal">
        <span class="eyebrow">Sobre mí</span>
        <h2>${esc(a.titulo)}</h2>
        ${a.texto.map((t) => `<p>${esc(t)}</p>`).join("")}
        <div class="about__sign">Nadir Hadad.</div>
      </div>`;

    renderContact($("#contact"));
  }

  function renderContact(el) {
    if (!el) return;
    const c = S.contacto;
    el.innerHTML = `
      <div class="cta reveal">
        <span class="eyebrow">Tu primera consulta</span>
        <h2>Contame qué te gustaría <em>mejorar</em></h2>
        <p>Escribime por WhatsApp y armamos juntos el plan ideal para vos.</p>
        <a class="btn" href="${waLink()}" target="_blank" rel="noopener">${ICON.wa}Escribir por WhatsApp</a>
        <div class="contact-list">
          ${c.direccion ? `<span>${ICON.pin}${esc(c.direccion)}</span>` : ""}
          ${c.horarios ? `<span>${ICON.clock}${esc(c.horarios)}</span>` : ""}
          ${c.instagram ? `<a href="https://instagram.com/${esc(c.instagram)}" target="_blank" rel="noopener"><span>${ICON.ig}@${esc(c.instagram)}</span></a>` : ""}
        </div>
      </div>`;
  }

  /* ---------- Página: Listado de tratamientos ---------- */
  function renderList() {
    $("#app").innerHTML = LIST_TPL;
    $("#list").innerHTML = S.tratamientos.map(treatCard).join("");
    renderContact($("#contact"));
  }

  /* ---------- Página: Detalle de tratamiento ---------- */
  function renderDetail(slug) {
    const t = slug ? S.tratamientos.find((x) => x.slug === slug) : null;
    const main = $("#app");
    if (!t) {
      main.innerHTML = `<div class="wrap notfound"><h1>Tratamiento no encontrado</h1><p>Puede que el enlace haya cambiado.</p><a class="btn" href="#tratamientos">Ver todos los tratamientos</a></div>`;
      return;
    }
    document.title = `${t.nombre} · Dra. Nadir Hadad`;
    const casos = t.casos && t.casos.length ? t.casos : null;
    main.innerHTML = `
      <section class="page-hero">
        <div class="wrap">
          <div class="breadcrumb"><a href="#inicio">Inicio</a> / <a href="#tratamientos">Tratamientos</a> / ${esc(t.nombre)}</div>
          <span class="eyebrow">${esc(t.zona)}</span>
          <h1>${esc(t.nombre)}</h1>
          <p class="lead">${esc(t.resumen)}</p>
          <div class="facts">
            <div class="fact"><div class="fact__label">Sesión</div><div class="fact__value">${esc(t.datos.sesion)}</div></div>
            <div class="fact"><div class="fact__label">Resultados</div><div class="fact__value">${esc(t.datos.resultados)}</div></div>
            <div class="fact"><div class="fact__label">Duración</div><div class="fact__value">${esc(t.datos.duracion)}</div></div>
          </div>
        </div>
      </section>

      <section class="section" style="padding-top:64px">
        <div class="wrap detail">
          <div>
            <div class="detail__block reveal">
              <h2>¿En qué consiste?</h2>
              ${t.descripcion.map((p) => `<p>${esc(p)}</p>`).join("")}
            </div>
            <div class="detail__block reveal">
              <h2>${esc(t.indicacionesTitulo || "¿Para qué está indicado?")}</h2>
              <div class="chips">${t.indicaciones.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div>
            </div>
            <div class="detail__block reveal">
              <h2>Cuidados posteriores</h2>
              <ul class="checks">${t.cuidados.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
            </div>
          </div>
          <aside class="aside-card reveal">
            <span class="eyebrow">Reservá tu turno</span>
            <h3>¿Te interesa este tratamiento?</h3>
            <p>Escribime y coordinamos una consulta para evaluar tu caso.</p>
            <a class="btn" href="${waLink(`¡Hola! Quisiera consultar por ${t.nombre}.`)}" target="_blank" rel="noopener">${ICON.wa}Consultar</a>
            <p class="disclaimer">La información es orientativa. La indicación, cantidad de sesiones y resultados dependen de cada paciente y se definen en consulta.</p>
          </aside>
        </div>
      </section>

      <section class="section section--soft">
        <div class="wrap">
          <div class="section__head reveal">
            <div><span class="eyebrow">Resultados reales</span><h2>Antes y después</h2></div>
            <p>Deslizá sobre cada imagen para comparar.</p>
          </div>
          <div class="gallery">
            ${casos ? casos.map(baSlider).join("") : baSlider({ detalle: "Próximamente: fotos de pacientes" })}
          </div>
          <p class="ba-note">Fotos publicadas con consentimiento de cada paciente. Los resultados pueden variar.</p>
        </div>
      </section>

      <section class="section"><div class="wrap" id="contact"></div></section>`;
    renderContact($("#contact"));
  }

  /* ---------- Navegación (una sola página, secciones por #) ---------- */
  const SECCIONES_INICIO = ["agenda", "sobre-mi", "plan"];
  let vistaActual = null;
  function route() {
    const h = decodeURIComponent(location.hash.slice(1));
    const t = S.tratamientos.find((x) => x.slug === h);
    const vista = t ? "detalle:" + h : h === "tratamientos" ? "tratamientos" : "inicio";
    if (vista !== vistaActual) {
      vistaActual = vista;
      document.title = "Dra. Nadir Hadad";
      if (t) renderDetail(h);
      else if (h === "tratamientos") renderList();
      else renderHome();
      initSliders($("#app"));
      initReveal();
      document.querySelectorAll(".nav a").forEach((a) => {
        const target = a.getAttribute("href");
        a.classList.toggle("is-active", (target === "#tratamientos" && vista !== "inicio") || (target === "#inicio" && vista === "inicio"));
      });
    }
    const destino = SECCIONES_INICIO.includes(h) && document.getElementById(h);
    if (destino) destino.scrollIntoView();
    else window.scrollTo(0, 0);
  }

  /* ---------- Arranque ---------- */
  renderChrome();
  window.addEventListener("hashchange", route);
  route();
})();
