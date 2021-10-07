## Procesverslag
<details>
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.
</details>




## Jij

<details open>
<summary>uitwerken voor kick-off werkgroep</summary>

### Auteur:
Aniek Mulders

#### Je startniveau:
blauw

#### Je focus:
responsive
 
</details>





## Je website

<details open>
<summary>uitwerken voor kick-off werkgroep</summary>

### Je opdracht:
De website die ik ga namaken is https://www.dodie.co

#### Screenshot(s) van de eerste pagina (small screen): 
homepagina 
<img src="images/dodieHomeM.png" width="200px" alt="homepagina dodie.co">

#### Screenshot(s) van de tweede pagina (small screen):
merchandise verkoop pagina 
<img src="images/dodieMerchM.png" width="200px" alt="merchandise pagina dodie.co">
 
</details>





## Breakdownschets (week 1)

<details>
<summary>uitwerken na afloop 2e werkgroep</summary>

### de hele pagina:
 Hieronder de breakdownschets van de homepagina. De breakdownschetsen van de andere pagina's moet ik nog verder afmaken.
<img src="images/breakdownHome.png" width="150px" alt="breakdown van de hele pagina">

### dynamisch deel (bijv menu): 
<img src="images/dummy-plaatje.jpg" width="375px" alt="breakdown van een dynamisch deel">

### wellicht nog een dynamisch deel (bijv filter): 
<img src="images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
<summary>uitwerken voor 1e voortgang</summary>

### Stand van zaken
Ik ben redelijk ver met de website op een klein scherm, bijna alle elementen staan op de juiste positie. Op dit moment moet ik nog verder met het stylen van de typografie en de kleuren. De volgende stap wordt kijken of ik de site responsive kan maken. 
<img src="images/voortgangLanding.png" width="150px" alt="voortgang landing scherm">
<img src="images/voortgangMerch.png" width="150px" alt="voorgang merch lijst">


### Agenda voor meeting
samen met je groepje opstellen

| Aniek      | Yen          | Salentino    | student 4        |
| ---            | ---                | ---          | ---              |
| Kun je van een details element een hamburger menu maken| Is nog niet begonnen, hoe ga ik dit aanpakken             | Meer informatie over breakpoints    | en dan ik dat    |
| Hoe krijg je van een kolom 2 kolommen | dit als er tijd is | nog een punt | dit wil ik zeker |
| ...            | ...                | ...          | ...              |


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen
Op mijn vragen:
- Het details element is erg slim bedacht, maar werkt niet als je de website responsive wil maken. Als je de website responsive wil maken kun je beter Javascript gebruiken.
- Voor het veranderen naar meerdere kolommen moeten "Media Queries" gebruikt worden in de CSS.

</details>





## Voortgang 2 (week 3)

<details>
<summary>uitwerken voor 2e voortgang</summary>

### Stand van zaken
Deze week heb ik niet heel veel lastige dingen aangepast in de CSS en ben ik vooral bezig geweest met het opzetten van de tweede pagina.


### Agenda voor meeting
samen met je groepje opstellen

| Aniek      | Yen          | Salentino    | Omar        |
| ---            | ---                | ---          | ---              |
| Welke elementen kan ik het beste gebruiken voor de tweede pagina?  | en dit             | Nog niet verder gegaan, niets te bespreken   | en dan ik dat    |
| Mag je een iframe gebruiken? | dit als er tijd is | nog een punt | dit wil ik zeker |
| ...            | ...                | ...          | ...              |


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- Dit maakt alleen uit als een screenreader gebruikt wordt en is vooral persoonlijke keuze.
- Ja dit mag.

</details>





## Toegankelijkheidstest (week 4)

<details>
<summary>uitwerken na test in 8e voortgang</summary>

### Bevindingen
Lijst met je bevindingen die in de test naar voren kwamen:
 
 Tijdens de les hebben wij getest hoe toegankelijk de website is. Tijdens deze les heb ik vooral getest met de verschillende brillen. Ook hebben wij een screenreader getest.

#### Screenreader
 Ten eerste vond ik een screenreader gebruiken erg irritant. Als je iets met je muis beweegt herhaalt de screenreader steeds waar je muis op staat. Ook is het irritant dat de screenreader alle semantische elementen opnoemt, tenzij je dit uitzet in instellingen. Ook sloeg de screenreader het icoontje van het hamburger menu over
 
 Het hamburger menu moet in plaats van in een div in een button geplaatst worden. Verder kan er niet veel veranderd worden aan wat de screenreader wel en niet voorleest, tenzij iemand dit selecteerd in de instellingen.


#### Peripheral field loss
Met deze bril bleek het dat de teksten in een kleine fontsize en licht grijze kleur erg slecht leesbaar zijn. Ook waren de elementen die dicht op de randen van het scherm staan erg lastig te vinden. 

Deze fouten zijn makkelijk op te lossen door de kleur van de tekst aan te passen.


#### Blur / Glare 
Met deze bril waren eigenlijk alle elementen op de site erg onduidelijk. Ook was het heel lastig om te zien waar op de site je bevond. Wanneer je de tab toets gebruikte kon je wel redelijk zien wat er geselecteerd was, maar het was niet leesbaar wat er stond.

Om dit probleem op te lossen zou je ervoor moeten zorgen dat de site goed werkt met een screenreader, of je zou de tekst veel groter moeten maken.


#### Hemifield loss
Toen ik deze bril op had kon ik alle elementen op de site wel goed zien, wel moest je je hoofd meer draaien om de content te zien die dichter op de randen stond.

Hiervoor was niet echt een oplossing nodig.
 
 
#### Low contrast
Met de low contrast bril had ik dezelfde bevindingen als bij de peripheral field loss bril. Het werd erg lastig om de kleine grijze tekst te lezen en bij de tour pagina werd het bijna onmogelijk om te de zaalnamen te kunnen zien.

Naast het aanpassen van de kleur blijkt bij deze bril het ook een goed idee om de fontsize wat groter te maken.

</details>





## Voortgang 3 (week 4)

<details>
<summary>uitwerken voor 3e voortgang</summary>

### Stand van zaken
Voor deze les ben ik bezig geweest met media queries. Op veel plekken ging het goed, maar bij de bovenste section werd de media querie genegeerd doordat ik het element fout had aangesproken.


### Agenda voor meeting
samen met je groepje opstellen

| aniek      | yen          | salentino    | student 4        |
| ---            | ---                | ---          | ---              |
| Hoe zorg ik dat het bovenste deel van de site naar 2 kolommen gaat ipv 1.  | <- ook             | en ik dit    | en dan ik dat    |
| ... | dit als er tijd is | Hoe krijg ik het hamburger menu rechts? | dit wil ik zeker |
| ...            | ...                | ...          | ...              |


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- De code klopte, maar het aanspreken ging fout. Dit moest aangepast worden naar "section.top".


</details>





## Eindgesprek (week 5)

<details>
<summary>uitwerken voor eindgesprek</summary>

### Stand van zaken
In mijn code heb ik veel gebruik gemaakt van unordered lists, bij de styling heb ik geprobeerd om deze semantisch aan te spreken, maar toen raakte ik steeds in de wat met welk stukje voor welke lijst was. Dit heb ik uiteindelijk dus aangepast en elke section een class te geven waardoor het voor mij een stuk overzichtelijker werd. Ook heb ik een aantal keer gehad dat de CSS niet deed wat ik wilde, maar met de hulp van klasgenoten en door de inspector tool te gebruiken waren deze problemen makkelijk op te lossen.
 
 Uiteindelijk heb ik ook besloten om de header van kleur te laten veranderen als hij naar beneden scrollt. Hiervoor had ik hulp gevraagd van de studentassistenten en die zeiden dat dit een behoorlijk complex iets was om te doen. Uiteindelijk is het mij redelijk gelukt. De elementen staan niet precies hou ik het zou willen maar de kleur veranderd wel en daar ben ik blij mee.
 
 Mede door de nodige frustraties heb ik uiteindelijk toch een responsive site weten te maken waar ik behoorlijk blij mee ben.

### Screenshot(s)



</details>





## Bronnenlijst

<details open>
<summary>continu bijhouden terwijl je werkt</summary>

Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

1. bron 1
2. bron 2
3. ...

</details>
