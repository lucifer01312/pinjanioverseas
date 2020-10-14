var firebase=require('firebase');
var firebaseConfig = {
    apiKey: "AIzaSyB6CD1ToGJWvn2Rg2NdZRVdMuQe-b--gTI",
    authDomain: "pinjani-exports.firebaseapp.com",
    databaseURL: "https://pinjani-exports.firebaseio.com",
    projectId: "pinjani-exports",
    storageBucket: "pinjani-exports.appspot.com",
    messagingSenderId: "919287523975",
    appId: "1:919287523975:web:f440c2ffc12dc4b4eaa622"
  };
  firebase.initializeApp(firebaseConfig);
  var db=firebase.database();
  module.exports=db;