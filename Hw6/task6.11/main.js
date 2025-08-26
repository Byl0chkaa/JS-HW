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

console.log(cards().reduce((acc, card) => {
    if (card.cardSuit === 'diamond') {
        acc.diamonds.push(card);
    }
    if (card.cardSuit === 'spade') {
        acc.spades.push(card);
    }
    if (card.cardSuit === 'heart') {
        acc.hearts.push(card);
    }
    if (card.cardSuit === 'clubs') {
        acc.clubs.push(card);
    }
    return (acc)

}, {spades: [], diamonds: [], hearts: [], clubs: []}));