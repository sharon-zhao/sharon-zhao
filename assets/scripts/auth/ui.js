'use strict'

const store = require('../store')

const signUpSuccess = function (data){

   $('#message').text('Signed up Successfully')
   $('#message').removeClass()
   $('#message').addClass('Success')
   // create a variable to hold all the books:
  console.log(`signUpSuccess ran. Data is: ${data}`)
   // loop through the data and create html for each book:
  // $('form').triger('reset')
}
const signUpFailure = function (error){

   $('#message').text('Signed up failed')
   $('#message').removeClass()
   $('#message').addClass('failure')
   // create a variable to hold all the books:
  console.log(`signUpFailure ran. error is: ${error}`)
   // loop through the data and create html for each book:
  // $('form').triger('reset')
}

const signInSuccess = function (data){

   $('#message').text('Signed in Successfully')
   $('#message').removeClass()
   $('#message').addClass('Success')
   // create a variable to hold all the books:
   console.log(`signInSuccess ran. Data is: ${data}`)
  //create a key on the store object,hold the user object inside
   store.user = data.user
   $('#authenticated').show()
   $('#unauthenticated').hide()
   // loop through the data and create html for each book:
   // $('form').triger('reset')
}
const signInFailure = function (error){

   $('#message').text('Signed in failed')
   $('#message').removeClass()
   $('#message').addClass('failure')
   // create a variable to hold all the books:
  console.log(`signInFailure ran. error is: ${error}`)
   // loop through the data and create html for each book:
    // $('form').triger('reset')
}
const changePasswordSuccess = function (data){

   $('#message').text('changed password in Successfully')
   $('#message').removeClass()
   $('#message').addClass('Success')
   // create a variable to hold all the books:
   console.log(`changePasswordSuccess ran. Data is:`, data)
  //create a key on the store object,hold the user object inside
  $('#authenticated').hide()
  $('#unauthenticated').show()
  $('form').trigger('reset')
   // loop through the data and create html for each book:
   // $('form').triger('reset')
}
const changePasswordFailure = function (error){

   $('#message').text('change Password failed')
   $('#message').removeClass()
   $('#message').addClass('failure')
   // create a variable to hold all the books:
  console.log(`changePasswordFailure ran. error is:`,error)
   // loop through the data and create html for each book:
    $('form').triger('reset')
}

const signOutSuccess = function (data){

   $('#message').text('sign out in Successfully')
   $('#message').removeClass()
   $('#message').addClass('Success')
   // create a variable to hold all the books:
   console.log(`signOutSuccess`)
   store.user = null
   $('#authenticated').hide()
   $('#unauthenticated').show()
  //create a key on the store object,hold the user object inside
  $('form').trigger('reset')
   // loop through the data and create html for each book:
   // $('form').triger('reset')
}
const signOutFailure = function (error){

   $('#message').text('sign out failed')
   $('#message').removeClass()
   $('#message').addClass('failure')
   // create a variable to hold all the books:
  console.log(`signOutFailure ran. error is:`,error)
   // loop through the data and create html for each book:
    $('form').triger('reset')
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
