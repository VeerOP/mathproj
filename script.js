'use strict';
const score0 = document.querySelector('#score--0');
// const score1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const dice2 = document.querySelector('.dice2');

const current0 = document.querySelector('#current--0');
// const current1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
// const player1 = document.querySelector('.player--1');
// let scores = [0, 0];
// let activePlayer = 0;
dice.classList.add('hidden');
const roll = document.querySelector('.btn--roll');
// const newbtn = document.querySelector('.btn--new');
// const hold = document.querySelector('.btn--hold');
// let currentScore = 0;
let evensumCount = 0;
let oddsumCount = 0;
let Gs7 = 0;
let Ls7 = 0;
let evenCount = 0;
let oddCount = 0;
let G7 = 0;
let L7 = 0;
let play = true;
let n1 = [];
let n2 = [];
roll.addEventListener('click', function () {
  for (let k = 0; k < 10; k++) {
    let num = Math.trunc(Math.random() * 6) + 1;
    let num2 = Math.trunc(Math.random() * 6) + 1;
    n1.push(num);
    n2.push(num2);
    dice.classList.remove('hidden');
    dice2.classList.remove('hidden');

    dice.src = `dice-${num}.png`;
    dice2.src = `dice-${num2}.png`;
    document.getElementById(`current--0`).textContent = num2 + num;
  }
  for (let i = 0; i < 10; i++) {
    if ((n1[i] + n2[i]) % 2 == 0) {
      evensumCount += 1;
    } else {
      oddsumCount += 1;
    }
    if (n1[i] + n2[i] > 7) {
      Gs7 += 1;
    } else {
      Ls7 += 1;
    }
    if (n1[i] % 2 == 0 && n2[i] % 2 == 0) {
      evenCount += 1;
    } else {
      oddCount += 1;
    }
    if (n1[i] > 3 && n2[i] > 3) {
      G7 += 1;
    } else {
      L7 += 1;
    }
  }
  document.getElementById(
    'evenSum'
  ).textContent = `Sum is an even number= ${evensumCount}`;
  document.getElementById(
    'oddSum'
  ).textContent = `Sum is an odd number= ${oddsumCount}`;
  document.getElementById(
    'SumG7'
  ).textContent = `Sum is greater than 7= ${Gs7}`;
  document.getElementById('SumL7').textContent = `Sum is lesser than 7= ${Ls7}`;
  document.getElementById(
    'evenBoth'
  ).textContent = `Both numbers are even= ${evenCount}`;
  document.getElementById(
    'oddBoth'
  ).textContent = `Both numbers are odd=${oddCount}`;
  document.getElementById(
    'G7'
  ).textContent = `Both numbers are greater than 3= ${G7}`;
  document.getElementById(
    'L7'
  ).textContent = `Both numbers are lesser than 3= ${L7}`;
  
  // else {
  //   currentScore = 0;
  //   document
  //     .querySelector(`.player--${activePlayer}`)
  //     .classList.remove('player--active');
  //   document.getElementById(`current--${activePlayer}`).textContent = 0;
  //   activePlayer = activePlayer === 0 ? 1 : 0;
  //   document
  //     .querySelector(`.player--${activePlayer}`)
  //     .classList.add('player--active');
  // }
});

console.log(n1);
console.log(n2);

// hold.addEventListener('click', function () {
//     if(play){
//   scores[activePlayer] = scores[activePlayer] + currentScore;
//   document.getElementById(`score--${activePlayer}`).textContent =
//     scores[activePlayer];
//   if (scores[activePlayer] >= 10) {
//     play = false;
//     document
//       .querySelector(`.player--${activePlayer}`)
//       .classList.add('player--winner');
//     document
//       .querySelector(`.player--${activePlayer}`)
//       .classList.remove('player--active');
//   } else {
//     document
//       .querySelector(`.player--${activePlayer}`)
//       .classList.remove('player--active');
//     document.getElementById(`current--${activePlayer}`).textContent = 0;
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     document
//       .querySelector(`.player--${activePlayer}`)
//       .classList.add('player--active');
//     currentScore = 0;
//   }
// }
// });

// newbtn.addEventListener('click',function(){
//     document
//       .querySelector(`.player--${activePlayer}`)
//       .classList.remove('player--winner')
//     play=true
//     scores=[0,0]
//     activePlayer=0
//     dice.classList.add('hidden');
//     currentScore=0
//     current0.textContent=0
//     current1.textContent=0
//     score0.textContent=0
//     score1.textContent=0
//     document
//       .querySelector(`.player--${activePlayer}`)
//       .classList.add('player--active')
// })
