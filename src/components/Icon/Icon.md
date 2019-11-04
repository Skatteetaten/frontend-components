** Ikoner kan brukes direkte eller av de andre komponentene i Designsystemet. **

```js
import Icon from '@skatteetaten/frontend-components/Icon';

<div>
  <Icon iconName="AddOutline" style={{ fontSize: '32px', color: '#1362ae' }} />
  <Icon iconName="Settings" style={{ fontSize: '32px' }} />
</div>;
```

### Liste over alle ikoner

```js noeditor
import Icon from '@skatteetaten/frontend-components/Icon';
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';
import DetailsList from '@skatteetaten/frontend-components/DetailsList';
const columns = [
  {
    key: 'column1',
    name: 'Ikon',
    fieldName: 'icon',
    minWidth: 50,
    maxWidth: 50,
    isResizable: false
  },
  {
    key: 'column2',
    name: 'Navn',
    fieldName: 'name',
    minWidth: 50,
    maxWidth: 150,
    isResizable: true
  },
  {
    key: 'column3',
    name: 'Brukes til',
    fieldName: 'usage',
    minWidth: 50,
    isResizable: true
  }
];

const iconGroup = {
  arrows: [
    {
      name: 'CircleUp',
      usage: 'Lukke område'
    },
    {
      name: 'CircleDown',
      usage: 'Åpne område'
    },
    {
      name: 'ChevronUp',
      usage: 'Lukke område'
    },
    {
      name: 'ChevronDown',
      usage: 'Åpne område'
    },
    {
      name: 'ArrowUp',
      usage: 'Opp / sorter stigende'
    },
    {
      name: 'ArrowDown',
      usage: 'Ned / sorter synkende'
    },
    {
      name: 'ArrowBack',
      usage: 'Gå tilbake/Forrige'
    },
    {
      name: 'ArrowForward',
      usage: 'Gå til/Neste'
    },
    {
      name: 'ArrowUpDown',
      usage: 'Usorterte kolonner i tabell'
    },
    {
      name: 'MenuUp',
      usage: 'Opp i meny'
    },
    {
      name: 'MenuDown',
      usage: 'Ned i meny'
    },
    {
      name: 'MoveUp',
      usage: 'Til toppen av siden'
    }
  ],
  info: [
    {
      name: 'Blocked',
      usage: 'Sperret/ikke tilgjengelig'
    },
    {
      name: 'Error',
      usage: 'Feil'
    },
    {
      name: 'ErrorOutline',
      usage: 'Feil'
    },
    {
      name: 'helpFilled',
      usage: 'Hjelp'
    },
    {
      name: 'HelpOutline',
      usage: 'Hjelp'
    },
    {
      name: 'HelpSimple',
      usage: 'Hjelp'
    },
    {
      name: 'Info',
      usage: 'Informasjon, nyttig opplysning'
    },
    {
      name: 'InfoOutline',
      usage: 'Informasjon, nyttig opplysning'
    },
    {
      name: 'Warning',
      usage: 'Advarsel'
    },
    {
      name: 'WarningOutline',
      usage: 'Advarsel'
    }
  ],
  addremove: [
    {
      name: 'Add',
      usage: 'Legg til'
    },
    {
      name: 'AddOutline',
      usage: 'Legg til'
    },
    {
      name: 'Cancel',
      usage: 'Lukk, avbryt eller ikke ok'
    },
    {
      name: 'Delete',
      usage: 'Slett'
    },
    {
      name: 'Share',
      usage: 'Del'
    },
    {
      name: 'Upload',
      usage: 'Last opp'
    },
    {
      name: 'Download',
      usage: 'Last ned'
    },
    {
      name: 'Deploy',
      usage: 'Distribuere (deploye)'
    }
  ],
  tags: [
    {
      name: 'Bookmark',
      usage: 'Merk som bokmerke, snarvei'
    },
    {
      name: 'Favorite',
      usage: 'Merk som favoritt'
    },
    {
      name: 'Check',
      usage: 'Utført, ferdig'
    },
    {
      name: 'Completed',
      usage: 'Utført, ferdig'
    },
    {
      name: 'ChatBubbleOutline',
      usage: 'Kommentar, merknad'
    },
    {
      name: 'Cloud',
      usage: 'Skytjeneste'
    },
    {
      name: 'CloudUpload',
      usage: 'Last opp til skytjeneste'
    },
    {
      name: 'CircleFilled',
      usage: 'Markert'
    },
    {
      name: 'Code',
      usage: 'Kode'
    },
    {
      name: 'Lock',
      usage: 'Låst element'
    },
    {
      name: 'LockOutline',
      usage: 'Låst element'
    },
    {
      name: 'LockOpen',
      usage: 'Ulåst element'
    },
    {
      name: 'LockOutlineOpen',
      usage: 'Ulåst element'
    }
  ],
  time: [
    {
      name: 'Calendar',
      usage: 'Dato, datovelger'
    },
    {
      name: 'CalendarClock',
      usage: 'Dato og tidspunkt'
    },
    {
      name: 'Update',
      usage: 'Oppdater'
    },
    {
      name: 'History',
      usage: 'Historikk'
    },
    {
      name: 'Timeline',
      usage: 'Utvikling over tid'
    },
    {
      name: 'Timelapse',
      usage: 'Pågår, under arbeid'
    },
    {
      name: 'Timersand',
      usage: 'Venter'
    }
  ],
  sections: [
    {
      name: 'Home',
      usage: 'Hjem, tilbake til hjemmeside'
    },
    {
      name: 'Menu',
      usage: 'Meny til smal skjerm'
    },
    {
      name: 'Person',
      usage: 'Personlig'
    },
    {
      name: 'PersonOutline',
      usage: 'Personlig'
    },
    {
      name: 'PersonMore',
      usage: 'Flere enn én person'
    },
    {
      name: 'PersonMoreOutline',
      usage: 'Flere enn én person'
    },
    {
      name: 'Search',
      usage: 'Søk'
    },
    {
      name: 'Settings',
      usage: 'Innstillinger'
    },
    {
      name: 'Skattetrekk',
      usage: 'Skatt, skattetrekk'
    },
    {
      name: 'Avgift',
      usage: 'Avgift generell'
    },
    {
      name: 'AvgiftBedrift',
      usage: 'Avgift for bedrifter'
    },
    {
      name: 'Kroner',
      usage: 'Skatt, penger'
    },
    {
      name: 'Folkeregister',
      usage: 'Folkeregister'
    },
    {
      name: 'Earth',
      usage: 'Utland'
    },
    {
      name: 'Email',
      usage: 'Innboks, e-post, skriv til oss, sende'
    },
    {
      name: 'Briefcase',
      usage: 'Arbeidsgiver'
    },
    {
      name: 'Company',
      usage: 'Bedrift og organisasjon'
    },
    {
      name: 'Hammer',
      usage: 'Starte og drive'
    },
    {
      name: 'BookOpen',
      usage: 'Veiledning'
    },
    {
      name: 'Phone',
      usage: 'Telefon, kontakt'
    },
    {
      name: 'Forum',
      usage: 'Chat, forum'
    },
    {
      name: 'Calculator',
      usage: 'Kalkuler, beregne'
    },
    {
      name: 'Facebook',
      usage: 'Facebook'
    },
    {
      name: 'LinkedIn',
      usage: 'LinkedIn'
    },
    {
      name: 'Twitter',
      usage: 'Twitter'
    },
    {
      name: 'Key',
      usage: 'Tilganger'
    },
    {
      name: 'BookOpenOutline',
      usage: 'Skattemelding'
    },
    {
      name: 'CashRefund',
      usage: 'Skatteoppgjør'
    },
    {
      name: 'LanPending',
      usage: 'Skattkort'
    }
  ],
  manipulate: [
    {
      name: 'FormatAlignLeft',
      usage: 'Venstrejuster'
    },
    {
      name: 'FormatAlignRight',
      usage: 'Høyrejustert'
    },
    {
      name: 'PauseOutline',
      usage: 'Sett på vent'
    },
    {
      name: 'TaOppgave',
      usage: 'Ta oppgave'
    },
    {
      name: 'PlayOutline',
      usage: 'Start'
    },
    {
      name: 'Filter',
      usage: 'Filtrer'
    },
    {
      name: 'SortUp',
      usage: 'Sorter stigende'
    },
    {
      name: 'SortDown',
      usage: 'Sorter synkende'
    },
    {
      name: 'SortDefault',
      usage: 'Sorter default'
    },
    {
      name: 'SortAsc',
      usage: 'Sorter stigende alt 2.'
    },
    {
      name: 'SortDesc',
      usage: 'Sorter synkende alt 2.'
    },
    {
      name: 'OpenInNew',
      usage: 'Åpne i ny fane eller nytt vindu'
    },
    {
      name: 'Copy',
      usage: 'Kopier'
    },
    {
      name: 'Edit',
      usage: 'Endre eller rediger'
    },
    {
      name: 'Print',
      usage: 'Skriv ut'
    },
    {
      name: 'Save',
      usage: 'Lagre (merk at vi normalt har autolagring)'
    }
  ],
  files: [
    {
      name: 'AttachFile',
      usage: 'Filvedlegg'
    },
    {
      name: 'Description',
      usage: 'Detaljer, beskrivelse'
    },
    {
      name: 'FileOutline',
      usage: 'Generell fil '
    },
    {
      name: 'File',
      usage: 'Generell fil'
    },
    {
      name: 'ExcelFile',
      usage: 'Excel-fil'
    },
    {
      name: 'WordFile',
      usage: 'Word-fil'
    },
    {
      name: 'PDFFile',
      usage: 'Pdf-fil'
    },
    {
      name: 'XMLFile',
      usage: 'XML-fil'
    }
  ]
};

const addIcon = icons => {
  return icons.map(props => ({
    ...props,
    icon: (
      <Icon
        iconName={props.name}
        style={{ fontSize: '24px', position: 'relative', bottom: '7px' }}
      />
    )
  }));
};

// Add icon element to all icons
Object.keys(iconGroup).forEach(name => {
  iconGroup[name] = addIcon(iconGroup[name]);
});

<div>
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
  <br />
  <br />
</div>;
```

```js noeditor beskrivelse
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';

<Accordion>
  <AccordionItem
    isOpen
    toggleContent
    toggleButtonText={'Bruk'}
    stepId={'step-1-1'}
  >
    <p>
      Ikoner er en viktig del av visuell kommunikasjon på digitale platformer
      fordi det bidrar blant annet ved å simplifisere navigasjon, optimalisere
      interaksjon, visualisere ideer og støtte tekstlig innhold.
    </p>

    <p>
      Ikonene i Skatteetatens designsystem er en kombinasjon av ikoner fra
      Material design icons (https://materialdesignicons.com), utvidet med noen
      egendesignede ikoner (i SVG)
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <ul>
      <li>
        Meningsbærende ikoner skal forholde seg til WCAG 2.0 med AA 4.5
        kontrastverdi som minimum.
      </li>
      <li>
        Ikoner som er til «pynt» eller brukes som støtte til tekst, kan vises
        med en 3.0 kontrastverdi.
      </li>
      <li>
        Pass på at ikoner som ikke skal leses opp av skjermleser får
        aria-attributt «role='presentation'». Dette hindrer at skjermelser vil
        forsøke å lese opp unicode-tegnet knyttet til symbolet.
      </li>
    </ul>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-3'}
  >
    <p>
      <a
        href="https://developer.microsoft.com/en-us/fabric#/components/icon#Implementation"
        target="_blank"
      >
        Se flere tilgjengelige props i Fabric dokumentasjonen
      </a>
    </p>
  </AccordionItem>
</Accordion>;
```

<br/>
