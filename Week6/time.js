const get = selector => document.querySelector(selector);

const btnIncrease = get('#increase');
const btnDecrease = get('#decrease');
const btnStop     = get('#stop');
const textDiv     = get('#text');
const display     = get('#fontSizeDisplay');

let timerId = null;

const MIN_SIZE = 10;
const MAX_SIZE = 70;
const STEP = 2;

const updateFontSize = size => {
  textDiv.style.fontSize = `${size}px`;
  display.textContent = `${size}px`;
};

const getCurrentFontSize = () =>
  parseFloat(getComputedStyle(textDiv).fontSize);

const stopAutoResize = () => {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    console.log('Auto resize stopped.');
  }
};

const autoAdjustFont = isIncreasing => {
  if (timerId) return;

  const adjust = () => {
    let currentSize = getCurrentFontSize();

    if (isIncreasing && currentSize + STEP > MAX_SIZE) {
      updateFontSize(MAX_SIZE);
      stopAutoResize();
    } else if (!isIncreasing && currentSize - STEP < MIN_SIZE) {
      updateFontSize(MIN_SIZE);
      stopAutoResize();
    } else {
      updateFontSize(currentSize + (isIncreasing ? STEP : -STEP));
    }
  };

  // Run once immediately
  adjust();

  // Then set interval
  timerId = setInterval(adjust, 1000);
};

btnIncrease.addEventListener('click', () => autoAdjustFont(true));
btnDecrease.addEventListener('click', () => autoAdjustFont(false));
btnStop.addEventListener('click', stopAutoResize);
