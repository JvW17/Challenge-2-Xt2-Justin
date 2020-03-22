/* Onderstaande function zorgt ervoor dat de huidige tijd weergegeven wordt */
function huidigeTijd(){
  // Onderstaande drie regels zorgen ervoor dat de huidige tijd en de uren en minuten daarvan worden opgehaald.
  var vandaag = new Date();
  var uren = vandaag.getHours();
  var minuten = vandaag.getMinutes();

  // Onderstaande twee regels zorgen ervoor dat de opgehaalde uren en minuten gekoppeld worden aan de function 'nulToevoegen'. Deze function zorgt ervoor dat er een nul verschijnt als het aantal uren of minuten kleiner is dan 10. Zo krijg je bijvoorbeeld '12:03' en '06:37' in plaats van '12:3' en '6:37'.
  uren = nulToevoegen(uren);
  minuten = nulToevoegen(minuten);

  //Onderstaande regel zorgt ervoor dat het aantal uren en minuten verschijnt bij de <p> met de id="digitaleKlokCijfers".
  document.getElementById('digitaleKlokCijfers').innerHTML = uren + ':' + minuten;

  //Onderstaande regel zorgt ervoor dat de huidige tijd om de 0,5 seconden wordt ververst. Zonder deze regel kan de huidige tijd niet geüpdate worden.
  var t = setTimeout(huidigeTijd, 500);
}

// Deze function zorgt ervoor dat er een nul verschijnt als het aantal uren of minuten kleiner is dan 10. Zo krijg je bijvoorbeeld '12:03' en '06:37' in plaats van '12:3' en '6:37'.
  function nulToevoegen(i){
    if(i < 10){
      i = "0" + i
    };
    return i;
  }


/* Deze regels JavaScript zorgen ervoor dat de juiste gradient bij het schermpje en de body staat als het ochtend, middag, avond of nacht is. */
  var faseVanDeDag = new Date();
  var uren = faseVanDeDag.getHours();

  if (uren >= 18){
    text = "Het is nu avond.";
    document.getElementById("schermpje").style.background = "rgb(191,133,212)";
    document.getElementById("schermpje").style.background = "linear-gradient(0deg, rgba(191,133,212,1) 0%, rgba(80,137,194,1) 100%)";

    document.body.style.backgroundColor = "rgb(191,133,212)";
    document.body.style.background = "linear-gradient(0deg, rgba(191,133,212, 0.6) 0%, rgba(80,137,194, 0.7) 100%)";
  }

  else if (uren >= 12){
    text = "Het is nu middag.";
    document.getElementById("schermpje").style.background = "rgb(34,228,172)";
    document.getElementById("schermpje").style.background = "linear-gradient(0deg, rgba(34,228,172,0.8) 0%, rgba(8,179,229,0.9) 76%)";

    document.body.style.backgroundColor = "rgb(34,228,172)";
    document.body.style.background = "linear-gradient(0deg, rgba(34,228,172,0.3) 0%, rgba(8,179,229,0.3) 76%)";
  }

  else if (uren >= 6){
    text = "Het is nu ochtend.";
    document.getElementById("schermpje").style.background = "rgb(201,148,175)";
    document.getElementById("schermpje").style.background = "linear-gradient(0deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 90%)";

    document.body.style.backgroundColor = "rgb(201,148,175)";
    document.body.style.background = "linear-gradient(0deg, rgba(238,174,202,0.5) 0%, rgba(148,187,233,0.7) 90%)";
  }

  else {
    text = "Het is nu nacht.";
    document.getElementById("schermpje").style.backgroundd = "rgb(186,147,202)";
    document.getElementById("schermpje").style.background = "linear-gradient(0deg, rgba(186,147,202,1) 0%, rgba(48,71,185,0.95) 100%)";

    document.body.style.backgroundColor = "rgb(186,147,202)";
    document.body.style.background = "linear-gradient(0deg, rgba(186,147,202,0.7) 0%, rgba(48,71,185,0.7) 100%)";
  }
  document.getElementById("tijdTesten").innerHTML = text;


/* Deze regels JavaScript zorgen ervoor dat de huidige datum wordt weergegeven bij de <span> met id="datum". Ook hier wordt weer een nul toegevoegd als de dag of maand kleiner is dan 10. */
  var vandaag = new Date();

  var dag = vandaag.getDate();
  var maand = vandaag.getMonth()+1;
  var jaar = vandaag.getFullYear();

  if(dag < 10){
    dag = '0' + dag;
  }

  if(maand < 10){
    maand= '0' + maand;
  }

  vandaag = dag + '-' + maand + '-' + jaar;
  document.getElementById("datum").innerHTML = vandaag;


/* Deze regels JavaScript zorgen ervoor dat de juiste animaties worden gestart als op de linker- of rechterknop gedrukt is. */
  /* Animaties die worden gestart als op de linkerknop wordt geklikt: */
  document.getElementById('discoKnop').onclick = function(){
  	discoKnop.classList.add('ingedruktLinks');

    digitaleKlok.classList.add('discoStaatAan');
    digitaleKlokCijfers.classList.add('discoStaatAanCijfers');
    discoKnop.classList.add('discoRonddraaienLinks');
    stopKnop.classList.add('discoRonddraaienRechts');

    stopKnop.classList.add('ingedruktRechts');
  };

  /* Animaties die worden gestart als op de rechterknop wordt geklikt: */
  document.getElementById('stopKnop').onclick = function(){
  	discoKnop.classList.remove('ingedruktLinks');

    digitaleKlok.classList.remove('discoStaatAan');
    digitaleKlokCijfers.classList.remove('discoStaatAanCijfers');
    discoKnop.classList.remove('discoRonddraaienLinks');
    stopKnop.classList.remove('discoRonddraaienRechts');

    stopKnop.classList.remove('ingedruktRechts');
  };
