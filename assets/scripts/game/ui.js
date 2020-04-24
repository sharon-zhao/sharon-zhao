'use strict'

const store = require('../store')
$('.row').show()
$('.im2').hide()
$('.im1').hide()

const xWin = function(x_win){
const xtext= $('.show-X').attr("value",x_win)
  xtext.show()

  console.log("O is winning:"+ oWin)


}

const oWin = function(o_win){
  const otext= $('.show-O').attr("value",o_win)
    otext.show()

    console.log("O is winning:"+ oWin)
}

const drawWin = function(draw){
  const dtext= $('.show-D').attr("value",draw)
    dtext.show()

    console.log("O is winning:"+ oWin)
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
  xWin,
  oWin,
  drawWin,
  restartGameOn
}
