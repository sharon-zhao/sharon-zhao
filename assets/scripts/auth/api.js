'use strict'
const config = require('../config')
const store = require('../store')

const signUp = function(data){
  return $.ajax({
   url:config.apiUrl + '/sign-up/',
   method: 'POST',
     data
     //OR data
  })
}

const signIn = function(data){
  return $.ajax({
   url:config.apiUrl + '/sign-in/',
   method: 'POST',
     data
     //OR data
  })
}

const changePassword = function(data){
  console.log(store.user)
  return $.ajax({
   url:config.apiUrl + '/change-password/',
   method: 'PATCH',
     data,
     headers:{
       Authorization:'Token token=' + store.user.token
     }
     //OR data
  })
}

const signOut = function(data){
  console.log(store.user)
  return $.ajax({
   url:config.apiUrl + '/sign-out/',
   method: 'DELETE',
     data,
     headers:{
       Authorization:'Token token=' + store.user.token
     }
     //OR data
  })
}
module.exports = {
 signUp,
 signIn,
 changePassword,
 signOut
}
