import player from "../src/player";
import { createShip } from "../src/Ship";


describe('autoMove method', () => {
    let bot = player()
    let bot2 = player()

    test('method returns int between 0-99', () => {
        expect(Array.isArray(bot.ownBoard.grid)).toBe(true);
        let [place, tried] = bot.autoMove(bot2.ownBoard)
        expect(place).toBeGreaterThanOrEqual(0);
        expect(place).toBeLessThan(100);
    })
    
    //indicative but not conclusive...
    //1% chance of false negative
    test('ensure method keeps trying until it finds a legal move', () => {
        bot2.ownBoard.grid
        for (let i = 0; i < 99; i++) {
            bot2.ownBoard.receiveAttack(i);
        };

        let [move, attemptedMoves] = bot.autoMove(bot2.ownBoard);
        
        expect(attemptedMoves.length).toBeGreaterThan(1);
    })
})

// automatic placement of ships
// pass in two ships of size 2 and 5 resp.
// check bot's owngrid has 7 occupied spaces.
// legality of those spaces determined elsewhere, via helper
// function 'isLegalPlace'

//placeShip exists as gameboard method...

describe.only('autoPlace method', () => {
    let bot = player()

    test('correctly updates board', () => {
        let tanker = createShip(5);
        let recon = createShip(2);
    
        bot.autoPlace(tanker, recon);
        expect(bot.ownBoard.grid.filter(space => space.occupied)).toHaveLength(7)
    })
})