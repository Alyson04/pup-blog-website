// THIS IS FOR ABOUT PAGE
const Slides = document.querySelectorAll('.slide');
                    let currentSlide = 0;
            
                    function showSlide(n) {
                    Slides[currentSlide].classList.remove('active');
                    currentSlide = (n + Slides.length) % Slides.length;
                    Slides[currentSlide].classList.add('active');
                    }
            
                    function nextSlide() {
                    showSlide(currentSlide + 1);
                    }
            
                    setInterval(nextSlide, 5000);

//THIS IS FOR BLOG PAGE
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}


// THIS IS FOR FOOTER
const footerElement = document.getElementById("footer-container");

function renderFooter() {
    footerElement.innerHTML = `
    <h2>CONTACT US</h2>
    
    <div class="pup">
        <i class="fab fa-facebook icon"><span class="text"> facebook.com/ThePUPOfficial</span></i>
        <i class="fas fa-envelope icon"><span class="text"> inquire@pup.edu.ph</span></i>
        <i class="fas fa-phone icon"><span class="text"> 0910 649 4049</span></i>  
    </div>

    <div class="container">
        <p>&copy; Polytechnic University of the Philippines. All rights reserved.</p>
    </div>
`;

}

renderFooter();


