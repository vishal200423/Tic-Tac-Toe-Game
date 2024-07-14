let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function placeMark(index) {
    if (!gameActive || board[index] !== '') return;

    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;

    if (checkWin()) {
        document.getElementById('status').innerText = `Player ${currentPlayer} wins!`;
        gameActive = false;
    } else if (checkDraw()) {
        document.getElementById('status').innerText = 'It\'s a draw!';
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
    }
}

function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return board[index] === currentPlayer;
        });
    });
}

function checkDraw() {
    return board.every(cell => cell !== '');
}

function resetBoard() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;

    let cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }
}
