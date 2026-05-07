import busitImg from './assets/busit.jpg'
import hackImg from './assets/hackthefuture.jpg'
import studyImg from './assets/studybuddy.jpg'

export const projects = [
  {
    id: 'busit',
    title: 'BusIT-week',
    subtitle: 'Internationaal teamproject, AP Hogeschool Antwerpen',
    role: 'UX & concept · Internationaal team',
    image: busitImg,
    imageAlt: 'Het BusIT-week team aan de Antwerpse haven',
    tags: ['UX Design', 'Healthcare', 'Internationaal team', 'Prototyping'],
    summary:
      'Een week lang samenwerken met internationale studenten aan een digitaal zorgconcept voor het ZAS-ziekenhuis. We ontwierpen een app die patiënten en familieleden voor en na procedures duidelijk informeert, met begrijpelijke visuele animaties.',
    sections: [
      {
        h: 'De opdracht',
        p: 'Tijdens de BusIT-week werd ik in een internationaal team gegooid met studenten uit verschillende Europese landen. De opdracht was een digitaal concept bedenken voor het ZAS-ziekenhuis dat de patiëntervaring zou verbeteren. We hadden vijf dagen, van blanco blad tot pitch.',
      },
      {
        h: 'Onze oplossing, de info-app',
        p: 'We ontwierpen een app die patiënten en familieleden ondersteunt met duidelijke info voor en na procedures. Via korte, visuele animaties legden we uit wat er gebeurt, wat je kan verwachten, en wat de nazorg inhoudt. We werkten van brainstorm via wireframes naar klikbare schermen.',
      },
      {
        h: 'Mijn rol',
        p: 'Ik was vooral betrokken bij het uitwerken van het concept en de UX-flow. Omdat het team uit verschillende culturen kwam, was duidelijk communiceren cruciaal. We tekenden veel uit op het bord, gebruikten visuele schetsen om elkaar te begrijpen en maakten korte iteraties om snel feedback te krijgen.',
      },
      {
        h: 'Wat ik leerde',
        p: 'Eenvoud is vaak sterker dan een uitgebreide oplossing. Mensen onthouden je idee niet door alle features die je toevoegt, maar door één duidelijk verhaal. Daarnaast leerde ik dat samenwerken over culturen heen vooral gaat over geduld en bereidheid om elkaars manier van werken te begrijpen. Met sommige teamgenoten heb ik vandaag nog steeds contact.',
      },
    ],
  },
  {
    id: 'hackathon',
    title: 'Hack the Future',
    subtitle: 'Hackathon, SAP UI5 challenge',
    role: 'Applicatieontwikkeling · Rapid prototyping',
    image: hackImg,
    imageAlt: 'Op het podium van Hack the Future met een teamgenoot',
    tags: ['SAP UI5', 'JavaScript', 'Rapid Prototyping', 'Hackathon'],
    summary:
      'Een hackathon van één dag. De challenge was om met SAP UI5 een interface voor symboolvertaling en base-repair te bouwen. Een framework dat we nog nooit hadden aangeraakt en toch een werkende, pitchklare demo opleveren tegen het einde van de dag samen met Robbe Broeders.',
    sections: [
      {
        h: 'De challenge',
        p: 'Hack the Future is een hackathon waar studenten challenges van bedrijven oplossen. We hebben een SAP-challenge gekregen waarbij we met SAP UI5 een tool moesten bouwen die symbolen kon vertalen en helpen bij base-repair scenarios. SAP UI5 was volledig nieuw voor ons en we moesten tijdens de dag de basis leren en iets werkbaars bouwen.',
      },
      {
        h: 'Aanpak',
        p: 'We begonnen met een snelle verkenning van de documentatie en kleine voorbeelden om het patroon van views, controllers en data binding te begrijpen. Daarna richtten we ons op de kern, een werkende flow tonen, ook al waren niet alle randgevallen afgedekt. De keuze om eerst de hoofdfunctionaliteit te laten werken bleek juist en we hadden iets om te tonen aan de jury.',
      },
      {
        h: 'Sterk punt',
        p: 'Snel bijleren onder druk. We lieten ons niet afschrikken door een onbekend framework en bleven rustig zoeken tot we begrepen hoe de stukken in elkaar pasten. Dat is iets wat ik herken uit andere projecten, vertrouwen dat ik er wel uit ga komen, ook als het in het begin chaotisch is.',
      },
      {
        h: 'Werkpunt',
        p: 'We wilden te veel tegelijk. Op het einde hadden we nog half-afgewerkte features liggen die we beter eerder hadden geschrapt. Volgende keer willen we strikter prioriteren, eerst één ding echt af, dan pas een volgend stuk aanvatten.',
      },
    ],
  },
  {
    id: 'studybuddy',
    title: 'Studdy Buddy',
    subtitle: 'Peer mentoring, IT Essentials',
    role: 'Peer coaching · Python',
    image: studyImg,
    imageAlt: 'Studdy Buddy coachingsessie',
    tags: ['Mentoring', 'Python', 'Communicatie', 'Coaching'],
    summary:
      'Ik begeleidde een medestudent doorheen de moeilijkere hoofdstukken van IT Essentials. Via gesprekken bracht ik zijn werkpunten in kaart en coachte ik hem met uitgewerkte Python-voorbeelden in PyCharm.',
    sections: [
      {
        h: 'De aanleiding',
        p: 'Een medestudent worstelde met een aantal hoofdstukken van IT Essentials, voornamelijk rond Python en de bijhorende denkwijze. Ik bood aan om hem te helpen, niet door het werk over te nemen, maar door samen te zoeken waar het precies vasthaakte.',
      },
      {
        h: 'Aanpak',
        p: 'We begonnen met een gesprek om in te schatten wat hij wel begreep en waar de knopen zaten. Daarna werkten we per onderwerp, ik bouwde kleine voorbeelden in PyCharm, liet hem zelf typen en aanpassingen doen en stelde gerichte vragen om te checken of hij de logica echt volgde. Geen kant-en-klare oplossingen, maar genoeg structuur om vooruit te raken.',
      },
      {
        h: 'Wat het mij leerde',
        p: 'Ik betrap mezelf erop dat ik soms te snel een oplossing uitleg, gewoon omdat ze voor mij logisch lijkt. Maar als de andere persoon de tussenstappen mist, is mijn uitleg nutteloos. Bewuster vertragen, ruimte laten voor stilte en controleren of iemand echt mee is, dat is waar ik aan blijf werken. Dit project was een mooie spiegel voor mijn manier van communiceren.',
      },
    ],
  },
]

export const seminars = [
  { date: '27 februari 2024', title: 'CBTW, CQRS with MediatR', desc: 'Command Query Responsibility Segregation in .NET, met focus op SOLID principes en hoe lees en schrijflogica gescheiden gehouden worden.' },
  { date: '26 maart 2024', title: 'Inetum-Realdolmen, Rapid App Development', desc: 'Snel applicaties bouwen met low-code aan de hand van een "candy delivery" app als voorbeeldcase.' },
  { date: '23 april 2024', title: 'Cegeka, The Challenge of Open Source', desc: 'Open source en de uitdagingen bij gebruik, beheer en onderhoud binnen professionele projecten, licenties, security en bijdragen terug aan de community.' },
  { date: '7 mei 2024', title: 'Harmony Group, OutSystems', desc: 'Low-code ontwikkelplatform, sneller bouwen van web en mobiele applicaties zonder vanaf nul te starten.' },
  { date: '5 november 2025', title: 'Brightest, BDD & ATDD', desc: 'Gedragsgedreven en acceptance-test-driven softwareontwikkeling, specs schrijven die zowel mens als machine begrijpt.' },
  { date: '24 november 2025', title: 'Sarah Swaenepoel, Een bedrijf in bijberoep', desc: 'Ondernemen in bijberoep in België, voordelen, nadelen, fiscaliteit en praktische zaken bij het opstarten.' },
  { date: '3 december 2025', title: 'Easi, Datawarehousing in Microsoft Fabric', desc: 'Data verzamelen, structureren en gebruiken voor analyse en rapportering binnen het Microsoft Fabric platform.' },
  { date: '10 december 2025', title: 'Inetum, De wereld van Enterprise UX', desc: 'UX in grote bedrijfsomgevingen, gebruiksvriendelijkheid en consistente ervaringen over honderden interne tools heen.' },
  
]
