import gameboard from "./Gameboard";

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
        autoPlace(...ships) {

        }
    }
}

export default player;