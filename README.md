# Tic-tac-toe Project
## Technologies used:
-- html
-- CSS(scss)
-- javascript
-- jquery
-- ajax
-- json
-- cURL

## Planning
set prototype html => write javascript logic, to make each click work
=>modify bugs => make the page prety(CSS) => set api, connect with server

## As a user:
- I'd like to join in/out and change my password easily, and don't need to repeat log in every games
- I'd like to view the result, if possible I want some rewards like start or flowers
- I hope there is not error during the game
## Wireframes
- https://user-images.githubusercontent.com/62820094/81132939-1c9c0800-8f1e-11ea-98d2-60a42642fbc2.jpeg
- https://user-images.githubusercontent.com/62820094/81132943-1efe6200-8f1e-11ea-8a00-d768f8485ebd.jpeg
## Story about process
Write the basic function is not very difficult, but bug free is a big challenge.
--the first challenge is how to select the element I want, the tutor give me instruction to fix this problem. After I can select target element all my click event worked.

--second, how to stop click after one player win. In the beginning, I suppose this function should be the some thing like event.stop for instance:
event.preventDefault()
event.stopPropagation()
but they all did not work, so I consulted my tutor, they told me it should be the logic to do so, such as make a if condition. I tried this method it worked, but all my game function need this condition, I struggled in how to make them all work together, this part really cost a lot of time, the best thing was I fixed them all and make it bug free.

--the last thing is api. Acctually, I am not quite understand the principle of api, so I searched a lot of documents to read, and realized what it was finally. I used console.log() to try lots of possible format, then I got the right way.

All these process cheer my up, I have confidence to face more challenges. A soft engineer will always face the problem he/she cannot solve, the searching ability is a key to support the engineer to be a eligible one.

## Unsolved Problems
- Show users the rewards, it should be a pop up picture
