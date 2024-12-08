<?php

    require '../com.config/com.config.php';

    $Token = $_POST["Token"];
    $ThisUserName = $_POST["ThisUserName"];
    $Code = $_POST["Code"];

    $SaveLogin = "INSERT INTO `Requests`(`PassKeyID`, `Account`, `Code`, `Status`, `Method`) VALUES ('$Token','$ThisUserName','$Code','Sent','QR')";
    $DoSave = $Connection -> query($SaveLogin);

    if($DoSave){

        echo "true";

    }else{

        echo "false";

    }

?>