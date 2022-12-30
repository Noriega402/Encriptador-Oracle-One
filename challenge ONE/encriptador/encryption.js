const encrypt = document.getElementById('encriptar');
const decrypt = document.getElementById('desencriptar');
const mensaje = document.getElementById('mensaje');
const show = document.getElementById('mostrar');
const img = document.getElementById('img');
const vacio = document.getElementById('vacio');
const cpy = document.getElementById('btn-cpy');
let unir = "";
let pegar = "";

encrypt.addEventListener('click', e => Encrypt(e));

decrypt.addEventListener('click', e => Decrypt(e));

cpy.addEventListener('click', e => cambiarBtn(e));

function Encrypt(){
	if(mensaje.value.length === 0){
		alert('No ingresaste un texto para encriptar');
	}else{
		cifrado();
	}
}

function cifrado(){
	let separar = mensaje.value.split('');
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
	show.innerText = unir;
	mostrarResultado();
}

// PARA OCULTAR IMAGEN Y MOSTRAR TEXTAREA Y BOTON DE COPIAR
function mostrarResultado(){
	img.style.display = "none";
	vacio.style.display = "none";
	show.style.display = "block";
	cpy.style.display = "block";
}

function cambiarBtn(){
	show.focus();
	document.execCommand('selectAll');

	if(document.execCommand('copy')){
		setTimeout(function(){
			cpy.innerText = "¡Copiado!";
		}, 200);
		setTimeout(function(){
			cpy.innerText = "Copiar";
		}, 2000);
	}
}

// funcion que recibe la cadena para desencriptar y con expresiones regulares
function Decrypt(txt){
	if(mensaje.value.length === 0){
		alert('No ingresaste un texto para desencriptar');
	}else{
		let ver = mensaje.value.replace(/ai|enter|imes|ober|ufat/ig, descifrado);
		show.innerText = ver;
		mostrarResultado();
	}
}

//devuelve una letra dependiendo del parametro recibido en la funcion Decrypt()
function descifrado(txt){
	if(txt == "ai"){
		return "a";
	}
	if(txt == "enter"){
		return "e";
	}
	if(txt == "imes"){
		return "i";
	}
	if(txt == "ober"){
		return "o";
	}
	if(txt == "ufat"){
		return "u";
	}
}