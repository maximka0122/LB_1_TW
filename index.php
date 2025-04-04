<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AutoMarket - Pagina Principală</title>
    <link rel="stylesheet" href="css/index-style.css">
</head>
<body>
    <!-- Slideshow Container -->
    <div class="slideshow">
        <div class="slide active" style="background-image: url('imagini/fundal1.jpg');"></div>
        <div class="slide" style="background-image: url('imagini/fundal2.avif');"></div>
        <div class="slide" style="background-image: url('imagini/fundal3.jpg');"></div>
        <div class="slide" style="background-image: url('imagini/fundal4.jpg');"></div>
    </div>

    <!-- Auth Container -->
    <div class="auth-container">
        <div class="auth-forms" id="authButtons">
            <button class="auth-btn" id="loginBtn">Autentificare</button>
            <button class="auth-btn" id="registerBtn">Înregistrare</button>
        </div>
        <div class="user-info" id="userInfo">
            <span id="usernameDisplay"></span>
            <button class="logout-btn" id="logoutBtn">Deconectare</button>
        </div>
    </div>

    <!-- Main Header -->
    <header>
        <h1>AutoMarket</h1>
        <nav>
            <a href="anunturi.php">Mașini Electrice</a>
            <a href="masini-motorina.php">Mașini pe Motorină</a>
            <a href="add.php">Adaugă Anunț</a>
        </nav>
    </header>

    <!-- Welcome Section with Animated Text -->
    <main class="content">
        <section class="welcome-section">
            <h2 id="welcome-title" class="animated-title">Bun venit la AutoMarket</h2>
            <p id="welcome-text" class="animated-text">Cea mai bună piață auto din Moldova</p>
        </section>
    </main>

    <!-- Login Modal -->
    <div id="loginModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Autentificare</h2>
            <form id="loginForm">
                <div class="form-group">
                    <label for="loginEmail">Email:</label>
                    <input type="email" id="loginEmail" required>
                </div>
                <div class="form-group">
                    <label for="loginPassword">Parolă:</label>
                    <input type="password" id="loginPassword" required>
                </div>
                <button type="submit" class="submit-btn">Autentificare</button>
            </form>
            <p id="loginError" class="error-message"></p>
        </div>
    </div>

    <!-- Register Modal -->
    <div id="registerModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Înregistrare</h2>
            <form id="registerForm">
                <div class="form-group">
                    <label for="registerName">Nume:</label>
                    <input type="text" id="registerName" required>
                </div>
                <div class="form-group">
                    <label for="registerEmail">Email:</label>
                    <input type="email" id="registerEmail" required>
                </div>
                <div class="form-group">
                    <label for="registerPassword">Parolă:</label>
                    <input type="password" id="registerPassword" required>
                </div>
                <div class="form-group">
                    <label for="registerConfirmPassword">Confirmă parola:</label>
                    <input type="password" id="registerConfirmPassword" required>
                </div>
                <button type="submit" class="submit-btn">Înregistrare</button>
            </form>
            <p id="registerError" class="error-message"></p>
        </div>
    </div>

    <footer>
        &copy; 2025 AutoMarket - Platforma de vânzări auto
    </footer>

    <script src="js/script.js"></script>
</body>
</html> 