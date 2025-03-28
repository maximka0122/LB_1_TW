// Slideshow logic
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    // Ascunde toate slide-urile
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Afișează slide-ul curent
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Trecem la următorul slide
    showSlide(currentSlide);
}

// Pornim slideshow-ul
setInterval(nextSlide, 5000); // Schimbă slide-ul la fiecare 5 secunde

// Afișăm primul slide la încărcarea paginii
showSlide(currentSlide);

// Animația de text (tipwriter effect)
const welcomeTitle = document.getElementById('welcome-title');
const welcomeText = document.getElementById('welcome-text');

const titleToAnimate = "Bine ați venit la AutoMarket!";
const textToAnimate = "Găsiți mașina potrivită pentru dumneavoastră.";

// Resetăm textul pentru a începe animația
welcomeTitle.innerText = '';
welcomeText.innerText = '';

// Funcția pentru animația de tipwriter
function typeWriter(element, text, speed = 100) {
    let i = 0;
    function type() {
        if (i < text.length) {
            // Adăugăm caracterul curent (inclusiv spații)
            if (text.charAt(i) === ' ') {
                element.innerHTML += '&nbsp;'; // Tratăm spațiile
            } else {
                element.innerHTML += text.charAt(i);
            }
            i++;
            setTimeout(type, speed);
        } else {
            // Eliminăm cursorul după ce animația este completă
            const cursor = element.querySelector('.cursor');
            if (cursor) {
                cursor.remove();
            }
        }
    }
    type();
}

// Pornim animația pentru titlu
typeWriter(welcomeTitle, titleToAnimate);

// Pornim animația pentru paragraf după ce titlul s-a terminat
setTimeout(() => {
    typeWriter(welcomeText, textToAnimate);
}, titleToAnimate.length * 100 + 500); // Așteptăm ca titlul să se termine + o mică pauză