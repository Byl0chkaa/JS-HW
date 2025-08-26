function cards() {
    let deck = [];
    let suits = [
        { name: 'spade', color: 'black' },
        { name: 'diamond', color: 'red' },
        { name: 'heart', color: 'red' },
        { name: 'clubs', color: 'black' }
    ];
    let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
    for (const suit of suits) {
        for (const value of values) {
            deck.push({
                cardSuit: suit.name,
                value: value,
                color: suit.color
            });
        }
    }

    return deck;
}

console.log(cards().find(card => card.value === 'ace' && card.color === 'black' && card.cardSuit === 'spade'));
console.log(cards().filter(card => card.value === '6'));
console.log(cards().filter(card => card.color === 'red'));
console.log(cards().filter(card => card.cardSuit === 'diamond'));
console.log(cards().filter(card => card.cardSuit === 'clubs' && card.value >= '9'));

