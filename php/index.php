<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
 <link rel="stylesheet" href="one_two.css">
</head>
<body>
    <form action="<?php echo $_SERVER['php_self'];?>">
        <h1>Two numbers calculator</h1>
        <label for="">firstNumber</label>
   <input type="number" name="num1"><br><br>
   <label for="">secondNumber</label>
   <input type="number" name="num2"><br><br>
   <label for="">Operators</label>
   <div>
   <input type="submit" name="add" value="+">
   <input type="submit" name="min" value="-">
   <input type="submit" name="mul" value="*">
   <input type="submit" name="div" value="/">
</div>
    </form>
</body>
</html>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    $input1 = $_POST['num1'];
    $input2 = $_POST['num2'];

    switch($_POST){
    case(array_key_exists('add',$_POST)):
        $sumation = $input1 + $input2;
        echo $sumation;
        break;
    case(array_key_exists('mul',$_POST)):
        $products =$input1 * $input2;
        echo $products;
        break;
    case(array_key_exists('div',$_POST)):
        $quotients = $input1 / $input2;
        echo $quotients;
        break;
    case (array_key_exists('min',$_POST)):
            $difference = $input1-$input2;
           echo $difference;
           break;
    default: echo 'enter any number';

}
?>

</body>
</html>




