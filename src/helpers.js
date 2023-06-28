

// takes in an integer n
// generates n 'adjoining' spaces
// eg. 2, 3, 4 (horizontal) || 3, 13, 23 (vertical)

export function getLegalPlace(shipSize) {
    let horizontal = Math.random() > 0.5;

    let range = horizontal ? 
        (99-shipSize) - 0 + 1 :
        (99-shipSize*10) - 0 + 1
    let random = Math.floor(Math.random() * range)
    let boatStart = 0 + random;
    let result = [boatStart]


    if (horizontal) {
        for (let i = 0; i < shipSize - 1; i++) {
            result.push(++boatStart)
        }
    } else {
        for (let i = 0; i < shipSize - 1; i++) {
            result.push(boatStart+=10)
        }
    }

    return result;
}


export function isLegalPlacement(...coords) {
    return true;
}