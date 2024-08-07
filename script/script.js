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
