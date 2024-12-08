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

    AnimateText("El inicio de sesión mediante código Qr no está disponible en este momento.");
 
}

