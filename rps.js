function playRound(player1, player2) {
  
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    // function to determine the winner based on hands //
    function determineWinner(hand1, hand2) {
        const winningCombos = {
            'rock': 'scissors',
            'scissors': 'paper',
            'paper': 'rock'
        };

        if (hand1 === hand2) {
            return null;
        } else if (winningCombos[hand1] === hand2) {
            return player1; 
        } else {
            return player2; 
        }
    }

    // Determine the winner
    const winner = determineWinner(hand1, hand2);

    // Log the hands played and the result
    if (winner === null) {
        console.log(`Player 1 played ${hand1}, Player 2 played ${hand2}. It's a tie.`);
    } else {
        console.log(`Player 1 played ${hand1}, Player 2 played ${hand2}. ${winner.name} wins.`);
    }

    // Return the winner object, or null if it's a tie
    return winner;
}

// Example player objects with getHand method and name property
const player1 = {
    name: 'Patrick',
    getHand: function() {
        const hands = ['rock', 'paper', 'scissors'];
        return hands[Math.floor(Math.random() * hands.length)];
    }
};

const player2 = {
    name: 'Jason',
    getHand: function() {
        const hands = ['rock', 'paper', 'scissors'];
        return hands[Math.floor(Math.random() * hands.length)];
    }
};

const winner = playRound(player1, player2);







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