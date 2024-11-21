<?php
    $firstNumber=$_POST['firstNumber'];
    $secondNumber=$_POST['secondNumber'];
    $age =$_POST['AGE'];
    $studentName=$_POST['studentName'];
    $marks=$_POST['marks'];
    $firstTrial = $_POST['firstNum'];
    $secondTrial =$_POST['secondNum'];
    $thirdTrial =$_POST['thirdNum'];
    $sum=$firstNumber + $secondNumber;
    $myArray = array($firstTrial,$secondTrial,$thirdTrial);

   $counter =$myArray[0];



if($firstTrial>=$secondTrial && $firstTrial>=$thirdTrial){
    echo 'largest is '.$firstTrial;
}
else if($firstTrial<=$secondTrial && $secondTrial>=$thirdTrial){
    echo 'largest is ' .$secondTrial;
}else if($thirdTrial>=$firstTrial && $secondTrial<=$thirdTrial){
    echo 'largest is '.$thirdTrial;
}


if($firstNumber%2==0 && $secondNumber%2==0){

   echo "The even sum is ".$sum;
}
else echo"you can find the sumation by using even numbers in both spaces";
if($age>=18){
echo 'You can drive since you are'.$age . 'years old';

}else if($age<18 && $age<=16){
    echo 'you are almost there to drive but already since you are'.$age .'years old';
}
    else if($age<16){
        echo 'you are not aloud to drive at all since your are' .$age .'years old';
    }



 if($marks>89 && $marks<=100){
    echo 'STUDENT '.$studentName .'GRADE  A'.' ' .'SINCE MARKS ARE '.$marks;
}
else if($marks<90 && $marks>=80){
    echo 'STUDENT '.$studentName .'GRADE  B '.' ' .'SINCE MARKS ARE '.$marks;
}
else if($marks<80 && $marks>=70){
    echo 'STUDENT '. $studentName .'GRADE  C '.' ' .'SINCE MARKS ARE '.$marks;
}
else if($marks<70 && $marks>=60){
    echo 'STUDENT '.$studentName . 'GRADE  D'.' ' .'SINCE MARKS ARE '.$marks;
}
else if($marks<60 && $marks>=50){
    echo 'STUDENT '.$studentName . 'GRADE  E '.' ' .'SINCE MARKS ARE '.$marks;
}else if($marks<50) {

echo 'FAILED';

} 
else 
    echo 'please enter valid marks!';
define('MESSAGE','hello world ',true);
echo MESSAGE;'<br/>';
const MESSAG ='hello rwandans';
echo constant('MESSAG');



?>

