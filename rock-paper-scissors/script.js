const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('player-choice')
const resultsDisplay = document.getElementById('results')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) 
    console.log(randomNumber)
    if (randomNumber === 0) {
        computerChoice = 'rock'
    }
    if (randomNumber === 1) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'it\'s a draw!'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lose!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lose!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lose!'
    }
    resultsDisplay.innerHTML = result
}

