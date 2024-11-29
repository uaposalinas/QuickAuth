<?php

    require '../com.config/com.config.php';

    $Password = $_POST["Password"];
    $UserName = $_POST["UserName"];

    $Query = "SELECT Password FROM Accounts WHERE UserName = '$UserName'";
    $DoQuery = $Connection -> query($Query);

    if($DoQuery -> num_rows > 0){

        $Row = $DoQuery -> fetch_assoc();

        $ServerPassword = $Row["Password"];

        echo "$ServerPassword";

    }else{

        echo "error";

    }

?>