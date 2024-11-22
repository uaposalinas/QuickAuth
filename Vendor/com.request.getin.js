const Login = window;

const GetUserNameForLogin = document.querySelector('.GetUserNameForLogin');
const ConfirmButton = document.querySelector('.ConfirmButton');
const Preloader = document.querySelector('.Preloader');
const Letter = document.querySelector('.Letter');
const Title = document.querySelector('.Title');
const CreateAccount = document.querySelector('.CreateAccount');
const GetUserNameContainer = document.querySelector('.GetUserNameContainer');
const SelectLoginMethod = document.querySelector('.SelectLoginMethod');
const UserProfilePhoto = document.querySelector('.UserProfilePhoto');
const AccountName = document.querySelector('.AccountName');

let IsShowing = false


Login.addEventListener('load', InitLoginService);

function InitLoginService(){

    ConfirmButton.addEventListener('click', SendRequestToServer);
    GetUserNameForLogin.addEventListener('keydown', e=>{
        
        if(IsShowing === false || GetUserNameForLogin.value.trim() == ''){

            GetUserNameForLogin.value = "@"+GetUserNameForLogin.value;

            IsShowing = true

        }

        if(e.keyCode == 13){

            SendRequestToServer();

        }

    })

    function SendRequestToServer(){

        Preloader.style.display = "flex";

        fetch('../Controllers/com.get.login.php', {

            method:"POST",
            headers:{

                "Content-Type": "Application/x-www-form-urlencoded"

            },
            body: `UserName=${encodeURIComponent(GetUserNameForLogin.value.substr(1,1000))}`

        })
        .then(response => response.json())
        .then(Information =>{

            console.log(Information);
            
            AccountName.innerHTML = Information.UserInfo.Name;
            UserProfilePhoto.style.backgroundImage = `url(${Information.UserInfo.ProfilePhoto})`;

            setTimeout(() => {
                
                SelectLoginMethod.style.display = "flex";


                StopPreloader();

                Letter.style.display = "none";
                GetUserNameContainer.style.display = "none";
                SelectLoginMethod.style.opacity = "1";
                CreateAccount.innerHTML = "Cambiar de cuenta";
                Title.classList.add('ChangeTextState');
                Title.innerHTML = "Selecciona una <br> opcion para iniciar sesión";

                setTimeout(() => {
                    
                    Title.classList.remove('ChangeTextState');


                }, 500);

            }, 1000);

        })
        .catch(Err => {

            console.error('Ocurrió un error al procesar esta solicitud. ErrDescripter{'+Err+"}")

        })

    }

}

function StopPreloader(){

    Preloader.style.opacity = "0";
    setTimeout(() => {
        
        Preloader.style.display = "none";
        Preloader.style.opacity = "1";

    }, 350);

}

//ReturnPosition


const BackPosition = document.querySelector('.BackPosition');

BackPosition.addEventListener('click', ReturnToSelectMethod);

function ReturnToSelectMethod(){

    LoginWithPassword.style.display = "none";
    LoginWithMail.style.display = "none";
    SelectLoginMethod.style.display = "flex";

    Title.classList.add('ChangeTextState');
    Title.innerHTML = "Selecciona una <br> opcion para iniciar sesión";
    BackPosition.style.display = "none";

    setTimeout(() => {
        
        Title.classList.remove('ChangeTextState');


    }, 500);

}


//SelectLoginMethod

const LoginWithPassword = document.querySelector('.LoginWithPassword');
const LoginWithMail = document.querySelector('.LoginWithMail');

const Option = document.querySelectorAll('.Option');
const Limit = Option.length;

for(let Aument = 0; Aument < Limit; Aument++){

    const Options = Option[Aument];

    Options.addEventListener('click', SelectThis);

    function SelectThis(e){

        document.querySelector('.BackPosition').style.display = "flex";

        const Position = Array.from(Option).indexOf(e.currentTarget);

        if(Position == 0){

            SelectLoginMethod.style.display = "none";
            LoginWithPassword.style.display = "flex";
            Title.classList.add('ChangeTextState');
            Title.innerHTML = "Escribe tu <br> contraseña para iniciar sesión";

            setTimeout(() => {
                
                Title.classList.remove('ChangeTextState');


            }, 500);

        }else if(Position == 1){

            SelectLoginMethod.style.display = "none";
            LoginWithMail.style.display = "flex";
            Title.classList.add('ChangeTextState');
            Title.innerHTML = "Te enviaremos un <br> correo para iniciar sesión";

            setTimeout(() => {
                
                Title.classList.remove('ChangeTextState');


            }, 500);

        }else if(Position == 2){

            alert('Login width Passkeys')

        }

    }

}
