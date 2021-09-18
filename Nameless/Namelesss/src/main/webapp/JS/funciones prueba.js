var user = document.getElementById('txtUsuario').value
var pass = document.getElementById('txtPassword').value

aceptar.addEventListener('click',()=>{
	alert("entre al boton\n usuario " + user + "\nContraseña " + pass)
	if(user == "" && pass == "")
  	{
	window.location="../JSP/menu.jsp";
	alert("Bienvenido al sistema, "+usuario); 
  	}
  	else
  	{
    alert("Credenciales invalidas, por favor revisar");
  	}
})
