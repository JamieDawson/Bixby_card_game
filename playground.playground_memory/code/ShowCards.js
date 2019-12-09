var console = require('console')

module.exports.function = function showCards () {

  var cards = [
    "images/7H.png",
    "images/9C.png"
  ]




for (var i = 0; i < cards.length; i++) {
var all = {   
   card_pics: {
     url: cards[i]
   }
  }
  console.log(cards[i])
}


  return all
}
