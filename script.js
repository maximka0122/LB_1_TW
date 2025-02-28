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

function showTeslaDetails() {
    const detailsContainer = document.getElementById("teslaDetails");
    
    detailsContainer.innerHTML = `
        <h2>Despre Tesla Model S</h2>
        <p>
            Tesla Model S este una dintre cele mai performante și avansate mașini electrice disponibile pe piață.
            Lansată de compania Tesla, fondată de Elon Musk, Model S a redefinit conceptul de vehicul electric prin autonomie extinsă,
            accelerație impresionantă și tehnologie de vârf. Cu o autonomie de până la 650 km la o singură încărcare,
            această mașină oferă o alternativă excelentă pentru cei care doresc să renunțe la combustibilii fosili.
        </p>
        <p>
            Unul dintre cele mai impresionante aspecte ale Modelului S este viteza sa. Versiunea Plaid poate accelera
            de la 0 la 100 km/h în doar 2,1 secunde, fiind una dintre cele mai rapide mașini electrice din lume.
            Pe lângă performanța excepțională, Tesla Model S se remarcă printr-un design aerodinamic și un interior futurist,
            dominat de un ecran tactil de 17 inci, care permite controlul complet al funcțiilor vehiculului.
        </p>
        <p>
            Model S este echipat cu un sistem avansat de pilot automat, care oferă asistență la condus și poate chiar
            să navigheze autonom pe autostrăzi. Siguranța este, de asemenea, un punct forte, Model S primind evaluări excelente
            la testele de impact datorită structurii sale robuste și centrelor de greutate joase, care reduc riscul de răsturnare.
        </p>
        <p>
            O altă caracteristică esențială a Modelului S este infrastructura de încărcare rapidă Tesla Supercharger,
            care permite reîncărcarea bateriei la 80% în aproximativ 30 de minute. Acest lucru face ca Model S să fie
            ideal atât pentru naveta zilnică, cât și pentru călătorii lungi. În plus, software-ul mașinii primește actualizări
            periodice prin internet, îmbunătățind constant funcționalitatea și performanța.
        </p>
        <p>
            Cu un preț de pornire de aproximativ 80.000€, Tesla Model S este o alegere ideală pentru cei care doresc
            o combinație de lux, tehnologie și performanță în segmentul electric. Este un vehicul care nu doar reduce
            emisiile de carbon, ci oferă și o experiență de condus excepțională.
        </p>
    `;
    detailsContainer.style.display = "block";
}
