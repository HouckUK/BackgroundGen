var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');

function changeh3(){
	css.textContent = body.style.background + ";";
};

function setGradident(){
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+")";

	changeh3();
};

color1.addEventListener('input', setGradident);
color2.addEventListener('input', setGradident);