// Funcție pentru încărcarea mașinilor din localStorage
function loadCars() {
    const carList = document.getElementById("carList");
    const cars = JSON.parse(localStorage.getItem("cars")) || []; // Preluăm mașinile din localStorage

    carList.innerHTML = "<h2>Mașini Adăugate</h2>"; // Resetează conținutul listei

    cars.forEach((car, index) => {
        carList.innerHTML += `
            <div class="car-item">
                <img src="${car.img}" alt="${car.name}" class="car-image">
                <h3>${car.name}</h3>
                <p>${car.desc}</p>
                <p>Preț: ${car.price}</p>
                <p>Tip: ${car.type === "electric" ? "Electrică" : "Motorină/Benzină"}</p>
                <button onclick="deleteCar(${index})" class="delete-button">Șterge</button>
            </div>
        `;
    });
}

// Funcție pentru adăugarea unei mașini
function addCar(event) {
    event.preventDefault(); // Previne reîncărcarea paginii

    const model = document.getElementById("carModel").value;
    const price = document.getElementById("carPrice").value;
    const desc = document.getElementById("carDesc").value;
    const img = document.getElementById("carImg").value;
    const type = document.getElementById("carType").value;

    const newCar = {
        id: Date.now(), // ID unic bazat pe timp
        name: model,
        price: price,
        desc: desc,
        img: img,
        type: type
    };

    const cars = JSON.parse(localStorage.getItem("cars")) || []; // Preluăm mașinile existente
    cars.push(newCar); // Adăugăm noua mașină
    localStorage.setItem("cars", JSON.stringify(cars)); // Salvăm în localStorage

    loadCars(); // Reîncărcăm lista de mașini
    document.getElementById("addCarForm").reset(); // Resetăm formularul
}

// Funcție pentru ștergerea unei mașini
function deleteCar(index) {
    const cars = JSON.parse(localStorage.getItem("cars")) || [];
    cars.splice(index, 1); // Ștergem mașina din array
    localStorage.setItem("cars", JSON.stringify(cars)); // Actualizăm localStorage
    loadCars(); // Reîncărcăm lista de mașini
}

// Încărcăm mașinile la deschiderea paginii
document.addEventListener("DOMContentLoaded", loadCars);

// Adăugăm event listener pentru formular
document.getElementById("addCarForm").addEventListener("submit", addCar);