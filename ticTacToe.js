// Creates gameboard using module patern
const gameboard = (() => {
    const board = [...Array(3)].map(() => Array(3));

    return {
        board
    };
})();