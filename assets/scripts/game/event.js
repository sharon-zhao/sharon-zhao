'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')


let turn = 1

const onGame = function(event){
  const image1=$(event.target).children(".im1")
  const image2=$(event.target).children(".im2")

  if (turn ==1 ){
   image1.show()
   turn = 0
 } else{
  image2.show()
  turn = 1
 }

 event.preventDefault()
 const form = event.target
 const formData = getFormFields(form)
 console.log(formData)
 api.playGame(formData)
  .then(ui.gamePlayOn)
  .catch(ui.gamePlayOff)
}

const num1=$("#1")
const num2=$("#2")
const num3=$("#3")
const ima1 = $(".im1")
const ima2 = $(".im2")
const onCheck = function(){
  if (num1==image1 && num2==image1 && num3==image1) {
    console.log("X Win")
  }

}

module.exports = {
  onGame,
  onCheck
}
