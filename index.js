document.getElementById("loginForm").addEventListener("submit", function (event){ //Maneja el evento del formulario
    event.preventDefault(); //Previene el envio del formulario
    recibirDatos(); //Llama a la función para recibir los datos
    location.href = "/contactos.html";
});

function recibirDatos(){
    const correo = document.getElementById("correo").value
    const contrasenia = document.getElementById("contrasenia").value

    localStorage.setItem("correo", correo);
    localStorage.setItem("contrasenia", contrasenia);
}