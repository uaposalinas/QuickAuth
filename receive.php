<?php

    echo "Hola perrito este es el resultau: ";

    $UserName = $_GET["UserName"];
    $Name = $_GET["Name"];
    $Mail = $_GET["Mail"];
    $ProfilePhoto = $_GET["ProfilePhoto"];

    echo "
    
        <p class='WUserName'>$UserName</p>
        <p class='WName'>$Name</p>
        <p class='WMail'>$Mail</p>
        <p class='WPhoto'>$ProfilePhoto</p>

    ";


    echo "<script>

    window.addEventListener('load', e=>{

        const WUserName = document.querySelector('.WUserName');
        const WName = document.querySelector('.WName');
        const WMail = document.querySelector('.WMail');
        const WPhoto = document.querySelector('.WPhoto');

        const Save = {

            Name: WName.innerHTML,
            UserName: WUserName.innerHTML,
            Mail: WMail.innerHTML,
            ProfilePhoto: WPhoto.innerHTML

        }


        localStorage.setItem('TestSessionInfo', JSON.stringify(Save))

    })

</script>";

?>


