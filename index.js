// Code your solutions in this file
const cards = ["Ada", "Brendan", "Ali"]
function writeCards(cards, event) {
  let messages = []
  for (let i = 0; i < cards.length; i++) {
      messages.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
      }
      return messages
  }
  writeCards(cards, birthday);


  function countDown(number){
    let i = 0 
    while (i < number) {
      console.log(number)
      number -= 1
    }

    console.log(number)

  }