'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const events = require('../game/event')
const uigame = require('../game/ui')
const apigame = require('../game/api')


const onSignUp = function(event){
  //Prevent the page from refresh
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.signUp(formData)
   .then(ui.signUpSuccess)
   .catch(ui.signUpFailure)
}

const onSignIn = function(event){
  //Prevent the page from refresh

  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.signIn(formData)
   .then(ui.signInSuccess)
   .catch(ui.signInFailure)
   console.log(event)

}

const onChangePassword = function(event){
  //Prevent the page from refresh
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.changePassword(formData)
   .then(ui.changePasswordSuccess)
   .catch(ui.changePasswordFailure)
}

const onSignOut = function(event){
  //Prevent the page from refresh
  event.preventDefault()
  api.signOut()
   .then(ui.signOutSuccess)
   .catch(ui.signOurFailure)
  events.quitGame()

}




module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
