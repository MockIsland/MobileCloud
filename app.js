(function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD5-iUJv2V50Rwfc9d8TqiYXu_5Ph5tOhU",
    authDomain: "myfirebaseproject-35641.firebaseapp.com",
    databaseURL: "https://myfirebaseproject-35641.firebaseio.com",
    projectId: "myfirebaseproject-35641",
    storageBucket: "myfirebaseproject-35641.appspot.com",
    messagingSenderId: "411272623899"
  };
  firebase.initializeApp(config);

  //Get element
  const preObject = document.getElementById('object');

  //Create references
  const dbRefObject = firebase.database().ref().child('object');

  dbRefObject.on('value', snap =>{
	preObject.innerText = JSON.stringify(snap.val(), null, 3);
  });


}());