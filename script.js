'use strict';
//selecting elements
const diceEl=document.querySelector('.dice');
let current0el=document.querySelector('#current--0');
let current1el=document.getElementById('current--1');
let score0el=document.querySelector('#score--0');
let score1el=document.querySelector('#score--1');
let player0el=document.querySelector('.player--0');
let player1el=document.querySelector('.player--1');
const rollBtn=document.querySelector('.btn--roll');
const newBtn=document.querySelector('.btn--new');
const holdBtn=document.querySelector('.btn--hold');

//initializing values
let playing,activePlayer,currentScore,scores;
function init(){
    playing=true;
    activePlayer=0;
    currentScore=0;
    scores=[0,0];
    //displaying default values on the screen
 score0el.textContent=0;
 score1el.textContent=0;
 current0el.textContent=0;
 current1el.textContent=0;
 //adding and removing classes
 diceEl.classList.add('hidden');
 player0el.classList.remove('player--winner');
 player1el.classList.remove('player--winner');
 player0el.classList.add('player--active');
 player1el.classList.remove('player--active'); 
}
init();
function switchPlayer(){
     document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0;
    activePlayer=activePlayer===0 ? 1: 0;
    player0el.classList.toggle('player--active');
    player1el.classList.toggle('player--active');
}

rollBtn.addEventListener('click',function(){
    if(playing){
    //show dice and generating random numbers
    diceEl.classList.remove('hidden');
   const dice=Math.trunc(Math.random()*6)+1;
  diceEl.src=`dice-${dice}.png`;

  if(dice!==1){
    currentScore+=dice;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    // current0el.textContent=currentScore;
  }
  else{
    switchPlayer();
    // console.log(activePlayer);// 
  }
}
});
holdBtn.addEventListener('click',function(){
    if(playing){
        scores[activePlayer]+=currentScore;
        document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
        //check if scores of active player is greater than 20
        if(scores[activePlayer]>=20)
            {
              playing=false;
              diceEl.classList.add('hidden'); 
              rollBtn.classList.add('hidden');
              holdBtn.classList.add('hidden');
             document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
              document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            }
            else{
switchPlayer();
            }
           }
// console.log('hold button clicked');

});
newBtn.addEventListener('click',function(){
    init();
              rollBtn.classList.remove('hidden');
              holdBtn.classList.remove('hidden');
});