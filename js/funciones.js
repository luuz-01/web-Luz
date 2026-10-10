const musica = document.getElementById("musica");
const volumen = document.getElementById("volumen");

// iniciar con 50% de volumen
musica.volume = 0.5;

// cambiar volumen al mover la barra
volumen.addEventListener("input", function () {
    musica.volume = volumen.value / 100;
});