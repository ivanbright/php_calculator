function rollDice(){
    const numOfDice=document.getElementById('numOfDice').value;
    const diceImages =document.getElementById('diceImages');
     const label3 =document.getElementById('label3');
     const values=[];
     const images =[];
     for(let i =0; i<numOfDice;i++){
      const value =Math.floor(Math.random()*6)+1;
      values.push(value);
      images.push(`<img src='${value}.png'>`)
     }

diceImages.textContent=values;

label3.innerHTML=images;
};




hello(function2,3,32)

function hello(functio,num1,num2){
    let result=num1+num2;
    console.log(result)
    functio();
}
function function2(){
console.log('thank you for signing')
}


console.log(manyFunctionCaller(func1,func2,func3,func4,'hello be ready for nested functions'));
function manyFunctionCaller(fun1,fun2,fun3,fun4,message){
    console.log(message);
  fun1();
  fun2();
  fun3();
  fun4();

}

function func1(){
    console.log('i am the first function');
}
function func2(){
    console.log('i am the second function');
}
function func3(){
    console.log('i am the third function');
}
function func4(){
    console.log('i am the fourth function');
}



function delaying(){
    setTimeout(function() {
        console.log('hello world')
    },2000)
}



let arrays =[3,4,5,6,7,8,8,4,5,7,7,7,67,6,65,65,672,3];
// let max =Math.max(...arrays)
// console.log(max);
 let counter= arrays.forEach(affection);

function affection(elements){
    console.log(elements);
}

const numbers =[1,2,3,4,5];
const squares = numbers.map(square);
console.log(squares)

function square(element){
    return Math.pow(element,3);
}


const nameses =['mug-isha','iv-an','br-ig-ht','bar-ak-a','fu-ra-ha','t-i-m-e','d-e-b-o-r-a-h'];
const namses =nameses.map(capitalizer);
console.log(namses);


function capitalizer(element){
  let splitter=element.split('-');
  let como =element.replaceAll(',','')
 

 
  return splitter;
}

let dates =['2024-1-10','2025-2-20','2026-3-30'];
let setad =dates.map(editor);
console.log(setad)


function editor(element){
 let editing= element.split('-');
 return `${editing[2]} / ${editing[1]} / ${editing[0]}`
 
}

let num = [23,23,4,35,45.4,454,6454,37676766,3,45];
let mun =num.reduce(sum);
let max =num.reduce(maximum)
console.log(max)


function sum(accumulator,element){
    return accumulator + element;                               
}
function maximum(accumulator,element){
    return Math.max(accumulator,element);                               
}



//reduce () is used to reduce the array by calculating the max min or althmetic operation
//filter() is used to filter the array elements by resolving them accodingly
//eg you can use filter method to callback a function that will find the element containing few elements ,elements containing bigger elements
//if you want to edit all elements in an array you can use map()function
//map()function helps you  to list down editted elements


//Arrow function =>is the same as a function declaration but different syntax

const funt= (name) => console.log(`hello ${name}`)//this is an arrow funnction
funt('world');

//function expression is also a function with a unique syntax

const fun=function(name){
    console.log(`hello ${name}`)//this is a function expression
}
fun('world');

//callback function is a nested function where the function asynchronous

helloF(world);
function helloF(fun45){
console.log('hello');
fun45();
}
function world(){
    console.log('world');
}
const funnn=(funn1,funn2,funn3) =>{
    console.log('hello');
    funn1();
    funn2();
    funn3();
}
funnn(iamAfun1,iamAfun2,iamAfun3)
function iamAfun1(){
    console.log('bright said');
}

function iamAfun2(){
    console.log('that');
}

function iamAfun3(){
    console.log('world');
}

setTimeout(function() {
    console.log('hello world');
},2000)


setTimeout(()=>console.log(`hiii`),3000)//by using arrow function
//by using function declaration

setTimeout(function(){
    console.log(`mugisha ivan bright`)
},2000)

const winner =() => console.log('HELLLLE')
winner();
function winners(){
    console.log('HELLLERL')
}
winners
()


const perso1 = {
    firstName: 'Spongebob',
    lastName:'Squarepants',
    saying:function(){
        console.log(`hello everybody i am spongebob`) }
}
console.log(perso1.firstName);
console.log(perso1.lastName);
console.log(perso1.saying());


const objective = {
    name:'mugisha ivan bright',
    class: () => 'hello world hello world hello world',

   
    
} 
const funs = (hiing)=>console.log(`${hiing} Bright`);
 funs('hi')
 const funcs =function(hiing){console.log(`${hiing} Mugisha`)}
 funcs('hi')

console.log(objective.class())



// we are going do be dealing with objects

const mysql = {
    myFunc:function(funs11,funs2){console.log(`hello ${objective.name}`); funs11();
    funs2()}

}
console.log(mysql.myFunc(funcs,funs))

