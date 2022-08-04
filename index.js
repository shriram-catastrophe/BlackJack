let firstCard;
let secondCard;
let cards=[];
let sum;
let isAlive=false;
let hasBlackJack=false;
//
let start=document.getElementById("start");
//
let cards_block=document.getElementById("cards");
//
let sum_block=document.getElementById("sum");
//
let display=document.getElementById("display");
//
let new_btn=document.getElementById("new");
//
start.addEventListener("click",setGame);
//
function setGame()
{
    firstCard=getRandomNumber();
    secondCard=getRandomNumber();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
    cards_block.textContent+=` ${firstCard} ${secondCard}`;
    sum_block.textContent+=` ${sum}`;
    sGame();
}
//
function sGame()
{   
    start.removeEventListener("click",setGame);
    if(sum<21)
    {
       isAlive=true;
       display.textContent="Pick a new card";
       new_btn.addEventListener("click",nCard);
    }
    else if(sum===21)
    {
        hasBlackJack=true;
        display.textContent="You have a BlackJack!";
    }
    else
    {    
        display.textContent="You are out of the game";
        isAlive=false;
        hasBlackJack=false;
    }
}
//
function nCard(){
    if(isAlive==true && hasBlackJack==false)
    {
      let newCard=getRandomNumber();
      cards.push(newCard);
      sum+=newCard;
      cards_block.textContent+=` ${newCard}`;
      sum_block.textContent=`Sum: ${sum}`;
      sGame();
    }
}
//
function getRandomNumber()
{
    n=Math.floor(Math.random()*13)+1;
    if(n>10)
    {
        return 10;
    }
    else if(n===1)
    {
        return 11;
    }
    else
    {
        return n;
    }
}