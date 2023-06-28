import { getLegalPlace } from "../src/helpers";

describe('getLegalPlace helper function', () => {
    let suite = [1, 2, 3, 4, 5, 6, 7];

    for (let int of suite) {

        test('returns appropriate number of values', () => {
            
                expect(getLegalPlace(int)).toHaveLength(int)
        })
    }
})
