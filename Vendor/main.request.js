const App = window;

App.addEventListener('load', InitApp);

function InitApp(e){


    const Url = App.location.href;
    const GetArguments = Url.split("?");
    const ServiceMap = GetArguments[1];

    SetLoginService(ServiceMap.substr(13, ServiceMap.length -1))

}


function CreateNotification(ID, Data, Priority){

    const NotificationsRenderParent = document.querySelector('.NotificationsRenderParent');
    const NotificationsContent = document.querySelector('.NotificationsContent');
    const CloseButton = document.querySelector('.CloseButton');
    const NotificationsRender = document.querySelector('.NotificationsRender');

    class Notification{

        constructor(NotificationID, NotificationContent, Priority){
    
            this.NotificationID = NotificationID;
            this.NotificationContent = NotificationContent;
            this.Priority = Priority;
    
    
        }
    
    }


    const NotificationObject = new Notification(ID, Data, Priority);

    NotificationsRenderParent.classList.add("ShowNotification");
    NotificationsContent.innerHTML = Data;

    setTimeout(() => {
        
        NotificationsRender.classList.add('CloseNotification');

        setTimeout(() => {
            
            NotificationsRenderParent.classList.remove("ShowNotification");
            NotificationsRender.classList.remove('CloseNotification')

        }, 300);

    }, 7000);

    CloseButton.addEventListener('click', CloseThisNotification);

    function CloseThisNotification(){

        NotificationsRender.classList.add('CloseNotification');

        setTimeout(() => {
            
            NotificationsRenderParent.classList.remove("ShowNotification");
            NotificationsRender.classList.remove('CloseNotification')

        }, 300);

    }

}


function SetLoginService(ServiceKey){

    const Key = ServiceKey;

    fetch('Controllers/com.detect.servicemap.php', {

        method:"POST",
        headers:{

            "Content-Type": "Application/x-www-form-urlencoded",

        },
        body: `Token=${encodeURIComponent(Key)}`,

    })
    .then(response => response.json())
    .then(QueryResults => {

        if(QueryResults.access == "true"){

            const GlobalPreloader = document.querySelector('.GlobalPreloader');
            const GetUserNameInfo = document.querySelector('.GetUserNameInfo');
            const SensePath = document.querySelector('.SensePath');
    
            GlobalPreloader.style.opacity = "0";
            GetUserNameInfo.style.opacity = "1";

            GetUserNameForLogin.focus()
    
            const Object = QueryResults;
            const ServiceIdentifer = document.querySelector('.ServiceIdentifer');
            const ServiceIdentifer2 = document.querySelector('.ServiceIdentifer2');
            const TermsTitle = document.querySelector('.TermsTitle');
            
            const ServiceName = document.querySelector('.ServiceName');
            const ServiceName2 = document.querySelector('.ServiceName2')
    
            const Name = Object.ServiceInfo.ServiceName;
            const Logo = Object.ServiceInfo.ServiceLogo;
            const Target = Object.ServiceInfo.TargetUrl;
            const Post = Object.ServiceInfo.PostRedirect;

            localStorage.setItem('ServiceTarget', Target);
            localStorage.setItem('PostRedirectPath', Post);
            localStorage.setItem('ServiceName', Name);
    
            ServiceName.innerHTML = Name;
            ServiceName2.innerHTML = Name;
            
            SensePath.innerHTML = `Iniciar Sesión <ion-icon name="chevron-forward-outline"></ion-icon> ${Name}`
            ServiceIdentifer.style.backgroundImage = `url(${Logo})`;
            ServiceIdentifer2.style.backgroundImage = `url(${Logo})`;
            TermsTitle.innerHTML = `¿Hello ID puede compartir datos con ${Name}?`;
            
            TypeDisclamer()

        }else if(QueryResults.access == "false"){

            App.location.href = "https://helloid.dexly.space";

        }
        
    })
    .catch(redirect => {

        App.location.href = "https://google.com";

    })

}


App.addEventListener('load', RefreshFiles)

function RefreshFiles(){

    const GetStyles = document.getElementsByTagName('link');
    const GetScripts = document.getElementsByTagName('script');

    for(let Aument = 0; Aument < GetStyles.length; Aument++){

        const Style = GetStyles[Aument];
        
        if(Style.rel == "stylesheet"){

            Style.href = `${Style.href}?v=${Math.random()}`;
            Style.setAttribute("refresh-status", "Updated");
            Style.setAttribute("controller", "devlabs-autoloadapi.flx");
            Style.setAttribute("autoload", "done")

        }

    }



}



document.querySelector('.CreateAccount').addEventListener('click', CreateNewAccount);

function CreateNewAccount(){

    window.location.href = "https://helloid.dexly.space/access/signin/service/request/";

}

document.querySelector('.ChangeAccount').addEventListener('click', ChangeTheAccount);

function ChangeTheAccount(){

    Letter.style.display = "flex";
    GetUserNameContainer.style.display = "flex";
    GetUserNameContainer.classList.add('ReturnGetInfo');
    SelectLoginMethod.style.display = "none";
    CreateAccount.classList.add("ChangeAccount");
    CreateAccount.classList.remove("CreateAccount");
    CreateAccount.innerHTML = "Cambiar de cuenta";
    Title.classList.add('ChangeTextState');
    Title.innerHTML = "Escribe tu @ <br> e inicia sesión";
    GetUserNameForLogin.value = "";
    document.querySelector('.BackPosition2').style.display = "none";

    setTimeout(() => {
        
        Title.classList.remove('ChangeTextState');
        GetUserNameContainer.classList.remove('ReturnGetInfo');
        GetUserNameForLogin.focus()

    }, 500);

}


function TypeDisclamer(){

    const DisclamerInfo = document.querySelector('.DisclamerInfo');
DisclamerInfo.innerHTML = `Si continúas, Hello ID compartirá tu nombre, tu dirección de correo electrónico, tu preferencia de idioma y tu imagen de perfil con ${localStorage.getItem('ServiceName')}. Consulta la <a href="/politica-privacidad" target="_blank">Política de Privacidad</a> y los <a href="/terminos-condiciones" target="_blank">Términos del Servicio</a> de este servicio.`

}

const Approve = document.querySelector('.Approve');
const NoApprove = document.querySelector('.NoApprove');

NoApprove.addEventListener('click', e=>{ App.location.reload() });
Approve.addEventListener('click', e=>{ Preloader.style.display = "flex"; PrepareForSaveAccount(); const Object = JSON.parse(sessionStorage.getItem('CurrentSessionObject'));const NewAccount = {Photo: Object.UserInfo.ProfilePhoto,Name: Object.UserInfo.Name, UserName: Object.UserInfo.UserName}; AddAccount(NewAccount); CreateDeliveryOrder() /*setTimeout(() => { App.location.href = localStorage.getItem('PostRedirectPath') }, 2500); */})



  






