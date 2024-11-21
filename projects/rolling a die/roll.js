/*
const rollBtn=document.getElementById("Btn");
const labels1= document.getElementById("label1");
const labels2= document.getElementById("label2");
const labels3= document.getElementById("label3");
const winners =document.getElementById("winners");
const reset =document.getElementById('reset');
let randomNum;
let randomNum2;
let randomNum3;




const min = 1;
const max = 6;
rollBtn.onclick = function(){
randomNum2=Math.floor(Math.random()*max) +min;
randomNum3=Math.floor(Math.random()*max) +min;
randomNum = Math.floor(Math.random()*max) + min;
labels1.textContent=randomNum;
labels2.textContent=randomNum2;
labels3.textContent=randomNum3;
let firstNumber=randomNum;
let secondNumber=randomNum2;
let thirdNumber=randomNum3
if(firstNumber==secondNumber&& secondNumber==thirdNumber){
    winners.textContent="YOU WIN";
}
else {
    winners.textContent="YOU LOST";
}

}
reset.onclick =function(){
    randomNum=0;
    randomNum2=0;
    randomNum3=0;
labels1.textContent=randomNum;
labels2.textContent=randomNum2;
labels3.textContent=randomNum3;

}
*/

let validity=true;

while(validity){

    const email=prompt('enter your email and see');
    if(email.includes('@')&& email.includes('gmail.com') && email.toLowerCase()){
        alert(`${email} is correct`);
     
 validity=false;
    }
    
   

 validity=false;

}
