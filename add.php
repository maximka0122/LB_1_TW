<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adaugă Anunț - AutoMarket</title>
    <link rel="stylesheet" href="css/add-style.css">
</head>
<body>
    <header>
        <h1>Adaugă Anunț</h1>
        <nav>
            <a href="index.php">Acasă</a>
            <a href="anunturi.php">Mașini Electrice</a>
            <a href="masini-motorina.php">Mașini pe Motorină</a>
        </nav>
    </header>

    <section>
        <form id="addCarForm">
            <input type="text" id="carModel" placeholder="Modelul mașinii" required>
            <input type="text" id="carPrice" placeholder="Preț" required>
            <input type="text" id="carDesc" placeholder="Descriere" required>
            <input type="text" id="carImg" placeholder="URL imagine" required>
            <select id="carType" required>
                <option value="electric">Mașină Electrică</option>
                <option value="fuel">Mașină pe Motorină/Benzină</option>
            </select>
            <button type="submit">Adaugă</button>
        </form>
    </section>

    <section class="car-list" id="carList">
        <h2>Mașini Adăugate</h2>
        <!-- Aici vor fi afișate mașinile adăugate -->
    </section>

    <footer>
        &copy; 2025 AutoMarket - Platforma de vânzări auto
    </footer>

    <script type="module" src="js/add.js"></script>
</body>
</html>