const loginBtn = document.querySelector(".login-btn");
        
const modal = document.getElementById("login-modal");



const closeBtn = document.querySelector(".modal-content .close");

loginBtn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});


        let slideIndex = 0;
        const slides = document.querySelectorAll('.hero-slider img');
        const changeSlide = () => {
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
    slideIndex = (slideIndex + 1) % slides.length;
};
changeSlide(); // Add this to trigger on page load
setInterval(changeSlide, 3000);