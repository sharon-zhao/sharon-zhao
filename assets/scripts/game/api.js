'use strict'
const config = require('../config')
const store = require('../store')

const playGame = function(){
  return $.ajax({
   url:config.apiUrl + '/game',
   method: 'POST',
   headers:{
     Authorization:'Token token=' + store.user.token
   },
    body: ''
  })
}

// const startGame = function () {
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     body: ''
//   })
// }


module.exports = {
  playGame

}
