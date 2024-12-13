const colorButton = document.getElementById('btn-color')
const colorName = document.querySelector("[data-colorName]")
function changeColor() {
    var newColor = colors[Math.floor(Math.random()*colors.length)]
    colorButton.style.backgroundColor = newColor
    colorName.textContent= ` The New Color is ${newColor.charAt(0).toUpperCase() + newColor.slice(1)}`
    colorName.style.color = newColor
}
const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "cyan", "magenta", "lime", "teal"];

colorButton.addEventListener('click',changeColor)


