const DeviceSessions = localStorage.getItem('DeviceSessions');
const AccTi = document.querySelector('.AccTi');
const ReturnExistAccounts = document.querySelector('.ReturnExistAccounts');
const AccountSelector = document.querySelector('.AccountSelector');
const EditAccounsts = document.querySelector('.EditAccounsts');

if(DeviceSessions){

    AccTi.innerHTML = "Selecciona una <br> cuenta e inicia sesión";
    document.querySelector('.GetUserNameContainer').style.display = "none";
    ReturnExistAccounts.style.display = "flex";
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

  const existingAccount = accounts.find(acc => acc.UserName === account.UserName);

  if (existingAccount) {

    CreateNotification("010", "Ya has iniciado sesión con esta cuenta en este dispositivo. Puedes encontrarla en tu lista de cuentas activas.");
    return; 
  }

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

        fetch('Controllers/com.accountsrecovery.php', {
  
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


const AddNewAccountButton = document.querySelector('.AddNewAccountButton');

AddNewAccountButton.addEventListener('click', AddNewAccount);

function AddNewAccount(){

  AccountSelector.style.animation = "fadeOutDown 0.5s";
  setTimeout(() => {
    
    AccountSelector.style.display = "none";
    AccountSelector.style.animation = "none";

    setTimeout(() => {
      
      document.querySelector('.GetUserNameContainer').style.display = "flex";

    }, 100);

  }, 300);

}


ReturnExistAccounts.addEventListener('click', ReturnToAccounts);

function ReturnToAccounts(){


  document.querySelector('.GetUserNameContainer').style.animation = "fadeOutDown 0.5s";

  setTimeout(() => {
    
    document.querySelector('.GetUserNameContainer').style.display = "none";
    document.querySelector('.GetUserNameContainer').style.animation = "none";

    setTimeout(() => {
      
        AccountSelector.style.display = "flex";

    }, 100);

  }, 300);

}