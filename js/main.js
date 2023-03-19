const els = {
    score: null, 
    answer: null,
    choices: null
};

const words = [
    'JAVASCRIPT', // 0
    'STYLESHEET', // 1
    'LANGUAGE' // 2
];

let choices = [];
let word = '';
let wordMapping = [];
let choicesMapping = [];

const init = () => {
    console.log('>> #init');
    // Attach elements
    els.score = document.querySelector('#score');
    els.answer = document.querySelector('#answer');
    els.choices = document.querySelector('#choices');
    // Choose word
    word = pickWord();
    //console.log('word', word)
    //  -> Create word mapping
    wordMapping = getWordMapping(word);
    //console.log(wordMapping);
    // Generate choices
    choices = generateChoices();
    //console.log(choices);
    //  -> create choices mapping
    choicesMapping = getChoicesMapping(choices);
    //console.log(choicesMapping);
    // Display words
    displayWord(wordMapping);
    // Display choices
    displayChoices(choicesMapping);
    // Display mistakes
    // Listen events
    //  -> mouse events
    //  -> keyboards events

    // Check letter
    //  -> if not in word: add score
    //  -> if in word: display letter
    //  -> endGame
    //      -> if score == max: loseGame
    //      -> if letter are visible: winGame
};

const displayChoices = (choicesMapping) => {

};

const displayWord = (wordMapping) => {
    const wordHtml = wordMapping.map((letterMapping) => {
        if(letterMapping.isVisible === true) {
            return `<li>${letterMapping.letter}</li>`
        } else {
            return `<li>_</li>`;
        };
    });
    els.choices.querySelector('ul').innerHTML = wordHtml.join('');
};

const generateChoices = () => {
    // lettres ASCII caracter table
    const choices = [];
    for(let index = 65; index <= 90; index++) {
        choices.push(String.fromCharCode(index));
    }
    return choices;
};

const getChoicesMapping = (choices) => {
    const choicesMapping = choices.map((letter) => {
        return {
            letter,
            isChosen: false
        };
    });
    return choicesMapping;
};

const getWordMapping = (word) => {
    const wordArr = word.split('');
    console.log('word', word);
    console.log('wordArr', wordArr);
    const wordMapping = wordArr.map((letter) => {
        return {
            letter,
            isVisible: false
        }
    });
    return wordMapping;
};

const pickWord = () => {
    const randomIndex = getRandomInt(0, words.length - 1);
    return words[randomIndex];
};





window.addEventListener('load', () => {
    init();
});


const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};