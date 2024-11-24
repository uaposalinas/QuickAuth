<?php

    require '../com.config/com.config.php';


    if(isset($_POST["ThisToken"])){

        $ThisToken = $_POST["ThisToken"];

        $DoQuery = "SELECT Status FROM Requests WHERE PasskeyID = '$ThisToken'";
        $QueryResults = $Connection -> query($DoQuery);

        if($QueryResults -> num_rows > 0){

            $Row = $QueryResults -> fetch_assoc();

            $CurrentStatus = $Row["Status"];

            echo "$CurrentStatus";

        }else{
            
            echo "Error1";

        }

    }else{

        echo "Error";

    }

?>