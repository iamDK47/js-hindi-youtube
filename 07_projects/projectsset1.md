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