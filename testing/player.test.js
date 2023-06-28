import player from "../src/player";


describe('autoplace method', () => {
    let bot = player()
    let bot2 = player()

    test('method returns int between 0-99', () => {
        expect(Array.isArray(bot.ownBoard.grid)).toBe(true);
        let [place, tried] = bot.autoPlace(bot2.ownBoard)
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
