var console = require('console')

module.exports.function = function showCards () {

  var cards = [
    "images/7H.png",
    "images/9C.png"
  ]

  var sentences = [
    "Card 1",
    "Card 2"
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
