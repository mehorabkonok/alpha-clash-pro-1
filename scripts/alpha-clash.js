// function play() {
//     console.log('play start now');
//     //step-1: hide the home screen
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     //step-2: show the playground
//     const playgroundScreen = document.getElementById('play-ground');
//     playgroundScreen.classList.remove('hidden');
// }
// capture keyboard press
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function handleKeyboardKeyUpEvent(event) {
    // console.log(event);
    // console.log(event.code);

    const playerPressed = event.key;
    console.log('player pressed: ', playerPressed);
    console.log(typeof playerPressed);

    // stop the game if player pressed 'Esc'
    if (playerPressed === 'Escape') {
        gameOver();
    }

    // console.log('player pressed', playerPressed);

    const currentAlphabetElement = document.getElementById('current-alphabet');

    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(expectedAlphabet);

    // keypress comparisn
    // console.log('expected alphabet:', expectedAlphabet, 'player pressed:', playerPressed);

    // check match or not 
    if (playerPressed === expectedAlphabet) {
        // console.log('You get a point');


        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);





        // update your score
        // 1.get current score
        // let currentScoreElement = document.getElementById('current-score');
        // let currentScoreText = currentScoreElement.innerText;
        // let currentScore = parseInt(currentScoreText);
        // console.log(currentScore);


        // // 2. increase the score by 1
        // let newScore = currentScore + 1;

        // // 3.show the updated score
        // currentScoreElement.innerText = newScore;

        // start a new rount
        continueGame();
        removeBackgroundColorById(expectedAlphabet);
    } else {
        // console.log('you lost a life');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;

        setTextElementValueById('current-life', updatedLife);


        if (updatedLife === 0) {
            gameOver();
        }

        // step-1: get the current life number
        // let currentLifeElement = document.getElementById('current-life');
        // let currentLifeText = currentLifeElement.innerText;
        // let currentLife = parseInt(currentLifeText);

        // step-2: reduce the life count
        // let newLife = currentLife - 1;

        // step-3: display the updated life count 
        // currentLifeElement.innerText = newLife;
    }
}




function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    // console.log('Your random alphabet', alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play() {
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}


function gameOver() {
    console.log("Hey stop. You're out of the game!");

    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    // 1.get the final score
    const lastScore = getTextElementValueById('current-score');

    setTextElementValueById('last-score', lastScore);


    // clear the last selected alphabet highlight.
    const currentAlphabet = getElementTextById('current-alphabet');
    console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
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
