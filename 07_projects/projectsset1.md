# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1
 
```javascript
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

// button.forEach((button) => {
//   button.addEventListener('click', function (event) {
//     console.log(event);
//     console.log(event.target);
//     if (event.target.id === 'grey') {
//       body.style.backgroundColor = event.target.id;
//     }
//     if (event.target.id === 'yellow') {
//       body.style.backgroundColor = event.target.id;
//     }
//     if (event.target.id === 'blue') {
//       body.style.backgroundColor = event.target.id;
//     }
//     if (event.target.id === 'white') {
//       body.style.backgroundColor = event.target.id;
//     }
//   });
// });

// +++++++++++++++++++++++++++++

// ChatGPT
// The problem in the code is with how the switch statement is used. The event parameter passed to the click event listener callback function is an Event object, not a string that directly matches the case values ('grey', 'blue', 'white', 'yellow'). Here are the issues and how to fix them:

// Event Parameter: When you attach an event listener to an element (like a button), the event parameter in the callback function represents the event object itself, not the value you're expecting ('grey', 'blue', etc.).

// Switch Statement: The switch cases are expecting string literals ('grey', 'blue', 'white', 'yellow'), but event is an object that doesn't match these values.

// +++++++++++++++++++++++

button.forEach(function (clr) {
  clr.addEventListener('click', function (event) {
    var id = event.target.id;
    switch (id) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
      case 'white':
        body.style.backgroundColor = 'white';
        break;
      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;
    }
  });
});

```
## Project 2 Solution 

``` javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height <= 0 || isNaN(height)) {
    results.innerHTML = `enter valid height ${height}`;
  } else if (weight <= 0 || isNaN(weight)) {
    results.innerHTML = `enter valid weight ${weight}`;
  } else {
    const bmi = (height * weight).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `<span>under weight ${bmi}</span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>normal range ${bmi}</span>`;
    } else {
      results.innerHTML = `<span>overweight ${bmi}</span>`;
    }
  }
});

```
## Projects 3 solution

``` javascript

setInterval(function () {
  let date = new Date();
  const clock = document.getElementById('clock');
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```
## Project 4 solution

``` javascript

const randomNumber = parseInt(Math.random() * 100 + 1);

const input = document.querySelector('#guessField');
const button = document.querySelector('#subt');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let Game = true;
let guessTry = 1;
let prevGuess = [];

if (Game) {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    const guess = parseInt(input.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (guess >= 100 || guess <= 0 || isNaN(guess)) {
    displayMessage('Enter valid number');
  } else {
    prevGuess.push(guess);
    if (guessTry === 11) {
      displayMessage('no more tries, u lose');
      endGame();
    } else {
      checkGuess(guess);
      displayGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('congrats u win');
    endGame();
  } else if (guess > randomNumber) {
    displayMessage('guess is high');
  } else if (guess < randomNumber) {
    displayMessage('guess is low');
  }
}

function displayGuess(guess) {
  input.value = '';
  guesses.innerHTML = `${prevGuess},  `;
  guessTry++;
  lastResult.innerHTML = `${11 - guessTry}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}<h2/>`;
}

function endGame() {
  input.value = '';
  input.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  Game = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    const randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    guessTry = 1;
    startOver.removeChild(p);
    input.removeAttribute('disabled');
    Game = true;
  });
}

```

# Project 5 solution

``` javascript



```

# Project 6 solution

``` javascript

const randomColor = function () {
  let hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let IntervalId;
const changeColor = function () {
  if (!IntervalId) {
    IntervalId = setInterval(color, 1000);
  }
  function color() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopColor = function () {
  clearInterval(IntervalId);
  IntervalId = null;
};

document.querySelector('#start').addEventListener('click', changeColor);

document.querySelector('#stop').addEventListener('click', stopColor);


```