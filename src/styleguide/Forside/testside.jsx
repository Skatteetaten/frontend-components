import React from 'react';
import ActionButton from '@skatteetaten/frontend-components/ActionButton';
import Button from '@skatteetaten/frontend-components/Button';
import ButtonLink from '@skatteetaten/frontend-components/ButtonLink';
import IconButton from '@skatteetaten/frontend-components/IconButton';
import Link from '@skatteetaten/frontend-components/Link';
import LinkGroup from '@skatteetaten/frontend-components/LinkGroup';
import NavigationTile from '@skatteetaten/frontend-components/NavigationTile';
import NavigationContent from '@skatteetaten/frontend-components/NavigationTile/NavigationContent';
import ScrollToTopButton from '@skatteetaten/frontend-components/ScrollToTopButton';
import FooterContent, {
  FooterLogo
} from '@skatteetaten/frontend-components/FooterContent';
import Pagination from '@skatteetaten/frontend-components/Pagination';
import TopStripe, {
  TopStripeMenu,
  TopStripeButton
} from '@skatteetaten/frontend-components/TopStripe';
import TopBanner from '@skatteetaten/frontend-components/TopBanner';
import Icon from '@skatteetaten/frontend-components/Icon';
import Typography from '@skatteetaten/frontend-components/Typography';
import CheckBox from '@skatteetaten/frontend-components/CheckBox';
import ComboBox from '@skatteetaten/frontend-components/ComboBox';
import DatePicker from '@skatteetaten/frontend-components/DatePicker';
import Dropdown from '@skatteetaten/frontend-components/Dropdown';
import { useState } from 'react';
import FileUploader, {
  FileFormatTypes
} from '@skatteetaten/frontend-components/FileUploader';
import RadioButtonGroup from '@skatteetaten/frontend-components/RadioButtonGroup';
import SearchField from '@skatteetaten/frontend-components/SearchField';
import TextField from '@skatteetaten/frontend-components/TextField';
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';
import AccordionMenu from '@skatteetaten/frontend-components/AccordionMenu';
import AccordionMenuItem from '@skatteetaten/frontend-components/AccordionMenu/AccordionMenuItem';
import Card from '@skatteetaten/frontend-components/Card';
import OpenClose from '@skatteetaten/frontend-components/OpenClose';
import CommandBar from '@skatteetaten/frontend-components/CommandBar';
import Step from '@skatteetaten/frontend-components/StepList/Step';
import StepList from '@skatteetaten/frontend-components/StepList';
import Tabs from '@skatteetaten/frontend-components/Tabs';
import TabItem from '@skatteetaten/frontend-components/Tabs/TabItem';
import Chip from '@skatteetaten/frontend-components/Chip';
import Callout from '@skatteetaten/frontend-components/Callout';
import Dialog from '@skatteetaten/frontend-components/Dialog';
import MessageBar from '@skatteetaten/frontend-components/MessageBar';
import LabelWithCallout from '@skatteetaten/frontend-components/LabelWithCallout';
import ErrorMessage from '@skatteetaten/frontend-components/ErrorMessage';
import ProgressBar from '@skatteetaten/frontend-components/ProgressBar';
import Spinner from '@skatteetaten/frontend-components/Spinner';
import DetailsList from '@skatteetaten/frontend-components/DetailsList';
import Table from '@skatteetaten/frontend-components/Table';

function Testside(props) {
  const pageSize = 8;
  const [displayedData, setDisplayedData] = React.useState(
    [1, 2, 3].splice(0, pageSize)
  );
  const [currentPage, setCurrentPage] = React.useState(1);
  const initialState = {
    options: [
      { key: 'A', text: 'alfa', value: 'Alfa' },
      { key: 'B', text: 'beta', value: 'Beta' },
      { key: 'C', text: 'gamma', value: 'Gamma' },
      { key: 'D', text: 'delta', value: 'Delta' },
      { key: 'E', text: 'echo', value: 'Echo' }
    ],
    isCalloutVisible: false,
    hideDialog: true
  };
  const [files, setFiles] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const dlStyle = {
    display: 'inline-block',
    width: '50%',
    margin: '0 0 5px 0',
    verticalAlign: 'text-top'
  };

  const removeMargin = {
    margin: '0'
  };

  const ulStyle = {
    padding: 0,
    margin: 0
  };

  const centerAlignStyle = {
    display: 'flex',
    alignItems: 'center'
  };

  const timeStampStyle = {
    paddingLeft: 40,
    marginTop: '-10px'
  };

  const titles = {
    step1: {
      no: 'Jobber du?',
      en: 'Are you a wage earner doing paid work?'
    },
    step2: {
      no: 'Overnatting',
      en: 'Spend the night somewhere else than at home?'
    },
    step3: {
      no: 'Bor i Norge',
      en: 'Where is your home?'
    }
  };
  const showFirstStep = true;
  const editableContent = (data, close, rowIndex) => (
    <div>
      <p>Editerbart innhold</p>
    </div>
  );

  const columns = [
    {
      name: 'Måned',
      fieldName: 'month',
      sortable: true,
      autohideSorting: false
    },
    {
      name: 'Beløp',
      fieldName: 'amount',
      alignment: 'right',
      sortable: true,
      autohideSorting: false
    },
    {
      name: 'Dekningsgrad',
      fieldName: 'coverage',
      alignment: 'right'
    },
    {
      name: 'Avkastning',
      fieldName: 'revenue',
      alignment: 'right'
    }
  ];

  const data = [
    {
      month: 'Januar',
      amount: 5426,
      coverage: '100%',
      revenue: '1000'
    },
    {
      month: 'Februar',
      amount: 5432,
      coverage: '50%',
      revenue: '500'
    },
    {
      month: 'Mars',
      amount: 4899,
      coverage: '20%',
      revenue: '2000'
    },
    {
      month: 'April',
      amount: 2344,
      coverage: '30%',
      revenue: '1055'
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
        name: 'AccountMultiple',
        usage: 'To eller flere'
      },
      {
        name: 'AccountChild',
        usage: 'Familie'
      },
      {
        name: 'AccountEnk',
        usage: 'Enkeltpersonsforetak'
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
      },
      {
        name: 'Familie',
        usage: 'Familie'
      },
      {
        name: 'Ekteskap',
        usage: 'Ekteskap'
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
        name: 'PreviewFile',
        usage: 'Forhåndsvisning'
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
    ],
    theme: [
      {
        name: 'TemaAndreForhold',
        usage: 'Andre forhold'
      },
      {
        name: 'TemaArbeidTrygdPensjon',
        usage: 'Arbeid, trygd og pensjon'
      },
      {
        name: 'TemaBankLaanForsikring',
        usage: 'Bank, lån og forsikring'
      },
      {
        name: 'TemaBoligEiendeler',
        usage: 'Bolig og eiendeler '
      },
      {
        name: 'TemaFamilie',
        usage: 'Familie'
      },
      {
        name: 'TemaFinans',
        usage: 'Finans'
      },
      {
        name: 'TemaKredittfradrag',
        usage: 'Kredittfradrag'
      },
      {
        name: 'TemaGaveArv',
        usage: 'Gave og arv'
      },
      {
        name: 'TemaPersonligeForhold',
        usage: 'Personlige forhold'
      },
      {
        name: 'TemaSelskapDeltakerfastsetting',
        usage: 'Deltakerfastsetting'
      }
    ]
  };

  const printIcons = icons => {
    return icons.map(props => (
      <Icon
        iconName={props.name}
        style={{ fontSize: '30px', position: 'relative' }}
      />
    ));
  };

  return (
    <>
      <h1>Testside for komponenter</h1>

      <ActionButton icon="AddOutline">Legg til</ActionButton>
      <ActionButton icon="Update" color="black">
        Oppdater
      </ActionButton>
      <hr />
      <Button buttonStyle="primary">Godkjenn</Button>
      <Button buttonStyle="primaryRoundedFilled">Send inn uendret</Button>
      <Button icon="edit">Endre</Button>
      <Button buttonStyle="warning">Avvis</Button>
      <hr />

      <ButtonLink path={'#'} text="Se og endre skattekort" />
      <hr />
      <IconButton title="Skriv ut" circle buttonSize="large" icon="Print" />
      <IconButton title="Skriv ut" buttonSize="large" icon="Print" />
      <IconButton title="Skriv ut" circle buttonSize="default" icon="Print" />
      <IconButton title="Skriv ut" buttonSize="default" icon="Print" />
      <hr />
      <Link
        path={'#link'}
        text={'Last ned dokumentene'}
        icon={'Download'}
        placement="before"
      />
      <Link
        path={'#link'}
        text={'Gå til oversikt'}
        icon={'ArrowForward'}
        placement="before"
      />
      <Link
        path={'#link'}
        text={'Åpne i nytt vindu'}
        icon={'OpenInNew'}
        openInNew={true}
        placement="after"
      />
      <p>
        En <Link path={'#link'} text={'link'} /> inni et avsnitt med tekst.
      </p>
      <hr />
      <LinkGroup
        links={[
          {
            text: 'Dette er en link',
            path: '#linkgroup'
          },
          {
            text: 'En annen  link',
            path: '#linkgroup'
          }
        ]}
      />
      <hr />
      <NavigationTile ariaLabel="Velge person eller bedrift">
        <NavigationContent
          to={'#navigationtile'}
          heading={'Bedrift'}
          icon={'Company'}
        >
          A-melding, særavgift og veiledere som hjelper å rapportere riktig.
        </NavigationContent>
        <NavigationContent
          to={'#navigationtile'}
          heading={'Person'}
          icon={'Person'}
        >
          Skattekort, skattemelding (selvangivelse), skatteoppgjør, tema og
          fradrag som hjelper deg til få riktig skatt.
        </NavigationContent>
      </NavigationTile>
      <NavigationTile
        ariaLabel="Velge person eller bedrift"
        alignTitle={'left'}
        alignDescription={'left'}
        alignIcon={'right'}
      >
        <NavigationContent
          to={'#navigationtile'}
          icon={'arrowForward'}
          heading={'Bedrift'}
        />
        <NavigationContent
          to={'#navigationtile'}
          heading={'Person'}
          icon={'arrowForward'}
        />
      </NavigationTile>
      <hr />
      <ScrollToTopButton label={'Til toppen'} />
      <FooterContent />
      <hr />
      <Pagination
        currentPage={currentPage}
        onPageChange={page => {
          const index = (page - 1) * pageSize;
          setDisplayedData([...10].splice(index, pageSize));
          setCurrentPage(page);
        }}
        total={10}
        pageSize={pageSize}
      />

      <div style={{ marginTop: '60px', marginBottom: '20px' }}>
        <hr />
        <TopStripe>
          <Link
            path={'https://www.skatteetaten.no/kontakt/'}
            text={'Kontakt oss'}
            placement="before"
          />

          <TopStripeMenu title={'Endre skriftstørrelse'}>
            <div style={{ fontSize: '24px', marginTop: '8px' }}>
              Hold Ctrl-tasten nede (Cmd-tasten på Mac). Trykk på + for å
              forstørre eller - for å forminske.
            </div>
          </TopStripeMenu>
          <TopStripeMenu title={'Language / Språk'}>
            <TopStripeButton
              ariaLabel={'Norsk'}
              onClick={() => console.log('NB')}
            >
              Norsk
            </TopStripeButton>
            <TopStripeButton
              icon={'check'}
              ariaLabel={'Nynorsk'}
              onClick={() => console.log('NN')}
            >
              Nynorsk
            </TopStripeButton>
            <TopStripeButton
              ariaLabel={'Engelsk'}
              onClick={() => console.log('EN')}
            >
              Engelsk
            </TopStripeButton>
            <TopStripeButton
              ariaLabel={'Sørsamisk'}
              onClick={() => console.log('SMA')}
            >
              Sørsamisk
            </TopStripeButton>
            <TopStripeButton
              ariaLabel={'Nordsamisk'}
              onClick={() => console.log('SME')}
            >
              Nordsamisk
            </TopStripeButton>
          </TopStripeMenu>

          <span>
            <Icon iconName="person" /> Vegard Sandli
          </span>

          <Link path={'#topstripe'} text={'Logg ut'} placement="before" />
        </TopStripe>
        <TopBanner
          external
          title={'Side for publikum'}
          homeText={'Tilbake til skatteetaten.no'}
        />
      </div>
      <TopBanner
        compact
        homeText="Systemnavn"
        title="Sak eller arbeidsoppgave"
        homeUrl="#topbanner"
      >
        <div>test</div>
      </TopBanner>
      <hr />
      <Typography>
        <h1>Overskriftsnivå 1</h1>
        <p>
          Tekstavsnitt som kan inneholde en lengre tekst. Husk å følge
          klarspråkprinsippene når en skriver tekster. I dette tilfellet skriver
          bare litt ekstra tekst for å få litt innhold, men normalt vil en ønske
          å skrive så konsentrert som mulig. Mange brukere leser bare de første
          ordene i en tekst, eller hopper ganske enkelt over den.
        </p>

        <h2>Overskriftsnivå 2</h2>
        <h3>Overskriftsnivå 3</h3>
        <h4>Overskriftsnivå 4</h4>

        <p>
          Tekstavsnitt som kan inneholde en lengre tekst. Husk å følge
          klarspråkprinsippene når en skriver tekster. I dette tilfellet skriver
          bare litt ekstra tekst for å få litt innhold, men normalt vil en ønske
          å skrive så konsentrert som mulig. Mange brukere leser bare de første
          ordene i en tekst, eller hopper ganske enkelt over den. Dette er en{' '}
          <a href="#testhg">lenke</a>.
        </p>

        <p>Hvordan lage god interaksjonsdesign:</p>
        <ul>
          <li>Kjenner du behovet til brukeren?</li>
          <li>Er du sikker på at du kjenner behovet til brukeren?</li>
          <li>Snakk med andre</li>
        </ul>

        <p>Skatteetatens brukskvalitetsmetode:</p>
        <ol>
          <li>Beskrive konteksten</li>
          <li>Forstå behov og krav</li>
          <li>Designe brukeropplevelsen</li>
          <li>Evaluere</li>
        </ol>
      </Typography>
      <FileUploader
        addFileString={'Last opp fil'}
        label={'Last opp vedlegg'}
        help="Tekst som hjelper brukeren å fylle ut feltet."
        acceptedFileFormats={[
          FileFormatTypes.doc,
          FileFormatTypes.docx,
          FileFormatTypes.txt
        ]}
        files={files}
        uploadFile={file => {
          setSpinner(true);
          setTimeout(() => {
            const newList = [...files];
            newList.push(file);
            setFiles(newList);
            setSpinner(false);
          }, 2000);
        }}
        deleteFile={file => {
          const newList = files.filter(fileInList => fileInList !== file);
          setFiles(newList);
        }}
        loading={spinner}
      />
      <hr />
      <RadioButtonGroup
        label="Type virksomhet"
        options={[
          {
            key: 'A',
            text: 'Enkeltpersonsforetak'
          },
          {
            key: 'B',
            text: 'Aksjeselskap'
          }
        ]}
        onChange={(e, option) => console.log(option)}
        help="Type virksomhet vil påvirke hva du må rapportere til oss."
        id="radio"
      />
      <hr />
      <fieldset style={{ border: 'none' }}>
        <legend style={{ fontSize: '14px' }}>Velg aktuelle lover</legend>
        <CheckBox boxSide={'start'} label="Skatteloven" />
        <CheckBox boxSide={'start'} label="Skattebetalingsloven" />
        <CheckBox boxSide={'start'} label="Skatteforvaltningsloven" />
      </fieldset>
      <hr />
      <ComboBox
        label="Nedtrekksliste"
        help="Tekst som hjelper brukeren til å fylle ut feltet."
        placeHolder="Velg"
        options={initialState.options}
        allowFreeform={false}
        ariaLabel="Eksempel ComboBox"
        useComboBoxAsMenuWidth
        calloutFloating={false}
      />

      <ComboBox
        label="Nedtrekksliste"
        help="Hjelpetekst"
        inputSize="large"
        placeHolder="Velg"
        options={initialState.options}
        allowFreeform={false}
        ariaLabel="Eksempel ComboBox"
        useComboBoxAsMenuWidth
      />
      <ComboBox
        label="Nedtrekksliste"
        help="Hjelpetekst"
        placeHolder="Velg"
        options={initialState.options}
        allowFreeform={false}
        ariaLabel="Eksempel ComboBox"
        useComboBoxAsMenuWidth
        errorMessage={'Vis med feil'}
      />

      <ComboBox
        readOnly
        label="Lesemodus:"
        placeHolder="Velg"
        options={[
          { key: 'A', text: 'Alfa', value: 'Alfa' },
          { key: 'B', text: 'Beta', value: 'Beta' },
          { key: 'C', text: 'Gamma', value: 'Gamma' },
          { key: 'D', text: 'Delta', value: 'Delta' },
          { key: 'E', text: 'Echo', value: 'Echo' }
        ]}
        defaultSelectedKey="D"
        allowFreeform={false}
        ariaLabel="Eksempel ComboBox"
        useComboBoxAsMenuWidth
      />
      <hr />
      <DatePicker
        id={'my-date1'}
        label={'Velg en dato'}
        help={
          'Du kan skrive inn dato i feltet, eller velge en dato ved hjelp av datovelgeren, enten med mus eller bruk tastaturet'
        }
        isRequiredErrorMessage={'Dato må fylles ut'}
      />
      <DatePicker
        id={'my-date1'}
        label={'Velg en dato'}
        inputSize="large"
        help={
          'Du kan skrive inn dato i feltet, eller velge en dato ved hjelp av datovelgeren, enten med mus eller bruk tastaturet'
        }
        isRequiredErrorMessage={'Dato må fylles ut'}
      />
      <DatePicker
        id={'my-date1'}
        label={'Velg en dato'}
        help={
          'Du kan skrive inn dato i feltet, eller velge en dato ved hjelp av datovelgeren, enten med mus eller bruk tastaturet'
        }
        isRequiredErrorMessage={'Dato må fylles ut'}
        errorMessage={'Vis med feil'}
      />
      <hr />
      <Dropdown
        label="Velg favoritt"
        help="Tekst som hjelper brukeren å forstå eller få til."
        options={initialState.options}
        onChange={console.log}
      />
      <Dropdown
        label="Velg favoritt"
        help="Tekst som hjelper brukeren å forstå eller få til"
        inputSize="large"
        options={initialState.options}
        onChange={console.log}
      />
      <Dropdown
        label="Velg favoritt"
        help="Tekst som hjelper brukeren å forstå eller få til."
        options={initialState.options}
        onChange={console.log}
        errorMessage={'Vis med feil'}
      />

      <hr />
      <SearchField
        searchFieldSize="standard"
        border="slim"
        placeholder="Skriv søkeord her"
        ariaLabel="Søk"
        keyboardShortcut={true}
        onSearchIcon={() => alert('Du trykket på søkeikonet')}
      />
      <SearchField
        searchFieldSize="large"
        placeholder="Skriv søkeord her"
        ariaLabel="Søk"
      />
      <hr />
      <TextField id={'my-input'} label={'Navn'} />

      <TextField label={'Navn'} inputSize={'large'} />

      <TextField
        label="Inntektsår"
        errorMessage={'Inntekståret må være etter 2008.'}
      />

      <TextField
        readOnly
        editable
        label="Saksbehandler"
        boldText={true}
        value="Siri Saksbehandler"
      />
      <hr />
      <Accordion>
        <AccordionItem
          toggleContent
          toggleButtonText={'Restskatt på 1 000 kroner eller mer'}
          stepId={'step-1-1'}
        >
          <p>
            Fikk du over 1 000 kroner i restskatt, deles summen opp i 2
            fakturaer. Fristen for når du må betale avhenger av når du fikk
            skatteoppgjøret ditt:
          </p>
          <ul>
            <li>
              Fikk du skatteoppgjøret ditt 20. juni, er fristen for 1. fakturaen
              20. august og 2. fakturaen 24. september.
            </li>
            <li>
              Fikk du skatteoppgjøret ditt 15. august eller senere, er fristen
              for 1. fakturaen 3 uker etter datoen skatteoppgjøret ditt var
              klart, og 2. fakturaen 8 uker etter at skatteoppgjøret ditt var
              klart.
            </li>
          </ul>

          <p>
            Hvis betalingsfristen din er på en lørdag eller søndag, kan du
            betale innen mandagen (første virkedag) etter fristen.
          </p>

          <p>
            Du må betale restskatten selv om du har{' '}
            <a href="#">
              endret etter fristen for skattemeldingen eller klaget
            </a>
            . Hvis du ikke betaler restskatten i tide, løper det
            forsinkelsesrenter ved forfall frem til du betaler.
          </p>

          <p>
            Betaler du ikke innen fristen på første fakturaen, regner vi det som
            om du ikke har betalt i det hele tatt. Trenger du hjelp, ta kontakt
            med skatteoppkreveren i din kommune.
          </p>
        </AccordionItem>
        <AccordionItem
          toggleContent
          toggleButtonText={'Restskatt under 1 000 kroner'}
          stepId={'step-1-2'}
        >
          <p>
            Fristen for å betale hvis du har fått restskatt på under 1 000
            kroner avhenger av når du fikk skatteoppgjøret ditt:
          </p>
          <ul>
            <li>
              Fikk du skatteoppgjøret ditt 20. juni, er fristen for å betale 20.
              august.
            </li>
            <li>
              Fikk du skatteoppgjøret ditt 15. august eller senere, er fristen
              for å betale 3 uker etter datoen skatteoppgjøret ditt var klart.
            </li>
          </ul>

          <p>
            Hvis betalingsfristen din er på en lørdag eller søndag, kan du
            betale innen mandagen (første virkedag) etter fristen.
          </p>

          <p>
            Du må betale restskatten selv om du har{' '}
            <a href="#">
              endret etter fristen for skattemeldingen eller klaget
            </a>
            . Hvis du ikke betaler restskatten i tide, løper det
            forsinkelsesrenter ved forfall frem til du betaler.
          </p>

          <p>Restskatt under 100 kroner trenger du ikke å betale.</p>
        </AccordionItem>
      </Accordion>
      <Accordion processList>
        <AccordionItem
          toggleContent
          toggleButtonText={'Planlegging'}
          stepId={'step-1-1'}
          onClick={() => console.log('Hello World')}
        >
          <p>Hva skal du teste og med hvilke brukere?</p>
        </AccordionItem>
        <AccordionItem
          toggleContent
          toggleButtonText={'Finn deltakere'}
          stepId={'step-1-2'}
        >
          <p>Du trenger minst to deltakere. Kall inn observatører.</p>
        </AccordionItem>
        <AccordionItem
          toggleContent
          toggleButtonText={'Forberedelse'}
          stepId={'step-1-3'}
        >
          <p>Lag oppgaver og gjennomfør pilottest</p>
        </AccordionItem>
        <AccordionItem
          toggleContent
          toggleButtonText={'Gjennomføring'}
          stepId={'step-1-4'}
        >
          <p>Beregn ca. 45 minutter per deltaker.</p>
        </AccordionItem>
        <AccordionItem
          toggleContent
          toggleButtonText={'Oppsummering'}
          stepId={'step-1-5'}
        >
          <p>Lag aksjonsliste sammen med observatører.</p>
        </AccordionItem>
        <AccordionItem
          toggleContent
          toggleButtonText={'Ferdig'}
          stepId={'step-1-6'}
          icon="Check"
          ariaLabel="Fullført"
        >
          <p>
            Et eksempel på et steg der man har ikon istedet for tall i sirkelen
            til venstre. Om ønskelig kan man legge til aria-label som leses opp
            for ikonet, se koden.
          </p>
        </AccordionItem>
      </Accordion>
      <hr />
      <div style={{ width: '500px' }}>
        <AccordionMenu>
          <AccordionMenuItem
            icon="Company"
            iconLabel="Selskap"
            heading={
              <>
                <span>
                  <strong>987 654 321 </strong>
                </span>
                <br />
                <span>
                  <strong>Gårsdprodukter kortreist mat AS</strong>
                </span>
              </>
            }
          >
            <span>
              <strong>Kontaktopplysninger</strong>
            </span>
            <dl style={removeMargin}>
              <dt style={dlStyle}>Navn</dt>
              <dd style={dlStyle}>Ola Nordmann</dd>
              <dt style={dlStyle}>Adresse</dt>
              <dd style={dlStyle}>
                Norgesnavle 666 <br />
                4878 Grimstad
              </dd>
              <dt style={dlStyle}>Telefon</dt>
              <dd style={dlStyle}>987 65 432</dd>
            </dl>
          </AccordionMenuItem>
          <AccordionMenuItem
            icon="Briefcase"
            iconLabel={'Arbeidsgiver'}
            heading={
              <span>
                <strong>Kommentar</strong>
              </span>
            }
          >
            <div style={centerAlignStyle}>
              <strong>Om parten </strong>
              <IconButton
                alt="Rediger"
                title="Redigerer parten"
                type="default"
                icon="Edit"
              />
            </div>
            <p>
              Vært i kontakt med selskapet som opplyser at de har solgt
              varelagrene i juni.
            </p>
            <div style={centerAlignStyle}>
              <p style={removeMargin}>
                <em>Siri Saksbehandler, 17.07.2019 </em>
              </p>
              <IconButton
                alt="Oppdater"
                title="Oppdaterer partsinfo"
                type="small"
                icon="Update"
              />
            </div>
          </AccordionMenuItem>
          <AccordionMenuItem
            icon="Briefcase"
            iconLabel={'Arbeidsgiver'}
            heading={
              <>
                <span>
                  <strong>Saksbehandling</strong>
                </span>
                <br />
                <span>1 aktiv sak</span>
              </>
            }
          >
            <ul style={ulStyle}>
              <li>
                <ActionButton icon="Update" ariaLabel="Oppdater">
                  Vurder omberegning engangsavgift
                </ActionButton>
                <br />
                <div style={timeStampStyle}>Sist endret: 16.07.2019</div>
              </li>
              <li>
                <ActionButton icon="Check" ariaLabel="Utført">
                  Refusjon engangsavgift
                </ActionButton>
                <br />
                <div style={timeStampStyle}>Sist endret: 22.05.2019</div>
              </li>
              <li>
                <ActionButton icon="Check" ariaLabel="Utført">
                  Refusjon engangsavgift
                </ActionButton>
                <br />
                <div style={timeStampStyle}>Sist endret: 14.05.2019</div>
              </li>
            </ul>
          </AccordionMenuItem>
        </AccordionMenu>
      </div>
      <hr />
      <Card
        color={Card.Color.BEIGE}
        title="Beige"
        circleOnIcon={true}
        isExpanded={false}
        expand
      >
        <p>
          De fleste lønnsmottakere og pensjonister fikk skatteoppgjøret 27.
          juni. Neste mulighet var 15. august, og heretter blir det løpende
          oppgjør frem til 24. oktober. Vi kan dessverre ikke fortelle deg når
          du får skatteoppgjøret ditt, hverken på telefon, chat eller på
          skattekontoret.
        </p>
      </Card>
      <Card
        color={Card.Color.GREEN}
        title="Grønn"
        circleOnIcon={false}
        isExpanded={false}
        expand
        margin="large"
      >
        <p>
          De fleste lønnsmottakere og pensjonister fikk skatteoppgjøret 27.
          juni. Neste mulighet var 15. august, og heretter blir det løpende
          oppgjør frem til 24. oktober. Vi kan dessverre ikke fortelle deg når
          du får skatteoppgjøret ditt, hverken på telefon, chat eller på
          skattekontoret.
        </p>
      </Card>
      <Card
        color={Card.Color.GREY}
        title="Grå"
        circleOnIcon={false}
        margin="xlarge"
      >
        <p>
          De fleste lønnsmottakere og pensjonister fikk skatteoppgjøret 27.
          juni. Neste mulighet var 15. august, og heretter blir det løpende
          oppgjør frem til 24. oktober. Vi kan dessverre ikke fortelle deg når
          du får skatteoppgjøret ditt, hverken på telefon, chat eller på
          skattekontoret.
        </p>
      </Card>
      <Card
        color={Card.Color.WHITE}
        title="Hvit"
        circleOnIcon={false}
        isExpanded={false}
        expand
      >
        <p>
          De fleste lønnsmottakere og pensjonister fikk skatteoppgjøret 27.
          juni. Neste mulighet var 15. august, og heretter blir det løpende
          oppgjør frem til 24. oktober. Vi kan dessverre ikke fortelle deg når
          du får skatteoppgjøret ditt, hverken på telefon, chat eller på
          skattekontoret.
        </p>
      </Card>
      <Card
        color={Card.Color.WHITE}
        border={Card.Border.GREEN_BORDER}
        title="Du må betale omregistreringsavgift"
        subtitle="Gjelder kjøretøyet PR 12345"
        circleOnIcon={false}
        isExpanded={false}
        expand
      >
        <p>
          De fleste lønnsmottakere og pensjonister fikk skatteoppgjøret 27.
          juni. Neste mulighet var 15. august, og heretter blir det løpende
          oppgjør frem til 24. oktober. Vi kan dessverre ikke fortelle deg når
          du får skatteoppgjøret ditt, hverken på telefon, chat eller på
          skattekontoret.
        </p>
      </Card>

      <Card
        color={Card.Color.WHITE}
        border={Card.Border.YELLOW_BORDER}
        title="Du må betale omregistreringsavgift"
        subtitle="Gjelder kjøretøyet PR 12345"
        margin="large"
      >
        <p>
          De fleste lønnsmottakere og pensjonister fikk skatteoppgjøret 27.
          juni. Neste mulighet var 15. august, og heretter blir det løpende
          oppgjør frem til 24. oktober. Vi kan dessverre ikke fortelle deg når
          du får skatteoppgjøret ditt, hverken på telefon, chat eller på
          skattekontoret.
        </p>
      </Card>

      <Card
        color={Card.Color.WHITE}
        border={Card.Border.RED_BORDER}
        title="Du må betale omregistreringsavgift"
        subtitle="Gjelder kjøretøyet PR 12345"
        margin="xlarge"
      >
        <p>
          De fleste lønnsmottakere og pensjonister fikk skatteoppgjøret 27.
          juni. Neste mulighet var 15. august, og heretter blir det løpende
          oppgjør frem til 24. oktober. Vi kan dessverre ikke fortelle deg når
          du får skatteoppgjøret ditt, hverken på telefon, chat eller på
          skattekontoret.
        </p>
      </Card>
      <hr />
      <OpenClose title={'Inntekter som skattlegges i ordningen'}>
        <div>Innhold inni en div</div>
      </OpenClose>
      <hr />
      <CommandBar
        items={[
          {
            key: 'Add',
            name: 'Registrer ny opplysning',
            ariaLabel: 'Registrer ny opplysning',
            iconProps: {
              iconName: 'AddOutline'
            }
          }
        ]}
        farItems={[
          {
            key: 'view1',
            name: 'Tekst',
            ariaLabel: 'Vis tekst',
            onClick: () => {
              console.log('Klikk');
            },
            iconProps: {
              iconName: 'File'
            }
          },
          {
            key: 'view2',
            name: 'XML',
            ariaLabel: 'Vis XML',
            selected: true,
            iconProps: {
              iconName: 'XMLFile'
            }
          },
          {
            key: 'view3',
            name: 'Excel',
            ariaLabel: 'Vis XML',
            iconProps: {
              iconName: 'ExcelFile'
            }
          }
        ]}
      />

      <StepList ariaLabel="Liste med steg">
        {showFirstStep && (
          <Step
            stepTitle={titles.step1.no}
            stepId={'step-1-1'}
            actionBtn={{
              text: 'Endre',
              ariaLabel: 'Endre jobber du?'
            }}
          >
            <div>
              <p>Jeg jobber</p>
            </div>
          </Step>
        )}
        <Step
          stepTitle={titles.step2.no}
          stepId={'step-1-2'}
          actionBtn={{ text: 'Endre', ariaLabel: 'Endre overnatting' }}
        >
          <div>
            <p>Ja, jeg overnatter et annet sted enn hjemme på grunn av jobb</p>
          </div>
        </Step>
        <Step stepTitle={titles.step3.no} stepId={'step-1-3'} activeStep={true}>
          <p style={{ marginBottom: '5px' }}>Hvor er hjemmet ditt?</p>
          <RadioButtonGroup
            required
            defaultSelectedKey="A"
            options={[
              {
                key: 'A',
                text: 'Jeg bor i Norge'
              },
              {
                key: 'B',
                text: 'Ikke i Norge'
              }
            ]}
            id="RadiobuttonGroup"
          />
          <br />
        </Step>
        <Step stepType={'next'}>
          <Button buttonStyle="primary">Neste</Button>
        </Step>
      </StepList>
      <hr />
      <Tabs underline={true}>
        <TabItem
          headerText="Tilgjengelige oppgaver"
          itemCount={23}
          itemKey="itemKey-1"
        >
          Tilgjengelige oppgaver
        </TabItem>
        <TabItem headerText="Mine oppgaver" itemCount={2} itemKey="itemKey-2">
          Mine oppgaver
        </TabItem>
        <TabItem
          headerText="Andres oppgaver"
          itemCount={67}
          itemKey="itemKey-3"
        >
          Andres oppgaver
        </TabItem>
      </Tabs>
      <hr />
      <Chip aria-label="Klagesak">Klagesak </Chip>
      <Chip type={Chip.OK} size="standard" aria-label="Godkjent">
        <Icon iconName="Check" /> Godkjent
      </Chip>
      <Chip type={Chip.WARNING} aria-label="Unntatt offentlighet">
        Unntatt offentlighet
      </Chip>
      <hr />
      <MessageBar type={MessageBar.Type.success} onDismiss={() => null}>
        Filen ble lastet opp.
      </MessageBar>
      <MessageBar type={MessageBar.Type.warning}>
        Det finnes feil i kjøretøydata. Sjekk at dette ikke har avgiftsmessige
        konsekvenser.
      </MessageBar>
      <MessageBar type={MessageBar.Type.blocked}>
        Disse feltene er låst for redigering fordi du har fått et varsel fra oss
      </MessageBar>
      <MessageBar type={MessageBar.Type.severeWarning}>
        Strengt fortrolig (Kode 6)
      </MessageBar>
      <MessageBar size="large" onDismiss={() => null}>
        Satsene for denne avgiftstypen ble oppdatert 01.01.2017.
      </MessageBar>
      <hr />
      <LabelWithCallout
        label={'Omregistreringsavgift'}
        help={
          'Avgiften du må betale for å registrere kjøretøyet på en ny person.'
        }
      />
      <hr />
      <ErrorMessage>Skriv datoen slik: 17.05.2019</ErrorMessage>
      <hr />
      <ProgressBar
        label="Laster inn..."
        description="Vennligst vent mens vi laster inn litt data"
        percentComplete={0.33}
      />
      <hr />
      <Spinner size={Spinner.Size.small} spinnerColor="black" />
      <Spinner size={Spinner.Size.medium} spinnerColor="black" />
      <Spinner size={Spinner.Size.large} spinnerColor="black" />
      <hr />
      <DetailsList
        columns={[
          {
            key: 'column1',
            name: 'Fastsatt',
            fieldName: 'fastsatt',
            minWidth: 50,
            maxWidth: 200,
            isResizable: true,
            isSorted: true,
            isSortedDescending: false,
            sortItems: ({ isDescending, fieldName, items }) => {
              if (isDescending) {
                return items.sort((a, b) =>
                  a[fieldName].localeCompare(b[fieldName])
                );
              } else {
                return items.sort((a, b) =>
                  b[fieldName].localeCompare(a[fieldName])
                );
              }
            }
          },
          {
            key: 'column2',
            name: 'Avgiftstype',
            fieldName: 'avgiftstype',
            minWidth: 50,
            maxWidth: 150,
            isResizable: true,
            isSortable: true,
            isSorted: false,
            isSortedDescending: false,
            headerClassName: 'is-sortable',
            sortItems: ({ isDescending, fieldName, items }) => {
              if (isDescending) {
                return items.sort((a, b) =>
                  a[fieldName].localeCompare(b[fieldName])
                );
              } else {
                return items.sort((a, b) =>
                  b[fieldName].localeCompare(a[fieldName])
                );
              }
            }
          },
          {
            key: 'column3',
            name: 'Avgiftsgruppe',
            fieldName: 'avgiftsgruppe',
            minWidth: 50,
            maxWidth: 150,
            isResizable: true
          },
          {
            key: 'column4',
            name: 'Beløp',
            fieldName: 'beloep',
            minWidth: 100,
            maxWidth: 200,
            isResizable: true
          },
          {
            key: 'column5',
            name: 'Fritak',
            fieldName: 'fritak',
            minWidth: 50,
            maxWidth: 150,
            isResizable: true
          },
          {
            key: 'column6',
            name: 'Status',
            fieldName: 'status',
            minWidth: 100,
            maxWidth: 200,
            isResizable: true
          }
        ]}
        items={[
          {
            fastsatt: '31.01.2018',
            avgiftstype: 'OR',
            avgiftsgruppe: '525',
            beloep: '6045',
            fritak: '',
            status: 'Iverksatt',
            kravgrunnlag: null,
            links: null
          },
          {
            fastsatt: '31.05.2018',
            avgiftstype: 'BR',
            avgiftsgruppe: '525',
            beloep: '6033',
            fritak: '',
            status: 'Iverksatt',
            kravgrunnlag: null,
            links: null
          },
          {
            fastsatt: '02.03.2018',
            avgiftstype: 'AR',
            avgiftsgruppe: '525',
            beloep: '6064',
            fritak: '',
            status: 'Under arbeid',
            kravgrunnlag: null,
            links: null
          },
          {
            fastsatt: '03.03.2018',
            avgiftstype: 'DR',
            avgiftsgruppe: '525',
            beloep: '6064',
            fritak: '',
            status: 'Under arbeid',
            kravgrunnlag: null,
            links: null
          },
          {
            fastsatt: '04.01.2018',
            avgiftstype: 'BR',
            avgiftsgruppe: '525',
            beloep: '6064',
            fritak: '',
            status: 'Under arbeid',
            kravgrunnlag: null,
            links: null
          },
          {
            fastsatt: '31.01.2018',
            avgiftstype: 'IR',
            avgiftsgruppe: '525',
            beloep: '6064',
            fritak: '',
            status: 'Iverksatt',
            kravgrunnlag: null,
            links: null
          },
          {
            fastsatt: '31.01.2018',
            avgiftstype: 'OR',
            avgiftsgruppe: '525',
            beloep: '6064',
            fritak: '',
            status: 'Påbegynt',
            kravgrunnlag: null,
            links: null
          },
          {
            fastsatt: '31.01.2018',
            avgiftstype: 'OR',
            avgiftsgruppe: '525',
            beloep: '6064',
            fritak: '',
            status: 'Påbegynt',
            kravgrunnlag: null,
            links: null
          },
          {
            fastsatt: '31.01.2018',
            avgiftstype: 'OR',
            avgiftsgruppe: '525',
            beloep: '6064',
            fritak: '',
            status: 'Påbeynt',
            kravgrunnlag: null,
            links: null
          },
          {
            fastsatt: '31.01.2018',
            avgiftstype: 'QR',
            avgiftsgruppe: '525',
            beloep: '6064',
            fritak: '',
            status: 'Ny',
            kravgrunnlag: null,
            links: null
          },
          {
            fastsatt: '31.01.2018',
            avgiftstype: 'OR',
            avgiftsgruppe: '525',
            beloep: '6064',
            fritak: '',
            status: 'Iverksatt',
            kravgrunnlag: null,
            links: null
          },
          {
            fastsatt: '31.01.2018',
            avgiftstype: 'OR',
            avgiftsgruppe: '525',
            beloep: '6064',
            fritak: '',
            status: 'Ny',
            kravgrunnlag: null,
            links: null
          },
          {
            fastsatt: '31.01.2018',
            avgiftstype: 'OR',
            avgiftsgruppe: '525',
            beloep: '6064',
            fritak: '',
            status: 'Iverksatt',
            kravgrunnlag: null,
            links: null
          }
        ]}
        constrainMode={DetailsList.ConstrainMode.horizontalConstrained}
      />
      <hr />
      <Table
        data={data}
        editableContent={editableContent}
        editableRows
        columns={columns}
      />
      <Table
        fullWidth
        data={data}
        editableContent={editableContent}
        editableRows
        columns={columns}
      />

      <hr />

      {printIcons(iconGroup.arrows)}
      {printIcons(iconGroup.addremove)}
      {printIcons(iconGroup.files)}
      {printIcons(iconGroup.info)}
      {printIcons(iconGroup.manipulate)}
      {printIcons(iconGroup.sections)}
      {printIcons(iconGroup.tags)}
      {printIcons(iconGroup.time)}
      {printIcons(iconGroup.theme)}
    </>
  );
}

export default Testside;
