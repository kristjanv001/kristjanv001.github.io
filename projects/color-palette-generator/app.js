/* ----------------------------------------
|
|
| CODE
|
|
---------------------------------------- */


// define variables
const container = document.querySelector("div .boxes-container");
const restartBtn = document.querySelector("#genBtn").addEventListener("click", onClick);
let color;


// function: reload the page (generate new colors)
function onClick() {
  location.reload();
}


// function: generate random rgb value
function genRandomRGB() {
  let rgb;
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
}


// store the result into a variable
let randomRGB = genRandomRGB();


// generate the triad
let colorsTriad = tinycolor(randomRGB).triad();
colorsTriad.map(function (t) {
  return t.toHexString();
});


// extract first color of the triad
let colorTriadOne = `rgb(${colorsTriad[1]._r}, ${colorsTriad[1]._g}, ${colorsTriad[1]._b})`;


// extract the second color of the triad
let colorTriadTwo = `rgb(${colorsTriad[2]._r}, ${colorsTriad[2]._g}, ${colorsTriad[2]._b})`;


// combine them into an array
let colorsTriadArr = [colorTriadOne, colorTriadTwo];


// function: generate the square (base color)
function genSquares() {
  // we create the new div element
  const colorDiv = document.createElement("div");
  // we add classes to the element
  colorDiv.className = "color-div color-square";
  // we fill the box with a generated color (rgb string func)
  colorDiv.style.backgroundColor = randomRGB;
  // we insert the element into the dom
  container.appendChild(colorDiv);
}


// // function: generate circles (complementary colors)
function genCirclesOne() {
  // we create the new div element
  const colorDiv = document.createElement("div");
  // we add classes to the element
  colorDiv.className = "color-div color-circle";
  // we fill the box with a generated color (rgb string func)
  colorDiv.style.backgroundColor = colorTriadOne;
  // we insert the element into the dom
  container.appendChild(colorDiv);
}


function genCirclesTwo() {
  // we create the new div element
  const colorDiv = document.createElement("div");
  // we add classes to the element
  colorDiv.className = "color-div color-circle";
  // we fill the box with a generated color (rgb string func)
  colorDiv.style.backgroundColor = colorTriadTwo;
  // we insert the element into the dom
  container.appendChild(colorDiv);
}


console.log(randomRGB);
console.log(colorTriadOne);
console.log(colorTriadTwo);


genSquares();
genCirclesOne();
genCirclesTwo();