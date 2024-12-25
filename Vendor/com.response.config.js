//Obtener el código

const GetCodeToConvert = GetCode;

//Obtener Nombre de usuario

const UserName = GetUserName;

//Obtener Contraseña

const Password = GetPass;

//Escribir nombre de usuario

const LoginDescriptionToken = document.querySelector('.LoginDescriptionToken');

LoginDescriptionToken.innerHTML = `Estás intentando iniciar sesión en ${UserName} utilizando Dexly Passkeys pulsa el botón Autorizar y escribe el código en el dispositivo donde estás tratando de iniciar sesión.`

//Primer Digito

const Digit1 = GetCodeToConvert.substr(0,1);
const Digit2 = GetCodeToConvert.substr(1,1);
const Digit3 = GetCodeToConvert.substr(2,1);
const Digit4 = GetCodeToConvert.substr(3,1);
const Digit5 = GetCodeToConvert.substr(4,1);
const Digit6 = GetCodeToConvert.substr(5,1);

//Obtenemos los elementos donde se va a escribir el contentido

const ExitCodeItems = document.querySelectorAll(".ExitCodeVar");
const Limit = ExitCodeItems.length;

for(let Aument = 0; Aument < Limit; Aument++){

    const Item = ExitCodeItems[Aument];

    ExitCodeItems[0].innerHTML = Digit1;
    ExitCodeItems[1].innerHTML = Digit2;
    ExitCodeItems[2].innerHTML = Digit3;
    ExitCodeItems[3].innerHTML = Digit4;
    ExitCodeItems[4].innerHTML = Digit5;
    ExitCodeItems[5].innerHTML = Digit6;

}


//Obtenemos las paginas existentes

const AuthPage = document.querySelector('.AuthPage');
const SessionNoLogged = document.querySelector('.SessionNoLogged');
const ShowCode = document.querySelector('.ShowCode');


const AuthButtons = document.querySelector('.AuthButtons');
const AuthButton = document.querySelector('.AuthButton');
const FinishLogin = document.querySelector('.FinishLogin');
const GetPassword = document.querySelector('.GetPassword');

const GetSession = localStorage.getItem('@HKEY_LOCAL_MACHINE');

AuthButton.addEventListener('click', e=>{

    if(GetSession){

        AuthPage.style.display = "none";
        ShowCode.style.display = "flex";
        SessionNoLogged.style.display = "none";

    }else{

      AuthPage.style.display = "none";
        ShowCode.style.display = "none";
        SessionNoLogged.style.display = "flex";

    }

})

AuthButtons.addEventListener('click', e=>{


  const LoginDescriptionTokens2 = document.querySelector('.LoginDescriptionTokens2');

  if(GetPassword.value.trim() === ''){

    LoginDescriptionTokens2.classList.add('PasswordError');
    LoginDescriptionTokens2.innerHTML = "Debes escribir la contraseña de tu cuenta";

    setTimeout(() => {
        
        LoginDescriptionTokens2.classList.remove('PasswordError');
        LoginDescriptionTokens2.innerHTML = "No pudimos obtener tu cuenta en este dispositivo.";

    }, 3000);

  }else if(GetPassword.value == Password){

    SessionNoLogged.style.display = "none";
    ShowCode.style.display = "flex";

  }else{
    
    LoginDescriptionTokens2.classList.add('PasswordError');
    LoginDescriptionTokens2.innerHTML = "La contraseña especificada no es correcta";
    setTimeout(() => {
        
        LoginDescriptionTokens2.classList.remove('PasswordError');
        LoginDescriptionTokens2.innerHTML = "No pudimos obtener tu cuenta en este dispositivo.";

    }, 3000);


  }


})

GetPassword.addEventListener('keydown', e=>{

    const LoginDescriptionTokens2 = document.querySelector('.LoginDescriptionTokens2');

    const KeyPressed = e.keyCode;

    if(KeyPressed == 13){

        if(GetPassword.value.trim() === ''){

            LoginDescriptionTokens2.classList.add('PasswordError');
            LoginDescriptionTokens2.innerHTML = "Debes escribir la contraseña de tu cuenta";
        
            setTimeout(() => {
                
                LoginDescriptionTokens2.classList.remove('PasswordError');
                LoginDescriptionTokens2.innerHTML = "No pudimos obtener tu cuenta en este dispositivo.";
        
            }, 3000);
        
          }else if(GetPassword.value == Password){
        
            SessionNoLogged.style.display = "none";
            ShowCode.style.display = "flex";
        
          }else{
            
            LoginDescriptionTokens2.classList.add('PasswordError');
            LoginDescriptionTokens2.innerHTML = "La contraseña especificada no es correcta";
            setTimeout(() => {
                
                LoginDescriptionTokens2.classList.remove('PasswordError');
                LoginDescriptionTokens2.innerHTML = "No pudimos obtener tu cuenta en este dispositivo.";
        
            }, 3000);
        
        
          }

    }

})


FinishLogin.addEventListener('click', e=>{

  alert('deberia cerrarse');

  window.close()

})
