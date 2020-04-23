'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')


let turn = 1

const onGame = function(event){
  const image1=$(event.target).children(".im1")
  const image2=$(event.target).children(".im2")
  const text1=$('h2').text("Restart")
  text1.hide()
  if (turn ==1 ){
   image1.show()
   turn = 0
 } else{
  image2.show()
  turn = 1
 }



}
let gameBoard = [[0,0,0],
                   [0,0,0],
                   [0,0,0]
                 ]
const switchPlayer = function(event){

const ima1 = $(".im1")
const ima2 = $(".im2")

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

let xWin = 0
let oWin = 0
let draw = 0

if (gameBoard[0][0]==1 && gameBoard[0][1]==1 && gameBoard[0][2]==1 ||
  gameBoard[1][0]==1 && gameBoard[1][1]==1 && gameBoard[1][2]==1 ||
  gameBoard[2][0]==1 && gameBoard[2][1]==1 && gameBoard[2][2]==1 ||
  gameBoard[0][0]==1 && gameBoard[1][0]==1 && gameBoard[2][0]==1 ||
  gameBoard[0][1]==1 && gameBoard[1][1]==1 && gameBoard[2][1]==1 ||
  gameBoard[0][2]==1 && gameBoard[1][2]==1 && gameBoard[2][2]==1||
  gameBoard[0][0]==1 && gameBoard[1][1]==1 && gameBoard[2][2]==1||
  gameBoard[0][2]==1 && gameBoard[1][1]==1 && gameBoard[2][0]==1){
    return oWin++
    console.log('oWin')
  }

  else if (gameBoard[0][0]==2 && gameBoard[0][1]==2 && gameBoard[0][2]==2 ||
    gameBoard[1][0]==2 && gameBoard[1][1]==2 && gameBoard[1][2]==2 ||
    gameBoard[2][0]==2 && gameBoard[2][1]==2 && gameBoard[2][2]==2 ||
    gameBoard[0][0]==2 && gameBoard[1][0]==2 && gameBoard[2][0]==2 ||
    gameBoard[0][1]==2 && gameBoard[1][1]==2 && gameBoard[2][1]==2 ||
    gameBoard[0][2]==2 && gameBoard[1][2]==2 && gameBoard[2][2]==2||
    gameBoard[0][0]==2 && gameBoard[1][1]==2 && gameBoard[2][2]==2||
    gameBoard[0][2]==2 && gameBoard[1][1]==2 && gameBoard[2][0]==2){
      return xWin++
      console.log(xWin)
    } else if (gameBoard[0][0]!=0 && gameBoard[0][1]!=0 && gameBoard[0][2]!=0 &&
    gameBoard[1][0]!=0 && gameBoard[1][1]!=0 && gameBoard[1][2]!=0 && gameBoard[2][0]!=0 &&
    gameBoard[2][1]!=0 &&gameBoard[2][2]!=0 )
    { return draw++
      console.log(draw)}

  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.playGame(formData)
   .then(ui.gamePlayOn)
   .catch(ui.gamePlayOff)

}

const reStart = function(){
  console.log("restart")
  // $('.im2').hide()
  // $('.im1').hide()
  gameBoard = [[0,0,0],
                     [0,0,0],
                     [0,0,0]
                   ]
ui.restartGameOn()
turn = 1


  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.restartGame(formData)
   .then(ui.restartGameOn)
   .catch(ui.restartGameOff)
}

module.exports = {
  onGame,
  switchPlayer,
  reStart
}
