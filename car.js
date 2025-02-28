const urlParams = new URLSearchParams(window.location.search);
const carId = urlParams.get("id");

const cars = [
    { id: 1, name: "Tesla Model S", price: "80.000€", img: "imagini.html/tesla-s.jpg", desc: "Autonomie 650 km" },
    { id: 2, name: "BMW i4", price: "60.000€", img: "imagini.html/bmw.jpg", desc: "Autonomie 590 km" },
    { id: 3, name: "Audi e-tron", price: "70.000€", img: "imagini/audi.jpg", desc: "Autonomie 400 km" },
    { id: 4, name: "Volkswagen ID.4", price: "45.000€", img: "imagini/vw.jpg", desc: "Autonomie 520 km" }
];

const car = cars.find(car => car.id == carId);
if (car) {
    document.getElementById("carDetails").innerHTML = `
        <img src="${car.img}" alt="${car.name}">
        <h2>${car.name}</h2>
        <p>${car.desc}</p>
        <p>Preț: ${car.price}</p>
    `;
}
