function Vihicle(car, model ,year , color){
    this.car=car;
    this.model=model;
    this.year=year;
    this.color=color;
}

const car1 = new Vihicle('ford','mustang',2024,'red');

console.log(car1.car);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
//
//const array =['mugisha-ivan-bright-baraka-baiaiaiaiaiiaiaiaiaia'];
//array.map(didve(element));
//console.log(array);
//function didve(element){
//return element.toUpperCase();
//}
function workspace(firstname,secondname,thirdnamem,dateofbirth){
this.firstname=firstname;
this.secondname=secondname;
this.thirdnamem =thirdnamem;
this.dateofbirth=dateofbirth;
}
const identity = new workspace('mugisha','ivan','bright',2006);
console.log(identity.firstname);
console.log(identity.secondname);
console.log(identity.thirdnamem);
console.log(identity.dateofbirth);


const variba ={
    name:'mugisha ivan bright',
    school:function(){
        console.log(`${this.name} is staying at an excellent school`)
    }
}
variba.school();


const hello =function(){
    console.log('hello world')
}
hello()

const hi =()=>console.log('hello bright')
hi()

function verible (hiing,morning,greeting){
    this.hiing =hiing;
    this.morning=morning;
    this.greeting=greeting;

}
const caller =new verible('hello','good morning','goodbye')
console.log(caller.hiing);
console.log(caller.morning);
console.log(caller.greeting);

const names ={
    name1:'mugoos',
    name2 :'ivane',
    calling:function(){console.log(`${this.name1} is looking at ${this.name2}`)}
}
const names2 ={
    name1:'patric',
    name2 :'niyo',
    calling:function(){console.log(`${this.name1} is looking at ${this.name2}`)}
}
names2.calling()
names.calling();
//constructor=special method for defining the properties and methods of objects
function car (MAKE,MODEL,YEAR,COLOR,){
    this.MAKE =MAKE,
    this.MODEL=MODEL,
    this.YEAR=YEAR,
    this.COLOR=COLOR,
    this.fun =function(){`${this.MODEL} isdrivien`};
}

const coal =new car('ford','mustnf',2024,'blue');
console.log(coal.MAKE)
console.log(coal.MODEL)
console.log(coal.YEAR)

console.log(coal.COLOR);
coal.fun();

iamGoingToInvokeYou(funnns1,funnns2,'iam going to call these two functions')
function iamGoingToInvokeYou(fun1,fun2,calling){
    fun1();
    fun2();
    return calling;

}


function funnns1(){
    console.log('i am fun1')
}

function funnns2(){
    console.log('i am fun2')
}

function verible (hiing,morning,greeting){
    this.hiing =hiing;
    this.morning=morning;
    this.greeting=greeting;

}
const callers1 =new verible('hello','good morning','bye1')
const callers2 =new verible('hello','good morning','bye3')
const callers3 =new verible('hello','good morning','bye3')
const callers4 =new verible('hello','good morning','bye')
console.log(callers2.hiing);
console.log(callers2.morning);
console.log(callers2.greeting);
console.log|(callers4.hiing);



class baraka{
    static name='mugisha ivanbrght';
  static fun=  function(){
        console.log(`${this.name} is staying at rwanda coding academy`);


    }
    constructor(nas,nis){
        this.nas=nas;
        this.nis=nis;
    }
displayProduct(){
    console.log(`product${this.nas}`);
    console.log(`price${this.nis}`);
}

}

baraka.fun();
const name1s =new baraka('masayi','4000frw');
const name2s =new baraka('barirene','6000frw');
name1s.displayProduct();
name2s.displayProduct();





const numbers =[1,2,3,4,5,6,7,8,9];

const reci =numbers.map(func)
console.log(reci)
function func(element){
    return Math.pow(element,2)
}

const dates =['2024-10-2','3930-393-2992-3939']
const formatorDates =dates.map(spliter);
console.log(formatorDates)
function spliter(element){
 const filtr =element.replaceAll('-','/');
 return filtr;
}

const array =[3,4,5,67,8,9,4,11,2,3,13,56,75,4,3,3,3,2,2,454,45,3,3,2,5,7,75,33];

const bigger =array.reduce(filt);
console.log(bigger);


function filt(accumulator){
    for (let i=2; i<accumulator ; i++){
        if(accumulator%i!==0){
            console.log(accumulator)
        }
    }
return accumulator ;

}

function add(elw,ele){
    this.elw =elw;
    this.else=ele
}

const sibling1 =new add('furaha','ernestine');
console.log(sibling1.else + sibling1.elw)
const sibling2 =new add('nyanawase','marie grane');
console.log(sibling1.else + sibling2.elw);

setTimeout(function(){console.log('hello world')},4000);


const myarray =[1,2,3,4,5,6]
const redcccccc =myarray.filter(square);
console.log(redcccccc)
function square(element,accumulator){
    return element % accumulator ===accumulator-4
}
//inheritance of methods whereby achild inherites characters from his parents
class animal{
    alive =true;
}
class bird extends animal{
    name='sparrow';

}
const birds = new bird();

console.log(birds.alive);
