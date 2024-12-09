

<?php

    require '../com.config/com.config.php';

    if(isset($_POST["Token"])){

        $Token = $_POST["Token"];

        $UserName = "SELECT Account, Status FROM Requests WHERE PasskeyID = '$Token'";
        $DoQuery = $Connection -> query($UserName);

        if($DoQuery -> num_rows > 0){

            $Row = $DoQuery -> fetch_assoc();
            $User = $Row["Account"];
            $Status = $Row["Status"];

            $Return = [

                "access" => "true",

                "Info" => [

                    "User" => "@$User",
                    "Status" => $Status,

                ]

                ];

                if($Status == "Sent"){

                    $DoUpdate = "UPDATE Requests SET Status = 'Pending' WHERE PasskeyID = '$Token'";
                    $UpdateResults = $Connection -> query($DoUpdate);

                }

        }else{

            $Return = ["access" => "false"];

        }

        if(!$Connection -> affected_rows > 0){

            

        }

    }else{

        $Return = ["access" => "false"];

    }

    header("Content-Type: application/json");
    echo json_encode($Return);

    $Connection -> close();

?>