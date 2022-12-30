const encrypt = document.getElementById('encriptar');
const decrypt = document.getElementById('desencriptar');
const mensaje = document.getElementById('mensaje');
const show = document.getElementById('mostrar');
let unir = "";

encrypt.addEventListener('click', e => comparar(e));

function comparar(){
	let separar = mensaje.value.split('');
	// console.log(separar);

	separar.forEach(function (element,index) {
		if(element === "a"){
			separar[index] = "ai";
		}
		if(element === "e"){
			separar[index] = "enter";
		}
		if(element === "i"){
			separar[index] = "imes";
		}
		if(element === "o"){
			separar[index] = "ober";
		}
		if(element === "u"){
			separar[index] = "ufat";
		}
	});

	unir = separar.join('');
	// console.log(unir);
	show.value = unir;
}