document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("correo").textContent = localStorage.getItem("correo");
    document.getElementById("contrasenia").textContent = localStorage.getItem("contrasenia");
});