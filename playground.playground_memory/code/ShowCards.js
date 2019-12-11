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
    "images/2C.png", //11
    "images/5C.png", //12
    "images/9H.png", //13
    "images/JC.png", //14
    "images/QC.png", //15
    "images/3H.png", //16
    "images/3D.png", //17
    "images/AC.png", //18
    "images/3C.png", //19
    "images/6C.png", //20
    "images/AD.png", //21
    "images/4C.png", //22
    "images/10D.png", //23
    "images/10H.png", //24
    "images/2D.png", //25
    "images/2H.png", //26
    "images/8C.png", //27
    "images/6S.png", //28
    "images/JD.png", //29
    "images/KC.png", //30
    "images/2S.png", //31
    "images/AS.png", //32
    "images/9D.png", //33
    "images/5S.png", //34
    "images/7C.png", //35
    "images/4D.png", //36
    "images/8D.png", //37
    "images/4S.png", //38
    "images/QH.png", //39
    "images/KH.png", //40
    "images/3S.png", //41
    "images/5H.png", //42
    "images/9S.png", //43
    "images/QD.png", //44
    "images/8H.png", //45
    "images/8S.png", //46
    "images/7D.png", //47
    "images/7S.png", //48
    "images/JH.png", //49
    "images/KS.png", //50
    "images/10S.png", //51
    "images/6D.png" //52
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
    "Card 10", 
    "Card 11",
    "Card 12",
    "Card 13",
    "Card 14",
    "Card 15",
    "Card 16",
    "Card 17",
    "Card 18",
    "Card 19",
    "Card 20",
    "Card 21",
    "Card 22",
    "Card 23",
    "Card 24",
    "Card 25",
    "Card 26",
    "Card 27",
    "Card 28",
    "Card 29",
    "Card 30",
    "Card 31",
    "Card 32",
    "Card 33",
    "Card 34",
    "Card 35",
    "Card 36",
    "Card 37",
    "Card 38",
    "Card 39",
    "Card 40",
    "Card 41",
    "Card 42",
    "Card 43",
    "Card 44",
    "Card 45",
    "Card 46",
    "Card 47",
    "Card 48",
    "Card 49",
    "Card 50",
    "Card 51",
    "Card 52",
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
