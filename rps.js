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

    while (player1Wins < playUntil && player2Wins < playUntil) {
        const winner = playRound(player1, player2);
        if (winner === player1) {
            player1Wins++;
        } else if (winner === player2) {
            player2Wins++;
        }
    }

    const gameWinner = player1Wins === playUntil ? player1 : player2;
    console.log(`${gameWinner.name} wins the game!`);
    return gameWinner;
}

// Function to play a tournament with 4 players
function playTournament(players, playUntil) {
    // Semi-final 1
    const semiFinalWinner1 = playGame(players[0], players[1], playUntil);
    
    // Semi-final 2
    const semiFinalWinner2 = playGame(players[2], players[3], playUntil);

    // Final
    const tournamentWinner = playGame(semiFinalWinner1, semiFinalWinner2, playUntil);
    console.log(`${tournamentWinner.name} is the world champion`);
    return tournamentWinner;
}

// Example player objects with getHand method, name property, and identifier
const player1 = {
    name: 'Patrick',
    identifier: 'Player 1',
    getHand: function() {
        const hands = ['rock', 'paper', 'scissors'];
        return hands[Math.floor(Math.random() * hands.length)];
    }
};

const player2 = {
    name: 'Jason',
    identifier: 'Player 2',
    getHand: function() {
        const hands = ['rock', 'paper', 'scissors'];
        return hands[Math.floor(Math.random() * hands.length)];
    }
};

const player3 = {
    name: 'Sarah',
    identifier: 'Player 3',
    getHand: function() {
        const hands = ['rock', 'paper', 'scissors'];
        return hands[Math.floor(Math.random() * hands.length)];
    }
};

const player4 = {
    name: 'Emily',
    identifier: 'Player 4',
    getHand: function() {
        const hands = ['rock', 'paper', 'scissors'];
        return hands[Math.floor(Math.random() * hands.length)];
    }
};

// Play a game to 3 wins
const winner = playGame(player1, player2, 3);

// Play a tournament
const tournamentWinner = playTournament([player1, player2, player3, player4], 3);






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