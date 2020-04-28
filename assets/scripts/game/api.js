'use strict'
const config = require('../config')
const store = require('../store')

const getGame = function(){
  return $.ajax({
    url:config.apiUrl + '/games',
    method: 'GET',
    headers:{
      Authorization:'Token token=' + store.user.token
    },
  })
}

const createGame = function() {
  return $.ajax({
    url:config.apiUrl + '/games',
    method: 'POST',
    data: {},
    headers:{
      Authorization:'Token token=' + store.user.token
    },
  })
}

const updateGame = function(index, value){
  return $.ajax({
    url:config.apiUrl + '/games' + store.game.id,
    method: 'PATCH',
    data: {
      "game": {
         "cell": {
         "index": index,
         "value": value
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
  getGame,
  createGame,
  updateGame

}
