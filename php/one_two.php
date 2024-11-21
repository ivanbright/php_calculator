
<?php
$firstNum =$_POST['firstNum'];
$secondNum=$_POST['secondNum'];

switch($_POST){
    case(array_key_exists('ADD',$_POST)):
        $summation =$firstNum + $secondNum;
        echo 'Total ='. $summation;
        break;
        case(array_key_exists('MULT',$_POST)):
            $product =$firstNum * $secondNum;
            echo 'product = '. $product; 
            break;
    default: echo 'Enter any numbers'   ;     
}
?>
