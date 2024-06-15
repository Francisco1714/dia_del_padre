function llenarJarra() {
    const cerveza = document.querySelector('.cerveza');
    const audioLlenado = document.getElementById('audioLlenado');
    
    // Iniciar animación de llenado y reproducir audio
    cerveza.style.height = '80%'; // 80% para dejar espacio para la espuma
    audioLlenado.play();

    // Mostrar el mensaje de celebración después de la animación de llenado
    setTimeout(() => {
        const celebracion = document.getElementById('celebracion');
        celebracion.style.display = 'block';
    }, 2000); // Tiempo de espera debe coincidir con la duración de la transición (2s)
}