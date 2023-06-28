import { isLegalPlacement } from "./helpers";
import player from "./player";



export function renderGame(bot, player) {

    //delete all existing cells:


    //render 'hits' on both boards
    //render player occupied positions
    //render enemy ships once sunk

    console.log('rendering...')

    let DOMBotGrid = document.querySelector('#botGrid');
    let DOMPlayerGrid = document.querySelector('#playerGrid');

    const allChildElements = document.querySelectorAll('.cell');

    allChildElements.forEach((element) => {
        console.log(element);
        element.remove();
      });


    let botCount = 0;
    let playerCount = 0;

    for (let cell of bot.ownBoard.grid) {
        let cellDiv = document.createElement('div');
        cellDiv.classList.add('cell', botCount)

        botCount++

        if (cell.occupied) {
            cellDiv.classList.add('occupied');
        };
        DOMBotGrid.append(cellDiv);
    }

    for (let cell of player.ownBoard.grid) {
        let cellDiv = document.createElement('div');
        cellDiv.classList.add('cell', playerCount)
        cellDiv.setAttribute('data-id', playerCount)

        playerCount++

        if (cell.occupied) {
            cellDiv.classList.add('occupied');
        };
        DOMPlayerGrid.append(cellDiv);
    }
}

//function that allows player to visually place ships on their grid.
// export function placeShips(fleet, grid, cb) {

//     console.log(grid);
//     let fleetRemaining = fleet;
//     let DOMPlayerGrid = document.querySelector('#playerGrid');


//         let currentShip = fleetRemaining[0];
//         console.log(currentShip)
//         let selectedSpaces = [];
//         let selected;
//         let selectedElements = [];
//         const childElements = DOMPlayerGrid.querySelectorAll('div');


//         DOMPlayerGrid.addEventListener('click', (event) => {
//             if (selectedSpaces.length < 1) {
//                 return;
//             };
//             if (isLegalPlacement(selectedSpaces)) {
//                 grid.placeShip(fleetRemaining.shift(), ...selectedSpaces);
//                 selectedElements.forEach((element) => element.classList.add('occupied'));
//             }

//             console.log(fleetRemaining)
//             if (fleetRemaining.length > 0) {
//                 currentShip = fleetRemaining[0]
//             } else {
//                 //FUNCTION SHOULD END AND RETURN HERE
//                 cb();
//             }
//         })


  
//         DOMPlayerGrid.addEventListener('mouseover', (event) => {
            
//                 childElements.forEach((element) => element.classList.remove('hovered'))

//             selectedSpaces = []
//             selectedElements = []
//             selected = Number(event.target.getAttribute('data-id'))
  
//             selectedSpaces.push(selected);
  
//             for (let j = 0; j < currentShip.size -1; j++) {
//               selectedSpaces.push(selectedSpaces[j]+1)
//             }
  
//             for (let i of selectedSpaces) {
//                 selectedElements.push(document.querySelector(`[data-id='${i}']`))
//             };

          
//             try {
//                 selectedElements.forEach((element) => {
//                     element.classList.add('hovered');
//                 });
//             } catch {
//                 console.log('off grid')
//             }
//           });

// }



export function placeShips(fleet, grid, callback) {
    console.log(grid);
    let fleetRemaining = fleet;
    let DOMPlayerGrid = document.querySelector('#playerGrid');
  
    let currentShip = fleetRemaining[0];
    console.log(currentShip);
    let selectedSpaces = [];
    let selectedElements = [];
    const childElements = DOMPlayerGrid.querySelectorAll('div');
  
    function handleCellClick(event) {
      if (selectedSpaces.length < 1) {
        return;
      }
  
      if (isLegalPlacement(selectedSpaces)) {
        grid.placeShip(fleetRemaining.shift(), ...selectedSpaces);
        selectedElements.forEach((element) => element.classList.add('temp-occupied'));
      }
  
      console.log(fleetRemaining);
      if (fleetRemaining.length > 0) {
        currentShip = fleetRemaining[0];
      } else {
        // Fleet placement is complete, remove event listeners and invoke the callback function
        removeEventListeners();
        callback(true);
      }
    }
  
    function handleCellMouseOver(event) {
      childElements.forEach((element) => element.classList.remove('hovered'));
  
      selectedSpaces = [];
      selectedElements = [];
      const selected = Number(event.target.getAttribute('data-id'));
  
      selectedSpaces.push(selected);
  
      for (let j = 0; j < currentShip.size - 1; j++) {
        selectedSpaces.push(selectedSpaces[j] + 1);
      }
  
      for (let i of selectedSpaces) {
        selectedElements.push(document.querySelector(`[data-id='${i}']`));
      }
  
      try {
        selectedElements.forEach((element) => {
          element.classList.add('hovered');
        });
      } catch {
        console.log('off grid');
      }
    }
  
    function removeEventListeners() {
      DOMPlayerGrid.removeEventListener('mouseover', handleCellMouseOver);
      DOMPlayerGrid.removeEventListener('click', handleCellClick);
    }
  
    DOMPlayerGrid.addEventListener('mouseover', handleCellMouseOver);
    DOMPlayerGrid.addEventListener('click', handleCellClick);
  }
  
