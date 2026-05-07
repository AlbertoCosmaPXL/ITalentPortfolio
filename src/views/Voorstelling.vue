<script setup>
import portrait from '../assets/profile.jpg'
</script>

<template>
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <div class="eyebrow">Voorstelling</div>
        <h1>Wie ik ben en <span class="gradient-text serif">hoe ik werk.</span></h1>
        <p class="lead">
          Mijn naam is Alberto Cosma. Ik studeer Toegepaste Informatica, afstudeerrichting
          applicatieontwikkeling. Ik koos voor IT omdat ik gefascineerd ben door het idee
          dat je iets kan creëren dat eerst niet bestond en het tot leven kan brengen via code.
        </p>
      </div>
      <div class="portrait"><img :src="portrait" alt="Alberto Cosma" /></div>
    </div>
  </section>

  <section>
    <div class="container narrow">
      <article class="long-form">
        <h2>Mijn motto. I get the job done</h2>
        <p>
          "I get the job done" is meer dan een zin op een portfolio, het is hoe ik probeer te werken.
          Ook als ik nog niet weet hoe iets moet, vertrouw ik erop dat ik er wel uit ga komen door te
          blijven proberen, te zoeken en te leren. Die mindset komt voor een groot stuk uit het schaken.
        </p>

        <h2>Schaken als basis</h2>
        <p>
          Mijn vader leerde me schaken toen ik vijf jaar oud was. Ik kon nooit van hem winnen en
          dus werd het mijn missie om dat ooit wel te doen. Dat duurde jaren. Schaken heeft me
          geleerd dat je fouten móét maken om te leren. Verliezen is geen falen, het is data over
          wat je beter kan doen. Diezelfde houding probeer ik mee te nemen naar programmeren,
          een foutmelding is geen probleem maar een aanwijzing.
        </p>

        <h2>Hoe ik leer</h2>
        <p>
          Ik leer het meest door dingen zelf uit te proberen, te falen en dan te kijken hoe anderen
          hetzelfde probleem hebben opgelost. Documentatie, voorbeelden, Stack Overflow, GitHub-issues,
          het is allemaal een soort schaakboek vol partijen van anderen. 
        </p>

        <h2>Hoe ik samenwerk</h2>
        <p>
          Een sterke individuele speler telt, maar een team dat samen aan hetzelfde doel werkt is
          altijd sterker. In groepswerk vind ik duidelijke communicatie het belangrijkste, weten wie
          wat doet, op tijd vragen stellen als iets niet klopt en mensen niet voor verrassingen
          plaatsen op de deadline.
        </p>

        <h2>Wat me drijft</h2>
        <p>
          Iets bouwen dat werkt voor échte mensen. Niet alleen code die compileert, maar een interface
          die iemand begrijpt zonder uitleg, een flow die natuurlijk aanvoelt, een feature die het
          leven van een gebruiker iets makkelijker maakt. Daar haal ik energie uit.
        </p>

        <h2>Naast school</h2>
        <p>
          Buiten de IT speel ik nog steeds graag schaak, verzamel ik achievements in videogames en
          lees ik veel over de Tweede Wereldoorlog, vooral hoe beslissingen onder druk genomen werden
          en welke gevolgen die hadden. Het lijkt ver van programmeren, maar het zijn dezelfde
          patronen, weinig informatie, hoge inzet, beperkte tijd.
        </p>
      </article>
    </div>
  </section>
</template>
