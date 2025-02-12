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