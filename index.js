// Code your solutions in this file

const cards = ["Lisa", "Kaitlin", "Jan"];

function writeCards(names, event) {
  let cardlist = [];
  for (let i = 0; i < names.length; i++) {
    cardlist.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return cardlist;
}

a = writeCards(cards, "surprise");
console.log(a);

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number -= 1;
  }
}

countDown(10);
