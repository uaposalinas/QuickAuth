const App = window;
const LoginDescriptionToken = document.querySelector('.LoginDescriptionToken');

App.addEventListener("load", InitService);

function InitService(){

    const URL = window.location.href;
    const PartUrl = URL.split("?");
    const GetValues = PartUrl[1];
    const Token = GetValues.substr(6, 100);

    fetch('../../Controllers/com.checkresponse.controller.php', {

        method: "POST",
        headers: {

            "Content-Type": "Application/x-www-form-urlencoded",

        },
        body: `Token=${encodeURIComponent(Token)}`,

    })
    .then(response => response.text())
    .then(Results => {

        const RemoveSpaces = Results.substr(4, 150);
        console.log(RemoveSpaces)

        if(RemoveSpaces == "error"){

            window.location.href = "https://helloid.dexly.space"; 

        }else{

            LoginDescriptionToken.innerHTML = `Estás intentando iniciar sesión en ${RemoveSpaces} utilizando Dexly Passkeys pulsa el botón Autorizar y escribe el código en el dispositivo donde estás tratando de iniciar sesión si es necesario.`;

        }

    })
    .catch(Redirect => {

        window.location.href = "https://helloid.dexly.space?Cause="+Redirect;

    })



}