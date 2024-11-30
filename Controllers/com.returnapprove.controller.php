

<?php

    require '../com.config/com.config.php';

    if(isset($_POST["Token"])){

        $Token = $_POST["Token"];

        $DoUpdate = "UPDATE Requests SET Status = 'Completed' WHERE PasskeyID = '$Token'";
        $UpdateResults = $Connection -> query($DoUpdate);

        $Code = "SELECT Code FROM Requests WHERE PasskeyID = '$Token'";
        $DoQuery = $Connection -> query($Code);

        if($DoQuery -> num_rows > 0){

            $Row = $DoQuery -> fetch_assoc();
            $Code = $Row["Code"];

            echo "$Code";

        }else{

            echo "false";

        }

        if(!$Connection -> affected_rows > 0){

            

        }

    }else{

        echo "error";

    }

?>