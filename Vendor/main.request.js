const App = window;

App.addEventListener('load', InitApp);

function InitApp(e){




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