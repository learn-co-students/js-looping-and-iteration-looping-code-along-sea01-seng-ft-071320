// // Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts;
// }

// wrapGifts(gifts);

 const cards = ["Ada", "Brendan", "Ali"]

function writeCards(cards, event) {
let messages = []
for (let i = 0; i < cards.length; i++) {
    messages.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
    }
    return messages
}

writeCards(cards, birthday);

function countDown() {
    let countdown = 10
    while (countdown > -1) {
        console.log(countdown--);
    }
}

countDown(10);