'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/event')
const gameEvents = require('./game/event')
// const gameSave = require('./game/api')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit',authEvents.onSignUp)
  $('#sign-in').on('submit',authEvents.onSignIn)
  $('#change-password').on('submit',authEvents.onChangePassword)
  $('#sign-out').on('submit',authEvents.onSignOut)
  $('#score').on('click',gameEvents.create_game)
  $('.board').on('click',gameEvents.onGame)
  $('.board').on('click',gameEvents.switchPlayer)
  $('#start').on('click',gameEvents.reStart)
  $('.selector').on('click',gameEvents.choosePlayer)
})
