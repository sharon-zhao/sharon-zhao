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


const text1=$('#show_message').text("Start")
const restartGameOn = function(){
  $('.im2').hide()
  $('.im1').hide()

  text1.show()
}

const restartGameOff = function(){
  $('.im2').hide()
  $('.im1').hide()
  text1.hide()

}

const createGameSuccess = function(data) {
  const success = $('#show_message').text("Create Game Success!")
  success.show()
  store.game = data.game
}

const createGameFailure = function(data){
  const fail = $('#show_message').text("Create Game Failed!")
  fail.show()
}

const updateGameFailure = function(data){
  const fail = $('#show_message').text("Update Game Failed!")
  fail.show()
}


module.exports = {
  xWin,
  oWin,
  drawWin,
  restartGameOn,
  restartGameOff,
  informationX,
  informationO,
  createGameSuccess,
  createGameFailure,
  updateGameFailure
}
