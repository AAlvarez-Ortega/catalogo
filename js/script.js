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
