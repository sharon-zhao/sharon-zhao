'use strict'

const store = require('../store')

$('#game').hide()
$('#authenticated').hide()

const signUpSuccess = function (data){
   $('#message').text('Signed up Successfully')
   $('#message').removeClass()
   $('#message').addClass('Success')
   console.log(`signUpSuccess ran. Data is: ${data}`)
   $('form').trigger('reset')
}
const signUpFailure = function (error){

   $('#message').text('Signed up failed')
   $('#message').removeClass()
   $('#message').addClass('failure')
  console.log(`signUpFailure ran. error is: ${error}`)
   $('form').trigger('reset')
}

const signInSuccess = function (data){

   $('#message').text('Signed in Successfully')
   $('#message').removeClass()
   $('#message').addClass('Success')
   console.log(`signInSuccess ran. Data is: ${data}`)
   store.user = data.user
   $('#authenticated').show()
   $('#unauthenticated').hide()
   $('#game').show()
   $('form').trigger('reset')
}

const signInFailure = function (error){

   $('#message').text('Signed in failed')
   $('#message').removeClass()
   $('#message').addClass('failure')
   console.log(`signInFailure ran. error is: ${error}`)
   $('form').trigger('reset')
}
const changePasswordSuccess = function (data){

   $('#message').text('changed password in Successfully')
   $('#message').removeClass()
   $('#message').addClass('Success')
   console.log(`changePasswordSuccess ran. Data is:`, data)
   $('#authenticated').show()
   $('#unauthenticated').hide()
   $('form').trigger('reset')

}
const changePasswordFailure = function (error){

   $('#message').text('change Password failed')
   $('#message').removeClass()
   $('#message').addClass('failure')
   console.log(`changePasswordFailure ran. error is:`,error)
   $('form').trigger('reset')
}

const signOutSuccess = function (data){
   $('#game').hide()
   $('#message').text('sign out Successfully')
   $('#message').removeClass()
   $('#message').addClass('Success')
   console.log(`signOutSuccess`)
   store.user = null
   $('#authenticated').hide()
   $('#unauthenticated').show()
   $('form').trigger('reset')
}

const signOutFailure = function (error){

   $('#message').text('sign out failed')
   $('#message').removeClass()
   $('#message').addClass('failure')
   console.log(`signOutFailure ran. error is:`,error)
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
