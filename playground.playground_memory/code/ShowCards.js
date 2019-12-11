var console = require('console')

module.exports.function = function showCards () {

  var cards = [
    "images/7H.png", //1
    "images/9C.png", //2
    "images/10C.png", //3
    "images/JS.png", //4'
    "images/KD.png", //5
    "images/AH.png", //6
    "images/4H.png", //7
    "images/5D.png", //8
    "images/QS.png", //9
    "images/6H.png", //10

  ]

  var sentences = [
    "Card 1",
    "Card 2",
    "Card 3",
    "Card 4",
    "Card 5",
    "Card 6",
    "Card 7",
    "Card 8",
    "Card 9",
    "Card 10" 
  ]


  var all = {
    card_pics: [],
    card_text: []
  }

  
  for (var i = 0; i < cards.length; i++) {
    all.card_pics.push({
      url: cards[i],
      card_text: sentences[i]
    })
  }
  return all
}

/*
ORDER OF CARDS:

7 of Hearts
9 of Clubs
10 of Clubs
Jack of Spades
King of Diamonds
Ace of Hearts
4 of Hearts
5 of Diamonds 
Queen of Spades
6 of Hearts


2 of Clubs
5 of Clubs
9 of Hearts
Jack of Clubs
Queen of Clubs
3 of Hearts
3 of Diamonds
Ace of Clubs
3 of Clubs
6 of Clubs


Ace of Diamonds
4 of Clubs
10 of Diamonds
10 of Hearts
2 of Diamonds
2 of Hearts
8 of Clubs
6 of Spades
Jack of Diamonds
King of Clubs

2 of Spades
Ace of Spades
9 of Diamonds
5 of Spades
7 of Clubs
4 of Diamonds
8 of Diamonds
4 of Spades
Queen of Hearts
King of Hearts

3 of Spades
5 of Hearts
9 of Spades
Queen of Diamonds
8 of Hearts
8 of Spades
7 of Diamonds
7 of Spades
Jack of Hearts
King of Spades
10 of Spades
6 of Diamonds
*/
