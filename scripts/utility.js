function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);

    return value;
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    // console.log(alphabetString);
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    // console.log(index);

    const alphabet = alphabets[index];
    // console.log(alphabet);

    return alphabet;
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    // selectedAlpha.style.backgroundColor = 'orange';
    // selectedAlpha.style.color = 'white';

    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    // selectedAlpha.style.backgroundColor = 'orange';
    // selectedAlpha.style.color = 'white';

    element.classList.remove('bg-orange-400');
}
