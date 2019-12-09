var console = require('console')

module.exports.function = function showCards () {

  var cards = [
    "images/7H.png",
    "images/9C.png"
  ]

  var all = {
    card_pics: []
  }
  
  for (var i = 0; i < cards.length; i++) {
    all.card_pics.push({
      url: cards[i]
    })
  }



// for (var i = 0; i < cards.length; i++) {
// var all = {   
//    card_pics: {
//      url: cards[i]
//    }
//   }
// }


  return all
}
