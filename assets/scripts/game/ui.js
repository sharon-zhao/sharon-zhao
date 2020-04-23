'use strict'

const store = require('../store')
$('.row').show()
$('.im2').hide()
$('.im1').hide()


const gamePlayOn = function(data){
  $('#message').text('X Win')
  $('#message').removeClass()
  $('#message').addClass('Success')
  // create a variable to hold all the books:
 console.log(`gameSuccess ran. Data is: ${data}`)
}

const gamePlayOff = function(){

}


module.exports = {
  gamePlayOn,
  gamePlayOff
}
