const cars = [
    { id: 1, name: "Tesla Model S", price: "80.000€", img: "imagini.html/tesla-s.jpg" },
    { id: 2, name: "BMW i4", price: "60.000€", img: "imagini.html/bmw.jpg" },
    { id: 3, name: "Audi e-tron", price: "70.000€", img: "imagini.html/audi.jpg" },
    { id: 4, name: "Volkswagen ID.4", price: "45.000€", img: "imagini.html/vw.png" },
    { id: 5, name: "Mercedes EQS", price: "100.000€", img: "imagini.html/mercedes.jpg" },
    { id: 6, name: "Porsche Taycan", price: "110.000€", img: "imagini.html/porsche.jpg" },
    { id: 7, name: "Nissan Leaf", price: "35.000€", img: "imagini.html/nissan.jpg" },
    { id: 8, name: "Hyundai Ioniq 5", price: "50.000€", img: "imagini.html/hyundai.avif" },
    { id: 9, name: "Ford Mustang Mach-E", price: "55.000€", img: "imagini.html/ford.jpg" },
    { id: 10, name: "Rivian R1T", price: "75.000€", img: "imagini.html/rivian.jpg" }
];

function displayCars() {
    const carList = document.getElementById("carList");
    carList.innerHTML = "";
    cars.forEach(car => {
        carList.innerHTML += `
            <div class="car-card">
                <img src="${car.img}" alt="${car.name}">
                <h3>${car.name}</h3>
                <p>Preț: ${car.price}</p>
                <a href="car.html?id=${car.id}">Detalii</a>
            </div>
        `;
    });
}

document.addEventListener("DOMContentLoaded", displayCars);


