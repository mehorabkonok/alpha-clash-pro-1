function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getARandomAlphabet() {
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
