const button = document.querySelector('button');

// No suggested because just one event handler can be added
// button.onclick = function () {
//   alert('Button was clicked');
// };

// suggested and more elegant way
// const buttonClickHandler = () => {
//   alert('Button was clicked');
// };

// button.addEventListener('click', buttonClickHandler);

// as a test for removing we wait 2 seconds and remove listener so button no longer works
// note that for removing we have to use the same signature ('click', buttonClickHandler)
// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);

// This will not work as these are two different funcitons different signatures
// button.addEventListener('click', () => {
//   alert('click');
// });

// setTimeout(() => {
//   button.removeEventListener('click', () => {
//     alert('click');
//   });
// }, 2000);

// This will not work either bind creates a new function object as the case above does not work
// button.addEventListener('click', buttonClickHandler.bind(this));

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler.bind(this));
// }, 2000);
// The alternative is store it in a const boundFn = buttonClickHandler.bindt(this); and set it like:
// button.addEventListener('click', boundFn); and button.removeEventListener('click', boundFn);

// By default all event listeners are registeed in the bubbling face inside to ouside
// const div = document.querySelector('div');

// div.addEventListener('click', (event) => {
//   console.log('Click DIV');
//   console.log(event);
// }); // we switch to the capturing face if we add another argument here equals to true (default is false that is bubbles)

// button.addEventListener('click', (event) => {
//   // stopPropagation - any other listeners for the same type of event on some ancestor elements will not trigger
//   // their event listeners for this event. So DIV listener will not trigger
//   // event.stopPropagation();
//   console.log('Click button');
//   console.log(event);
// });

// Event Delegation

// No suggested solution becuase we add multiple unnecessary event handlers
// const listItems = document.querySelectorAll('li');

// listItems.forEach(listItem => {
//   listItem.addEventListener('click', event => {
//     event.target.classList.toggle('highlight');
//   });
// });

// suggested solution we register the click event handler in the list
// const list = document.querySelector('ul');

// list.addEventListener('click', event => {
//   // event.target would refer to the actual item we clicked as we clicked withing the list area
//   // solution when we do not have nested html elements in li
//   // event.target.classList.toggle('highlight');
  
//   // solution when there are nested elements
//   event.target.closest('li').classList.toggle('highlight'); // closest to li including li
// });
