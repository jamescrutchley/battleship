### Battleship

A player vs bot implementation of the classic strategy game, built with Vanilla JS + Webpack.

## Implementation: 

The logic of the game is built around a handful of simple objects: Ship, Gameboard, Player, and so on. Player and Bot both recieve 'Gameboards' which are able to receive attacks, place ships, and report on their current status. Gameplay proceeds via a loop in which methods are called when appropriate.

Rendering is largely built on top of each player's 'Gameboard', with visual elements like 'cannonballs' and 'sunk ships' reflecting its current state.

## Limitations / to-do:

- The 'bot' isn't clever, merely targeting random positions. A more sophisticated mechanism here would make the game more challenging. 
- 'Vertical' ship placements aren't available for the player.
- Player can cheat by inspecting elements, as classes reflect aspects of the game's inner logic. This could be fixed in various ways.
