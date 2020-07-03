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
let value = ''
let gameBoard = [
  '', '', '', '', '', '', '', '', ''
]

//create a game
const create_game = function(){
  x_win = 0
  o_win = 0
  draw = 0
  ui.xWin(x_win)
  ui.oWin(o_win)
  ui.drawWin(draw)
  reStart()
  api.getGame()
    .then()
    .catch()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

//players choose X or O
const choosePlayer = function(event){
  let player = $(event.target).attr('id')
  let choose = false
  if (!gameOver && !choose){
    if (player === "x" ) {
     turn = 1
     ui.informationX()
     choose = true
  } else if(player === "o") {
     turn = 0
     ui.informationO()
     choose = true
  }
 }
}

//main game logic, assign value to gameBoard
const onGame = function(event){
   let clickResult = $(event.target).attr('id')

  if (clickResult !== undefined && !gameOver) {
      if (gameBoard[parseInt(clickResult)-1] === '' && turn === 1) {
      gameBoard[parseInt(clickResult)-1] = 1
      value = 'x'
      turn = 0
    } else if (gameBoard[parseInt(clickResult)-1] === '' && turn === 0) {
      gameBoard[parseInt(clickResult)-1] = 2
      value = 'o'
      turn = 1

    }
  }
}

//each turn play game
const switchPlayer= function(event){
  const image1=$(event.target).children(".im1")
  const image2=$(event.target).children(".im2")
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

  let index = parseInt(clickResult)-1
  api.updateGame(index, value)
    .then()
    .catch(ui.updateGameFailure)

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
}

const quitGame = function() {
  x_win = 0
  o_win = 0
  draw = 0
  ui.xWin(x_win)
  ui.oWin(o_win)
  ui.drawWin(draw)
  resetGameBoard()
  ui.restartGameOff()
  turn = 1
}

module.exports = {
  create_game,
  choosePlayer,
  onGame,
  switchPlayer,
  reStart,
  quitGame,
}
