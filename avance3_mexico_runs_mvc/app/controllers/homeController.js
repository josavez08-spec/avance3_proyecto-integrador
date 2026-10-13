const vehicleList = document.querySelector("#vehicle-list");
const filterButtons = document.querySelectorAll(".filter-button");
const reservationForm = document.querySelector("#reservation-form");
const quoteOutput = document.querySelector("#quote-output");

function updateCatalog(type) {
  HomeView.renderVehicles(vehicleList, VehicleModel.getVehiclesByType(type));
}

function calculateDays(startDate, endDate) {
  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T00:00:00`);
  const diff = end - start;

  if (Number.isNaN(diff) || diff <= 0) {
    return 0;
  }

  return Math.ceil(diff / 86400000);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    updateCatalog(button.dataset.filter);
  });
});

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(reservationForm);
  const city = formData.get("pickupCity");
  const days = calculateDays(formData.get("startDate"), formData.get("endDate"));

  if (days === 0) {
    HomeView.renderQuoteError(quoteOutput, "La fecha de devolucion debe ser posterior a la fecha de inicio.");
    return;
  }

  HomeView.renderQuote(quoteOutput, {
    city,
    days,
    total: days * VehicleModel.getLowestAvailablePrice()
  });
});

updateCatalog("Todos");
