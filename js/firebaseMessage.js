//const firebase = require('firebase');
// Initialize Firebase
const config = {
  apiKey: "AIzaSyB9lND3_OLxUVEk_tXiCtZcf7zCigCUc38",
  authDomain: "ibm-gtsp.firebaseapp.com",
  databaseURL: "https://ibm-gtsp.firebaseio.com",
  projectId: "ibm-gtsp",
  storageBucket: "ibm-gtsp.appspot.com",
  messagingSenderId: "866024684107"
};
  
  firebase.initializeApp(config);
  
  
  ///////////////////////////////////////////////////////////
  
  //Purpose: clears messages in: data base and web document (webpage)
  function clearMessages() {
    $('.messageList').remove();
  }
  
  function clearFunction() {
    firebase.database().ref('message').set(null);
    clearMessages();
  }
  
  /////////////////////////////////////////////////////////////////
  
  //Purpose: writes the message to the data base
  function writeFunction() {
    var enteredName = document.getElementById("messageNameField")
    var enteredRating = document.getElementById("messageRatingField")
    var enteredText = document.getElementById("messageTextField")
  
    firebase.database().ref('message').push({
      name: enteredName.value,
      rating: enteredRating.value,
      text: enteredText.value
    });
  
    document.getElementById('messageNameField').value = '';
    document.getElementById('messageRatingField').value = '';
    document.getElementById('messageTextField').value = '';
  }
  
  //////////////////////////////////////////////////////////
  
  //Purpose: provides the display of a single message
  function singleDisplay(divNum, messy) {
    var d = document.createElement("div");
    d.className = 'messageList';
    d.id = "div" + String(divNum);
  
    var pName = document.createElement('P');
    pName.id = 'name';
    var pRating = document.createElement('P');
    pRating.id = 'rating';
    var pText = document.createElement('P');
    pText.id = 'text';
    var hrTag = document.createElement('hr');
  
    pNameInner = document.createTextNode(messy.name);
    pRatingInner = document.createTextNode(messy.rating);
    pTextInner = document.createTextNode(messy.text);
  
    pName.appendChild(pNameInner);
    pRating.appendChild(pRatingInner);
    pText.appendChild(pTextInner);
  
    d.appendChild(pName);
    d.appendChild(pRating);
    d.appendChild(pText);
    d.appendChild(hrTag);
  
    document.getElementById('messageList').appendChild(d);
  }
  
  ////////////////////////////////////////////////////////////
  
  //Purpose: Everytime it reads a set of messages, it
  //displays all of the messages
  function readFunction() {
  
    firebase.database().ref('message/').once('value').then(snapshot => {
        const messages = [];
        snapshot.forEach(child => {
            messages.push({
              key: child.val()
          });
        });
  
        clearMessages();
  
        for (index = 0; index < messages.length; index++) {
          singleDisplay(index, messages[index].key)
          }
      });
  }
  
  /////////////////////////////////////////////////////////
  
  //Purpose: Calls readFunction everytime there is a change to the database 
  function updateDisplay(clickDisplay) {
    firebase.database().ref('message/').on('value', function(dataSnapshot) {
      readFunction();
    });
  }