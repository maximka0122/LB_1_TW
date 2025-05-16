document.addEventListener('DOMContentLoaded', function () {
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const closeButtons = document.getElementsByClassName('close');

    // Verifică dacă utilizatorul e deja logat
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        showUserInfo(JSON.parse(loggedInUser));
    }

    // Deschide modalele
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            loginModal.style.display = 'block';
            document.getElementById('loginError').textContent = '';
        });
    }

    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            registerModal.style.display = 'block';
            document.getElementById('registerError').textContent = '';
        });
    }

    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', () => {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
        });
    }

    window.addEventListener('click', function (event) {
        if (event.target === loginModal) loginModal.style.display = 'none';
        if (event.target === registerModal) registerModal.style.display = 'none';
    });

    // 🔐 Login AJAX
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                localStorage.setItem('loggedInUser', JSON.stringify(data.user));
                showUserInfo(data.user);
                loginModal.style.display = 'none';
                document.getElementById('loginError').textContent = '';
                document.getElementById('loginForm').reset();
            } else {
                document.getElementById('loginError').textContent = data.message || 'Email sau parolă incorectă';
            }
        })
        .catch(err => {
            console.error(err);
            document.getElementById('loginError').textContent = 'Eroare la conectare cu serverul';
        });
    });

    // 📝 Înregistrare AJAX
    document.getElementById('registerForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword').value;

        if (password !== confirmPassword) {
            document.getElementById('registerError').textContent = 'Parolele nu coincid';
            return;
        }

        if (password.length < 6) {
            document.getElementById('registerError').textContent = 'Parola trebuie să aibă minim 6 caractere';
            return;
        }

        fetch('/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                localStorage.setItem('loggedInUser', JSON.stringify(data.user));
                showUserInfo(data.user);
                registerModal.style.display = 'none';
                document.getElementById('registerError').textContent = '';
                document.getElementById('registerForm').reset();
            } else {
                document.getElementById('registerError').textContent = data.message || 'Eroare la înregistrare';
            }
        })
        .catch(err => {
            console.error(err);
            document.getElementById('registerError').textContent = 'Eroare la conectare cu serverul';
        });
    });

    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        document.getElementById('authButtons').style.display = 'flex';
        document.getElementById('userInfo').style.display = 'none';
    });

    function showUserInfo(user) {
        document.getElementById('authButtons').style.display = 'none';
        document.getElementById('userInfo').style.display = 'flex';
        document.getElementById('usernameDisplay').textContent = `Bun venit, ${user.name}`;
    }

    // Slideshow
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    setInterval(nextSlide, 5000);


    // --- FUNCȚIONALITATEA VEZI PRODUSE (Adăugată FĂRĂ modificarea codului tău existent) ---
    document.addEventListener('DOMContentLoaded', function () {
        // ... (păstrează codul existent pentru login/register până la slideshow)
    
        // --- FUNCȚIONALITATEA VEZI PRODUSE MODIFICATĂ ---
        const seeProductsBtn = document.getElementById("seeProductsBtn");
        const productsModal = document.getElementById("productsModal");
        const productsModalClose = document.getElementById("productsModalClose");
        const productsList = document.getElementById("productsList");
        const productsSearch = document.getElementById("productsSearch");
    
        let products = [];
    
        seeProductsBtn.addEventListener("click", () => {
            productsModal.style.display = "block";
            if (products.length === 0) {
                // Folosim $.ajax() în loc de fetch()
                $.ajax({
                    url: "products.json",
                    method: "GET",
                    dataType: "json",
                    success: function(data) {
                        products = data;
                        displayProducts(products);
                    },
                    error: function() {
                        productsList.innerHTML = "<li>Eroare la încărcarea produselor.</li>";
                    }
                });
            } else {
                displayProducts(products);
            }
        });
    
        productsModalClose.addEventListener("click", () => {
            productsModal.style.display = "none";
            productsSearch.value = "";
            displayProducts(products);
        });
    
        window.addEventListener("click", event => {
            if (event.target === productsModal) {
                productsModal.style.display = "none";
                productsSearch.value = "";
                displayProducts(products);
            }
        });
    
        productsSearch.addEventListener("input", () => {
            const query = productsSearch.value.toLowerCase().trim();
            if (query.length === 0) {
                displayProducts(products);
                return;
            }
            
            // Folosim $.ajax() pentru căutare
            $.ajax({
                url: "products.json",
                method: "GET",
                dataType: "json",
                success: function(data) {
                    const filtered = data.filter(prod => 
                        prod.name.toLowerCase().includes(query) || 
                        prod.description.toLowerCase().includes(query)
                    );
                    displayProducts(filtered);
                },
                error: function() {
                    productsList.innerHTML = "<li>Eroare la căutare.</li>";
                }
            });
        });
    
        function displayProducts(list) {
            if (!list || list.length === 0) {
                productsList.innerHTML = "<li>Nu s-au găsit produse.</li>";
                return;
            }
            productsList.innerHTML = "";
            list.forEach(prod => {
                const li = document.createElement("li");
                li.innerHTML = `<strong>${prod.name}</strong><br/>
                                ${prod.description}<br/>
                                <em>Preț: ${prod.price}</em>`;
                productsList.appendChild(li);
            });
        }
    });