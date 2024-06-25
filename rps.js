let player1Hand = null;
let player2Hand = null;

// Function to play a round of Rock, Paper, Scissors
function playRound(player1, player2) {
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    function determineWinner(hand1, hand2) {
        const winningCombos = {
            'rock': 'scissors',
            'scissors': 'paper',
            'paper': 'rock'
        };

        if (hand1 === hand2) {
            return null; // It's a tie if both hands are the same
        } else if (winningCombos[hand1] === hand2) {
            return player1; // Player 1 wins
        } else {
            return player2; // Player 2 wins
        }
    }

    const winner = determineWinner(hand1, hand2);

    if (winner === null) {
        console.log(`${player1.identifier} played ${hand1}, ${player2.identifier} played ${hand2}. It's a tie.`);
    } else {
        console.log(`${player1.identifier} played ${hand1}, ${player2.identifier} played ${hand2}. ${winner.name} wins.`);
    }

    return winner;
}

// Function to play a game until one player wins a specified number of rounds
function playGame(player1, player2, playUntil) {
    let player1Wins = 0;
    let player2Wins = 0;

    // Set player names in the DOM
    document.getElementById('player1-name').textContent = player1.name;
    document.getElementById('player2-name').textContent = player2.name;

    while (player1Wins < playUntil && player2Wins < playUntil) {
        if (player1Hand === null || player2Hand === null) {
            document.getElementById('result').textContent = 'Both players must choose a hand.';
            return;
        }

        const winner = playRound(player1, player2);
        if (winner === player1) {
            player1Wins++;
            animateScore('player1-score');
        } else if (winner === player2) {
            player2Wins++;
            animateScore('player2-score');
        }

        // Update scores in the DOM
        document.getElementById('player1-score').textContent = player1Wins;
        document.getElementById('player2-score').textContent = player2Wins;
    }

    const gameWinner = player1Wins === playUntil ? player1 : player2;
    console.log(`${gameWinner.name} wins the game!`);
    document.getElementById('result').textContent = `${gameWinner.name} wins the game!`;
    return gameWinner;
}

// Function to animate score updates
function animateScore(scoreId) {
    const scoreElement = document.getElementById(scoreId);
    scoreElement.classList.add('highlight');
    setTimeout(() => {
        scoreElement.classList.remove('highlight');
    }, 500);
}

// Function to reset the game
function resetGame() {
    document.getElementById('player1-score').textContent = 0;
    document.getElementById('player2-score').textContent = 0;
    document.getElementById('result').textContent = '';
    document.getElementById('player1-chosen-hand').textContent = '';
    document.getElementById('player2-chosen-hand').textContent = '';
    player1Hand = null;
    player2Hand = null;
}

// Add event listener for the reset button
document.getElementById('reset').addEventListener('click', resetGame);

// Add event listener for the play game button
document.getElementById('play-game').addEventListener('click', () => {
    const player1Name = document.getElementById('player1-name-input').value;
    const player2Name = document.getElementById('player2-name-input').value;

    const player1 = {
        name: player1Name,
        identifier: 'Player 1',
        getHand: function() {
            return player1Hand;
        }
    };

    const player2 = {
        name: player2Name,
        identifier: 'Player 2',
        getHand: function() {
            return player2Hand;
        }
    };

    playGame(player1, player2, 3);
});

// Add event listeners for hand choice buttons
document.querySelectorAll('.hand-choice').forEach(button => {
    button.addEventListener('click', () => {
        const player = button.getAttribute('data-player');
        const hand = button.getAttribute('data-hand');
        const handIcons = {
            'rock': '<i class="fas fa-hand-rock"></i>',
            'paper': '<i class="fas fa-hand-paper"></i>',
            'scissors': '<i class="fas fa-hand-scissors"></i>'
        };

        if (player === '1') {
            player1Hand = hand;
            document.getElementById('player1-chosen-hand').innerHTML = handIcons[hand];
        } else if (player === '2') {
            player2Hand = hand;
            document.getElementById('player2-chosen-hand').innerHTML = handIcons[hand];
        }

        document.getElementById('result').textContent = `Player ${player} chose ${hand}`;
    });
});







/* Define a hands array with the values 'rock', 'paper', and 'scissors';
const hands = ['rock' , 'paper', 'scissors'];
Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3
Define two objects for two players. Each player has name and getHand() properties.
Define a function called playRound() that
Takes two player objects as arguments
Gets hands from each
Determines the winner
Logs the hands played and name of the winner.
If its a tie, log the hands played and "it's a tie".
Returns the winner object (null if no winner) */

/* Part 2 

    Define a function called playGame() that takes arguments player1, player2, and playUntil.
Play rounds until one of the players wins playUntil hands
When one player has won enough games, return the winning player object
Play a game to 3 wins
Define a function called playTournament()
Take 4 players and playUntil as arguments
Play a game between the first two players, and the second two players
Play a game between the winners of the first round.
Announce the tournament winner's name "[name] is the world champion"; */