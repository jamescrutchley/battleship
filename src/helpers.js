

// takes in an integer n
// generates n 'adjoining' spaces
// eg. 2, 3, 4 (horizontal) || 3, 13, 23 (vertical)

function getHorizontal(shipSize) {
    let first = Math.floor(Math.random() * 10)
    let second = Math.floor(Math.random() * (10-shipSize))

    return Number(first.toString() + second.toString())
}

export function getLegalPlace(shipSize) {
    let horizontal = Math.random() > 0.5;

    let range = (99-shipSize*10) - 0 + 1
    let random = Math.floor(Math.random() * range)
    let boatStart = horizontal ? getHorizontal(shipSize) :
        0 + random;
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


// two random numbers - 1 between 0-9, 1 between 0-9-shipsize
// combine string.

export function isLegalPlacement(grid, coords) {

    let status = true
    try {
        for (let coord of coords) {
            if (grid.grid[coord].occupied) {
                status = false
            }
        }
    } catch {
        status = false;
    }

    status = checkLastDigit(coords);

    return status;
}


function checkLastDigit(array) {
    for (let i = 1; i < array.length; i++) {
      const current = array[i];
      const previous = array[i - 1];
      
      if (getLastDigit(current) <= getLastDigit(previous)) {
        return false;
      }
    }
    
    return true;
  }
  
  function getLastDigit(number) {
    return number % 10;
  }
  