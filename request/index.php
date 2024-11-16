<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión • DevLabs PassKeys</title>
    <link rel="stylesheet" href="../Fonts/IndexFontsCaviarDreams.css">
    <link rel="stylesheet" href="../Fonts/IndexFontsRoboto.css">
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.0.0/uicons-bold-rounded/css/uicons-bold-rounded.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.0.0/uicons-brands/css/uicons-brands.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-straight/css/uicons-regular-straight.css'>  
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-straight/css/uicons-regular-straight.css'>  
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.0.0/uicons-bold-rounded/css/uicons-bold-rounded.css'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link rel="stylesheet" href="../Vendor/com.request.config.css">

</head>


<body>


    <div class="LogPage">

    <div class="SensePath"> Iniciar Sesión <ion-icon name="chevron-forward-outline"></ion-icon> TaskFlow </div>
    <div class="QR"> <pre class="pre"></pre> </div>
    <t class="TitleScale1">Escanea el código para iniciar sesión</t>
    <p class="DescriptionScale1">Escanea este codigo en un dispositivo donde ya hayas iniciado sesión.</p>
    
    <p class="Instructions" style="height: 50px;">Presiona tu foto de perfil y haz click en el icono <i class="fi fi-br-key-skeleton-left-right Demo"></i> y pulse en el icono <i class="fi fi-br-plus Demo"></i> de la esquina superior  derecha</p>
    <p class="Instructions2" style="height: 50px;">Si estás en iPhone puedes acceder a tu panel de control y pulsa en el icono <i class="fi fi-br-qr-scan Demo"></i> luego apunta la cámara al codigo y en caso de ser necesario pulsa <i class="fi fi-brands-apple Demo"></i></p>

    <div class="link">¿Necesitas más ayuda?</div>

    <div class="GoToCode">Siguiente</div>

    </div>

    <div class="GetCode">

        <div class="IconFather">

            <div class="Icon"></div>

        </div>

        <t class="TitleScale3">Estamos confirmando que eres tú</t>

        <div class="GetCodesInputs">

            <input type="number" class="GetCodeForThis">
            <input type="number" class="GetCodeForThis">
            <input type="number" class="GetCodeForThis">
            -
            <input type="number" class="GetCodeForThis">
            <input type="number" class="GetCodeForThis">
            <input type="number" class="GetCodeForThis">

        </div>

        <div class="SendCode">Siguiente</div>

    </div>

    <?php   
    
    $ServerName = "sql212.infinityfree.com";
    $UserName = "if0_35493604";
    $Password = "6c32j0hq";
    $DataBaseName = "if0_35493604_devlabsauth";

    if(isset($_GET["UserName"])){

        $Key = $_GET["UserName"];
        $GetPasskeyID = $_GET["PasskeyID"];
        $GetPasskeyCode = $_GET["PasskeyAuthCode"];

        

    }else{

        echo "<script> localStorage.setItem('TaskFlowLoginEvent', 2);  window.location.href = '../' </script>";


    }

        $Connection = new mysqli($ServerName, $UserName, $Password, $DataBaseName);

        $DoQuery = "SELECT UserName, UserKey FROM accounts WHERE UserName = '$Key'";
        $QueryResults = $Connection -> query($DoQuery);

        if($QueryResults -> num_rows > 0){

            $Row = $QueryResults -> fetch_assoc();

            $GetCurrentSessionToken = $Row["UserName"];
            $GetHKEY = $Row["UserKey"];
            

            echo "<script> const NewLogUserKey = '$GetCurrentSessionToken'; const PasskeyID = '$GetPasskeyID'; const Username = '' </script>";

        }else{

            echo "<script> localStorage.setItem('TaskFlowLoginEvent', 0);  window.location.href = '../' </script>";


        }
        


        $SavePasskeyConnection = new mysqli($ServerName, $UserName, $Password, "devlabsauth");

        $DoSave = "INSERT INTO `root`(`PassKeyID`, `Resource`, `Code`, `Status`) VALUES ('$GetPasskeyID','$GetHKEY','$GetPasskeyCode','Pending')";

        if($SavePasskeyConnection -> query($DoSave)){

            echo "OK";

        }else{

            echo "!OK";

        }
        


?>

<form action="CheckResponse/" method="post" class="FormControl" hidden>

    <input type="text" name="SendInnedCode" class="CompleteCodeResult">
    <input type="text" name="OperationToken" class="SendOperationToken">

</form>

</body>

<script>

const LogSessionStatus = localStorage.getItem('LogSessionStatus');


if(LogSessionStatus){

    document.querySelector('.LogPage').style.display = "none";
    document.querySelector('.GetCode').style.display = "flex";

}else{

    document.querySelector('.LogPage').style.display = "flex";
    document.querySelector('.GetCode').style.display = "none";

}

</script>

<script defer src="../Vendor/qrcode.min.js"></script>
<script defer src="../Vendor/com.request.config.js"></script>
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>


</html>

