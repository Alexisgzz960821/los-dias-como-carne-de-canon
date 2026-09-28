document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('agenda-container');
  if (!contenedor || typeof agenda === 'undefined') return;

  contenedor.innerHTML = '';

  agenda.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'schedule-item';

    const botonRegistroHTML = item.requiereRegistro && item.registroLink
      ? `<div class="schedule-action"><a href="${item.registroLink}" target="_blank" rel="noopener noreferrer" class="btn-register">[ Registrarse aquí → ]</a></div>`
      : `<div class="schedule-action"><span class="badge-free">[ Entrada libre / sin registro ]</span></div>`;

    card.innerHTML = `
      <div class="schedule-date-col">
        <span class="schedule-day">${item.dia}</span>
        <span class="schedule-month">${item.mesAño}</span>
        <span class="schedule-badge">${item.badge}</span>
      </div>
      <div class="schedule-content-col">
        <div class="schedule-time-location">${item.horarioLugar}</div>
        <h2 class="schedule-title">${item.titulo}</h2>
        <p class="schedule-desc">${item.descripcion}</p>
        ${botonRegistroHTML}
      </div>
    `;

    contenedor.appendChild(card);
  });
});
