
function InitCodeLogService(){

    const QrContainer = document.querySelector('.QR');
    const BackLogin = document.querySelector('.BackLogin');

    sessionStorage.setItem('QrToken', CreateToken(60))
    sessionStorage.setItem('QrCode', CreateToken(6))

    const Token = sessionStorage.getItem("QrToken");
    const Code = sessionStorage.getItem("QrCode");
    const UserName = JSON.parse(sessionStorage.getItem('CurrentSessionObject')).UserInfo.UserName;

    const LogPage = document.querySelector('.LogPage');
    const RequestInfo = document.querySelector('.RequestInfo');

    RequestInfo.classList.add("RemoveGetInfoPage");
    LogPage.classList.add("ShowCodePage")
    setTimeout(() => {
        
        RequestInfo.style.display = "none";
        LogPage.style.display = "flex";
        RequestInfo.classList.remove("RemoveGetInfoPage");
        LogPage.classList.remove("ShowCodePage")


    }, 300);


    fetch('../Controllers/com.createpasskey.controller.php', {


        method:"POST",
        headers: {

            "Content-type": "Application/x-www-form-urlencoded",

        },
        body: `Token=${encodeURIComponent(Token)}&Code=${encodeURIComponent(Code)}&ThisUserName=${UserName}`,

    })
    .then(response => response.text())
    .then(response =>{

        if(response == "false"){

            CreateNotification("007", "No hemos podido iniciar sesión con código Qr, inténtalo nuevamente.")

        }

    })

    const Url = `https://helloid.devlabsco.space/access/login/service/Response/Qr?Token=${Token}`

    new QRCode(QrContainer, Url);
    QrContainer.title = "";


    BackLogin.addEventListener('click', BackToLoginNow)

        function BackToLoginNow(){

            const Token = sessionStorage.getItem("QrToken");

            fetch('../Controllers/com.cancel.qr.php', {

                method:"POST",
                headers:{

                    "Content-Type": "Application/x-www-form-urlencoded",

                },
                body: `Token=${encodeURIComponent(Token)}`,

            })
            .then(Request => Request.text())
            .then(Return => {

                if(Return == "true"){

                    CreateNotification("008", "Hemos Cancelado la solicitud de inicio de sesión por Qr.")

                }else{

                    CreateNotification("009", "Ocurrió un error al cancelar la solicitud.")

                }

            })

            RequestInfo.classList.add('ShowGetInfoPage');
            LogPage.classList.add("RemoveCodePage");

            setTimeout(() => {
                
                RequestInfo.style.display = "flex";
                LogPage.style.display = "none";
                RequestInfo.classList.remove("ShowGetInfoPage");
                LogPage.classList.remove("RemoveCodePage")

            }, 400);


    }

}



