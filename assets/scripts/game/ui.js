'use strict'

const store = require('../store')
$('.row').show()
$('.im2').hide()
$('.im1').hide()

const informationX = function(){
  let textX=$('#info').text("X turn")
  textX.show()
}
const informationO = function(){
  let textO=$('#info').text("O turn")
  textO.show()
}


const xWin = function(x_win){
const xtext= $('.show-X').attr("value",x_win)
  xtext.show()
  console.log("X is winning: "+ x_win)

}

const oWin = function(o_win){
  const otext= $('.show-O').attr("value",o_win)
    otext.show()
    console.log("O is winning: "+ o_win)
}

const drawWin = function(draw){
  const dtext= $('.show-D').attr("value",draw)
    dtext.show()
    console.log("Draw: "+ draw)
}


const text1=$('h2').text("Start")
const restartGameOn = function(){
  $('.im2').hide()
  $('.im1').hide()
  // const text1=$('h2').text("Restart")
  text1.show()
}

const restartGameOff = function(){
  $('.im2').hide()
  $('.im1').hide()
  text1.hide()

}

const createGameSuccess = function(data) {
  store.game = data.game
}

// const resetGame = function(){
//   $('.im2').hide()
//   $('.im1').hide()
//   // const text1=$('h2').text("Restart")
//   // text1.show()
// }

module.exports = {
  xWin,
  oWin,
  drawWin,
  restartGameOn,
  restartGameOff,
  // resetGame,
  informationX,
  informationO,
  createGameSuccess
}
