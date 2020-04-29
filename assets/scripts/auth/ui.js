'use strict'

const store = require('../store')

$('#start-button').hide()
$('.container').hide()
$('.number').hide()
$('#authenticated').hide()

const signUpSuccess = function (data){
   $('#message').text('Signed up Successfully')
   $('#message').removeClass()
   $('#message').addClass('Success')
   $('form').trigger('reset')

}
const signUpFailure = function (error){

   $('#message').text('Signed up failed')
   $('#message').removeClass()
   $('#message').addClass('failure')
   $('form').trigger('reset')
}

const signInSuccess = function (data){

   $('#message').text('Signed in Successfully')
   $('#message').removeClass()
   $('#message').addClass('Success')
   store.user = data.user
   $('#authenticated').show()
   $('#unauthenticated').hide()
   $('form').trigger('reset')
   $('#start-button').show()

}

const signInFailure = function (error){

   $('#message').text('Signed in failed')
   $('#message').removeClass()
   $('#message').addClass('failure')
   $('form').trigger('reset')
}
const changePasswordSuccess = function (data){

   $('#message').text('changed password in Successfully')
   $('#message').removeClass()
   $('#message').addClass('Success')
   $('#authenticated').show()
   $('#unauthenticated').hide()
   $('form').trigger('reset')

}
const changePasswordFailure = function (error){

   $('#message').text('change Password failed')
   $('#message').removeClass()
   $('#message').addClass('failure')
   $('form').trigger('reset')
}

const signOutSuccess = function (data){
   $('#start-button').hide()
   $('.container').hide()
   $('.number').hide()
   $('#message').text('sign out Successfully')
   $('#message').removeClass()
   $('#message').addClass('Success')
   store.user = null
   $('#authenticated').hide()
   $('#unauthenticated').show()
   $('form').trigger('reset')
}

const signOutFailure = function (error){

   $('#message').text('sign out failed')
   $('#message').removeClass()
   $('#message').addClass('failure')
   // console.log(`signOutFailure ran. error is:`,error)
    // $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure

}
