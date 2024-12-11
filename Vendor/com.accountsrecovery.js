const DeviceSessions = localStorage.getItem('DeviceSessions');
const AccTi = document.querySelector('.AccTi');
//const GetUserNameContainer = document.querySelector('.GetUserNameContainer');
const AccountSelector = document.querySelector('.AccountSelector');

if(DeviceSessions){

    AccTi.innerHTML = "Selecciona una <br> cuenta e inicia sesión";
    document.querySelector('.GetUserNameContainer').style.display = "none";
    AccountSelector.style.display = "flex";
    DisplayAccounts();
    SelectAccount()


}else{

    AccTi.innerHTML = "Escribe tu @ <br> e inicia sesión";
    document.querySelector('.GetUserNameContainer').style.display = "flex";
    AccountSelector.style.display = "none";

}

function PrepareForSaveAccount(){

    if (!localStorage.getItem('DeviceSessions')) {
        localStorage.setItem('DeviceSessions', JSON.stringify({ Accounts: [] }));
    }

}

function GetAccounts() {
  const data = localStorage.getItem('DeviceSessions');
  return data ? JSON.parse(data).Accounts : [];
}

function SaveAccounts(accounts) {
  localStorage.setItem('DeviceSessions', JSON.stringify({ Accounts: accounts }));
}

function AddAccount(account) {
  const accounts = GetAccounts();
  accounts.push(account);
  SaveAccounts(accounts);
}

function DisplayAccounts() {
  const Accounts = GetAccounts();
  const AccountSelector = document.querySelector('.AccountSelector');
  Accounts.forEach(Account => {

    const AccountElement = document.createElement('account');

    AccountElement.innerHTML = `
      <div class="SelectorProfilePhoto" style="background-image: url(${Account.Photo})"></div>
      <p class="AccountNameSelector">${Account.Name}</p>
      <div class="SelectorAccountStatus">
        <i class="fi fi-rr-unlock"></i>
      </div>
    `;

    AccountElement.setAttribute("user-name", Account.UserName);
    AccountElement.classList.add("SelectorAccount");

    AccountSelector.appendChild(AccountElement);

  });
}



//Select Account

function SelectAccount(){

  const SelectorAccount = document.querySelectorAll('.SelectorAccount');

  for(let Aument = 0; Aument < SelectorAccount.length; Aument++){

    const Account = SelectorAccount[Aument];

    Account.addEventListener('click', SelectThisAccount);

    function SelectThisAccount(){

      const AllAccounts = document.querySelectorAll('.SelectorAccount'); 
  
      AllAccounts.forEach(Account => {
        Account.style.display = "none"; 
      });
    
      Account.style.display = "flex";
      Account.classList.add('TimeLogin');
      document.querySelector('.SelectorPreloader').style.display = "flex";

      setTimeout(() => {
        
        const UserName = this.getAttribute("user-name");

        fetch('../Controllers/com.accountsrecovery.php', {
  
          method: "POST",
          headers: {
  
            "Content-Type": "Application/x-www-form-urlencoded",
  
          },
          body: `UserName=${encodeURIComponent(UserName)}`,
  
        })
        .then(response => response.json())
        .then(Object => {
  
          sessionStorage.setItem('CurrentSessionObject', JSON.stringify(Object));
          CreateDeliveryOrder()
  
        })

      }, 2000);

    }

  }

}


function CreateDeliveryOrder() {

  const Target = localStorage.getItem('ServiceTarget');
  const Session = JSON.parse(sessionStorage.getItem('CurrentSessionObject'));

  const Params = new URLSearchParams({
      UserName: Session.UserInfo.UserName,
      Mail: Session.UserInfo.Email,
      Name: Session.UserInfo.Name,
      ProfilePhoto: Session.UserInfo.ProfilePhoto
  });

  const UrlWithParams = `${Target}?${Params.toString()}`;

  fetch(UrlWithParams, {
      method: "GET",
      headers: {
          "Content-type": "Application/x-www-form-urlencoded"
      }
  })
  .then(Request => Request.text())
  .then(Returned => {

      const PostRedirectPath = localStorage.getItem('PostRedirectPath');

      App.location.href = PostRedirectPath;

  })
  .catch(ErrDescripter =>{

      console.error(`Ocurrió un error al procesar com.delivery:15-20L, ErrDescripter:{${ErrDescripter}}`)

  })


}
