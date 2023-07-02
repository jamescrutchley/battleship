import { isLegalPlacement } from "./helpers";
import player from "./player";
import { restart } from "./game";


let DOMBotGrid = document.querySelector('#botGrid');
let DOMPlayerGrid = document.querySelector('#playerGrid');


export function renderGame(bot, player) {

    //delete all existing cells:


    //render 'hits' on both boards
    //render player occupied positions
    //render enemy ships once sunk


    let DOMBotGrid = document.querySelector('#botGrid');
    let DOMPlayerGrid = document.querySelector('#playerGrid');

    shake(DOMPlayerGrid, DOMBotGrid);

    const allChildElements = document.querySelectorAll('.cell');

    allChildElements.forEach((element) => {
        element.remove();
      });


    let botCount = 0;
    let playerCount = 0;

    for (let cell of bot.ownBoard.grid) {
        let cellDiv = document.createElement('div');
        cellDiv.classList.add('cell', botCount)
        cellDiv.setAttribute('data-id', botCount + 100);
        

        botCount++

        if (cell.occupied) {
            cellDiv.classList.add('occupied');
        };

        if (cell.alreadyHit) {
            cellDiv.classList.add('alreadyHit')
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

        if (cell.alreadyHit) {
            cellDiv.classList.add('alreadyHit')
        };

        DOMPlayerGrid.append(cellDiv);
    }
}

// function for ship placement - user.
// users can hover with mouse over board and click to place ship
// ( mobile users ?)
// if a valid position is selected the ship will snap into place
// once the fleet is placed, placement functionality is disabled and
    // the board will re-render via the callback. 
export function placeShips(fleet, grid, callback) {
    let fleetRemaining = fleet;
    let DOMPlayerGrid = document.querySelector('#playerGrid');
  
    let currentShip = fleetRemaining[0];
    let selectedSpaces = [];
    let selectedElements = [];
    const childElements = DOMPlayerGrid.querySelectorAll('div');

    childElements.forEach((element) => element.classList.add('clickable'))
  
    function handleCellClick(event) {
      if (selectedSpaces.length < 1) {
        return;
      }
  
      if (isLegalPlacement(grid, selectedSpaces)) {
        grid.placeShip(fleetRemaining.shift(), ...selectedSpaces);
        selectedElements.forEach((element) => element.classList.add('temp-occupied'));
      }
  
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
  
  //provides visual cues for player attacks
  export function placeAttack(bot, callback) {

    console.log('place attack function called')

    let selected;
    let DOMBotGrid = document.querySelector('#botGrid');
    let botCells = document.querySelectorAll('#botGrid .cell');

    botCells.forEach((cell) => {
        if (!cell.classList.contains('alreadyHit')) {
          cell.classList.add('clickable');
        }
      });
      
      
    function handleReceiveAttack() {
        if (bot.ownBoard.receiveAttack(selected)) {
            detachListeners();
            callback()
        } else {
            //
        }
    }

    function handleCellMouseOver(event) {
        botCells.forEach((element) => element.classList.remove('hovered'));
    
        selected = Number(event.target.getAttribute('data-id') - 100)
    }

    function attachListeners() {
        DOMBotGrid.addEventListener('mouseover', handleCellMouseOver)
        DOMBotGrid.addEventListener('click', handleReceiveAttack)    
    }

    function detachListeners() {
        DOMBotGrid.removeEventListener('mouseover', handleCellMouseOver)
        DOMBotGrid.removeEventListener('click', handleReceiveAttack)    
    }

    try {
        detachListeners();
    } catch {
        console.log('catch detach')
        //
    }
    attachListeners();

    return {
        detachListeners: detachListeners
    }
    
  }



  
  export function triggerRestart() {
    let statusBox = document.querySelector('.status');
    let playAgain = document.querySelector('#playAgain');
    playAgain.style.display = 'none';
    while (statusBox.firstChild) {
        statusBox.removeChild(statusBox.firstChild);
      }

    //restart();
      location.reload()
  }

  // should call restart from game. This module should simply return true when event is triggered.

  export function renderGameOver(winner) {
    let statusMsg = document.querySelector('.gameoverMsg');
    let restart = document.querySelector('#playAgain button');
    function handlePlayAgainClick() {
        triggerRestart()
    };
    restart.removeEventListener('click', handlePlayAgainClick);

    
    statusMsg.textContent = `Game Over.\n ${winner} won.`.toUpperCase()

    restart.style.display = 'block';
    statusMsg.style.display = 'block';

    restart.addEventListener('click', handlePlayAgainClick)
  }


  //to indicate what's happening in game.
  export function renderStatus(who, what){
    let msg = `\n ${who} ${what}.`
    let latestActionMsg = document.querySelector('.latestAction');
    latestActionMsg.textContent = msg + latestActionMsg.textContent;
  }



  //For fun.
  function shake(...elements) {
    elements.forEach((element) => element.classList.remove('shake'));
    elements.forEach((element) => element.classList.add('shake'));

    setTimeout(() => {
        elements.forEach((element) => element.classList.remove('shake'));
      }, 200);
  };



  //bandaid 
  export function disablePlay() {
    console.log('disable play');
    try {
        DOMBotGrid.removeEventListener('mouseover', handleCellMouseOver)
        DOMBotGrid.removeEventListener('click', handleReceiveAttack)
    } catch {
        //
    }
  }