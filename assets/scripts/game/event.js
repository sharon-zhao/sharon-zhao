'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const events = require('../auth/event')

let turn = 1
let x_win = 0
let o_win = 0
let draw = 0
const onGame = function(event){
  const image1=$(event.target).children(".im1")
  const image2=$(event.target).children(".im2")
  const text1=$('h2').text("Restart")
  text1.hide()
  if (turn == 1 ){
   image1.show()
   turn = 0
 } else {
  image2.show()
  turn = 1
 }

}

let gameBoard = [[0,0,0],[0,0,0],[0,0,0]]

const switchPlayer = function(event){

 if (turn ==1 && $(event.target).attr('id') == 1){
   gameBoard[0][0]=1 } else if(turn == 0 && $(event.target).attr('id') == 1)
   {gameBoard[0][0]=2}

 if(turn == 1 && $(event.target).attr('id') == 2){
   gameBoard[0][1] = 1} else if(turn == 0 && $(event.target).attr('id') == 2)
   {gameBoard[0][1]=2 }

 if(turn == 1 && $(event.target).attr('id') == 3){
   gameBoard[0][2] = 1} else if(turn == 0 && $(event.target).attr('id') == 3)
   {gameBoard[0][2]=2}

 if(turn == 1 && $(event.target).attr('id') == 4){
   gameBoard[1][0] = 1} else if(turn == 0 && $(event.target).attr('id') == 4)
   {gameBoard[1][0]=2}


 if(turn == 1 && $(event.target).attr('id') == 5){
   gameBoard[1][1] = 1} else if(turn == 0 && $(event.target).attr('id') == 5)
   {gameBoard[1][1]=2}

 if(turn == 1 && $(event.target).attr('id') == 6){
   gameBoard[1][2] = 1} else if(turn == 0 && $(event.target).attr('id') == 6)
   {gameBoard[1][2]=2}

 if(turn == 1 && $(event.target).attr('id') == 7){
   gameBoard[2][0] = 1} else if(turn == 0 && $(event.target).attr('id') == 7)
   {gameBoard[2][0]=2}

 if(turn == 1 && $(event.target).attr('id') == 8){
   gameBoard[2][1] = 1} else if(turn == 0 && $(event.target).attr('id') == 8)
   {gameBoard[2][1]=2}

 if(turn == 1 && $(event.target).attr('id') == 9){
   gameBoard[2][2] = 1} else if(turn == 0 && $(event.target).attr('id') == 9)
   {gameBoard[2][2]=2}

if (gameBoard[0][0]==1 && gameBoard[0][1]==1 && gameBoard[0][2]==1 ||
  gameBoard[1][0]==1 && gameBoard[1][1]==1 && gameBoard[1][2]==1 ||
  gameBoard[2][0]==1 && gameBoard[2][1]==1 && gameBoard[2][2]==1 ||
  gameBoard[0][0]==1 && gameBoard[1][0]==1 && gameBoard[2][0]==1 ||
  gameBoard[0][1]==1 && gameBoard[1][1]==1 && gameBoard[2][1]==1 ||
  gameBoard[0][2]==1 && gameBoard[1][2]==1 && gameBoard[2][2]==1||
  gameBoard[0][0]==1 && gameBoard[1][1]==1 && gameBoard[2][2]==1||
  gameBoard[0][2]==1 && gameBoard[1][1]==1 && gameBoard[2][0]==1) {
  // oWin++
   console.log("O is winning")
   o_win++
   console.log(o_win)

}

else if (gameBoard[0][0]==2 && gameBoard[0][1]==2 && gameBoard[0][2]==2 ||
  gameBoard[1][0]==2 && gameBoard[1][1]==2 && gameBoard[1][2]==2 ||
  gameBoard[2][0]==2 && gameBoard[2][1]==2 && gameBoard[2][2]==2 ||
  gameBoard[0][0]==2 && gameBoard[1][0]==2 && gameBoard[2][0]==2 ||
  gameBoard[0][1]==2 && gameBoard[1][1]==2 && gameBoard[2][1]==2 ||
  gameBoard[0][2]==2 && gameBoard[1][2]==2 && gameBoard[2][2]==2||
  gameBoard[0][0]==2 && gameBoard[1][1]==2 && gameBoard[2][2]==2||
  gameBoard[0][2]==2 && gameBoard[1][1]==2 && gameBoard[2][0]==2){
  // xWin++
    console.log("X is winning")
    x_win++
    console.log(x_win)
$('.board').on('click',function(){$('.show-board').show()})

}
else if (gameBoard[0][0]!=0 && gameBoard[0][1]!=0 && gameBoard[0][2]!=0 &&
    gameBoard[1][0]!=0 && gameBoard[1][1]!=0 && gameBoard[1][2]!=0 && gameBoard[2][0]!=0 &&
    gameBoard[2][1]!=0 &&gameBoard[2][2]!=0 )
    {
      console.log("It is a draw")
      draw++
      console.log(draw)

}
}
const reStart = function(){
  console.log("restart")
  // $('.im2').hide()
  // $('.im1').hide()
  gameBoard = [[0,0,0],[0,0,0],[0,0,0]]
ui.restartGameOn()
turn = 1

event.preventDefault()
const form = event.target
const formData = getFormFields(form)
console.log(formData)
api.playGame(formData)
 .then(ui.restartGameOn)
 .catch(ui.restartGameOff)
}

const quitGame = function() {
  console.log("quit")
  x_win = 0
  o_win = 0
  draw = 0
  gameBoard = [[0,0,0],[0,0,0],[0,0,0]]
  ui.restartGameOn()
  turn = 1
}



module.exports = {
  onGame,
  switchPlayer,
  reStart,
  quitGame
}
