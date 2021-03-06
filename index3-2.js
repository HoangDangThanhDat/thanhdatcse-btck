const generateBtn = document.querySelector(".generate-btn");
const copyBtn = document.querySelector(".copy-btn");
const outputColor = document.querySelector(".output-color");
const outputCode = document.querySelector(".output-code");


const randomHex = () =>
    Math.floor(Math.random() * 256)
        .toString(16)
        .padStart(2, "0");

const randomColor = () => `#${[...Array(3)].map(randomHex).join("")}`;

const randomAngle = () => `${Math.floor(Math.random() * 361)}deg`;

const randomGradient = () => [randomAngle(), randomColor, randomColor()];

const update = ()=> {
    
}
