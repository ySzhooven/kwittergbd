const firebaseConfig = {
    apiKey: "AIzaSyBby2argVmY-Br1rL0uYm01FFWj-cDPS1M",
    authDomain: "kwitterbd-8913d.firebaseapp.com",
    databaseURL: "https://kwitterbd-8913d-default-rtdb.firebaseio.com",
    projectId: "kwitterbd-8913d",
    storageBucket: "kwitterbd-8913d.appspot.com",
    messagingSenderId: "1093097947082",
    appId: "1:1093097947082:web:7b8fca04e0c70f2ae51933"
  };
  
//função addUser
function addUser() 
{
// Obtenha o nome do usuário da caixa de entrada e o armazene dentro de uma variável
user_name= document.getElementById("user_name").value;
// Armazene o valor da variável user_name no armazenamento local com a chave user_name
localStorage.setItem("user_name",user_name)
// Redirecione os usuários para kwitter_room.html.
window.location="kwitter_room.html"
}

