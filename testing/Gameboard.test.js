import gameboard from "../src/Gameboard";
import { createShip } from "../src/Ship";

test('gameboard grid contains array as expected', () => {
    const board = gameboard();
    expect(Array.isArray(board.grid)).toBe(true);
})

//receiveAttack Method:
describe('receiveAttack function', () => {
        const board = gameboard();
        const destroyer = createShip(2);
        board.grid[1].occupied = destroyer;
//occupied position
    test('receiveAttack registers a hit when space occupied', () => {

        board.receiveAttack(1);
        expect(board.grid[1].occupied).toBeTruthy();
        expect(destroyer.hits == 1);
    });

//unoccupied position
    test('receieveAttack miss', () => {
        expect(board.receiveAttack(0)).toBe(true);
        expect(board.grid[0].occupied).toBeFalsy();
        expect(board.grid[0].alreadyHit == true)
    });

//already hit
    test('return false without effects if space already hit', () => {
        // (board.grid[1] already hit)
        expect(board.receiveAttack(1)).toBe(false);
        expect(destroyer.hits).toBe(1);
    });
});


//Game over:
describe('checkAllSunk method', () => {
    const board = gameboard();
    const testShip = createShip(1);
    board.grid[0].occupied = testShip;
    test('game ongoing - there exist unhit, occupied spaces', () => {
        console.log(board.grid)
        expect(board.grid[0].alreadyHit).toBe(false);
        expect(board.grid[0].occupied).toBeTruthy();
        expect(board.checkAllSunk()).toBe(false);
    })
    test('end game - all occupied spaces hit', () => {
        board.receiveAttack(0);
        expect(board.checkAllSunk()).toBe(true);
    })
})

// place ship
describe('placeShip method', () => {
    const board = gameboard();
    const testShip = createShip(4);
    test('ships placed correctly onto space/s', () => {
        board.placeShip(testShip, 1, 2, 3);
        expect(board.grid[1].occupied).toBeTruthy();
        expect(board.grid[2].occupied).toBeTruthy();
        expect(board.grid[3].occupied).toBeTruthy();
    })
})