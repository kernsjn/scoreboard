const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

// Done Add a if statement to stop each team's score from going below 0.
//  Done Add an if statement to stop each team's score from going above 21
//  When a team gets 21 points, disable the buttons and display an message to the user of who won
//  Add a reset button that resets the scoreboard back to the each team having 0 points and re-enables the buttons

let score1 = 0
let score2 = 0

// const teamOneUpdate, teamTwoUpdate, teamOneAddOne, teamOneSubtractOne,teamTwoAddOne, teamTwoSubtractOne;

const teamOneUpdate = () => {
  document.querySelector('.team-1-name').textContent = document.querySelector(
    '.team-1-input'
  ).value
}

const teamTwoUpdate = () => {
  document.querySelector('.team-2-name').textContent = document.querySelector(
    '.team-2-input'
  ).value
}

const teamOneAddOne = () => {
  if (document.querySelector('.team-1-score').textContent <= 20) {
    document.querySelector('.team-1-score').textContent =
      parseInt(document.querySelector('.team-1-score').textContent) + 1
  } else if (document.querySelector('.team-1-score').textContent === '21') {
    document.querySelector('.team-1-score').textContent = 'Winner'
    document.querySelector('button.team-1-add-1-button').disabled = true
  }
}

const teamTwoAddOne = () => {
  if (document.querySelector('.team-2-score').textContent <= 20) {
    document.querySelector('.team-2-score').textContent =
      parseInt(document.querySelector('.team-2-score').textContent) + 1
  } else if (document.querySelector('.team-2-score').textContent === '21') {
    document.querySelector('.team-2-score').textContent = 'Winner'
    document.querySelector('button.team-2-add-1-button').disabled = true
  }
}

const teamOneSubtractOne = () => {
  if (document.querySelector('.team-1-score').textContent >= 1) {
    document.querySelector('.team-1-score').textContent =
      parseInt(document.querySelector('.team-1-score').textContent) - 1
  }
}

const teamTwoSubtractOne = () => {
  if (document.querySelector('.team-2-score').textContent >= 1) {
    document.querySelector('.team-2-score').textContent =
      parseInt(document.querySelector('.team-2-score').textContent) - 1
  }
}

const resetGame = () => {
  const theResetButton = 0
  score1 = 0
  score2 = 0
  document.querySelector('button.team-1-add-1-button').disabled = false
  document.querySelector('button.team-2-add-1-button').disabled = false
  document.querySelector('.team-2-score').textContent = theResetButton
  document.querySelector('.team-1-score').textContent = theResetButton
}

//EventListener update-team-1-name, update-team-2-name, team-1-add-1-button, team-2-add-1-button, team-1-subtract-1-button, team-2-subtract-1-button

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', teamOneUpdate)

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', teamTwoUpdate)

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', teamOneAddOne)

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', teamTwoAddOne)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', teamOneSubtractOne)

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', teamTwoSubtractOne)

document.querySelector('.reset').addEventListener('click', resetGame)

document.addEventListener('click', function() {
  console.log('click')
})
document.addEventListener('DOMContentLoaded', main)
