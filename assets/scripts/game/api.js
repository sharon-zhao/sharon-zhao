'use strict'
const config = require('../config')
const store = require('../store')

const playGame = function(data){
  return $.ajax({
   url:config.apiUrl + '/game/',
   method: 'POST',
     data
     //OR data
  })
}


module.exports = {
  playGame
}
