const VehicleModel = (() => {
const vehicles = [
  {
    id: 1,
    name: "Nissan Versa",
    type: "Sedan",
    transmission: "Automatico",
    seats: 5,
    pricePerDay: 720,
    status: "Disponible",
    image: "public/img/nissan-versa.png"
  },
  {
    id: 2,
    name: "Chevrolet Sail",
    type: "Sedan",
    transmission: "Manual",
    seats: 5,
    pricePerDay: 650,
    status: "Disponible",
    image: "public/img/chevrolet-sail.png"
  },
  {
    id: 3,
    name: "Toyota Hilux",
    type: "Pick-up",
    transmission: "Manual",
    seats: 5,
    pricePerDay: 1250,
    status: "Disponible",
    image: "public/img/toyota-hilux.png"
  },
  {
    id: 4,
    name: "Kia Sportage",
    type: "SUV",
    transmission: "Automatico",
    seats: 5,
    pricePerDay: 1100,
    status: "Disponible",
    image: "public/img/kia-sportage.png"
  },
  {
    id: 5,
    name: "Volkswagen Vento",
    type: "Sedan",
    transmission: "Manual",
    seats: 5,
    pricePerDay: 690,
    status: "Mantenimiento",
    image: "public/img/volkswagen-vento.png"
  },
  {
    id: 6,
    name: "Hyundai Creta",
    type: "SUV",
    transmission: "Automatico",
    seats: 5,
    pricePerDay: 980,
    status: "Disponible",
    image: "public/img/hyundai-creta.png"
  }
];

function getVehiclesByType(type) {
  if (type === "Todos") {
    return vehicles;
  }

  return vehicles.filter((vehicle) => vehicle.type === type);
}

function getLowestAvailablePrice() {
  return vehicles
    .filter((vehicle) => vehicle.status === "Disponible")
    .reduce((lowest, vehicle) => Math.min(lowest, vehicle.pricePerDay), Infinity);
}

return {
  getLowestAvailablePrice,
  getVehiclesByType
};
})();
