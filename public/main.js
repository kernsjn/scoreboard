const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

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
  score1 = score1 + 1
  document.querySelector('.team-1-score').textContent = score1
}

const teamTwoAddOne = () => {
  score2 = score2 + 1
  document.querySelector('.team-2-score').textContent = score2
}

const teamOneSubtractOne = () => {
  score1 = score1 - 1
  document.querySelector('.team-1-score').textContent = score1
}

const teamTwoSubtractOne = () => {
  score2 = score2 - 1
  document.querySelector('.team-2-score').textContent = score2
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

document.addEventListener('click', function() {
  console.log('click')
})
document.addEventListener('DOMContentLoaded', main)
