// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQD_Ed-9OTlhq6YVUNKdvyDGOQU8N_30w",
    authDomain: "flow-2b430.firebaseapp.com",
    databaseURL: "https://flow-2b430-default-rtdb.firebaseio.com",
    projectId: "flow-2b430",
    storageBucket: "flow-2b430.appspot.com",
    messagingSenderId: "746366804126",
    appId: "1:746366804126:web:0624c5529091bef8c25b8f",
    measurementId: "G-RHTPBH3SQE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var database = firebase.database();
var tankLevelRef = database.ref('tankLevel');
var dailyWaterUsageRef = database.ref('dailyWaterUsage');
var alertsRef = database.ref('alerts');

tankLevelRef.on('value', function(snapshot) {
    document.getElementById('tankLevelData').innerText = snapshot.val();
});

dailyWaterUsageRef.on('value', function(snapshot) {
    document.getElementById('dailyWaterUsageData').innerText = snapshot.val();
});

alertsRef.on('child_added', function(snapshot) {
    var alertItem = document.createElement('li');
    alertItem.innerText = snapshot.val();
    document.getElementById('alertList').appendChild(alertItem);
});

alertsRef.on('child_changed', function(snapshot) {
    var alertItem = document.createElement('li');
    alertItem.innerText = snapshot.val();
    document.getElementById('alertList').appendChild(alertItem);
});