'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

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
}




module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
