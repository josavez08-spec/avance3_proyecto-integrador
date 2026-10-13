const HomeView = (() => {
function renderVehicles(container, vehicles) {
  container.innerHTML = vehicles
    .map((vehicle) => `
      <article class="vehicle-card">
        <img src="${vehicle.image}" alt="${vehicle.name}">
        <div class="vehicle-card-content">
          <h3>${vehicle.name}</h3>
          <div class="vehicle-meta">
            <span>${vehicle.type}</span>
            <span>${vehicle.transmission}</span>
            <span>${vehicle.seats} pasajeros</span>
          </div>
          <span class="price">$${vehicle.pricePerDay.toLocaleString("es-MX")} MXN / dia</span>
          <span>${vehicle.status}</span>
        </div>
      </article>
    `)
    .join("");
}

function renderQuote(container, quote) {
  container.innerHTML = `
    <strong>${quote.days} dia(s) de renta</strong><br>
    Ciudad: ${quote.city}<br>
    Precio estimado desde $${quote.total.toLocaleString("es-MX")} MXN.
  `;
}

function renderQuoteError(container, message) {
  container.textContent = message;
}

return {
  renderQuote,
  renderQuoteError,
  renderVehicles
};
})();
