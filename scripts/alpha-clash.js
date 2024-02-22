// function play() {
//     console.log('play start now');
//     //step-1: hide the home screen
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     //step-2: show the playground
//     const playgroundScreen = document.getElementById('play-ground');
//     playgroundScreen.classList.remove('hidden');
// }
function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet', alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}










// Raugh practice only.
// let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// let randomeNumber = Math.round(Math.random() * 26);
// let alphas = alphabets[randomeNumber];

// if (randomeNumber % 2 === 0) {
//     console.log(randomeNumber);
//     console.log(alphas.toUpperCase());
// } else {
//     console.log(randomeNumber);
//     console.log(alphas);
// }
