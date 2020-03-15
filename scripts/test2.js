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
