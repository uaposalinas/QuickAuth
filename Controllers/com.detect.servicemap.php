<?php

    require '../com.config/com.config.php';

    if(isset($_POST["Token"])){

        $Token = $_POST["Token"];

         $Query = "SELECT * FROM ServiceMap WHERE ServiceToken = '$Token'";
         $DoQuery = $Connection -> query($Query);

         if($DoQuery -> num_rows > 0){

            $Row = $DoQuery -> fetch_assoc();

            $ServiceName = $Row["ServiceName"];
            $Logo = $Row["ServiceLogo"];
            $Developer = $Row["Developer"];
            $Target = $Row["TargetURL"];
            $Redirect = $Row["PostRedirect"]; 

            $Return = [

              "access" => "true",

              "ServiceInfo" => [

                "ServiceName" => $ServiceName,
                "TargetUrl" => $Target,
                "Developer" => $Developer,
                "ServiceLogo" => $Logo,
                "PostRedirect" => $Redirect,


              ]

            ];


         }else{

            $Return = ["access" => "false", "ErrorCode" => "404"];

         }

    }else{

        $Return = ["access" => "false", "ErrorCode" => "500"];

    }


    header("Content-Type: application/json");
    echo json_encode($Return);

    $Connection -> close();

?>