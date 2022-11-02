'use strict';

//
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
const [players1, players2] = game.players;
console.log('1:', players1, players2);
//2
const [gk, ...fedldPlayers] = players1;
console.log('2:', gk, fedldPlayers);
//3
const [allPlayers] = [...players1, ...allPlayers.players2];
console.log('3:', allPlayers);
//4
const players1Final = [...players1, 'T', 'C', 'P'];
console.log('4:', players1Final);
//5
const { team1: team1, x: draw, team2: team2 } = game.odds;
console.log('5:', team1, draw, team2);
//6
const printGoals = function (...playersName) {
  console.log('6:', ...playersName);
};
printGoals(game.scored);
//7

const win = (team1 > draw && team1 > draw) || 'team1';
console.log('7:', win);
