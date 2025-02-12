// === Turns the menu hamburguer into a X ===
const menuHamburguer = document.querySelector('.menu-hamburguer')
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

// button read-more
window.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = "none";
    });
});

document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', function () {
        let modalId = this.getAttribute('data-modal'); 
        document.getElementById(modalId).style.display = "flex";
    });
});

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function (event) {
        if (event.target === this || event.target.classList.contains('close')) {
            this.style.display = "none";
        }
    });
});