const checkbox1 =document.getElementById("checkbox1");
const checkbox2 =document.getElementById("checkbox2");
const checkbox3 =document.getElementById("checkbox3");
const solution = document.getElementById("solution");
const checkout =document.getElementById("checkout");

checkout.onclick = function(){
    if(checkbox1.checked && checkbox2.checked && checkbox3.checked){
        solution.textContent=`you paid with all of them`;
    }
    else{
        solution.textContent=`please checkin all payment options`
    }
 
}
