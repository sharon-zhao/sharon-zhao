'use strict'

const store = require('../store')
$('.row').show()
$('.im2').hide()
$('.im1').hide()

const gamePlayOn = function(data){
const otext= $('h2').text('O is winning:'+oWin)
  otext.show()
  text1.hide()
  console.log("O is winning:"+ oWin)
  // create a variable to hold all the books:
 console.log(`gamePlayOn ran. Data is: ${data}`)
}

const gamePlayOff = function(){
  $('h2').text('Game play failed')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // create a variable to hold all the books:
 // console.log(`gameFail ran. error is: ${error}`)
}

const restartGameOn = function(){
  $('.im2').hide()
  $('.im1').hide()
  const text1=$('h2').text("Restart")
  text1.show()


}

const restartGameOff = function(){

}

module.exports = {
  gamePlayOn,
  gamePlayOff,
  restartGameOn
}
