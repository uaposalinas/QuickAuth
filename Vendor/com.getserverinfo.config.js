const App = window;

App.addEventListener("load", InitService);

function InitService(){

    const URL = window.location.href;
    const PartUrl = URL.split("?");
    const GetValues = PartUrl[1];
    const Token = GetValues.substr(6, 100);

    fetch('../Controllers/com.checkresponse.controller.php', {

        method: "POST",
        headers: {

            "Content-Type": "Application/x-www-form-urlencoded",

        },
        body: `Token=${encodeURIComponent(Token)}`,

    })
    .then(response => response.text())
    .then(Results => {

        console.log(Results);

    })

}