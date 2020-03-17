/* Deze regels JavaScript zorgen ervoor dat er wordt aangegeven of het ochtend, middag, avond of nacht is. */
var d = new Date();
var uren = d.getHours();

if (uren >= 18){
  text = "Het is avond.";
  text2 = "Tijd voor ontspanning.";
}

else if (uren >= 12){
  text = "Het is middag.";
  text2 = "Geniet van je dag!";
  // document.body.background = "afbeeldingen/ruimte avond.jpg";
}

else if (uren >= 6){
  text = "Het is ochtend.";
  text2 = "Tijd om op te staan!";
}

else {
  text = "Het is nacht.";
  text2 = "Ga maar lekker slapen.";
}
document.getElementById("tijdTesten").innerHTML = text;
document.getElementById("tijdTestenOnderschrift").innerHTML = text2;


/* Deze regels JavaScript zorgen ervoor dat de huidige datum wordt weergegeven. */
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10)
{
    dd='0'+dd;
}

if(mm<10)
{
    mm='0'+mm;
}
today = dd+'-'+mm+'-'+yyyy;
document.getElementById("datum").innerHTML = today;




function klokWerkendKrijgen() {
  // Initialise any local time clocks
  initLocalClocks();
  // Start the seconds container moving
  setUpMinuteHands();
  // Set the intial minute hand container transition, and then each subsequent step
  moveMinuteHands();
};

function initLocalClocks() {
  // Get the local time using JS
  var date = new Date;
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();

  // Create an object with each hand and it's angle in degrees
  var hands = [
    {
      hand: 'hours',
      angle: (hours * 30) + (minutes / 2)
    },
    {
      hand: 'minutes',
      angle: (minutes * 6)
    },
    {
      hand: 'seconds',
      angle: (seconds * 6)
    }
  ];
  // Loop through each of these hands to set their angle
  for (var j = 0; j < hands.length; j++) {
    var elements = document.querySelectorAll('.' + hands[j].hand);
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
        elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
        // If this is a minute hand, note the seconds position (to calculate minute position later)
        if (hands[j].hand === 'minutes') {
          elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
        }
    }
  }
}

function setUpMinuteHands() {
  // Find out how far into the minute we are
  var containers = document.querySelectorAll('.minutes-container');
  var secondAngle = containers[0].getAttribute("data-second-angle");
  if (secondAngle > 0) {
    // Set a timeout until the end of the current minute, to move the hand
    var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
    setTimeout(function() {
      moveMinuteHands(containers);
    }, delay);
  }
}



function moveMinuteHands(containers) {
  for (var i = 0; i < containers.length; i++) {
    containers[i].style.webkitTransform = 'rotateZ(6deg)';
    containers[i].style.transform = 'rotateZ(6deg)';
  }

  // Then continue with a 60 second interval
  setInterval(function() {
    for (var i = 0; i < containers.length; i++) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 12;
      } else {
        containers[i].angle += 6;
      }
      containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
      containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
    }
  }, 60000);
}



/*

/* Deze regels JavaScript zorgen ervoor dat de klok de huidige tijd aangeeft
function juisteTijdAangeven(){
  /* Onderstaande regels JS halen de huidige tijd op voor de seconden, minuten en uren
  var date = new Date();
  var seconden = date.getSeconds();
  var minuten = date.getMinutes();
  var uren = date.getHours();

  /* Onderstaande regels JS geven een hoek aan iedere wijzer van de klok
  var wijzers = [
    {
      wijzer: 'uren',
      angle: (uren * 30) + (minuten / 2)
    },
    {
      wijzer: 'minuten',
      angle: (minuten * 6)
    },
    {
      wijzer: 'seconden',
      angle: (seconden * 6)
    }
  ];
  /* Onderstaande regels JS zorgen dat de hoek van de wijzers steeds wordt geüpdated
  for (var j = 0; j < wijzers.length; j++){
    var elements = document.querySelectorAll('.' + wijzers[j].wijzer);
    for (var k = 0; k < elements.length; k++) {
      elements[k].style.webkitTransform = 'rotateZ('+ wijzers[j].angle + 'deg)';
      elements[k].style.transform = 'rotateZ('+ wijzers[j].angle + 'deg)';

      if(wijzers[j].wijzer === 'minuten'){
        elements[k].parentNode.setAttribute('data-seconde-angle', wijzers[j + 1].angle);
      }
    }
  }
}



function setUpMinuteHands() {
  // Find out how far into the minute we are
  var containers = document.querySelectorAll('.minutes-container');
  var secondAngle = containers[0].getAttribute("data-seconde-angle");
  if (secondAngle > 0) {
    // Set a timeout until the end of the current minute, to move the hand
    var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
    setTimeout(function() {
      moveMinuteHands(containers);
    }, delay);
  }
}


  Do the first minute's rotation

function moveMinuteHands(containers) {
  for (var i = 0; i < containers.length; i++) {
    containers[i].style.webkitTransform = 'rotateZ(6deg)';
    containers[i].style.transform = 'rotateZ(6deg)';
  }
  // Then continue with a 60 second interval
  setInterval(function() {
    for (var i = 0; i < containers.length; i++) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 12;
      } else {
        containers[i].angle += 6;
      }
      containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
      containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
    }
  }, 60000);
}
*/
