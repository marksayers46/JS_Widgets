const computerChoice = document.getElementById('computer-choice')
const playerChoice = document.getElementById('player-choice')
const results = document.getElementById('results')
const possibleChoices = document.querySelectorAll('button')

let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    playerChoice.innerHTML = userChoice
    generateComputerChoice()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) // or use possibleChoice.length instead of 3
    console.log(randomNumber)

}