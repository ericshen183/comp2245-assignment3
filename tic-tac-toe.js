// tic-tac-toe.js

document.addEventListener('DOMContentLoaded', function() {
    // Select the game board element with id 'board'
    const gameBoard = document.getElementById('board');
    
    if (gameBoard) {
        // Select all div elements inside the game board
        const squares = gameBoard.querySelectorAll('div');

        // Iterate over each div and add the 'square' class
        squares.forEach(function(square) {
            square.classList.add('square');
        });

        console.log('Squares have been styled.');
    } else {
        console.error('Game board element not found.');
    }
});
