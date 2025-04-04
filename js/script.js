document.addEventListener('DOMContentLoaded', function() {
    // Check if user is already logged in
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        showUserInfo(JSON.parse(loggedInUser));
    }

    // Set up modal functionality
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const closeButtons = document.getElementsByClassName('close');

    // Open login modal
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            loginModal.style.display = 'block';
            document.getElementById('loginError').textContent = '';
        });
    }

    // Open register modal
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            registerModal.style.display = 'block';
            document.getElementById('registerError').textContent = '';
        });
    }

    // Close modals
    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', function() {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
        });
    }

    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });

    // Login form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // In a real app, you would send this to a server for verification
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            showUserInfo(user);
            loginModal.style.display = 'none';
            document.getElementById('loginError').textContent = '';
            document.getElementById('loginForm').reset();
        } else {
            document.getElementById('loginError').textContent = 'Email sau parolă incorectă';
        }
    });

    // Register form submission
    document.getElementById('registerForm').addEventListener('submit', function(e) {
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
        
        // Check if user already exists
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const userExists = users.some(u => u.email === email);
        
        if (userExists) {
            document.getElementById('registerError').textContent = 'Acest email este deja înregistrat';
            return;
        }
        
        // Add new user
        const newUser = { 
            id: Date.now().toString(),
            name, 
            email, 
            password,
            registrationDate: new Date().toISOString()
        };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Log in the new user
        localStorage.setItem('loggedInUser', JSON.stringify(newUser));
        showUserInfo(newUser);
        registerModal.style.display = 'none';
        document.getElementById('registerError').textContent = '';
        document.getElementById('registerForm').reset();
    });

    // Logout functionality
    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('loggedInUser');
        document.getElementById('authButtons').style.display = 'flex';
        document.getElementById('userInfo').style.display = 'none';
    });

    // Function to show user info and hide auth buttons
    function showUserInfo(user) {
        document.getElementById('authButtons').style.display = 'none';
        document.getElementById('userInfo').style.display = 'flex';
        document.getElementById('usernameDisplay').textContent = `Bun venit, ${user.name}`;
    }

    // Slideshow functionality
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
    
    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
});