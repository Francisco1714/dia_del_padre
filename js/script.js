function llenarJarra() {
    const cerveza = document.getElementById('cerveza');
    const espuma = document.getElementById('espuma');
    const audioLlenado = document.getElementById('audioLlenado');
    
    // Iniciar animación de llenado y reproducir audio
    cerveza.style.height = '85%'; // 85% para dejar espacio para la espuma
    espuma.style.height = '15%'; // 15% para la espuma
    espuma.style.bottom = '85%'; // Ajustar la posición de la espuma

    audioLlenado.play();

    // Mostrar el mensaje de celebración después de la animación de llenado
    setTimeout(() => {
        const celebracion = document.getElementById('celebracion');
        celebracion.style.display = 'block';
    }, 2000); // Tiempo de espera debe coincidir con la duración de la transición (2s)
}
