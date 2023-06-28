import { isLegalMove, isLegalPlace } from "../src/helpers";
import gameboard from "../src/Gameboard";

describe('isLegalMove function', () => {
    let board = gameboard();
    board.grid[0].alreadyHit = true;

    test('returns false when selecting a space already hit', () => {
        expect(isLegalMove(board, 0)).toBe(false);
    });
    test('returns true when selecting a space not yet hit', () => {
        expect(isLegalMove(board, 1)).toBe(true);
    });
})