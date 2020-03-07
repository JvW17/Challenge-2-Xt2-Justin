var d = new Date();
var uren = d.getHours();

if (uren >= 18){
  text = "Het is avond.";
  text2 = "Tijd voor wat ontspanning.";
}

else if (uren >= 12){
  text = "Het is middag.";
  text2 = "Maak er een productieve dag van.";
}

else if (uren >= 6){
  text = "Het is ochtend.";
  text2 = "Tijd om op te staan!";
}

else {
  text = "Het is nacht.";
  text2 = "Ga maar lekker slapen. Zzz...";
}
document.getElementById("tijdTesten").innerHTML = text;
document.getElementById("tijdTestenOnderschrift").innerHTML = text2;
