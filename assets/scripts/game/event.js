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

let gameBoard = [
  '', '', '', '', '', '', '', '', 'test'
]
const choosePlayer = function(event){
  // console.log($(event.target).attr('id'))
  // let games = api.createGame().done()

  let player = $(event.target).attr('id')
  if (player === "x") {
    turn = 1
    ui.informationX()
  } else if(player === "o") {
    turn = 0
    ui.informationO()
  }
}

const switchPlayer= function(event){
  const image1=$(event.target).children(".im1")
  const image2=$(event.target).children(".im2")
  api.createGame()

  const index = $(event.target).data('id')
  console.log(index)
  const text1=$('h2').text("Restart")
  text1.hide()

  if (gameOver === false) {
    if (turn === 1 ){
     image1.show()
     ui.informationO()
     turn = 0
   } else {
    image2.show()
    ui.informationX()
    turn = 1
   }
  }
  else {
    return
  }

}



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
    gameOver = true
    ui.xWin(x_win)
}
else if (gameBoard[0]!=='' && gameBoard[1]!=='' && gameBoard[2]!=='' &&
         gameBoard[3]!=='' && gameBoard[4]!=='' && gameBoard[5]!=='' && gameBoard[6]!=='' &&
         gameBoard[7]!=='' &&gameBoard[8]!=='' )
    {
      draw++
      gameOver = true
      ui.drawWin(draw)
    }

    }

}

const resetScore = function(){
  x_win = 0
  o_win = 0
  draw = 0
  console.log("x_win" + x_win)
  ui.xWin(x_win)
  ui.oWin(o_win)
  ui.drawWin(draw)
  reStart()
  ui.informationX()
}

const reStart = function(){
  gameBoard = [
  '', '', '',
  '', '', '',
  '', '', ''
]
ui.restartGameOn()
// turn = 1
gameOver = false

}

const quitGame = function() {

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
