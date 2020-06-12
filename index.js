let css = document.querySelector("h3")
let color1 = document.querySelector(".color1")
let color2 = document.querySelector(".color2")
let body = document.querySelector("#gradient")
let randomButton = document.querySelector(".random-btn")

function setGradient(firstColor, secondColor) {
	body.style.background = `linear-gradient(to right, ${firstColor}, ${secondColor})`
	css.textContent = body.style.background + ";"
}

function setRandomGradient() {
	let startColor = "#"
	let endColor = "#"
	for (let i = 0; i < 6; i++) {
		let randHex = Math.floor(Math.random() * 16).toString(16)
		startColor += randHex
	}
	for (let i = 0; i < 6; i++) {
		let randHex = Math.floor(Math.random() * 16).toString(16)
		endColor += randHex
	}
	
	setGradient(startColor, endColor) 
}

function setGradientFromButtons() {
	setGradient(color1.value, color2.value)
}

color1.addEventListener("input", setGradientFromButtons)

color2.addEventListener("input", setGradientFromButtons)

randomButton.addEventListener('click', setRandomGradient)