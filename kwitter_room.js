const firebaseConfig = {
    apiKey: "AIzaSyBby2argVmY-Br1rL0uYm01FFWj-cDPS1M",
    authDomain: "kwitterbd-8913d.firebaseapp.com",
    databaseURL: "https://kwitterbd-8913d-default-rtdb.firebaseio.com",
    projectId: "kwitterbd-8913d",
    storageBucket: "kwitterbd-8913d.appspot.com",
    messagingSenderId: "1093097947082",
    appId: "1:1093097947082:web:7b8fca04e0c70f2ae51933"
  };
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Bem-vindo ao Kwitter " + user_name + "!";

  function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "Adicionando nome da sala"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
  }

  function getData(){
    firebase.database().ref("/").on('value', function(snapshot){
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot){
            childKey = childSnapshot.key;
            Room_names = childKey;
             row = "<div class='room_name' id=" + Room_names + " onclick= 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
             document.getElementById("output").innerHTML += row;
        })
    });
  }
  getData();
  function redirectToRoomName(name){
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.HTML"
  }

  function logout()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }

