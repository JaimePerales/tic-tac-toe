// Creates gameboard using module patern
const gameboard = (() => {
    const board = [...Array(3)].map(() => Array(3));

    return {
        board
    };
})();

// Factory to create player objects
const playerFactory = (name, symbol) => ({ name, symbol });

// Handles all display needs
const displayController = (() => {
    const body = document.querySelector('body');

    // Creates Game Title text
    const createGameTitleText = () => {
        const gameTitleTextDiv = document.createElement('div');
        gameTitleTextDiv.classList.add('game-title-text');

        const gameTitleText = document.createElement('p');
        gameTitleText.textContent = 'TIC-TAC-TOE';

        gameTitleTextDiv.appendChild(gameTitleText);
        body.appendChild(gameTitleTextDiv);
    }

    const createGameBoard = () => {
        const gameboardDiv = document.createElement('div');
        gameboardDiv.classList.add('gameboard-div');

        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < 3; i++) {
            const gameRow = document.createElement('div');
            gameRow.classList.add(`row-${i}`);
            // eslint-disable-next-line no-plusplus
            for (let j = 0; j < 3; j++) {
                const gameCell = document.createElement('div');
                gameCell.classList.add(`gamecell-${j}-${i}`);
                gameCell.addEventListener('click', () => {

                });
                gameRow.appendChild(gameCell);
            }
            gameboardDiv.appendChild(gameRow);
        }
        body.appendChild(gameboardDiv);
    }

    // Runs all setup methods
    const initializeView = () => {
        createGameTitleText();
        createGameBoard();
    }
    return {
        initializeView
    };
})();

displayController.initializeView();