function writeCards(names, event) {
    let cardList = []
    for (let i = 0 ; i < names.length ; i++) {
    cardList.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cardList;
}


function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number -= 1;
    }

}

