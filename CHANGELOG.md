Denne CHANGELOG-filen inneholder de viktigste oppdateringene for Skatteetatens Designssystem

### **v.2.0.0 - Oktober 1, 2019**

Versjon for GitHub - Designsystemet er åpent tilgjengelig! Dette også er en hovedversjon med enkelte endringer som ikke er bakoverkompatible:

##### Breaking changes

- Endret pakkenavn fra aurora-frontend-react-komponenter til @skatteetaten/frontend-components
- Fjernet komponenten List
- Fjernet komponenten Modal (bruk Dialog i stedet)
- Fjernet legacy-farge på knapper
- Fjernet legacy-farge på Callout
- TextField har nå uthevet tekst som default i lesemodus
- Fjernet utgåtte ikoner: Done, Up og Down
- Table: Fjernet mulighet for å opprette kolonner utifra data som ble sendt inn.
- React: Støtter kun versjon 16.8.0 og oppover.

##### Andre forbedringer

- Oppgradering til siste versjon av Fabric (støtter hooks)
- Ny komponent ErrorMessage
- Ny komponent TopStrip
- Ny komponent ScrollToTopButton
- Nytt ikon for tilgang
- Lagt til støtte for å angi antall linjer tekst i multiline textfield.

#### **v.1.8.0 - September 17, 2019**

- Ny komponent - AccordionMenu/AccordionMenuItem.
- Card: mulighet til å sette hvit ramme rundt et kort.
- Table: Kan aligne tekst i celler innenfor en kolonne.
- TextField: Forbedring av suffix.
- Lagt til ScreenPlugin som har forhåndsdefinerte breakpoints som enkelt gir mulighet til å vise/skjule elementer i react koden basert på skjermstørrelse.
- Forbedring av fokusmarkering på hjelpeikon, Combobox, Button(primary).
- Lagt til store varianter av inputfelt(DatePicker, DropDown, Combobox).
- TopBanner: Logo er nå klikkbar.
- AccordionItem: Lagt til property subtitle.

#### **v.1.7.2 - September 3, 2019**

- StepList: fast avstand til ikon for bedre visning på store skjermer.
- TopBanner: la til mulighet for å vise underelementer i stedet for tittel og tilbakelenke.
- Ny navigasjon på demosiden, med kobling til stil og tone
- La til deploy-ikon

#### **v.1.7.0 - August 13, 2019**

- React Styleguidist oppgradert til versjon 9.
- Card: Fikset IE bug for tittel.
- Lagt til snapshot tester
- Diverse UU forbedringer av komponentene
- Table: Kan nå styre rekkefølge og hvilke kolonner som skal vises + små fikser
- StepList: Små stil endringer av avstander i et steg
- TextField: Multiline / onChange fiks

#### **v.1.6.2 - Juni 27, 2019**

- La til icon, onClick og ariaLabel på Accordion
- TextField: Rettet en feil som oppstod når mask ble brukt på tom verdi.

#### **v.1.6.1 - Juni 26, 2019**

- La til onChange-prop på Card
- La til nye ikoner for skatteprossesen
- Justerte stiler slik at inputfelt får konsekvente rammer og fokusmarkering
- Tekst og stiljustering på demosiden.

#### **v.1.6.0 - Juni 17, 2019**

- Lagt til ny kompoent for enkle tabeller (med rediger-funksjon).
- Reponsiv typografi: Fontstørrelse og linjeavstand tilpasser seg nå skjermstørrelsen
- Lagt til nye rammefarger og marger i Card.
- Lagt til stor versjon av MessageBar.
- Fikset en feil med plassering av ikon i SearchField
- Fikset en med visning av ikon i DetailsList
- Nye ikoner; piler, usortert tabellkolonner og person

#### **v.1.5.2 - Mai 29, 2019**

- Oppdaterte til siste versjon av Fabric (retter feil knyttet til mask i TextField og klikkbart område i DatePicker)
- Tilpasning av forside og venstremeny
- SearchField har nå ramme på liten versjon.

#### **v.1.5.1 - Mai 13, 2019**

- Fikset en feil som førte til at ikoner ikke ble vist i Internet Explorer 11.
- Automatiserte tester av komponentene.

#### **v.1.5.0 - Mai 7, 2019**

- Ikonoppdatering, lagt til flere ikoner og ny oversikt.
- Oppdaterte eksempler og struktur på flere komponentsider
- Button: Lagt til mulighet for stor primærknapp
- Ny komponent: Typografi. Legger til css for vanlige typografi-elementer.
- Oppdaterte Sketch-komponenter
- Card: La til mulighet for å vise en undertittel.
- Callout: visuell justerering av ramme og ikon
- ActionButton: visuell justering av fokus- og hovereffekt
- MessageBar: Blocked viser nå hengelås-ikon.

#### **v.1.4.3 - Apr 8, 2019**

- TextField: Mulighet til å validere og formatere verdier med mask
- CallOut: Lagt til mulighet for automatisk lukking, samt stiljusteringer.
- Chip: Fikset en feil på kontrastnivå ved lenke inni rød Chip.
- La til ikon for bedrift.

#### **v.1.4.2 - Apr 1, 2019**

- Dialog: La til en visning for viktig melding, samt diverse stiljusteringer
- DetailsList: la til mulighet for gjennomsiktig bakgrunn
- Fikset en feil som førte til at Footer fikk feil utseende i IE11.
- TextField: Mulighet til å overstyre componentRef

#### **v.1.4.1 - Mar 12, 2019**

- Inputfelt har nå samme utseende og animasjon på feilmeldinger
- Endret farge på ProgressBar
- Endret utseende på spinner for å følge visuell profil.
- TextField: Lagt til mulighet å la feltet være editerbart når det er tomt.

#### **v.1.4.0 - Mar 4, 2019**

– Ny komponent StepList og tilhørende Step

- Fikset en feil som førte til at sortering i DetaljListe slutter å fungere,
- Fikset et feil som førte til at iconer forsvant fra NavigationTile,
- Lagt til to nye ikoner for å låsing.

#### **v.1.3.0 - Feb 26, 2019**

- Ny komponent: Accordion og tilhørende AccorditionItem
- Ny komponent: SearchField
- Oppdatert design på NavigationTile, samt den denne nå kan nå vises uten ikon eller beskrivelse.
- Designfiks på RadioButtonGroup og CheckBox
- Fikset et feil som førte til at rød feil-ramme ikke ble vist på TextField.
- Oppdatering av Sketch-komponenter for designskisser.

#### **v.1.2.3 - Feb 15, 2019**

- DatePicker: Endret teksten som kommer når man er utenfor gyldig datoområde, og gitt mulighet til å overstyre denne.
- Tabs: Bruker nå TabItem-komponent for å kunne bytte mellom innholdet i fanene.
- Oppdaterte "Kom i gang for designer".

#### **v.1.2.2 - Jan 31, 2019**

- Endret font størrelsen på DetailsList fra 17px til 16px

#### **v.1.2.0 - Jan 24, 2019**

- Nytt design på komponentsidene.
- Ny komponenent: Tabs
- Nytt ikon: circleFilled
- Lagt til Sketch-komponenter for enklere lage designskisser med samme utseende som react-komponentene.
- Ny Design-seksjon med overordenet designdokumentasjon.
- Oppgradering av React styleguidist.
- Konfigurert til å skjule komponentenes API som standard.
- Rettet en feil som tok bort sirkelen rundt IconButton

#### **v.1.1.18 - Jan 16, 2019**

- Rettet en feil i Chip der aria-label førte til advarsel i konsoll.

#### **v.1.1.17 - Jan 15, 2019**

- Rettet en feil der grafikken i footerContent ikke alltid fyller hele bredden
- Rettet en feil hvor tekstfelt i editeringsmodus brukte uriktig endringshendelse
- La til en ramme rundt dialogboks (i henhold til visuell profil).

#### **v.1.1.16 - Des 21, 2018**

- Rettet en feil som førte til feil fontsstørrelse på lenke i TopBanner
- Rettet en feil som førte feil fokusmarkering på Chrome i RadioButtonGroup

#### **v.1.1.15 - Des 19, 2018**

- Rettet en feil som førte til at fontstørrelse på label for ComboBox, DatePicker og DropDown ble større.
- Endret hjelpeikon på DatePicker
- Endret bakgrunnsfarge på Callout fra Dropdown
- Opprydding i oversikten over farger.

#### **v.1.1.14 - Des 12, 2018**

- Oppdatert stiling av MessageBar til å være i henhold til visuell profil

#### **v.1.1.13 - Des 7, 2018**

- Fikset feil ved fokusmarking av RadioButtonGroup og ComboBox
- Lagt til ikoner som representerer fil
- Fjerne understrek ved klikk på ActionButton

#### **v1.1.9 - Nov 30, 2018**

– Gått bort fra automatisk release  
– Lagt til release dokumentasjon  
– Fjernet YARN fra prosjektet  
– Endret Jenkins script  
– Oppdatert Fabric:

- office-ui-fabric-core 9.6.1
- office-ui-fabric-reac 6.107.0
- @uifabric/merge-styles 6.15.0
- @uifabric/styling 6.36.0
- @uifabric/utilities 6.27.0

#### **v1.1.6 - Nov 22, 2018**

– Diverse UU forbedringer

#### **v1.1.5 - Nov 22, 2018**

– Dialog className property var foreldet benytter nå modalProps.className

#### **v1.1.4 - Nov 20, 2018**

– className er tilgjengelig i alle komponenter  
– Lagt til utility <a href="https://github.com/JedWatson/classnames#readme" target="_blank">classnames</a> slik at det er mulig å legge til flere klassenavn ved stiling av komponentene

#### **v1.1.3 - Nov 20, 2018**

– Lagt til property "id" for alle komponenter, for enklere å kunne teste komponentenen.
Modal og Dialog har foreløpig ikke ID property
Noen komponenter blir nå wrappet i en div for å kunne sette id

#### **v1.1.2 - Nov 20, 2018**

– Ny property "disabled" for ActionButton komponent

#### **v1.1.2 - Nov 20, 2018**

– Lagt til property "disabled" for ActionButton komponent

#### **v1.1.1 - Nov 15, 2018**

– Ny komponent: Chip

#### **v1.0.26 - Nov 9, 2018**

– Ramme på disablet CheckBox, DatePicker og Dropdown

#### **v1.0.25 - Nov 7, 2018**

– Gjennomsiktig bakgrunn på tekstfelt i readonly-modus

#### **v1.0.24 - Nov 7, 2018**

- Oppdatering av tekst og eksempler for flere komponenter.

#### **v1.0.23 - Nov 5, 2018**

– Hjelpetekst/varseltekst på tekstfelt kan nå være flytende eller plassert og mellom label og tekstfelt.
– Callout ny farge tilgjengelig for varseltekst
– Lagr til nytt ikon: WarningOutline

#### **v1.0.22 - Nov 5, 2018**

– Selection klasse lagt til i DetailsList

#### **v1.0.21 - Nov 5, 2018**

– Mobiltilpasset meny i StyleGuidedist
– Responsive tilpasninger av TopBanner

#### **v1.0.20 - Okt 31, 2018**

– Nytt ikon: AttachFile

#### **v1.0.19 - Okt 24, 2018**

– Nytt ikon: CloudUpload

#### **v1.0.18 - Sept 21, 2018**

– Universell utforming: Lagt inn aria-label på tekstfelt og helpeknapp.

#### **v1.0.17 - Sept 20, 2018**

– Fire nye ikoner; favoritt, justerVenstre, innstillinger og tidslinje

#### **v1.0.16 - Sept 19, 2018**

– Fjerne min-Width på header

#### **v1.0.15 - Aug 28, 2018**

1.  Diverse hover og fokus-issues
2.  Klikkbar header på Card og tydeligere toggle-ikon.

#### **v1.0.12 - Aug 15, 2018**

– Ny seksjon i menyen: Eksempler på bruk.

#### **v1.0.11 - Juli 31, 2018**

– Kort har nå justerbar tekststørrelse og marg, slik at de kan fremstå om både hoved- og delseksjoner.
– Lagt til eksempler på bruk av layout- og skjemakomponenter.

#### **v1.0.8 - Juni 20, 2018**

– Endret Button propTypes "type" --> "type"  
– Endret IconButton propTypes "type" --> "type"

#### **v1.0.7 - Juni 20, 2018**

1.  Stilendring på hover state for sekundærknapp
2.  Oppdatert mappenavn på komponenten DetailList --> DetalilsList
3.  Endret meny visning for styleguidedist
4.  Oppdatert Dialog komponent
5.  Diverse endringer av farger
6.  Oppdatert ToppBanner komponent
7.  Oppdatert Card komponent
8.  Oppdatert DropDown komponent

- Fabric props er nå tilgjengelig i komponentene
  - ActionButton
  - Button
  - Callout
  - Card
  - CheckBox
  - ComboBox
  - DatePicker
  - DetailsList
  - Dialog
  - Dropdown
  - IconButton
  - List
  - MessageBar
  - Modal
  - ProgressBar
  - RadioButtonGroup
  - Spinner
  - TextField

#### **v1.0.6 - Juni 11, 2018**

1.  Flyttet React og React-dom fra dependencies til peerDependencies
2.  Versjoner i dependencies har blitt låst (fjernet `^` fra versjonen).
3.  Opprettet `aurora-frontend-react-komponenter/utils/loadTheme` for å støtte testing av komponenter som bruker biblioteket.
4.  Oppdatert `Kom i gang` dokumentasjon med informasjon om testing.
5.  Oppdatert `Komponenter/Icon` dokumentasjon med hvordan finne nytt ikon.

#### **Oppdatering for Master (Release 1.0) - Juni 05, 2018**

1.  Endret navn på komponenter og props fra norsk til engelsk
2.  Fjernet komponentene: Nett/Sokefelt/Tekst/Tittel
3.  Oppgradert Fabric fra versjon 5 til 6 [Release NOTES](https://github.com/OfficeDev/office-ui-fabric-react/blob/master/6.0_RELEASE_NOTES.md)
4.  Endret mappestrukturen under src/components
5.  Hver enkelt komponent har nå egen index for kortere import statement
6.  Endret styling på knapper (Buttons/ActionButton/IconButton)
7.  Endret variabelnavn for Skatteetaten farger i paletten
