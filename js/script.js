// Muestra la imagen ampliada
function showImage(src) {
    const overlay = document.getElementById('overlay');
    const fullImage = document.getElementById('full-image');

    fullImage.src = src; // Cambia la fuente de la imagen
    overlay.style.display = 'flex'; // Asegúrate de mostrar el overlay
    setTimeout(() => {
        overlay.classList.add('active'); // Añade la clase activa para mostrar el overlay
    }, 10); // Pequeña pausa para permitir que el overlay se muestre antes de aplicar la clase
}

// Oculta la imagen ampliada
function hideImage() {
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('active'); // Elimina la clase activa para ocultar el overlay

    // Espera a que la animación termine antes de ocultar el overlay
    setTimeout(() => {
        overlay.style.display = 'none'; // Oculta el overlay
    }, 500); // Coincide con la duración de la transición
}
//-------------------------------------------------------------------------
// Seleccionar el icono, el menú y el documento
const menuIcon = document.getElementById("menu-icon");
const dropdownMenu = document.getElementById("dropdown");
const closeMenuButton = document.getElementById("close-menu");

// Función para alternar el menú desplegable
menuIcon.addEventListener("click", function (event) {
    dropdownMenu.classList.toggle("show"); // Muestra/oculta el menú
    event.stopPropagation(); // Evita que el clic en el icono cierre el menú inmediatamente
});

// Cerrar el menú al hacer clic en "Cerrar Menú"
closeMenuButton.addEventListener("click", function (event) {
    dropdownMenu.classList.remove("show"); // Cierra el menú
});

// Función para cerrar el menú cuando se hace clic fuera de él
document.addEventListener("click", function (event) {
    // Si el menú está visible y se hace clic fuera de él, lo cierra
    if (dropdownMenu.classList.contains("show") && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove("show"); // Cierra el menú
    }
});

