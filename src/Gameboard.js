function generateGrid() {
    const squares = [];

    for (let i = 0; i < 100; i++) {
        const square = {
            hit: false,
            occupied: false,
        };
        squares.push(square);
    };

    return squares;
}

function gameboard() {
    return {
        grid: generateGrid(),


        receieveAttack(coordinate) {
            
        },

        placeShip(...coordinates) {}

    }
}

export default gameboard;
