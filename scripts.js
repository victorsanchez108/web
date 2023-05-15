function iniciarJuego() {




	var columnas = document.getElementById('columnas').value;
	document.getElementById('columnas').disabled = true;
	var filas = document.getElementById('filas').value;
	document.getElementById('filas').disabled = true;
	document.getElementById('mensaje').innerHTML ='JUGANDO...';
	var seg = 0;
	var cronometro = setInterval(function() {
		seg +=1;
		document.getElementById('crono').innerHTML='Segundos: ' + seg;
	},1000);


	dibujarTablero(filas,columnas);
	botones = document.getElementsByName('btn');

	habilitarBotones(filas,columnas);
}

function habilitarBotones (fe, ce){
	for (var i = 0; i < fe; i++) {
		for (var j = 0; j<ce; j++) {

		botones[i].addEventListener('mousdown',comprobar);
		}
	}
	
}

function dibujarTablero(f,c){
	for (var i = 0; i < f; i++) {
		for (var j = 0; j<c; j++) {
			var boton = document.createElement('button');
			boton.style.width ="50px";
			boton.style.height = "50px";
			boton.name = 'btn';
			boton.id = i + "_" + j;
			boton.innerHTML = i + "_" + j;
			var color = 0;
			var colorArray = ['#f63', '#fb9', '#f3f', '#ff9', '#Obe', '#eb3', '#36e', '#996', '#9f9', '#b44', '#666', '#f9e', '#cfl', '#f16', '#e31', '#694', '#b6c', '#480', '#Obb', '#eel', '#9ee', '#fef', '#933', '#639', '#ff0'];
			color = j +i*5;
			document.getElementById(i + "_" + j).style.backgroundColor = colorArray[color];
		}
		
	}

	
}


window.addEventListener('load',inicio);

function inicio() {
	document.getElementById('crearTablero').addEventListener('click',iniciarJuego);
}

function iniciarJuego(){
	alert('vas a crear el tablero')
}
