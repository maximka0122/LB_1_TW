<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mașini pe Motorină - AutoMarket</title>
    <link rel="stylesheet" href="css/masini-motorina-style.css">
</head>
<body>
    <header>
        <h1>Mașini pe Motorină</h1>
        <nav>
            <a href="index.php">Acasă</a>
            <a href="anunturi.php">Mașini Electrice</a>
            <a href="add.php">Adaugă Anunț</a>
        </nav>
    </header>

    <section class="car-list">
        <!-- Mașina 1: Volkswagen Golf -->
        <div class="car-item">
            <img src="imagini/vw-golf.jpg" alt="Volkswagen Golf" class="car-image">
            <h3>Volkswagen Golf</h3>
            <p>Motorină, 5.5L/100km</p>
            <p>Preț: 25.000€</p>
            <button onclick="showDetails('Volkswagen Golf', 'Volkswagen Golf este o mașină compactă fiabilă și eficientă, ideală pentru oraș și călătorii lungi. Este cunoscută pentru confortul și durabilitatea sa.')">Detalii</button>
        </div>

        <!-- Mașina 2: Ford Mustang -->
        <div class="car-item">
            <img src="imagini/ford-mustang.jpg" alt="Ford Mustang" class="car-image">
            <h3>Ford Mustang</h3>
            <p>Benzină, 8.2L/100km</p>
            <p>Preț: 45.000€</p>
            <button onclick="showDetails('Ford Mustang', 'Ford Mustang este o mașină sport iconică, cunoscută pentru designul său agresiv și performanțele puternice. Este perfectă pentru pasionații de viteza.')">Detalii</button>
        </div>

        <!-- Mașina 3: Toyota Corolla -->
        <div class="car-item">
            <img src="imagini/corolla.avif" alt="Toyota Corolla" class="car-image">
            <h3>Toyota Corolla</h3>
            <p>Motorină, 4.8L/100km</p>
            <p>Preț: 30.000€</p>
            <button onclick="showDetails('Toyota Corolla', 'Toyota Corolla este o mașină compactă fiabilă și eficientă, ideală pentru uz zilnic. Este cunoscută pentru durabilitatea și costurile reduse de întreținere.')">Detalii</button>
        </div>

        <!-- Mașina 4: BMW X5 -->
        <div class="car-item">
            <img src="imagini/bmw-x5.jpg" alt="BMW X5" class="car-image">
            <h3>BMW X5</h3>
            <p>Motorină, 6.0L/100km</p>
            <p>Preț: 70.000€</p>
            <button onclick="showDetails('BMW X5', 'BMW X5 este un SUV premium, oferind spațiu generos, confort și performanțe excelente. Este perfect pentru familii și călătorii lungi.')">Detalii</button>
        </div>

        <!-- Mașina 5: Audi A4 -->
        <div class="car-item">
            <img src="imagini/audi-a4.avif" alt="Audi A4" class="car-image">
            <h3>Audi A4</h3>
            <p>Motorină, 5.2L/100km</p>
            <p>Preț: 40.000€</p>
            <button onclick="showDetails('Audi A4', 'Audi A4 este o mașină compactă premium, cu un design elegant și tehnologie avansată. Este ideală pentru cei care doresc confort și performanță.')">Detalii</button>
        </div>

        <!-- Mașina 6: Mercedes C-Class -->
        <div class="car-item">
            <img src="imagini/marcedess-c-class.webp" alt="Mercedes C-Class" class="car-image">
            <h3>Mercedes C-Class</h3>
            <p>Motorină, 5.8L/100km</p>
            <p>Preț: 50.000€</p>
            <button onclick="showDetails('Mercedes C-Class', 'Mercedes C-Class este o mașină de lux, cunoscută pentru confortul și tehnologia sa avansată. Este perfectă pentru cei care doresc eleganță și performanță.')">Detalii</button>
        </div>

        <!-- Mașina 7: Volvo XC60 -->
        <div class="car-item">
            <img src="imagini/Volvo XC60.avif" alt="Volvo XC60" class="car-image">
            <h3>Volvo XC60</h3>
            <p>Motorină, 6.5L/100km</p>
            <p>Preț: 55.000€</p>
            <button onclick="showDetails('Volvo XC60', 'Volvo XC60 este un SUV premium, cunoscut pentru siguranța și confortul său. Este ideal pentru familii și călătorii lungi.')">Detalii</button>
        </div>

        <!-- Mașina 8: Peugeot 308 -->
        <div class="car-item">
            <img src="imagini/Peugeot 308.avif" alt="Peugeot 308" class="car-image">
            <h3>Peugeot 308</h3>
            <p>Motorină, 4.5L/100km</p>
            <p>Preț: 28.000€</p>
            <button onclick="showDetails('Peugeot 308', 'Peugeot 308 este o mașină compactă, cu un design modern și eficiență ridicată. Este perfectă pentru uz zilnic și călătorii scurte.')">Detalii</button>
        </div>

        <!-- Mașina 9: Skoda Octavia -->
        <div class="car-item">
            <img src="imagini/Skoda Octavia.webp" alt="Skoda Octavia" class="car-image">
            <h3>Skoda Octavia</h3>
            <p>Motorină, 4.7L/100km</p>
            <p>Preț: 27.000€</p>
            <button onclick="showDetails('Skoda Octavia', 'Skoda Octavia este o mașină compactă fiabilă și spațioasă, ideală pentru familii. Oferă un raport excelent calitate-preț.')">Detalii</button>
        </div>

        <!-- Mașina 10: Renault Megane -->
        <div class="car-item">
            <img src="imagini/Renault Megane.jpg" alt="Renault Megane" class="car-image">
            <h3>Renault Megane</h3>
            <p>Motorină, 4.6L/100km</p>
            <p>Preț: 26.000€</p>
            <button onclick="showDetails('Renault Megane', 'Renault Megane este o mașină compactă, cu un design modern și tehnologie avansată. Este perfectă pentru uz zilnic și călătorii scurte.')">Detalii</button>
        </div>
    </section>

    <!-- Fereastra modală pentru detalii -->
    <div id="modal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <h2 id="modal-title"></h2>
            <p id="modal-description"></p>
        </div>
    </div>

    <footer>
        &copy; 2025 AutoMarket - Platforma de vânzări auto
    </footer>

    <script>
        // Funcție pentru afișarea detaliilor
        function showDetails(title, description) {
            const modal = document.getElementById("modal");
            const modalTitle = document.getElementById("modal-title");
            const modalDescription = document.getElementById("modal-description");

            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modal.style.display = "block";
        }

        // Funcție pentru închiderea ferestrei modale
        function closeModal() {
            const modal = document.getElementById("modal");
            modal.style.display = "none";
        }

        // Închide fereastra modală când se dă click în afara ei
        window.onclick = function (event) {
            const modal = document.getElementById("modal");
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    </script>
</body>
</html>