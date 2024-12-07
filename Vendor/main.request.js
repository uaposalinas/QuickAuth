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

    fetch('../Controllers/com.detect.servicemap.php', {

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
    
            GlobalPreloader.style.opacity = "0";
            GetUserNameInfo.style.opacity = "1";
    
            const Object = QueryResults;
            const ServiceIdentifer = document.querySelector('.ServiceIdentifer');
            
            const ServiceName = document.querySelector('.ServiceName');
    
            const Name = Object.ServiceInfo.ServiceName;
            const Logo = Object.ServiceInfo.ServiceLogo;
    
            ServiceName.innerHTML = Name;
            ServiceIdentifer.style.backgroundImage = `url(${Logo})`;

        }else if(QueryResults.access == "false"){

            App.location.href = "https://helloid.devlabsco.space";

        }
        
    })
    .catch(redirect => {

        App.location.href = "https://helloid.devlabsco.space";

    })

}