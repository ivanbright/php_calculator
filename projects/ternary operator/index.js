const age =document.getElementById("age");
const checkout=document.getElementById("checkout");
const solution=document.getElementById("solution");

/*
let ageChecker;
checkout.onclick = function(){
    ageChecker=age.value;
    if(ageChecker>=18){
        solution.textContent =`${ageChecker} is allowed to vote`;
}
else if(ageChecker<18){
    solution.textContent=`${ageChecker} is NOT allowed to vote`;
}
else {
    solution.textContent=`${ageChecker} is INVALID`
}

}


checkout.onclick =function(){
    let day = age.value;

if(day==1){
    solution.textContent="Monday";
}
else if(day==2){
    solution.textContent="Tuesday";
} 
else if(day==3){
    solution.textContent="Wednesday";
} 
else if(day==4){
    solution.textContent="Thursday";
} 
else if(day==5){
    solution.textContent="Friday";
} 
else if(day==6){
    solution.textContent="Saturday";
} 
else if(day==7){
    solution.textContent="Sunday";
} 
else{
    solution.textContent=`${day} is not a day of the week`;
} 
}



let day = 8;
switch(day){
    case 1:
        console.log("it is on monday");
        break;
    case 2:
        console.log('it is on tuesday');
        break;
    case 3 :
        console.log("it is on wednesday") ;
        break;
    case 4 :
        
        console.log("it is on thursday");
        break;

 case 5 :
        
        console.log("it is on friday");
        break;

        case 6 :
        
        console.log("it is on saturday");
        break;
        case 7 :
        
        console.log("it is on sunday");
        break;
    default:
        console.log(`${day} is not a day`) ;   
}




let studentScore =100;
let studentGrade;
switch(true){
    case studentScore >= 90:
    studentGrade='A';
    break;    
    case studentScore >=80:
        studentGrade='B';
        break;
    case studentScore >=70 :
        studentGrade='c'  ;
        break;
  default:
     studentGrade='f';
    
          
}
console.log(studentGrade)
*/


let myName ="Mugisha Ivan Bright";
console.log(myName.charAt(7))
console.log(myName.indexOf('t'));
console.log(myName);

console.log(myName.trim());
if(myName.startsWith(" ")){
    console.log('your name cant start with a space');
}
else {
    console.log(myName);
}
if(myName.endsWith(" ")){
    console.log('your name ends with a space')
}
else{
    console.log('your nme does not end with  space')
}
if(myName.includes(' ') ){
   
    console.log(`your name contains space ${myName}`)
}else{
    
    console.log('your name does not contain spaces')
}

myName=myName.repeat(2)
console.log(myName);