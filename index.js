document.getElementById("loginForm").addEventListener("submit", function (event){ //Manejador de eventos para el formulario
    event.preventDefault(); //Previene el envio del formulario
    recibirDatos(); //Llama a la función para recibir los datos
    location.href = "/contactos.html";
});

function recibirDatos(){
    let correo = document.getElementById("correo").value
    let contrasenia = document.getElementById("contrasenia").value

    localStorage.setItem("correo", correo);
    localStorage.setItem("contrasenia", contrasenia);
}