**Icon (Ikon): kan brukes direkte eller av de andre komponentene i Designsystemet.**

```js
import { Icon } from '@skatteetaten/frontend-components/Icon';

<div>
  <Icon iconName="ArrowUp" style={{ fontSize: '32px', color: '#1362ae' }} />
  <Icon iconName="ArrowDown" style={{ fontSize: '32px', color: '#1362ae' }} />
  <Icon
    iconName="ArrowForward"
    style={{ fontSize: '32px', color: '#1362ae' }}
  />
  <Icon iconName="ArrowBack" style={{ fontSize: '32px', color: '#1362ae' }} />
  <Icon iconName="Search" style={{ fontSize: '32px', color: '#1362ae' }} />
  <Icon iconName="Copy" style={{ fontSize: '32px', color: '#1362ae' }} />
  <Icon iconName="Edit" style={{ fontSize: '32px', color: '#1362ae' }} />
  <Icon iconName="AttachFile" style={{ fontSize: '32px', color: '#1362ae' }} />
</div>;
```

<style>
  .darkOnHover {
    text-align: center;
  }
  .ms-DetailsRow-cell {
    padding: 16px 8px 4px 8px !important;
  }
  .ms-FocusZone.ms-DetailsRow:hover .darkOnHover {
    background-color: #093e61;
    color: #ffffff;
  }
  .padLeftM {
    padding-left: 16px !important;
  }
</style>

## Liste over alle ikoner

```js noeditor
import { Accordion } from '@skatteetaten/frontend-components/Accordion';
import { AccordionItem } from '@skatteetaten/frontend-components/Accordion/AccordionItem';
import { DetailsList } from '@skatteetaten/frontend-components/DetailsList';
import { Icon } from '@skatteetaten/frontend-components/Icon';

const columns = [
  {
    key: 'column1',
    name: 'Ikon',
    fieldName: 'icon',
    minWidth: 50,
    maxWidth: 50,
    isResizable: false,
    className: 'darkOnHover',
  },
  {
    key: 'column3',
    name: 'Navn',
    fieldName: 'name',
    minWidth: 50,
    maxWidth: 150,
    isResizable: true,
  },
  {
    key: 'column4',
    name: 'Brukes til',
    fieldName: 'usage',
    minWidth: 50,
    isResizable: true,
  },
];

const iconGroup = {
  arrows: [
    {
      name: 'CircleUp',
      usage: 'Lukke område',
    },
    {
      name: 'CircleDown',
      usage: 'Åpne område',
    },
    {
      name: 'ChevronUp',
      usage: 'Lukke område',
    },
    {
      name: 'ChevronDown',
      usage: 'Åpne område',
    },
    {
      name: 'ChevronLeft',
      usage: 'Paginering (forrige side)',
    },
    {
      name: 'ChevronRight',
      usage: 'Paginering (neste side)',
    },
    {
      name: 'ArrowUp',
      usage: 'Opp / sorter stigende',
    },
    {
      name: 'ArrowDown',
      usage: 'Ned / sorter synkende',
    },
    {
      name: 'ArrowBack',
      usage: 'Gå tilbake/Forrige',
    },
    {
      name: 'ArrowForward',
      usage: 'Gå til/Neste',
    },
    {
      name: 'ArrowUpDown',
      usage: 'Usorterte kolonner i tabell',
    },
    {
      name: 'MenuUp',
      usage: 'Opp i meny',
    },
    {
      name: 'MenuDown',
      usage: 'Ned i meny',
    },
    {
      name: 'MoveUp',
      usage: 'Til toppen av siden',
    },
  ],
  info: [
    {
      name: 'Bell',
      usage: 'Varsel',
    },
    {
      name: 'Blocked',
      usage: 'Sperret/ikke tilgjengelig',
    },
    {
      name: 'Error',
      usage: 'Feil',
    },
    {
      name: 'ErrorOutline',
      usage: 'Feil',
    },
    {
      name: 'helpFilled',
      usage: 'Hjelp',
    },
    {
      name: 'HelpOutline',
      usage: 'Hjelp',
    },
    {
      name: 'HelpSimple',
      usage: 'Hjelp',
    },
    {
      name: 'Info',
      usage: 'Informasjon, nyttig opplysning',
    },
    {
      name: 'InfoOutline',
      usage: 'Informasjon, nyttig opplysning',
    },
    {
      name: 'InfoSimple',
      usage: 'Informasjon, nyttig opplysning',
    },
    {
      name: 'Warning',
      usage: 'Advarsel',
    },
    {
      name: 'WarningOutline',
      usage: 'Advarsel',
    },
  ],
  addremove: [
    {
      name: 'Add',
      usage: 'Legg til',
    },
    {
      name: 'AddOutline',
      usage: 'Legg til',
    },
    {
      name: 'Cancel',
      usage: 'Lukk, avbryt eller ikke ok',
    },
    {
      name: 'Delete',
      usage: 'Slett',
    },
    {
      name: 'Share',
      usage: 'Del',
    },
    {
      name: 'Upload',
      usage: 'Last opp',
    },
    {
      name: 'Download',
      usage: 'Last ned',
    },
    {
      name: 'Send',
      usage: 'Send inn skjema',
    },
    {
      name: 'Deploy',
      usage: 'Distribuere (deploye)',
    },
    {
      name: 'ListAdd',
      usage: 'Legg til rad',
    },
    {
      name: 'ListRemove',
      usage: 'Fjern rad',
    },
    {
      name: 'ListReorder',
      usage: 'Endre rekkefølge (rad)',
    },
  ],
  tags: [
    {
      name: 'Bookmark',
      usage: 'Merk som bokmerke, snarvei',
    },
    {
      name: 'Favorite',
      usage: 'Merk som favoritt',
    },
    {
      name: 'Check',
      usage: 'Utført, ferdig',
    },
    {
      name: 'Completed',
      usage: 'Utført, ferdig',
    },
    {
      name: 'ChatBubbleOutline',
      usage: 'Kommentar, merknad',
    },
    {
      name: 'Cloud',
      usage: 'Skytjeneste',
    },
    {
      name: 'CloudUpload',
      usage: 'Last opp til skytjeneste',
    },
    {
      name: 'CircleFilled',
      usage: 'Markert',
    },
    {
      name: 'CircleRing',
      usage: 'Umarkert',
    },
    {
      name: 'Code',
      usage: 'Kode',
    },
    {
      name: 'Lock',
      usage: 'Låst element',
    },
    {
      name: 'LockOutline',
      usage: 'Låst element',
    },
    {
      name: 'LockOpen',
      usage: 'Ulåst element',
    },
    {
      name: 'LockOutlineOpen',
      usage: 'Ulåst element',
    },
  ],
  time: [
    {
      name: 'Calendar',
      usage: 'Dato, datovelger',
    },
    {
      name: 'CalendarClock',
      usage: 'Dato og tidspunkt',
    },
    {
      name: 'Update',
      usage: 'Oppdater',
    },
    {
      name: 'History',
      usage: 'Historikk',
    },
    {
      name: 'Timeline',
      usage: 'Utvikling over tid',
    },
    {
      name: 'Timelapse',
      usage: 'Pågår, under arbeid',
    },
    {
      name: 'Timersand',
      usage: 'Venter',
    },
  ],
  sections: [
    {
      name: 'Home',
      usage: 'Hjem, tilbake til hjemmeside',
    },
    {
      name: 'Menu',
      usage: 'Meny til smal skjerm',
    },
    {
      name: 'VerticalDots',
      usage: 'Vis sekundære knapper/funksjoner',
    },
    {
      name: 'VerticalDotsCircle',
      usage: 'Vis sekundære knapper/funksjoner',
    },
    {
      name: 'VerticalDotsCircleSolid',
      usage: 'Vis sekundære knapper/funksjoner',
    },
    {
      name: 'Person',
      usage: 'Personlig',
    },
    {
      name: 'PersonOutline',
      usage: 'Personlig',
    },
    {
      name: 'PersonMore',
      usage: 'Flere enn én person',
    },
    {
      name: 'PersonMoreOutline',
      usage: 'Flere enn én person',
    },
    {
      name: 'AccountMultiple',
      usage: 'To eller flere',
    },
    {
      name: 'AccountChild',
      usage: 'Familie',
    },
    {
      name: 'AccountEnk',
      usage: 'Enkeltpersonsforetak',
    },
    {
      name: 'Search',
      usage: 'Søk',
    },
    {
      name: 'Settings',
      usage: 'Innstillinger',
    },
    {
      name: 'Skattetrekk',
      usage: 'Skatt, skattetrekk',
    },
    {
      name: 'Avgift',
      usage: 'Avgift generell',
    },
    {
      name: 'AvgiftBedrift',
      usage: 'Avgift for bedrifter',
    },
    {
      name: 'Kroner',
      usage: 'Skatt, penger',
    },
    {
      name: 'Soknad',
      usage: 'Søknad',
    },
    {
      name: 'Folkeregister',
      usage: 'Folkeregister',
    },
    {
      name: 'Earth',
      usage: 'Utland',
    },
    {
      name: 'Email',
      usage: 'Innboks, e-post, skriv til oss, sende',
    },
    {
      name: 'Briefcase',
      usage: 'Arbeidsgiver',
    },
    {
      name: 'Company',
      usage: 'Bedrift og organisasjon',
    },
    {
      name: 'Hammer',
      usage: 'Starte og drive',
    },
    {
      name: 'BookOpen',
      usage: 'Veiledning',
    },
    {
      name: 'Phone',
      usage: 'Telefon, kontakt',
    },
    {
      name: 'Forum',
      usage: 'Chat, forum',
    },
    {
      name: 'Calculator',
      usage: 'Kalkuler, beregne',
    },
    {
      name: 'Facebook',
      usage: 'Facebook',
    },
    {
      name: 'LinkedIn',
      usage: 'LinkedIn',
    },
    {
      name: 'Twitter',
      usage: 'Twitter',
    },
    {
      name: 'Key',
      usage: 'Tilganger',
    },
    {
      name: 'BookOpenOutline',
      usage: 'Skattemelding',
    },
    {
      name: 'CashRefund',
      usage: 'Skatteoppgjør',
    },
    {
      name: 'LanPending',
      usage: 'Skattkort',
    },
    {
      name: 'Familie',
      usage: 'Familie',
    },
    {
      name: 'Ekteskap',
      usage: 'Ekteskap',
    },
  ],
  manipulate: [
    {
      name: 'FormatAlignLeft',
      usage: 'Venstrejuster',
    },
    {
      name: 'FormatAlignRight',
      usage: 'Høyrejustert',
    },
    {
      name: 'PauseOutline',
      usage: 'Sett på vent',
    },
    {
      name: 'TaOppgave',
      usage: 'Ta oppgave',
    },
    {
      name: 'PlayOutline',
      usage: 'Start',
    },
    {
      name: 'Filter',
      usage: 'Filtrer',
    },
    {
      name: 'SortUp',
      usage: 'Sorter stigende',
    },
    {
      name: 'SortDown',
      usage: 'Sorter synkende',
    },
    {
      name: 'SortDefault',
      usage: 'Sorter default',
    },
    {
      name: 'SortAsc',
      usage: 'Sorter stigende alt 2.',
    },
    {
      name: 'SortDesc',
      usage: 'Sorter synkende alt 2.',
    },
    {
      name: 'OpenInNew',
      usage: 'Åpne i ny fane eller nytt vindu',
    },
    {
      name: 'Copy',
      usage: 'Kopier',
    },
    {
      name: 'Edit',
      usage: 'Endre eller rediger',
    },
    {
      name: 'Dupliser',
      usage: 'Dupliser',
    },
    {
      name: 'Print',
      usage: 'Skriv ut',
    },
    {
      name: 'Save',
      usage: 'Lagre (merk at vi normalt har autolagring)',
    },
    {
      name: 'Pin',
      usage: 'Festet element',
    },
    {
      name: 'PinOff',
      usage: 'Ikke-festet element',
    },
    {
      name: 'EyeOutline',
      usage: 'Vis',
    },
    {
      name: 'EyeOff',
      usage: 'Skjul',
    },
  ],
  files: [
    {
      name: 'AttachFile',
      usage: 'Filvedlegg',
    },
    {
      name: 'Description',
      usage: 'Detaljer, beskrivelse',
    },
    {
      name: 'FileOutline',
      usage: 'Generell fil ',
    },
    {
      name: 'File',
      usage: 'Generell fil',
    },
    {
      name: 'PreviewFile',
      usage: 'Forhåndsvisning',
    },
    {
      name: 'ExcelFile',
      usage: 'Excel-fil',
    },
    {
      name: 'WordFile',
      usage: 'Word-fil',
    },
    {
      name: 'PDFFile',
      usage: 'Pdf-fil',
    },
    {
      name: 'XMLFile',
      usage: 'XML-fil',
    },
  ],
};

const addIcon = (icons) => {
  return icons.map((props) => ({
    ...props,
    icon: (
      <Icon
        iconName={props.name}
        style={{ fontSize: '24px', position: 'relative', bottom: '7px' }}
      />
    ),
  }));
};

// Add icon element to all icons
Object.keys(iconGroup).forEach((name) => {
  iconGroup[name] = addIcon(iconGroup[name]);
});

<div style={{ marginBottom: '2rem' }}>
  <Accordion>
    <AccordionItem toggleContent toggleButtonText={'Piler'}>
      <DetailsList columns={columns} items={iconGroup.arrows} />
    </AccordionItem>
    <AccordionItem toggleContent toggleButtonText={'Informasjon og varsler'}>
      <DetailsList columns={columns} items={iconGroup.info} />
    </AccordionItem>
    <AccordionItem toggleContent toggleButtonText={'Legg til og fjerne'}>
      <DetailsList columns={columns} items={iconGroup.addremove} />
    </AccordionItem>
    <AccordionItem toggleContent toggleButtonText={'Tagger og opplysninger'}>
      <DetailsList columns={columns} items={iconGroup.tags} />
    </AccordionItem>
    <AccordionItem toggleContent toggleButtonText={'Tid'}>
      <DetailsList columns={columns} items={iconGroup.time} />
    </AccordionItem>
    <AccordionItem toggleContent toggleButtonText={'Seksjoner og kategorier'}>
      <DetailsList columns={columns} items={iconGroup.sections} />
    </AccordionItem>
    <AccordionItem toggleContent toggleButtonText={'Endre og manipuler'}>
      <DetailsList columns={columns} items={iconGroup.manipulate} />
    </AccordionItem>
    <AccordionItem toggleContent toggleButtonText={'Filer og typer'}>
      <DetailsList columns={columns} items={iconGroup.files} />
    </AccordionItem>
  </Accordion>
</div>;
```

Store og mer detaljerte temaikoner:

```js noeditor
import { Accordion } from '@skatteetaten/frontend-components/Accordion';
import { AccordionItem } from '@skatteetaten/frontend-components/Accordion/AccordionItem';
import { DetailsList } from '@skatteetaten/frontend-components/DetailsList';
import { Icon } from '@skatteetaten/frontend-components/Icon';

const columns = [
  {
    key: 'column1',
    name: 'Ikon',
    fieldName: 'icon',
    minWidth: 100,
    maxWidth: 100,
    isResizable: false,
  },
  {
    key: 'column2',
    name: 'Navn',
    fieldName: 'name',
    minWidth: 100,
    maxWidth: 270,
    isResizable: true,
  },
  {
    key: 'column3',
    name: 'Brukes til',
    fieldName: 'usage',
    minWidth: 50,
    isResizable: true,
  },
];

const iconGroup = {
  theme: [
    {
      name: 'TemaAndreForhold',
      usage: 'Andre forhold',
    },
    {
      name: 'TemaArbeidTrygdPensjon',
      usage: 'Arbeid, trygd og pensjon',
    },
    {
      name: 'TemaBankLaanForsikring',
      usage: 'Bank, lån og forsikring',
    },
    {
      name: 'TemaBoligEiendeler',
      usage: 'Bolig og eiendeler ',
    },
    {
      name: 'TemaChatbot',
      usage: 'Chatbot - stor utgave',
    },
    {
      name: 'TemaFamilie',
      usage: 'Familie',
    },
    {
      name: 'TemaFinans',
      usage: 'Finans',
    },
    {
      name: 'TemaKredittfradrag',
      usage: 'Kredittfradrag',
    },
    {
      name: 'TemaGaveArv',
      usage: 'Gave og arv',
    },
    {
      name: 'TemaPersonligeForhold',
      usage: 'Personlige forhold',
    },
    {
      name: 'TemaSelskapDeltakerfastsetting',
      usage: 'Deltakerfastsetting',
    },
    {
      name: 'TemaVarelagerFordringer',
      usage: 'Varelager og fordringer',
    },
    {
      name: 'TemaDriftsmidler',
      usage: 'Driftsmidler',
    },
    {
      name: 'TemaDrosjeServering',
      usage: 'Overnatting, servering og drosje',
    },
    {
      name: 'TemaEiendelerEgenkapitalGjeld',
      usage: 'Eiendeler, egenkapital og gjeld',
    },
    {
      name: 'TemaInntekt',
      usage: 'Inntekter',
    },
    {
      name: 'TemaUtgift',
      usage: 'Utgifter',
    },
    {
      name: 'TemaPersoninntekt',
      usage: 'Personinntekt',
    },
    {
      name: 'TemaNaringsinntekt',
      usage: 'Næringsinntekt',
    },
    {
      name: 'TemaSkogfond',
      usage: 'Skog',
    },
    {
      name: 'TemaMvaRegistreringer',
      usage: 'MVA-registrering',
    },
    {
      name: 'TemaMvaFastsetting',
      usage: 'MVA-fastsetting',
    },
  ],
};

const addIcon = (icons) => {
  return icons.map((props) => ({
    ...props,
    icon: <Icon iconName={props.name} style={{ fontSize: '64px' }} />,
  }));
};

// Add icon element to all icons
Object.keys(iconGroup).forEach((name) => {
  iconGroup[name] = addIcon(iconGroup[name]);
});

<div style={{ marginBottom: '2rem' }}>
  <Accordion>
    <AccordionItem toggleContent toggleButtonText={'Tema'}>
      <DetailsList columns={columns} items={iconGroup.theme} />
    </AccordionItem>
  </Accordion>
</div>;
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>
      Hvis ikonet er viktig for bruk eller forståelse skal det være tydelig
      kontrast mellom ikonfarge og bakgrunn. WCAG krever minst 3.0 i kontrast.
    </li>
    <li>
      Ikoner som kun er pynt/dekor bør skjules for skjermleser. Ikoner som er
      meningsbærende må gis et tekstalternativ, f.eks. med attributtene
      aria-label eller alt.
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.1.1 A, Ikke-tekstlig innhold</li>
    <li>1.4.11 AA, Kontrast for ikke-tekstlig innhold </li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>Aria-hidden brukes for å skjule ikoner for skjermleser.</li>
  </ul>
</>
```

```js noeditor beskrivelse
<>
  <h3>Ikoner er viktige i digitale flater</h3>

  <p>
    Ikoner er en viktig del av den visuelle kommunikasjon på digitale
    plattformer. Gode ikoner er universelle, sparer plass og intuitive – vi
    oppfatter dem umiddelbart. Ikoner bidrar til å
  </p>
  <ul>
    <li>forenkle navigasjonen</li>
    <li>visualisere ideer</li>
    <li>støtte tekstlig innhold</li>
    <li>skape god interaksjon</li>
  </ul>

  <h3>Ikonene er basert på standarder</h3>

  <p>
    Ikonene i Skatteetatens designsystem er basert på standardikoner fra
    <a class="brodtekst-link" href="https://materialdesignicons.com/">
      {' '}
      Material Design Icons
    </a>, i tillegg til utvidet med noen egendesignede ikoner (i SVG). Vi bruker
    ikoner direkte eller i en av de andre komponentene i designsystemet.
  </p>

  <h3>Retningslinjer for temaikoner</h3>
  <ul>
    <li>Bruk størrelse på 48px og oppover.</li>
    <li>Bruk temaikoner sammen med overskrift i starten på en temaseksjon.</li>
  </ul>

  <h3>Temaikoner i komponenter</h3>
  <p>
    Generelt kan du bruke temaikonene som del av et grensesnitt. Unngå å bruke
    temaikoner som knapper eller interaksjonselementer, med disse unntakene:
  </p>
  <ul>
    <li>Som del av en forsideknapp (NavigationTile).</li>
    <li>
      Som del av en seksjon eller et innholdskort (Card), med
      interaksjonselementer ved siden av.
    </li>
  </ul>
</>
```
