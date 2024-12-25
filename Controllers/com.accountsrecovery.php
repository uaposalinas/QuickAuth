<?php

    require '../com.config/com.config.php';

    if(isset($_POST["UserName"])){

        $UserName = $_POST["UserName"];

        $Query = "SELECT UserKey, UserName, Name, ProfilePhoto, Status, Email, Phone FROM Accounts WHERE UserName = '$UserName'";
        $QueryResults = $Connection -> query($Query);

        if($QueryResults){

            if($QueryResults -> num_rows > 0){

                $Row = $QueryResults -> fetch_assoc();
    
                $UserKey = $Row["UserKey"];
                $Name = $Row["Name"];
                $ProfilePhoto = $Row["ProfilePhoto"];
                $Status = $Row["Status"];
                $Email = $Row["Email"];
                $Phone = $Row["Phone"];
                $UserName = $Row["UserName"];
    
                $Return = [
    
                    "access" => "true",
    
                    "UserInfo" => [
    
                        "UserKey" => $UserKey,
                        "Name" => $Name,
                        "ProfilePhoto" => $ProfilePhoto,
                        "Status" => $Status,
                        "Email" => $Email,
                        "Phone" => $Phone,
                        "UserName" => $UserName
    
                    ]
    
                    ];
    
    
            }else{
    
                $Return = ["access" => "false", "ErrorCode" => "4041"];
    
    
            }
    

        }else{

            $Return = ["access" => "false", "ErrorCode" => "5001"];

        }

    }else{

        header("Location: https://helloid.dexly.space");

    }

    header("Content-Type: application/json");
    echo json_encode($Return)

?>