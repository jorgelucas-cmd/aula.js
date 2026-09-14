const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');


let humanScoreNumber = 0
let machineScoreNumber = 0

const playHumen = (humanChoice) => {
  
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber];
}

const playTheGame = (human, machine) => {

    console.log('humano:' + human + " máquina:" + machine)

    if(human === machine) {
        result.innerHTML = 'Empate!'
    }
    else if(
        human === 'paper' && machine === 'rock' ||
         human === 'rock' && machine === 'scissors' || 
         human === 'scissors' && machine === 'paper') {
        
        mostrarform()
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Você ganhou!'
       
    }
    else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você perdeu!'
    }
}

const formulario = document .querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario");



function mostrarform() {
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
}

function esconderform() {
    formulario.style.left = "-850px";
    formulario.style.transform = "translateX(0)";
    mascara.style.visibility = "hidden";
}