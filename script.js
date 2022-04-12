var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var colorRan1 = document.getElementById("random1");
var colorRan2 = document.getElementById("random2");



function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomizeLeft(){
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	color1.value = '#' + randomColor;

	body.style.background =
	"linear-gradient(to right,"
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomizeRight(){
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	color2.value = '#' + randomColor;

	body.style.background =
	"linear-gradient(to right,"
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}


setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

colorRan1.addEventListener("click", randomizeLeft);

colorRan2.addEventListener("click", randomizeRight);

