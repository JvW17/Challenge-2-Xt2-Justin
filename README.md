# Challenge-2-Xt2-Justin

Ik heb een digitale klok gemaakt. Deze klok geeft de tijd weer van de tijdzone Midden Europese Tijd (GMT + 1).

Hoe laat de klok de verschillende fases van de dag zien (ochtend, middag, avond en nacht)? In de JavaScript code gebeurt het volgende:
- Als het tussen 0:00 en 6:00 is, heeft de body een lichtpaarse/donkerpaarse achtergrond gradient.
- Als het tussen 6:00 en 12:00 is, heeft de body een lichtroze/lichtblauwe achtergrond gradient.
- Als het tussen 12:00 en 18:00 is, heeft de body een lichtgroene/lichtblauwe achtergrond gradient.
- Als het tussen 18:00 en 0:00 is, heeft de body een lichtpaarse/lichtblauwe achtergrond gradient.
Ook heeft het kleine schermpje onderin in het midden van de klok bij iedere fase van de dag dezelfde kleur als de body, alleen heftiger zodat deze er meer uitspringt. Verder is in dit kleine schermpje bij iedere fase van de dag af te lezen of het ochtend, middag, avond of nacht is. Zo kunnen de gebruikers van de klok, naast de achtergrond gradient en de kleur van het schermpje, snel aflezen om te weten komen welke fase van de dag het is. 
In het kleine schermpje is ook de huidige datum te lezen. Deze wordt geüpdatet als de pagina gerefresht wordt.

De volgende dingen zijn met CSS animation geanimeerd in de klok:
- Als op de oranje discoknop wordt geklikt...
1. ... veranderd deze van kleur en border.
2. ... draait deze discoknopknop oneindig door van 0 graden naar 270 graden en weer terug.
3. ... veranderd de stopknop van kleur en border.
4. ... draait de stopknop eenmalig 360 graden rond.
5. ... veranderd de witte achtergrondkleur van de klok naar felle kleuren die elkaar snel afwisselen.
6. ... veranderen de zwarte letters van de klok oneindig door van zwart naar wit en weer terug.
- Als op de rode stopknop wordt geklikt...
1. ... veranderd al het bovenstaande weer terug naar normaal.

De klok update automatisch. Als een nieuwe dagfase aanbreekt, moet de pagina herladen worden om de achtergrond gradient, kleur van het kleine schermpje en aanduiding van de dagfase in tekst in het kleine schermpje te updaten. Het lukte mij niet om alle drie de elementen tegelijkertijd up te daten.
