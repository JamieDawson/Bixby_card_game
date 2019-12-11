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

  // for (var i = 0; i < cards.length; i++) {
  //     all.card_text.push({
  //      card_text: sentences[i]
  //   })
  // }



// for (var i = 0; i < cards.length; i++) {
// var all = {   
//    card_pics: {
//      url: cards[i]
//    }
//   }
// }


  return all
}
