<?php

    require '../com.config/com.config.php';

    $Token = $_POST["Token"];


    $RemoveKey = "DELETE FROM `Requests` WHERE PassKeyID = '$Token'";
    $DoDelete = $Connection -> query($RemoveKey);

    if($DoDelete){

        echo "true";

    }else{

        echo "false";

    }

?>