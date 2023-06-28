import gameboard from "./Gameboard";

function player(ownBoard = gameboard()) {
    return {
        ownBoard,
    
        autoPlace(board) {
            let placed = false;
            let randomPlace = Math.floor(Math.random() * 100);
            let placedTried = [];

            while (!placed) {
                if (board.receiveAttack(randomPlace)) {
                    placed = true;
                } else {
                    placedTried.push(randomPlace);
                    randomPlace = Math.floor(Math.random() * 100);
                }
            }
            
            return [randomPlace, placedTried];
            
        },
        autoMove() {

        }
    }
}

export default player;