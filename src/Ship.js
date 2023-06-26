
export function createShip(size) {
    return {
        size,
        hits: 0,
        sunk: false,

        shipHit() {
            this.hits++
        },

        isSunk() {
            if (this.size == this.hits) {
                this.sunk = true;
            }
            return this.sunk;
        }
    };
}

