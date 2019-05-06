/* @flow */

// DOM selectors 
const code = document.getElementById('code');
const toggle = document.getElementById('toggle');
const reset = document.getElementById('reset');

// flow - checked html elements on id has element or then will have  null ✅
if(!toggle) throw new Error('An element with id="toggle" is not reachable.')

if(!(code instanceof HTMLElement)){ // aproved that we are working with html elementom! 
    throw new Error('An element with id="code" is not reachable.')
}
if(!(reset instanceof HTMLElement)){ // aproved that we are working with html elementom! 
    throw new Error('An element with id="reset" is not reachable.')
}

// init value
let lapsed = 0;
let isRunning = false;
let timer = null;
// 
const updateButtonText = () => {
    const buttonText = isRunning ? '🏁 Стоп' : '🎬 Старт';
    toggle.innerHTML = buttonText;
};
// on click 
const toggleRun = () => {
    if (isRunning) {
        clearInterval(timer); // clean timer 
    } else {
        const startTime = Date.now() - lapsed; // start
        timer = setInterval(() => {
            lapsed = Date.now() - startTime;
            code.innerHTML = `${lapsed} мс`;
        }, 0);
    }

    isRunning = !isRunning;
    updateButtonText(); //stop statr
};

const resetTimer = () => {
    clearInterval(timer);
    lapsed = 0;

    code.innerHTML = `${lapsed} мс`;
    isRunning = false;
    updateButtonText();
};

toggle.addEventListener('click', toggleRun);
reset.addEventListener('click', resetTimer);
