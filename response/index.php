<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
    <title>DevLabs Passkeys</title>
    <link rel="stylesheet" href="../Fonts/IndexFontsCaviarDreams.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link rel="stylesheet" href="../Vendor/com.response.config.css">

</head>
<body>

<?php

    if(isset($_GET["Token"])){

        $Key = $_GET["Token"];
        $GetUserName = $_GET["?UserName"];

        $ServerName = "sql212.infinityfree.com";
        $UserName = "if0_35493604";
        $Password = "6c32j0hq";
        $DataBaseName = "if0_35493604_devlabsauth";

        $Connection = new mysqli($ServerName, $UserName, $Password, $DatabaseName);

        $DoQuery = "SELECT Code, Status FROM root WHERE PassKeyID = '$Key'";
        $QueryResults = $Connection -> query($DoQuery);

        if($QueryResults -> num_rows > 0){

            $Row = $QueryResults -> fetch_assoc();

            $GetCode = $Row["Code"];
            $GetQueryStatus = $Row["Status"];

            if($GetQueryStatus == "Resolved" || $GetQueryStatus == 'TimeOutExed'){

                echo "<script> window.location.href = 'TimedOut' </script>";

            }

            $GetPassConnection = new mysqli($ServerName, $UserName, $Password, $DatabaseName);
            $GetPassQuery = "SELECT Password FROM accounts WHERE UserName = '$GetUserName'";
            $GetPassResult  = $Connection -> query($GetPassQuery);
            
            $GetPassValue = $GetPassResult -> fetch_assoc()["Password"];

            echo "<script> const GetUserName = '$GetUserName'; const GetCode = '$GetCode'; GetPass='$GetPassValue' </script>";

        }


    }else{

        echo "<script> document.body.style.display = 'none'; </script>";

    }

?>
    
    <div class="AuthPage" style="display:flex;">

        <div class="Icon"></div>
        <t>Solicitud de inicio de sesión</t>
        <p class="LoginDescriptionToken">Ocurrio un error.</p>

        <div class="AuthButton">Autorizar</div>

    </div>

    <div class="SessionNoLogged" style="display: none;">

        <div class="Icon"></div>
        <t>Ingresa la contraseña</t>
        <input type="password" class="GetPassword">
        <p class="LoginDescriptionTokens LoginDescriptionTokens2">No pudimos obtener tu cuenta en este dispositivo.</p>

        <div class="AuthButtons ">Continuar</div>

    </div>

    <div class="ShowCode" style="display:none">

        <div class="Shown">

            <div class="Icon"></div>

            <t>Verificación de dos Factores</t>

            <div class="ExitCode"> 
                <p class="ExitCodeVar">0</p>
                <p class="ExitCodeVar">0</p>
                <p class="ExitCodeVar">0</p>
                <p>-</p>
                <p class="ExitCodeVar">0</p>
                <p class="ExitCodeVar">0</p>
                <p class="ExitCodeVar">0</p> 
            </div>

            <p class="Inst">Pulsa siguiente y escribe este código en el dispositivo de inicio de sesión</p>

            <div class="FinishLogin">Finalizar</div>

        </div>

    </div>

</body>

<script src="../Vendor/com.response.config.js"></script>

</html>