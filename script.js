//memory data

let framesCell = {
    ceLL1: '', ceLL2: '', ceLL3: '',
    ceLL4: '', ceLL5: '', ceLL6: '',
    ceLL7: '', ceLL8: '', ceLL9: ''
}

let playerTurn = '';
let warning = '';
let playing = false;

reset();
//Events

document.querySelector('.resetGame').addEventListener('click', reset);

document.querySelectorAll('.border').forEach(eventBorderClick => {
    eventBorderClick.addEventListener('click', borderClick)
});
//Functions

function borderClick(event) {
    let itemCell = event.target.getAttribute('data-item');
    if (playing && framesCell[itemCell] === '') {
        framesCell[itemCell] = playerTurn;
        renderFramesCell();
        togglePlayer();

    }
}

function reset() {
    warning = '';
    //player-turn
    let randomNumb = Math.floor(Math.random() * 2);
    playerTurn = randomNumb === 0 ? 'x' : 'o';

    for (let i in framesCell) {
        framesCell[i] = '';
    }

    playing = true;

    //reder run
    renderFramesCell();
    renderInformations();

}

function renderFramesCell() {
    for (let i in framesCell) {
        console.log("ITEM :", i);
        let itemCell = document.querySelector(`div[data-item=${i}]`);
        itemCell.innerHTML = framesCell[i];
    }
    checkGame();
}


function renderInformations() {
    document.querySelector('.turn').innerHTML = playerTurn;
    document.querySelector('.result').innerHTML = warning;
}

function togglePlayer() {
    playerTurn = playerTurn === 'x' ? 'o' : 'x';
    renderInformations();
}

function checkGame() {
    if (checkWinnerfor('x')) {
        warning = 'The "x" Winner!'
        playing = false;
    } else if (checkWinnerfor('o')) {
        warning = 'The "o" Winner!'
        playing = false;
    } else if (isFull()) {
        warning = 'Not Winner'
        playing = false;
    }

}

function checkWinnerfor(playerwinner) {
    let possibilities = [
        'ceLL1,ceLL2,ceLL3',
        'ceLL4,ceLL5,ceLL6',
        'ceLL7,ceLL8,ceLL9',

        'ceLL1,ceLL4,ceLL7',
        'ceLL2,ceLL5,ceLL8',
        'ceLL3,ceLL6,ceLL9',

        'ceLL1,ceLL5,ceLL9',
        'ceLL3,ceLL5,ceLL6'


    ];
    for (let win in possibilities) {
        let possibilitiesArray = possibilities[win].split(',');//cell1 cell2 celll3
        let hasWon = possibilitiesArray.every(option => framesCell[option] === playerwinner);
        if (hasWon) {
            return true;
        }
    }
    return false;
}


function isFull() {
    for (let i in framesCell) {
        if (framesCell[i] === '') {
            return false;
        }
    }
    return true;
}