import { createShip } from "../src/Ship";

test('isSunk returns false when (obj).sunk = false', () => {
    expect(createShip(2).isSunk()).toBe(false);
})

test('shipHit method correctly increments hits property', () => {
    const ship = createShip(2);
    ship.shipHit();
    expect(ship.hits).toBe(1);
})

test("ship of size '2' returns isSunk == true when hit twice", () => {
    const ship = createShip(2);
    ship.shipHit();
    ship.shipHit();
    expect(ship.isSunk()).toBe(true);
});