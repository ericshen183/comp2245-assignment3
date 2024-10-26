document.addEventListener('DOMContentLoaded', function() {
    // Select the game board element with id 'board'
    const gameBoard = document.getElementById('board');
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
        [0, 4, 8], [2, 4, 6] // Diagonal
    ];
    
    if (gameBoard) {
        // Select all div elements inside the game board
        const squares = gameBoard.querySelectorAll('div');

        // Iterate over each div and add the 'square' class
        squares.forEach(function(square) {
            square.classList.add('square');
            square.addEventListener('click', function() {
               
            });
            square.addEventListener('mouseover', function() { 
                this.classList.add('hover'); 
            } );

            square.addEventListener('mouseout', function() { 
                this.classList.remove('hover'); 
            } );
        });       
    }
});

