const App = window;
const AuthButton = document.querySelector('.AuthButton');

function AnimateText(text){

    document.querySelector('.LoginInfo').style.opacity = "1";
    const container = document.querySelector(".LoginInfo");
    const words = text.split(" ");  
    container.innerHTML = ""; 
    words.forEach((word, index) => {
        const span = document.createElement("span");
        span.textContent = word;
        span.className = "word";
        span.style.animationDelay = `${index * 0.04}s`;  
        container.appendChild(span);
        container.appendChild(document.createTextNode(" "));
    });
    
    
    setTimeout(() => {
        const allText = words.join(" ");  
        container.innerHTML = "<span class='TextCompleted'>"+allText+"</span>";    
    }, 1700);  

}


App.addEventListener('load', InitApprove);
AuthButton.addEventListener('click', AuthRequest);

function InitApprove(){

    AnimateText("Te damos la bienvenida al inicio de sesión mediante correo.");

    const GetUrl = App.location.href;
    const Parts = GetUrl.split("=");
    const Token = Parts[1];


    fetch("../../Controllers/com.checkresponse.controller.php", {

        method:"POST",
        headers:{

            "Content-type": "Application/x-www-form-urlencoded"

        },
        body: "Token="+encodeURIComponent(Token)

    })
    .then(response => response.text())
    .then(Result =>{

        const UserName = Result;

        setTimeout(() => {
            
            AnimateText("Al parecer estás intentando iniciar sesión en"+Result+" si tu hiciste esta solicitud recientemente puedes aprobarla usando el botón de abajo.");

        }, 2000);

    })

}

function AuthRequest(){

    const GetUrl = App.location.href;
    const Parts = GetUrl.split("=");
    const Token = Parts[1];

    AnimateText("Okey, comenzamos a autorizar la solicitud");

    setTimeout(() => {
        
        fetch("../../Controllers/com.returnapprove.controller.php", {

            method:"POST",
            headers:{
    
                "Content-type": "Application/x-www-form-urlencoded"
    
            },
            body: "Token="+encodeURIComponent(Token)
    
        })
        .then(response => response.text())
        .then(Result =>{
    
            const Code = Result;
                    
            setTimeout(() => {
                
                AnimateText("Listo, hemos terminado todo por aquí, el resto lo haces en el dispositivo que estás iniciando sesión.");
    
                setTimeout(() => {
                    
                    AnimateText("Gracias por usar Hello ID Passkeys, te redireccionaremos a la página de tu cuenta en unos segundos.")
    
                    setTimeout(() => {
                        
                        window.location.href = "https://helloid.devlabsco.space/account/";
    
                    }, 3000);
    
                }, 5000);
    
            }, 5000);
    
    
        })

    }, 3000);

}