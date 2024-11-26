

<?php

    require '../com.config/com.config.php';

    if(isset($_POST["Token"])){

        $Token = $_POST["Token"];

        $DoUpdate = "UPDATE Requests SET Status = 'Pending' WHERE PasskeyID = '$Token'";
        $UpdateResults = $Connection -> query($DoUpdate);

        $UserName = "SELECT Account FROM Requests WHERE PasskeyID = '$Token'";
        $DoQuery = $Connection -> query($UserName);

        if($DoQuery -> num_rows > 0){

            $Row = $DoQuery -> fetch_assoc();
            $User = $Row["Account"];

            echo "@$User";

        }else{

            echo "error";

        }

        if(!$Connection -> affected_rows > 0){

            

        }

    }else{

        echo "error";

    }

?>