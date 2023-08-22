  // alert box function 
  
function myFunction() {
  alert("I am an alert box!");
}
  

// confirm box function 

function meFunction() {
  var txt;
  if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}

// prompt box function 

function miFunction() {
  let text;
  let person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! How are you today?";
  }
  document.getElementById("test").innerHTML = text;
}

// console log() an object, with console log() function


var myObj = { firstname: "John", lastname: "Doe" };
console.log(myObj);
function mtFunction() {
  alert ("the console.log experiment is shown with this alert-box " + JSON.stringify(myObj));
}
//alert ("the console.log experiment is shown with this alert-box " + JSON.stringify(myObj));

//alert(myObj.toSource());
//alert(myObj.firstName);
//alert(myObj.lastName);

//console.assert example


console.assert(document.getElementById("rema"), "You have no element with ID 'rema'");
function mrFunction() {
  alert ("the console.assert experiment is shown with this alert-box " + JSON.stringify("You have no element with ID 'rema'"));
}



//Time and delay function exercise. setTimeout, setTimeinterval, clearTimeout, and clearTimeinterval 

function moFunction() {
  alert('Hi, timeout is 1.5 seconds');
}


function muFunction() {
  alert("Hello");
}




let myVar = setInterval(myTimer ,1000);
function myTimer() {
  const d = new Date();
  document.getElementById("timer").innerHTML = d.toLocaleTimeString();
}

//window.open and window.close function exercise

function mxFunction() {
  var myWindow = window.open("", "MsgWindow", "width=200,height=100");
  myWindow.document.write("<p>This is 'sampleWindow'. I am 200px wide and 100px tall!</p>");
}

document.getElementById("loctn").innerHTML = 
"The full URL of this page is:<br>" + window.location.href;


document.getElementById("hostname").innerHTML = 
"Page hostname is: " + window.location.hostname;


//window.history function exercise 
function goForward() {
  window.history.forward()
}
function goBack() {
  window.history.back()
}
