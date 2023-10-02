import { createShip } from "./Ship";

function generateGrid() {
    const squares = [];

    for (let i = 0; i < 100; i++) {
        const square = {
            alreadyHit: false,
            occupied: false,
        };
        squares.push(square);
    };

    return squares;
}

function gameboard() {
    return {
        grid: generateGrid(),

        receiveAttack(coordinate) {
            let square = this.grid[coordinate];
            let status = false;

            // if the square has already been alreadyHit, return:
            if (square.alreadyHit) {
                return status;
            };

            square.alreadyHit = true;

            if (square.occupied) {
                // 'occupied' refers to a ship.
                square.occupied.shipHit()
                if (square.occupied.isSunk()) {
                    //render hook...
                    console.log('a ship has been sunk!')
                }
            }

            status = true;
            return status;

        },

        placeShip(ship, ...coordinates) {
            coordinates.forEach(coord => 
                this.grid[coord].occupied = ship)
        },

        checkAllSunk() {
            //default to gameover - check if ongoing.
            let status = true;
            // 
            for (let item of this.grid) {
                if (item.occupied) {
                    if (item.alreadyHit == false) {
                        status = false;
                    }
                }
            }
            return status;
        }

        // checkShipSunk(fleet) {
        //     console.log('checking')
        //     fleet.forEach(ship => {
        //         console.log(ship)
        //         let thisShip = ship;
        //         const sunk = this.grid.filter(square => square.alreadyHit && square.ship === thisShip)
        //         console.log(sunk);
        //     });
        // }
    }
}

export default gameboard;
