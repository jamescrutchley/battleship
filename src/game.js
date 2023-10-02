import { createShip } from "./Ship";
import player from "./player";
import { placeShips, renderGame, placeAttack, renderGameOver, renderStatus, disablePlay } from "./render";



let recon, recon2, botFleet, playerFleet, bot, you;


const toggleModal = () => {
    const currentDisplay = window.getComputedStyle(modal).getPropertyValue('display');

    if (currentDisplay === 'none' || currentDisplay === '') {
      modal.style.display = 'flex';
    } else {
      modal.style.display = 'none';
    }
}

const closeButton = document.querySelector('.close');
const modalTrigger = document.querySelector('.info button');
const modal = document.querySelector('.modal');
modalTrigger.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal)



export function game() {
    let gameoverFlag = false;

    instantiateObjects();



function initial() {

    bot.autoPlace(...botFleet)

    renderGame(bot, you);

    renderStatus('Player,', 'place your battleships')

    placeShips(playerFleet, you.ownBoard, () => {
        console.log('done');
        renderGame(bot, you);
        renderStatus('You', 'placed your ships')
        if (gameLoop()) {
            return;
        }
    })

}


let turn = 'b'

 async function gameLoop() {
    while (!gameoverFlag) {
        if (turn == 'p') {
            await playerMove();
            turn = 'b'
        } else if (turn == 'b') {
            await botMove();
            turn = 'p'
        } else {
            console.log('gameover')
            gameoverFlag = true;
            break;
        }
    }

}

function playerMove() {
    console.log('player attack');

    return new Promise((resolve) => {
      placeAttack(bot, () => {
        renderGame(bot, you);
        if (bot.ownBoard.checkAllSunk()) {
          gameoverFlag = true;
          gameOver('you');
          resolve(false);
        } else {
          renderStatus('You', 'attacked');
        }
        resolve(true);
      });
    });
}



//
function botMove() {


    return new Promise((resolve) => {

        setTimeout(() => {
        bot.autoMove(you.ownBoard);
        renderGame(bot, you);
        if (you.ownBoard.checkAllSunk()) {
            gameoverFlag = true;
            gameOver('bot');
            console.log('botmove resolved false')
            resolve(false);
        } else {
            renderStatus('Bot', 'attacked');
            console.log('botmove resolved true')
        }
        resolve(true);

        }, 200);
    });
}


function gameOver(display) {
    renderGameOver(display);
}


initial();
}








export function instantiateObjects() {

    bot = player();
    you = player();

    let [recon, cruiser, destroyer, tanker] = [
        createShip(2),
        createShip(3),
        createShip(4),
        createShip(5)
      ];
    
      let [recon2, cruiser2, destroyer2, tanker2] = [
        createShip(2),
        createShip(3),
        createShip(4),
        createShip(5)
      ];
      
    botFleet = [recon, cruiser, destroyer, tanker]
    playerFleet = [recon2, cruiser2, destroyer2, tanker2]
}

export function removeObjects() {
    recon = null
    recon2 = null
    botFleet = null
    playerFleet = null
    bot = null
    you = null
}
