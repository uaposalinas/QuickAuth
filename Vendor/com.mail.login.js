function CreateToken(l){

    let Token = '';

    for(let Aument = 0; Aument < l; Aument++){

        const Random = Math.floor( Math.random() * 10 );
        Token += Random;

    }

    const String = Token;
    const Match = String.match(/0/g);
    const TotalMatched = Match ? Match.length : 0;

    const Letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


    for(let Aument = 0; Aument < TotalMatched; Aument++){

        const Replace = Token.replace("0", Letters[ Math.floor( Math.random() * 26 ) ]);
        Token = Replace;

    }

    return Token

}


function InitMailLogService(){

    sessionStorage.removeItem('Toke');

    sessionStorage.setItem('Token', CreateToken(60));

    const ThisToken = sessionStorage.getItem("Token");

    //RemovePackCompress
    
    const GetAccountPack = sessionStorage.getItem('CurrentSessionObject');
    const GetAccountInformation = JSON.parse(GetAccountPack);

    //GetUserInfoForSend

    const AccountName = GetAccountInformation.UserInfo.Name;
    const GetUserName = GetAccountInformation.UserInfo.UserName;
    const GetUserMail = GetAccountInformation.UserInfo.Email;

    //CreateInfoObject

    class MailInfo{

        constructor(Name, UserName, Mail){

            this.Name = Name;
            this.UserName = UserName;
            this.Mail = Mail;

        }

    }
    

    const NewLoginRequest = new MailInfo(AccountName, GetUserName, GetUserMail);


    fetch('../Controllers/com.sendmail.login.php', {

        method: "POST",
        headers: {

            "Content-Type": "Application/x-www-form-urlencoded",

        },
        body: `AccountName=${encodeURIComponent(NewLoginRequest.Name)}&UserName=${encodeURIComponent(NewLoginRequest.UserName)}&Mail=${encodeURIComponent(NewLoginRequest.Mail)}&Token=${ThisToken}`,

    })
    
    .then(response => response.text())
    .then(Information =>{

        console.log(Information)

        if(Information == "true"){

            EmailSentForVerfication();

        }else if(Information == "false"){

            MailSentFailed()

        }else{

            MailSentFailed()

        }

    })

}


function MailSentFailed(){

    const StepIdentiferVariable = document.querySelector('.StepIdentiferVariable');
    const ShowMailProcess = document.querySelector('.ShowMailProcess');
    const ProcessDescripter = document.querySelector('.ProcessDescripter');

    StepIdentiferVariable.style.backgroundImage = "url(../Assets/MailError.gif)";
    ShowMailProcess.classList.add('ChangeTextState');
    ShowMailProcess.innerHTML = "Ocurrió un error al iniciar sesión";
    ProcessDescripter.classList.add("ChangeTextState");
    ProcessDescripter.innerHTML = `No es posible iniciar sesión en este momento.`;

    setTimeout(() => {
        
        ShowMailProcess.classList.remove('ChangeTextState');
        ProcessDescripter.classList.remove("ChangeTextState");

    }, 300);

}

function EmailSentForVerfication(){

    const StepIdentiferVariable = document.querySelector('.StepIdentiferVariable');
    const ShowMailProcess = document.querySelector('.ShowMailProcess');
    const ProcessDescripter = document.querySelector('.ProcessDescripter');

    StepIdentiferVariable.style.backgroundImage = "url(../Assets/MailSent.gif)";
    ShowMailProcess.classList.add('ChangeTextState');
    ShowMailProcess.innerHTML = "Enviamos un mensaje a:";
    ProcessDescripter.classList.add("ChangeTextState");
    ProcessDescripter.innerHTML = `${HideMail()}, si no lo recibes revisa la carpeta Spam.`;

    setTimeout(() => {
        
        ShowMailProcess.classList.remove('ChangeTextState');
        ProcessDescripter.classList.remove("ChangeTextState");
        CheckCurrentMailStatus()

    }, 300);

    

}

function HideMail(){

    const GetInformation = JSON.parse(sessionStorage.getItem("CurrentSessionObject"));
    const Mail = GetInformation.UserInfo.Email;

    const Parts = Mail.split("@");
    const Ident = Parts[0];
    const Domain = Parts[1];
    const Separator = "••••";

    const JoinIdent =  `${Ident.charAt(0)}${Separator}${Ident.charAt(Ident.length -1)}`;
    const JoinMail = `${JoinIdent}@${Domain}`;

    return JoinMail;


}


function CheckCurrentMailStatus(){

    const StepIdentiferVariable = document.querySelector('.StepIdentiferVariable');
    const ShowMailProcess = document.querySelector('.ShowMailProcess');
    const ProcessDescripter = document.querySelector('.ProcessDescripter');

    const ThisToken = sessionStorage.getItem("Token");

    setInterval(() => {
        
        fetch('../Controllers/com.check.mail.log.php', {

            method:"POST",
            headers: {

                "Content-Type": "Application/x-www-form-urlencoded",

            },
            body: `ThisToken=${encodeURIComponent(ThisToken)}`

        })
        .then(response => response.text())
        .then(Information => {

            if(Information == "Pending"){

                StepIdentiferVariable.style.backgroundImage = "url(../Assets/ApprovePending.gif)";
                ShowMailProcess.classList.add('ChangeTextState');
                ShowMailProcess.innerHTML = "Aprovación pendiente";
                ProcessDescripter.classList.add("ChangeTextState");
                ProcessDescripter.innerHTML = `Recibiste el mensaje y lo abriste, pulsa el botón "Autorizar"`;

            }else if(Information == "Completed"){

                StepIdentiferVariable.style.backgroundImage = "url(../Assets/Login.gif)";
                ShowMailProcess.classList.add('ChangeTextState');
                ShowMailProcess.innerHTML = "Listo, iniciaste sesión";
                ProcessDescripter.classList.add("ChangeTextState");
                ProcessDescripter.innerHTML = `Espera un momento, esto tomará unos segundos...`;

            }

        })
        .catch(Err => {

            console.error("Ocurrió un error al procesar esta solicitud, ErrDescripter: {"+Err+"}")

        })

    }, 500);

}


