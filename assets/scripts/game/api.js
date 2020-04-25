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


const getGame = function(){
  return $.ajax({
    url:config.apiUrl + '/games',
    method: 'GET',
    headers:{
      Authorization:'Token token=' + store.user.token
    },
  })
}

const createGame = function(data) {
  return $.ajax({
    url:config.apiUrl + '/games',
    method: 'POST',
    data: {},
    headers:{
      Authorization:'Token token=' + store.user.token
    },
  })
}

const updateGame = function(data){
  return $.ajax({
    url:config.apiUrl + '/games' + store.game.id,
    method: 'PATCH',
    data: {
      "game": {
         "cell": {
         "index": 0,
         "value": "x"
            },
      "over": false
  }
},
    headers:{
      Authorization:'Token token=' + store.user.token
    },
  })
}




module.exports = {
  playGame,
  getGame,
  createGame,

}
