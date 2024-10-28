document.addEventListener('DOMContentLoaded', function() {
    // Select the game board element with id 'board'
    const gameBoard = document.getElementById('board');
    const squares = gameBoard.querySelectorAll('div');

    const winPatterns =[ 
            [0,1,2], [3,4,5], [6,7,8], // Horizontal
            [0,3,6], [1,4,7], [2,5,8], // Vertical
            [0,4,8], [2,4,6] // Diagonal
        ];
    let currentPlayer = 'X';
    let gameOver = false;

    function checkWin() {
        for (let i = 0; i < winPatterns.length; i++) {
            let pattern = winPatterns[i];
            if (squares[pattern[0]].innerHTML === currentPlayer &&
                squares[pattern[1]].innerHTML === currentPlayer &&
                squares[pattern[2]].innerHTML === currentPlayer) {
                return true;
            }
        }
        return false;
    }

    function checkDraw() {
        for (let i = 0; i < squares.length; i++) {
            if (squares[i].innerHTML === '') {
                return false;
            }
        }
        return true;
    }
    if (gameBoard) {
        // Select all div elements inside the game board
        // Iterate over each div and add the 'square' class
        squares.forEach(function(square) {
            square.classList.add('square');

            square.addEventListener('mouseover', function() {
                if (!gameOver) {
                    this.classList.add('hover');
                }
            });

            square.addEventListener('mouseout', function() {
                if (!gameOver) {
                    this.classList.remove('hover');
                }
            });

            square.addEventListener('click', function() {
                if (!gameOver && square.innerHTML === '') {
                    if (currentPlayer === 'X') {
                        square.classList.add('X');
                        square.innerHTML = 'X';
                        if (checkWin()) {
                            document.getElementById('status').classList.add('you-won');
                            document.getElementById('status').innerHTML = 'Congratulations! ' + currentPlayer + ' is the Winner!';
                            gameOver = true;
                            return; // Stop further execution
                        }
                        currentPlayer = 'O';
                    } else {
                        square.classList.add('O');
                        square.innerHTML = 'O';
                        if (checkWin()) {
                            document.getElementById('status').classList.add('you-won.before');
                            document.getElementById('status').innerHTML = 'Congratulations! ' + currentPlayer + ' is the Winner!';
                            document.getElementById('status').classList.add('you-won.after');
                            gameOver = true;
                            return; // Stop further execution
                        }
                        currentPlayer = 'X';
                    }
                    if (checkDraw()) {
                        document.getElementById('status').innerHTML = 'Draw!';
                        gameOver = true;
                    }
                }
            });
        });

        const restart = document.querySelector('.btn');
        restart.addEventListener('click', function() {
            squares.forEach(function(square) {
                square.innerHTML = '';
                square.classList.remove('X', 'O');
            });
            document.getElementById('status').classList.remove('you-won');
            document.getElementById('status').innerHTML = 'Move your mouse over a square and click to play an X or an O.';
            currentPlayer = 'X';
            gameOver = false;
        });
    }
});