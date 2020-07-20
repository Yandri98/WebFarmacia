var usuario = document.getElementById("UsuarioNombre");
var contraseña = document.getElementById("ContraseñaUser");
var btnLogin = document.getElementById("form");

btnLogin.addEventListener ('submit', function(event){
    event.preventDefault();
    if (usuario.value !="" && contraseña.value != ""){
        alert("Inicio de sesion exitoso");
        location.href="AdministrarTurnos.html";
     }
     else
     {
       alert("Completa todos los campos");
       return false;
     }
    
    });
    