const display = document.getElementById('input');

function calculattion(input){
  display.value +=input;
}

function cleaner(){
  display.value ="";
}

function evaluatiion(){
  try{
    display.value = eval(display.value);
  }
  catch{
    display.value ='ERROR';
  }
}
function plusOrMinus(){
  if(display.value > 0){
    display.value = `-${display.value}`;
  }
  else{
    display.value= display.value * -1;
  }
}



    
