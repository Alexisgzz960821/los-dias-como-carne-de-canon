let listaFiltrada = [...acervo];
let indiceActual = 0;

const etiquetasCategoria = {
  "01-notas": "Notas del buzón",
  "02-campo": "Registro en campo",
  "03-cianotipia": "Cianotipia y piezas",
  "04-audiovisual": "Audiovisual"
};

function renderizarGaleria(items) {
  const contenedor = document.getElementById('gallery-container');
  if (!contenedor) return;

  contenedor.innerHTML = '';

  if (items.length === 0) {
    contenedor.innerHTML = '<div style="grid-column: 1 / -1; padding: 3rem 0; text-align: center; font-family: var(--mono); color: var(--muted);">[ No hay registros en esta categoría ]</div>';
    return;
  }

  items.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'gallery-card';
    card.setAttribute('data-category', item.categoria);
    card.innerHTML = `
      <div class="gallery-card-frame">
        <img src="${item.src}" alt="${item.titulo}" loading="lazy" />
      </div>
      <div class="gallery-card-meta">
        <span class="meta-folio">${item.folio}</span>
        <h3 class="meta-title">${item.titulo}</h3>
      </div>
    `;
    card.addEventListener('click', () => abrirModal(index));
    contenedor.appendChild(card);
  });
}

function abrirModal(index) {
  indiceActual = index;
  actualizarContenidoModal();

  const modal = document.getElementById('gallery-modal');
  if (!modal) return;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function actualizarContenidoModal() {
  const item = listaFiltrada[indiceActual];
  if (!item) return;

  const categoriaTexto = etiquetasCategoria[item.categoria] || 'Registro';
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="modal-image-container">
      <img src="${item.src}" alt="${item.titulo}" />
    </div>
    <aside class="modal-placard-panel">
      <div>
        <div class="placard-header">
          <span class="placard-label">// Cédula de expediente</span>
          <h2 class="placard-title">${item.titulo}</h2>
        </div>

        <div class="placard-meta-list">
          <div class="placard-meta-row">
            <span class="placard-meta-label">Folio registro</span>
            <span>${item.folio}</span>
          </div>
          <div class="placard-meta-row">
            <span class="placard-meta-label">Sección archivo</span>
            <span>${categoriaTexto}</span>
          </div>
          <div class="placard-meta-row">
            <span class="placard-meta-label">Ubicación / lugar</span>
            <span>${item.lugar}</span>
          </div>
          <div class="placard-meta-row">
            <span class="placard-meta-label">Fecha de captura</span>
            <span>${item.fecha}</span>
          </div>
        </div>

        <div class="placard-description">
          <p>Pieza integrada al acervo público de documentación del proyecto <em>Los Días Como Carne de Cañón</em> en LABNL.</p>
        </div>
      </div>

      <div class="placard-footer">
        <span>Registro ${indiceActual + 1} de ${listaFiltrada.length}</span>
      </div>
    </aside>
  `;
}

function cambiarImagen(direccion) {
  indiceActual += direccion;

  if (indiceActual < 0) {
    indiceActual = listaFiltrada.length - 1;
  } else if (indiceActual >= listaFiltrada.length) {
    indiceActual = 0;
  }

  actualizarContenidoModal();
}

function cerrarModal() {
  const modal = document.getElementById('gallery-modal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function inicializarFiltros() {
  const botones = document.querySelectorAll('.filter-btn');

  botones.forEach(btn => {
    btn.addEventListener('click', () => {
      botones.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filtro = btn.getAttribute('data-filter');
      listaFiltrada = filtro === 'all' ? [...acervo] : acervo.filter(item => item.categoria === filtro);
      renderizarGaleria(listaFiltrada);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof acervo === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  const categoriaURL = params.get('cat') || 'all';

  if (categoriaURL === 'all') {
    listaFiltrada = [...acervo];
  } else {
    listaFiltrada = acervo.filter(item => item.categoria === categoriaURL);
  }

  document.querySelectorAll('.filter-btn').forEach(btn => {
    if (btn.getAttribute('data-filter') === categoriaURL) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderizarGaleria(listaFiltrada);
  inicializarFiltros();

  document.getElementById('modal-close')?.addEventListener('click', cerrarModal);
  document.getElementById('modal-overlay')?.addEventListener('click', cerrarModal);
  document.getElementById('modal-prev')?.addEventListener('click', () => cambiarImagen(-1));
  document.getElementById('modal-next')?.addEventListener('click', () => cambiarImagen(1));

  document.addEventListener('keydown', e => {
    const modal = document.getElementById('gallery-modal');
    if (!modal || !modal.classList.contains('active')) return;

    if (e.key === 'Escape') cerrarModal();
    if (e.key === 'ArrowLeft') cambiarImagen(-1);
    if (e.key === 'ArrowRight') cambiarImagen(1);
  });
});
