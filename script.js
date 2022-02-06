

var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var botonCopiar = document.querySelector("#botonCopiar");




function encriptar(texto)
{
	var letra;

	if(texto == 'a')
	{
		letra = "ai";
		console.log(letra);
		return letra;
	}

	if(texto =='e')
	{
		letra = "enter";
		console.log(letra);
		return letra;
	}

	if(texto =='i')
	{
		letra = "imes";
		return letra
	}

	if(texto =='o')
	{
		letra = "ober";
		return letra;
	}

	if(texto =='u')
	{
		letra = "ufat";
		return letra;
	}

	else
	{
		letra = texto;
		return letra;
	}
}





function textoEncriptado()
{
	
	var textoIngresado = document.querySelector("#cajaIngresar").value;
	var arrayTextoIngresado = Array.from(textoIngresado);
	var i;
	var textoSalida = "";

	if(textoIngresado == "")
	{
		alert("Debe ingresar por lo menos una letra");
		return false;
	}

	for( i = 0; i < arrayTextoIngresado.length; i++)
	{
		var letra = encriptar(arrayTextoIngresado[i]);
		
		if(letra == [0- 9])
		{
			alert("Solamente letras");
		}
		textoSalida = textoSalida + letra;
	} 

	

	 document.querySelector("#cajaSalida").value = textoSalida;

}


botonEncriptar.addEventListener("click", function (event) {
    
    event.preventDefault();
    
	textoEncriptado();
   	document.querySelector("#cajaIngresar").value = "";
  
});


function desencriptar(textoSalida)
{	
	var textoIngresado = textoSalida.replace(/ai/gi, 'a')
									.replace(/enter/gi, 'e')
									.replace(/imes/gi, 'i')
									.replace(/ober/gi, 'o')
									.replace(/ufat/gi, 'u');
	return textoIngresado;
}



/*****Al dar clic desencripta el texto*************************/
botonDesencriptar.addEventListener("click", function (event) {

	event.preventDefault();
    
   	var textoIngresado = document.querySelector("#cajaIngresar").value;	
   	var desencriptado = desencriptar(textoIngresado);

   	document.querySelector("#cajaSalida").value = desencriptado;

   	document.querySelector("#cajaIngresar"). value = "";
  
});


/*********************copia el texto de la caja que muestra resultados encriptados******************************/
botonCopiar.addEventListener("click", function (event) {

	event.preventDefault();
    
	
    
   	if(document.querySelector("#cajaSalida").value == "")
   	{

   		alert("No existe texto para copiar");
   	}

   	else
   	{
   		
   		var textoEncriptado = document.querySelector("#cajaSalida");

   		textoEncriptado.select();

   		document.execCommand('copy');

   	
   	  	document.querySelector("#cajaSalida").value = "";

   	}
  
})

