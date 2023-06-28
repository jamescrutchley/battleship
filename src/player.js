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
            

            return [randomMove, attemptedMoves];
            
        },
        autoPlace() {

        }
    }
}

export default player;