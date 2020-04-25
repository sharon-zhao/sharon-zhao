'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const events = require('../auth/event')

let turn = 1
let x_win = 0
let o_win = 0
let draw = 0
let gameOver = false
const choosePlayer = function(event){
  console.log($(event.target).attr('id'))
  if ($(event.target).attr('id') === "x"){
    turn = 1
  } else if($(event.target).attr('id') === "o"){
    turn = 0}
}

const switchPlayer= function(event){
  const image1=$(event.target).children(".im1")
  const image2=$(event.target).children(".im2")
  const text1=$('h2').text("Restart")
  text1.hide()

  if (gameOver === false) {
    if (turn === 1 ){
     image1.show()
     turn = 0
   } else {
    image2.show()
    turn = 1
   }
  }
  else {
    return
  }

}

let gameBoard = [
  '', '', '', '', '', '', '', '', ''
]


const onGame = function(event){
  let clickResult = $(event.target).attr('id')

 // fill the board
 if (turn === 1 && clickResult === '1'){
   gameBoard[0]= 1 }
 else if(turn === 0 && clickResult === '1'){
   gameBoard[0]=2
 }
 else if(turn === 1 && clickResult === '2'){
   gameBoard[1] = 1}
 else if(turn === 0 && clickResult === '2')
   {gameBoard[1]=2 }
 else if(turn === 1 && clickResult === '3'){
   gameBoard[2] = 1}
 else if(turn === 0 && clickResult === '3')
   {gameBoard[2]=2}
 else if(turn === 1 && clickResult === '4'){
   gameBoard[3] = 1}
 else if(turn === 0 && clickResult === '4')
   {gameBoard[3]=2}
 else if(turn === 1 && clickResult === '5'){
   gameBoard[4] = 1}
 else if(turn === 0 && clickResult === '5')
   {gameBoard[4]=2}
 else if(turn === 1 && clickResult === '6'){
   gameBoard[5]= 1}
 else if(turn === 0 && clickResult === '6')
   {gameBoard[5]=2}
 else if(turn === 1 && clickResult === '7'){
   gameBoard[6]= 1}
 else if(turn === 0 && clickResult === '7')
   {gameBoard[6]=2}
 else if(turn === 1 && clickResult === '8'){
   gameBoard[7]= 1}
 else if(turn === 0 && clickResult === '8')
   {gameBoard[7]=2}
 else if (turn === 1 && clickResult === '9'){
   gameBoard[8]= 1}
 else if(turn === 0 && clickResult === '9')
   {gameBoard[8]=2}

 // check the winner
if (!gameOver) {

if (gameBoard[0]===1 && gameBoard[1]===1 && gameBoard[2]===1 ||
    gameBoard[3]===1 && gameBoard[4]===1 && gameBoard[5]===1 ||
    gameBoard[6]===1 && gameBoard[7]===1 && gameBoard[8]===1 ||
    gameBoard[0]===1 && gameBoard[3]===1 && gameBoard[6]===1 ||
    gameBoard[1]===1 && gameBoard[4]===1 && gameBoard[7]===1 ||
    gameBoard[2]===1 && gameBoard[5]===1 && gameBoard[8]===1||
    gameBoard[0]===1 && gameBoard[4]===1 && gameBoard[8]===1||
    gameBoard[2]===1 && gameBoard[4]===1 && gameBoard[6]===1) {
  // oWin++

   o_win++
   console.log("O is winning "+ o_win)
   gameOver = true
   ui.oWin(o_win)
   }

else if (gameBoard[0]===2 && gameBoard[1]===2 && gameBoard[2]===2 ||
         gameBoard[3]===2 && gameBoard[4]===2 && gameBoard[5]===2 ||
         gameBoard[6]===2 && gameBoard[7]===2 && gameBoard[8]===2 ||
         gameBoard[0]===2 && gameBoard[3]===2 && gameBoard[6]===2 ||
         gameBoard[1]===2 && gameBoard[4]===2 && gameBoard[7]===2 ||
         gameBoard[2]===2 && gameBoard[5]===2 && gameBoard[8]===2 ||
         gameBoard[0]===2 && gameBoard[4]===2 && gameBoard[8]===2 ||
         gameBoard[2]===2 && gameBoard[4]===2 && gameBoard[6]===2){

    x_win++
    console.log("X is winning "+x_win)
    gameOver = true
    ui.xWin(x_win)
}
else if (gameBoard[0]!=='' && gameBoard[1]!=='' && gameBoard[2]!=='' &&
         gameBoard[3]!=='' && gameBoard[4]!=='' && gameBoard[5]!=='' && gameBoard[6]!=='' &&
         gameBoard[7]!=='' &&gameBoard[8]!=='' )
    {
      draw++
      console.log("It is a draw")
      gameOver = true
      ui.drawWin(draw)
    }

    }

}

const resetScore = function(){
  console.log("resetScore")
  // $('.show-X').val("")
  // $('.show-O').val("")
  // $('.show-D').val("")
  x_win = 0
  o_win = 0
  draw = 0
  console.log("x_win" + x_win)
  ui.xWin(x_win)
  ui.oWin(o_win)
  ui.drawWin(draw)
  reStart()
}

const reStart = function(){
  // console.log("restart")
// ui.restartGameOff()
  gameBoard = [
  '', '', '',
  '', '', '',
  '', '', ''
]
ui.restartGameOn()
turn = 1
gameOver = false

}

const quitGame = function() {
  console.log("quit")
  gameBoard = [
  '', '', '',
  '', '', '',
  '', '', ''
]
  ui.restartGameOff()
  resetScore()
  turn = 1
  gameOver=false
}

module.exports = {
  choosePlayer,
  onGame,
  switchPlayer,
  reStart,
  quitGame,
  resetScore
}
