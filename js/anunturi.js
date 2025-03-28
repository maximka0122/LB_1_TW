// Lista de mașini (poate fi înlocuită cu date din localStorage sau un API)
const cars = [
    {
        name: "Tesla Model S",
        image: "imagini/tesla-s.jpg",
        range: "650 km",
        price: "80.000€",
        description: "Tesla Model S este o mașină electrică de lux, cunoscută pentru performanța sa excelentă și autonomia impresionantă. Este echipată cu tehnologie avansată și oferă o experiență de condus plăcută și sigură."
    },
    {
        name: "BMW i4",
        image: "imagini/bmw.jpg",
        range: "590 km",
        price: "60.000€",
        description: "BMW i4 este o mașină electrică sport, care combină designul elegant BMW cu tehnologia electrică avansată. Este ideală pentru cei care doresc performanță și stil."
    },
    {
        name: "Audi e-tron",
        image: "imagini/audi.jpg",
        range: "400 km",
        price: "70.000€",
        description: "Audi e-tron este un SUV electric premium, oferind spațiu generos, confort și tehnologie de ultimă oră. Este perfect pentru familii sau călătorii lungi."
    },
    {
        name: "Mercedes EQS",
        image: "imagini/mercedes.jpg",
        range: "700 km",
        price: "100.000€",
        description: "Mercedes EQS este o mașină electrică de lux, cu un design futurist și o autonomie impresionantă. Este echipată cu cele mai noi tehnologii Mercedes."
    },
    {
        name: "Porsche Taycan",
        image: "imagini/porsche.jpg",
        range: "450 km",
        price: "110.000€",
        description: "Porsche Taycan este o mașină electrică sport, care oferă performanțe de top și un design iconic. Este perfectă pentru pasionații de viteza și design."
    },
    {
        name: "Nissan Leaf",
        image: "imagini/nissan.jpg",
        range: "270 km",
        price: "35.000€",
        description: "Nissan Leaf este o mașină electrică accesibilă, ideală pentru oraș. Este fiabilă, eficientă și oferă o experiență de condus simplă și plăcută."
    },
    {
        name: "Hyundai Ioniq 5",
        image: "imagini/hyundai.avif",
        range: "480 km",
        price: "50.000€",
        description: "Hyundai Ioniq 5 este un SUV electric modern, cu un design inovator și tehnologie avansată. Este perfect pentru cei care doresc un echilibru între stil și performanță."
    },
    {
        name: "Ford Mustang Mach-E",
        image: "imagini/ford.jpg",
        range: "490 km",
        price: "55.000€",
        description: "Ford Mustang Mach-E este un SUV electric inspirat de legendarul Mustang. Combină stilul iconic cu tehnologia electrică modernă."
    },
    {
        name: "Rivian R1T",
        image: "imagini/rivian.jpg",
        range: "505 km",
        price: "75.000€",
        description: "Rivian R1T este un camion electric robust, perfect pentru aventuri off-road. Este echipat cu tehnologie avansată și oferă o autonomie impresionantă."
    },
    {
        name: "Volkswagen ID.4",
        image: "imagini/vw.png",
        range: "520 km",
        price: "45.000€",
        description: "Volkswagen ID.4 este un SUV electric practic și accesibil, ideal pentru familii. Oferă un spațiu generos și o autonomie bună."
    }
];

// Funcție pentru afișarea mașinilor
function displayCars() {
    const carList = document.querySelector(".car-list");
    carList.innerHTML = ""; // Resetează conținutul listei

    cars.forEach((car, index) => {
        const carItem = document.createElement("div");
        carItem.classList.add("car-item");

        carItem.innerHTML = `
            <img src="${car.image}" alt="${car.name}" class="car-image">
            <h3>${car.name}</h3>
            <p>Autonomie: ${car.range}</p>
            <p>Preț: ${car.price}</p>
            <button onclick="showDetails('${car.name}', '${car.description}')">Detalii</button>
        `;

        carList.appendChild(carItem);
    });
}

// Funcție pentru afișarea detaliilor
window.showDetails = (title, description) => {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.style.display = "block";
};

// Funcție pentru închiderea ferestrei modale
window.closeModal = () => {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
};

// Închide fereastra modală când se dă click în afara ei
window.onclick = (event) => {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Încărcăm mașinile la deschiderea paginii
document.addEventListener("DOMContentLoaded", displayCars);