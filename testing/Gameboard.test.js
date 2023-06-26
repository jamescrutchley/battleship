import gameboard from "../src/Gameboard";
import { createShip } from "../src/Ship";

test('gameboard grid contains array as expected', () => {
    const board = gameboard();
    expect(Array.isArray(board.grid)).toBe(true);
})

//receiveAttack Method:

describe('receieveAttack function', () => {

    beforeEach(() => {
        const board = gameboard();
        const destroyer = createShip(2);
        board.grid[1].occupied = destroyer;
    })
//occupied position
    test('receieveAttack registers a hit when space occupied', () => {
        board.receieveAttack(1);
        expect(board.grid[1].occupied).toBe(true);
        expect(destroyer.hits == 1);
    }),

//unoccupied position
    test('receieveAttack miss', () => {
        board.receieveAttack(0);
        expect(board.grid[0].hit == true)
    })

})