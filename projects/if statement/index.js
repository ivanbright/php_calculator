const age=document.getElementById("age");
const check=document.getElementById("submit");
const conclusion=document.getElementById("conclusion");
let email=document.getElementById("email");
const enter=document.getElementById("enter");

const validity=document.getElementById("validity")

let ag;


check.onclick= function(){
    ag = age.value;
    ag=Number(ag);
    if(ag>=20){
    conclusion.textContent=`you are allowed to drive`

    }
else if(ag<20) {
    conclusion.textContent=`go to sleep`
}
else if(ag!==Number){
    conclusion.textContent=`enter a valid values`;
}
}



enter.onclick=function(){
    let mail=email.value;
let emailValue=mail.includes("@");
let emailDotCom=mail.includes(".com");
email=emailValue+emailDotCom;
    if(emailValue && emailDotCom){
 validity.textContent="your email is valid";
    }
    else{
        validity.textContent=`your email is NOT valid! please enter a  valid email and continue`;   
    }

}

let userName = prompt('Enter your user Name:');
let capitalizer =userName.toUpperCase();
let asker= prompt(`Is your user Name is ${capitalizer}`);
if(asker=='yes'){
    alert(`Now we did it if your userName is${capitalizer}`);
}
else if(asker=='no'){
    alert(`Now your user name is ${userName}`);
}


const emailAsker = prompt("please enter your email to check its valididty");
let checker = emailAsker.includes('@');
let comChecker = emailAsker.includes('.');
let dotChecker = emailAsker.includes('com');
let spaces =emailAsker.includes(" ");
let triming= emailAsker.replaceAll(' ','');


if(checker==true && comChecker==true && dotChecker==true && spaces==false){
    alert(`${emailAsker} IS VALID`);
}else if(checker==false && comChecker==false && dotChecker==false && spaces==false){

    alert(`${emailAsker} IS INVALID `);
}
else if(checker==false){
    alert('please include @');
}
else if(checker==false){
    alert('please include .');
}
else if(dotChecker==false){
    alert('please include TLD Example com');
}
else if(spaces==true){
    
    alert(`please remove spaces or enter a valid email eg ${triming}`);
    

}

let metn = prompt('Enter your user name');
let trimer =metn.charAt(1).toUpperCase() + metn.slice(1).toLowerCase() ;
alert(trimer);