import gameboard from "./Gameboard";
import { getLegalPlace } from "./helpers";

function player(ownBoard = gameboard()) {
    return {
        ownBoard,
    
        autoMove(board) {
            let moved = false;
            let randomMove = Math.floor(Math.random() * 100);
            let attemptedMoves = [];

            while (!moved) {
                if (board.receiveAttack(randomMove)) {
                    moved = true;
                } else {
                    attemptedMoves.push(randomMove);
                    randomMove = Math.floor(Math.random() * 100);
                }
            }
            
            // returning randomMove could be useful for dom
            return [randomMove, attemptedMoves];
            
        },
        //for bots only...
        //players will use gameboard object's 'placeShip method'
        autoPlace(...ships) {
            for (let ship of ships) {
                let pending = true;
                let coords;

                while (pending) {
                    coords = getLegalPlace(ship.size);
                    let flag = false; // Flag to track if space occupied
                
                    for (let coord of coords) {
                        if (this.ownBoard.grid[coord].occupied) {  
                            flag = true; // Set the flag to true if condition is satisfied
                            break; // Exit the loop early
                        }
                    }
                
                    if (flag) {
                        continue; 
                    } else {
                        pending = false;
                    }
            }
            this.ownBoard.placeShip(ship, ...coords);
        }
    }
}
}

export default player;