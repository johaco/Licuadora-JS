/* Funcionamiento de la Licuadora */

// Estado inicial de la licuadora
var estadoLicuadora = "apagado";

// Elementos del DOM relacionados con la licuadora
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");

// Función para controlar el estado de la licuadora
function controlarLicuadora() {
  // Verifica si la licuadora está apagada
  if (estadoLicuadora == "apagado") {
    // Cambia el estado a encendido
    estadoLicuadora = "encendido";
    // Activa el sonido y la animación de la licuadora
    hacerRuido();
    licuadora.classList.add("active");
  } else {
    // Cambia el estado a apagado
    estadoLicuadora = "apagado";
    // Activa el sonido y desactiva la animación de la licuadora
    hacerRuido();
    licuadora.classList.remove("active");
  }
}

// Función para gestionar el sonido de la licuadora
function hacerRuido() {
  // Verifica si el sonido de la licuadora está en pausa
  if (sonidoLicuadora.paused) {
    // Reproduce el sonido del botón y la licuadora
    botonLicuadora.play();
    sonidoLicuadora.play();
  } else {
    // Si el sonido está reproduciéndose, detén la licuadora y reinicia desde el segundo 0
    botonLicuadora.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.currentTime = 0; /* Reinicia el audio al segundo 0 */
  }
}
