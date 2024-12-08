


const SendCode = document.querySelector('.SendCode');

SendCode.disabled = true

const UserKey = NewLogUserKey;
const PasskeyIDs = PasskeyID;

document.querySelector('.SendOperationToken').value = PasskeyIDs;

//Obtener datos de redirección

const GetOrigin = window.origin;
const AddPath = "/Auth/Service/Internal/";
const Service = "com.taskflow";
const CompletePath = "/type/passkey/response";


//Crear la ruta de acceso de inicio de sesión

const CreateURL = `${GetOrigin}${AddPath}${Service}${CompletePath}?Token=${PasskeyIDs}&?UserName=${UserKey}`;

new QRCode(QrContainer, CreateURL);
QrContainer.title = "";


//Bloqueamos las solicitudes de reinicio de la pagina para evitar reenvio de datos

window.addEventListener('nones', e=>{

    const KeyPressed = e.keyCode;

    if(e.ctrlKey && KeyPressed == 82 ||  KeyPressed == 116){

        e.preventDefault()

    }

})


//Manejo del input del codigo

document.querySelector('.SendCode').addEventListener('click', e=>{

    const GetAllInputs = document.querySelectorAll('.GetCodeForThis');
    const GetAllInputsNumber = GetAllInputs.length;
    
    for(let Aument = 0; Aument < GetAllInputsNumber; Aument++){
    
        const Result = GetAllInputs[Aument];

        const GetInputsValue = Result.value;
            
        if(GetAllInputs[0].value.trim() === '' || GetAllInputs[1].value.trim() === '' || GetAllInputs[2].value.trim() === '' || GetAllInputs[3].value.trim() === '' || GetAllInputs[4].value.trim() === '' || GetAllInputs[5].value.trim() === ''){

            Result.style.border = "2px solid #FF0000";

            setTimeout(() => {
                
                Result.style.border = "2px solid #FF0000";
                Result.style.border = "2px solid #b88648";

            }, 2000);

        }else{

            document.querySelector('.CompleteCodeResult').value += GetInputsValue;

        }

        if(document.querySelector('.CompleteCodeResult').value.length > 5 && document.querySelector('.CompleteCodeResult').value.length < 7){

            document.querySelector('.FormControl').submit()

        }

     
    
    }

})

const GetAllInputs = document.querySelectorAll('.GetCodeForThis');
const GetAllInputsNumber = GetAllInputs.length;

for(let Aument = 0; Aument < GetAllInputsNumber; Aument++){

    const GetElements = GetAllInputs[Aument];

    GetElements.addEventListener('keydown', RevPosition)

    function RevPosition(e){

            const GetKeyPressed = e.keyCode;

            if(GetKeyPressed == 32){

                this.value = "";

            }

            var GetCurrentPosition = Array.from(GetAllInputs).indexOf(e.target);

            if(GetCurrentPosition >= GetAllInputsNumber - 1){



            }else{

                setTimeout(() => {
                
                    GetAllInputs[GetCurrentPosition + 1].focus();
    
                }, 200);
            }

    }

}


const GoToCode = document.querySelector('.GoToCode');
const GetCode = document.querySelector('.GetCode');
const LogPage = document.querySelector('.LogPage');

GoToCode.addEventListener('click', e=>{

    LogPage.style.display = "none";
    GetCode.style.display ="flex";

})