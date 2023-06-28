import { createShip } from "./Ship";
import player from "./player";
import { placeShips, renderGame } from "./render";

const [recon, cruiser, destroyer, tanker] = [
    createShip(2),
    createShip(3),
    createShip(4),
    createShip(5)
  ];
  
  const botFleet = [recon, cruiser, destroyer, tanker];

  const [recon2, cruiser2, destroyer2, tanker2] = [
    createShip(2),
    createShip(3),
    createShip(4),
    createShip(5)
  ];
  
  const playerFleet = [recon2, cruiser2, destroyer2, tanker2]



export function game() {
    let bot = player();
    let you = player();
    let startGame = false;

    bot.autoPlace(...botFleet)

    renderGame(bot, you);

    placeShips(playerFleet, you.ownBoard, () => {
        console.log('done');
        renderGame(bot, you);
    })


    console.log('now what?')

    //continue...
}




