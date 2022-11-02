'use strict';

// pyd();
// function pyd() {
//   console.log('py');
// }

// const p = function (a) {
//   return 1 + a;
// };
// p();

// const Arr = (a) => 1 + a;
// console.log(Arr(5));

// const age = (ages) => 1 + ages;
// console.log('age=' + age(5));

// const calcAverage = (S1, S2, S3) => (S1 + S2 + S3) / 3;
// const Dolhins = calcAverage(44, 23, 71);
// const Koalas = calcAverage(65, 54, 490000);

// const checkWinner = (avgDolhins, avgKoalas) => {
//   if (avgDolhins > avgKoalas && avgKoalas * 2 < avgDolhins) {
//     console.log(`avgDolhins is winner~! ${avgDolhins} Vs. ${avgKoalas}`);
//   } else if (avgDolhins === avgKoalas) {
//     console.log(`Both is winner~! ${avgKoalas} Vs. ${avgDolhins}`);
//   } else if (avgKoalas > avgDolhins && avgDolhins * 2 < avgKoalas) {
//     console.log(`avgKoalas is winner~! ${avgKoalas} Vs. ${avgDolhins}`);
//   }
// };

// // checkWinner(Dolhins, Koalas);
// const years = new Array(2, 3);
// //add elements to last
// years.push(4); //[2,3,4]
// //add elements to begin
// years.unshift(1); //[1,2,3,4]
// //Remove elements from last
// years.pop(); //[1,2,3]
// //Remove elements from begin
// years.shift(); //[2,3]
// //get elements index
// years.indexOf(3); //1
// //is Includes?
// years.includes(3); //true

// const calcTip = (bill) => (bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2);
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
// console.log(total);

// const myFirstObj = {
//   Name: 'pyd',
//   age: 45,
//   friends: ['s', 'd', 'er'],
//   isTeacher: true,
//   printAge: function (age) {
//     return age === true ? 2022 - age : 2022 - this.age;
//   },
// };
// myFirstObj.location = 'Dalian';
// myFirstObj['Email'] = '@pyd.net';
// console.log(myFirstObj.Name);
// console.log(myFirstObj['frie' + 'nds']);
// console.log(myFirstObj);
// console.log(`My best friend is ${myFirstObj.friends[0]}`);
// console.log(myFirstObj.printAge());

// const Person = {
//   fullName: '',
//   height: 0,
//   mass: 0,
//   BMI: 0,

//   calcBMI: function (fullName, height, mass) {
//     this.fullName = fullName;
//     this.height = height;
//     this.mass = mass;
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// const MarksBMI = Person.calcBMI('MarksMiller', 1.69, 78);
// console.log('MarksBMI =', MarksBMI);
// const JohnBMI = Person.calcBMI('John Smith', 1.95, 92);
// console.log('JohnBMI =', JohnBMI);

// if (MarksBMI > JohnBMI) {
//   console.log(`Marks's BMI (${MarksBMI}) higer than John's ( ${JohnBMI})!`);
// } else if (MarksBMI < JohnBMI) {
//   console.log(`John's BMI (${JohnBMI}) higer than Marks's ( ${MarksBMI})!`);
// } else {
//   console.log('is =');
// }

const myFirstObj = {
  Name: 'pyd',
  age: 45,
  friends: ['s', 'd', 'er'],
  isTeacher: true,
  printAge: function (age) {
    return age === true ? 2022 - age : 2022 - this.age;
  },
};

const myArray = [
  'a',
  'b',
  1,
  3,
  function () {
    console.log('myArrayFun is called');
  },
];
const type = [];
for (let i = 0; i < myArray.length; i++) {
  if (typeof myArray[i] === 'string') {
    type.push(myArray[i]);
  }
  if (i === 3) {
    break;
  }
}
console.log(type);
