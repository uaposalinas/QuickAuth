<?php

    
    if(isset($_POST["SendInnedCode"]) && isset($_POST["OperationToken"])){

        $SendInnedCode = $_POST["SendInnedCode"];
        $OperationToken = $_POST["OperationToken"];

        $ServerName = "sql212.infinityfree.com";
        $UserName = "if0_35493604";
        $Password = "6c32j0hq";
        $DataBaseName = "if0_35493604_devlabsauth";

        $Connection = new mysqli($ServerName, $UserName, $Password, $DatabaseName);
        $DoQuery = "SELECT PassKeyID, Code, Resource FROM root WHERE PassKeyID = '$OperationToken'";
        $QueryResults = $Connection -> query($DoQuery);

        if($QueryResults -> num_rows > 0){

            $Row = $QueryResults -> fetch_assoc();
            $GetServerVerificationCode = $Row["Code"];

            if($GetServerVerificationCode == $SendInnedCode){

                $DoUpdate = "UPDATE root SET Status = 'Loogged' WHERE PasskeyID = '$OperationToken'";

                if($Connection -> query($DoUpdate)){

                    $DoUpdate = "UPDATE root SET Status = 'Resolved' WHERE PassKeyID = '$OperationToken'";
                    $Connection ->  query($DoUpdate);


                    //Crea la sesión

                    $GetResource = $Row["Resource"];

                    echo "<script> localStorage.setItem('@HKEY_LOCAL_MACHINE', '$GetResource'); window.close(); </script>";

                }else{

                    echo "<h1> Ocurrió un error en la operación para $OperationToken </h1>";

                }

            }else{

                echo "!Passed";

            }

        }else{

            echo "<h1> Ocurrió un error en la operación para:T</h1> <p>$OperationToken</p> ";

        }

    }

?>