/*const input   =document.getElementByid('temperature');
const radio1 =document.getElementById("celcius-Fahrenheit");
const radio2 =document.getElementById("Fahrenheit-Celcius");
//const submit =document.getElementById("submit");
const solution=document.getElementById('solution')
let temp;
function convetor(){
       
    if(radio1.checked){
        temp=Number(input.value)
       temp=(temp- 32)*(5 / 9);
        solution.textContent='you selected to fehrenheit'
    }
    else if(radio1.checked){
        temp=input*(9 / 5) + 32;
    solution.textContent=temp.toFixed(1);
    }

}
let myArrays =['juice','banana','sweets','avocado'];
myArrays.sort().reverse()
for (myArray of myArrays){
console.log(myArray)
};
let myName = 'mUGISHA IAVAN BRIGHT';
let spread={...myName};

console.log(spread);
let array=[1, 2,2,3,,44,5,6,6,8,9,6,5,4,];
let max = [...array];
console.log(max);




let fruits = ['apple','orange', 'banana'];
let vegetables=['carrots','cerial', 'banana'];

let food =[...fruits,...vegetables,'BARAKA'];
console.log(food);

function  opnfridge(...foods){
    console.log(...foods);
}
const food1='pizza'
const food2='hamburger'
const food3='hotdog'
const food4='ramen'

opnfridge(food1,food2,food3,food4  );



function itreati(...numbers){
    let sumation=0;
    for(number of numbers){
      (sumation+=number)
    
        
    }
return sumation
}
let to =itreati(2,2,2,5,8,77.9887)
console.log(to)
*/
const enter= document.getElementById('enter');
const toFehrenheit =document.getElementById('toFehrenheit');
const toCelcius =document.getElementById('toCelcius');
const answer = document.getElementById('answer');

let jass;
function convert(){
    if(toFehrenheit.checked){
    jass=enter.Value;
    jass =(jass* 9 / 5) + 32;
    answer.textContent=`${jass} fahrenheits.`.toFixed(1)
  
}
else{
    console.log('hello');
  
}
}

function sristri(...strings){
    return strings.join(' ')
}
const sisir =sristri('Mr','mugisha', 'ivan bright');
console.log(sisir);
function foods(...foods){
    return foods.join()
}
let food1='milk';
let food2='banana';
const allOfThem =foods(food1,food2,);
console.log(allOfThem)