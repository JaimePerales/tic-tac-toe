/* eslint-disable no-param-reassign */
// Creates gameboard using module patern
const gameboard = (() => {
    const board = [...Array(3)].map(() => Array(3));

    const resetBoard = () => {

        gameboard.board = [...Array(3)].map(() => Array(3));;
    }
    return {
        board,
        resetBoard
    };
})();

// Factory to create player objects
const playerFactory = (name, symbol) => ({ name, symbol });

// Handles all game logic
const gameLogicController = (() => {
    const player1 = playerFactory('Player One', 'X');
    const player2 = playerFactory('Player Two', 'O');
    let currentPlayer = player1;

    const toggleTurn = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }

    const getSelectedBoardCell = (gameCellClass) => String(gameCellClass).replace(/\D/g, ' ').replaceAll(/\s/g, '').split('').reverse();


    const playerTurn = (gameCellClass) => {
        const selectedBoardCell = getSelectedBoardCell(gameCellClass);
        gameboard.board[selectedBoardCell[0]][selectedBoardCell[1]] = currentPlayer.symbol;

        return currentPlayer.symbol;
    }

    const checkWin = (gameCellClass) => {
        const selectedBoardCell = getSelectedBoardCell(gameCellClass);

        if (selectedBoardCell[0] === '0' && selectedBoardCell[1] === '0') {

            if (gameboard.board[0][1] === currentPlayer.symbol) {
                if (gameboard.board[0][2] === currentPlayer.symbol) {
                    alert(`Winner ${currentPlayer.name}`);
                }
            } else if (gameboard.board[1][1] === currentPlayer.symbol) {
                if (gameboard.board[2][2] === currentPlayer.symbol) {
                    alert(`Winner ${currentPlayer.name}`);
                }
            } else if (gameboard.board[1][0] === currentPlayer.symbol) {
                if (gameboard.board[2][0] === currentPlayer.symbol) {
                    alert(`Winner ${currentPlayer.name}`);
                }
            }

        } else if (selectedBoardCell[0] === '0' && selectedBoardCell[1] === '2') {

            if (gameboard.board[0][1] === currentPlayer.symbol) {
                if (gameboard.board[0][0] === currentPlayer.symbol) {
                    alert(`Winner ${currentPlayer.name}`);
                }
            } else if (gameboard.board[1][1] === currentPlayer.symbol) {
                if (gameboard.board[2][0] === currentPlayer.symbol) {
                    alert(`Winner ${currentPlayer.name}`);
                }
            } else if (gameboard.board[1][2] === currentPlayer.symbol) {
                if (gameboard.board[2][2] === currentPlayer.symbol) {
                    alert(`Winner ${currentPlayer.name}`);
                }
            }

        } else if (selectedBoardCell[0] === '2' && selectedBoardCell[1] === '0') {

            if (gameboard.board[2][1] === currentPlayer.symbol) {
                if (gameboard.board[2][2] === currentPlayer.symbol) {
                    alert(`Winner ${currentPlayer.name}`);
                }
            } else if (gameboard.board[1][1] === currentPlayer.symbol) {
                if (gameboard.board[0][2] === currentPlayer.symbol) {
                    alert(`Winner ${currentPlayer.name}`);
                }
            } else if (gameboard.board[1][0] === currentPlayer.symbol) {
                if (gameboard.board[0][0] === currentPlayer.symbol) {
                    alert(`Winner ${currentPlayer.name}`);
                }
            }

        } else if (selectedBoardCell[0] === '2' && selectedBoardCell[1] === '2') {

            if (gameboard.board[2][1] === currentPlayer.symbol) {
                if (gameboard.board[2][0] === currentPlayer.symbol) {
                    alert(`Winner ${currentPlayer.name}`);
                }
            } else if (gameboard.board[1][1] === currentPlayer.symbol) {
                if (gameboard.board[0][0] === currentPlayer.symbol) {
                    alert(`Winner ${currentPlayer.name}`);
                }
            } else if (gameboard.board[1][2] === currentPlayer.symbol) {
                if (gameboard.board[0][2] === currentPlayer.symbol) {
                    alert(`Winner ${currentPlayer.name}`);
                }
            }

        } else if (selectedBoardCell[0] === '0' && selectedBoardCell[1] === '1') {

            if (gameboard.board[0][0] === currentPlayer.symbol && gameboard.board[0][2] === currentPlayer.symbol) {
                alert(`Winner ${currentPlayer.name}`);
            } else if (gameboard.board[1][1] === currentPlayer.symbol && gameboard.board[2][1] === currentPlayer.symbol) {
                alert(`Winner ${currentPlayer.name}`);
            }
        } else if (selectedBoardCell[0] === '1' && selectedBoardCell[1] === '0') {

            if (gameboard.board[0][0] === currentPlayer.symbol && gameboard.board[2][0] === currentPlayer.symbol) {
                alert(`Winner ${currentPlayer.name}`);
            } else if (gameboard.board[1][1] === currentPlayer.symbol && gameboard.board[1][2] === currentPlayer.symbol) {
                alert(`Winner ${currentPlayer.name}`);
            }
        } else if (selectedBoardCell[0] === '2' && selectedBoardCell[1] === '1') {

            if (gameboard.board[2][0] === currentPlayer.symbol && gameboard.board[2][2] === currentPlayer.symbol) {
                alert(`Winner ${currentPlayer.name}`);
            } else if (gameboard.board[1][1] === currentPlayer.symbol && gameboard.board[0][1] === currentPlayer.symbol) {
                alert(`Winner ${currentPlayer.name}`);
            }
        } else if (selectedBoardCell[0] === '1' && selectedBoardCell[1] === '2') {

            if (gameboard.board[0][2] === currentPlayer.symbol && gameboard.board[2][2] === currentPlayer.symbol) {
                alert(`Winner ${currentPlayer.name}`);
            } else if (gameboard.board[1][1] === currentPlayer.symbol && gameboard.board[1][0] === currentPlayer.symbol) {
                alert(`Winner ${currentPlayer.name}`);
            }
        } else if (selectedBoardCell[0] === '1' && selectedBoardCell[1] === '1') {
            if (gameboard.board[0][1] === currentPlayer.symbol && gameboard.board[2][1] === currentPlayer.symbol) {
                alert(`Winner ${currentPlayer.name}`);
            } else if (gameboard.board[1][0] === currentPlayer.symbol && gameboard.board[1][2] === currentPlayer.symbol) {
                alert(`Winner ${currentPlayer.name}`);
            } else if (gameboard.board[0][0] === currentPlayer.symbol && gameboard.board[2][2] === currentPlayer.symbol) {
                alert(`Winner ${currentPlayer.name}`);
            } else if (gameboard.board[0][2] === currentPlayer.symbol && gameboard.board[2][0] === currentPlayer.symbol) {
                alert(`Winner ${currentPlayer.name}`);
            }
        }




    }

    return {
        playerTurn,
        checkWin,
        toggleTurn,
    }
})();

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
                gameCell.classList.add(`gamecell-${j}-${i}`, 'cell');
                gameCell.addEventListener('click', () => {
                    if (gameCell.textContent === '') {
                        gameCell.textContent = gameLogicController.playerTurn(gameCell.classList);
                        gameLogicController.checkWin(gameCell.classList);
                        gameLogicController.toggleTurn();
                    }
                });
                gameRow.appendChild(gameCell);
            }
            gameboardDiv.appendChild(gameRow);
        }
        body.appendChild(gameboardDiv);
    }

    const createResetButton = () => {
        const resetButton = document.createElement('button');
        resetButton.textContent = 'Reset';
        resetButton.addEventListener('click', () => {
            const cells = document.querySelectorAll('.cell');
            const cellArray = [...cells];
            cellArray.forEach((item) => { item.textContent = '' });
            gameboard.resetBoard();
        });
        body.appendChild(resetButton);
    }

    // Runs all setup methods
    const initializeView = () => {
        createGameTitleText();
        createGameBoard();
        createResetButton();
    }
    return {
        initializeView
    };
})();

displayController.initializeView();