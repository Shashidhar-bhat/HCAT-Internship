// Select elements
const input = document.getElementById('userInput');
const button = document.getElementById('showBtn');
const output = document.getElementById('output');

// Handle click event
button.addEventListener('click', () => {
  const value = input.value;
  output.textContent = `You typed: ${value}`;
});

// Handle keydown event
input.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);
});

// Handle mouseover event
button.addEventListener('mouseover', () => {
  button.style.backgroundColor = 'lightblue';
});

button.addEventListener('mouseout', () => {
  button.style.backgroundColor = '';
});
