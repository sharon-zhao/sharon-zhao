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
  '', '', '', '', '', '', '', '', ''
]

//players choose X or O
const choosePlayer = function(event){
  let player = $(event.target).attr('id')
  if (gameOver){
    if (player === "x" ) {
     turn = 1
     ui.informationX()

  } else if(player === "o") {
     turn = 0
     ui.informationO()

  }
 }
}

//each turn play game
const switchPlayer= function(event){
  const image1=$(event.target).children(".im1")
  const image2=$(event.target).children(".im2")
  api.createGame()
  const text1=$('h2').text("Start")
  text1.hide()

  let clickResult = $(event.target).attr('id')
  let number = gameBoard[parseInt(clickResult) - 1]

  if (gameOver === false) {
    if (number === 1){
     image1.show()
     ui.informationO()
   } else if(number === 2) {
     image2.show()
     ui.informationX()
   }
  }
    else {
      return
  }
  checkWinner()

}
//check who is winner
const checkWinner = function(){
  if (!gameOver) {

   if (gameBoard[0]===1 && gameBoard[1]===1 && gameBoard[2]===1 ||
       gameBoard[3]===1 && gameBoard[4]===1 && gameBoard[5]===1 ||
       gameBoard[6]===1 && gameBoard[7]===1 && gameBoard[8]===1 ||
       gameBoard[0]===1 && gameBoard[3]===1 && gameBoard[6]===1 ||
       gameBoard[1]===1 && gameBoard[4]===1 && gameBoard[7]===1 ||
       gameBoard[2]===1 && gameBoard[5]===1 && gameBoard[8]===1||
       gameBoard[0]===1 && gameBoard[4]===1 && gameBoard[8]===1||
       gameBoard[2]===1 && gameBoard[4]===1 && gameBoard[6]===1) {

      x_win++
      gameOver = true
      ui.xWin(x_win)
      }

     else if (gameBoard[0]===2 && gameBoard[1]===2 && gameBoard[2]===2 ||
              gameBoard[3]===2 && gameBoard[4]===2 && gameBoard[5]===2 ||
              gameBoard[6]===2 && gameBoard[7]===2 && gameBoard[8]===2 ||
              gameBoard[0]===2 && gameBoard[3]===2 && gameBoard[6]===2 ||
              gameBoard[1]===2 && gameBoard[4]===2 && gameBoard[7]===2 ||
              gameBoard[2]===2 && gameBoard[5]===2 && gameBoard[8]===2 ||
              gameBoard[0]===2 && gameBoard[4]===2 && gameBoard[8]===2 ||
              gameBoard[2]===2 && gameBoard[4]===2 && gameBoard[6]===2){

       o_win++
       gameOver = true
       ui.oWin(o_win)
      }
     else if (gameBoard[0]!=='' && gameBoard[1]!=='' && gameBoard[2]!=='' &&
              gameBoard[3]!=='' && gameBoard[4]!=='' && gameBoard[5]!=='' &&
              gameBoard[6]!=='' && gameBoard[7]!=='' &&gameBoard[8]!=='' )
         {
       draw++
       gameOver = true
       ui.drawWin(draw)
     }
   }
}

//main game logic, assign value to gameBoard and determine who is winner
const onGame = function(event){
   let clickResult = $(event.target).attr('id')

 // fill the board
   // gameBoard[parseInt(clickResult)-1]

  if (clickResult !== undefined && !gameOver) {
    console.log("GameBoard number: " + gameBoard[parseInt(clickResult) - 1])
    console.log("click result: " + clickResult)
    console.log("turn: " +turn)
    console.log(gameBoard)
    if (gameBoard[parseInt(clickResult)-1] === '' && turn === 1) {
      console.log('test')
      gameBoard[parseInt(clickResult)-1] = 1
      turn = 0
    } else if (gameBoard[parseInt(clickResult)-1] === '' && turn === 0) {
      gameBoard[parseInt(clickResult)-1] = 2
      turn = 1

  }
  }

}

//set calculated score to 0
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

const resetGameBoard = function(){
  gameBoard = [
  '', '', '',
  '', '', '',
  '', '', ''
]
  gameOver = false
}
const reStart = function(){
  resetGameBoard()
  ui.restartGameOn()
// turn = 1
  resetGameBoard()
}

const quitGame = function() {
  resetGameBoard()
  ui.restartGameOff()
  resetScore()
  turn = 1

}

module.exports = {
  choosePlayer,
  onGame,
  switchPlayer,
  reStart,
  quitGame,
  resetScore
}
