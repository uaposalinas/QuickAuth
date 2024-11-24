

<?php

    require '../com.config/com.config.php';

    if(isset($_POST["Token"])){

        $Token = $_POST["Token"];

        $DoUpdate = "UPDATE Requests SET Status = 'Pending' WHERE PasskeyID = '$Token'";
        $UpdateResults = $Connection -> query($DoUpdate);

        if($Connection -> affected_rows > 0){

            echo "Ok";

        }else{

            echo "!OK";

        }

    }else{

        echo "Error";

    }

?>