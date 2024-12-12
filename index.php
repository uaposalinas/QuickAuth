<?php

    echo "Hola perrito este es el resultau: ";

    $UserName = $_GET["UserName"];
    $Name = $_GET["Name"];
    $Mail = $_GET["Mail"];
    $ProfilePhoto = $_GET["ProfilePhoto"];

    echo "
    
        <script>
        
        const Save = {

            Name: $Name,
            Mail: $Mail,
            ProfilePhoto: $ProfilePhoto,
            UserName: $UserName

        }

        localStorage.setItem('TestSessionInfo', JSON.stringify(Save));
        
        </script>
    
    ";

?>


