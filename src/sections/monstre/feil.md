```js noeditor
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';
import Card from '@skatteetaten/frontend-components/Card';
import Icon from '@skatteetaten/frontend-components/Icon';
import TextField from '@skatteetaten/frontend-components/TextField';
import Button from '@skatteetaten/frontend-components/Button';
import ActionButton from '@skatteetaten/frontend-components/ActionButton';
import TopStripe, {
  TopStripeMenu,
  TopStripeButton
} from '@skatteetaten/frontend-components/TopStripe';
import TopBanner from '@skatteetaten/frontend-components/TopBanner';
import Link from '@skatteetaten/frontend-components/Link';
import MessageBar from '@skatteetaten/frontend-components/MessageBar';
<>
  <h2>Prøv først å unngå feil</h2>
  <p>
    En god tommelfingerregel er å prøve å fjerne muligheten for å gjøre feil
    eller kontroller for vanlige feil underveis og spør om bekreftelse hvis de
    går videre. På den måten unngår brukeren ofte å komme i feilsituasjoner. Her
    er det for eksempel kun mulig å skrive inn ni siffer i feltet for
    organisasjonsnummer:
  </p>
  <div style={{ width: '300px' }}>
    <TextField
      onChange={(e, value) => setState({ value })}
      label={'Org.nummer (9 siffer)'}
      mask={'999 999 999'}
      maskChar={''}
    />
  </div>

  <h3>Mønstre for håndtering av feil</h3>

  <Accordion>
    <AccordionItem
      toggleContent
      toggleButtonText={'Se for deg en samtale med brukeren'}
      headingLevel="3"
      stepId={'step-2'}
    >
      <p>
        Hvis en feilsituasjon oppstår, er det ofte nyttig å tenke på at du fører
        en dialog med brukeren. Vi bør møte brukeren med forståelse, at vi vet
        om at brukeren har et problem, og om mulig komme med et forslag til
        løsning. Se situasjonen fra brukerens ståsted om tenk hva du ville
        ønsket at en (hyggelig) person i skranken på skattekontoret hadde sagt.
      </p>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Feil ved innlasting'}
      headingLevel="3"
      stepId={'step-3'}
    >
      <p>
        I tilfeller hvor vi ikke klarer å laste inn data i rammer og bokser,
        viser vi et varselikon, en forklarende tekst og et forslag til løsning.
      </p>

      <div>
        <Card color={Card.Color.WHITE} border={Card.Border.GREEN_BORDER}>
          <div style={{ minHeight: '260px', verticalAlign: 'center' }}>
            <div style={{ textAlign: 'center', paddingTop: '40px' }}>
              <Icon
                iconName="WarningOutline"
                style={{ fontSize: '32px', color: '#1d1d1d' }}
              />
              <p style={{ fontSize: '18px' }}>
                Vi utfører vedlikehold på tjenesten, og kan dessverre ikke vise
                disse opplysningene nå. <br />
                Ønsker du at vi sender deg en melding når tjenesten er oppe igjen?
              </p>
              <Button buttonStyle="primaryRoundedFilled">
                Ja, send melding
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Feil som gjelder flere elementer på siden'}
      headingLevel="3"
      stepId={'step-4'}
    >
      <p>
        Hvis brukeren oppleveren en feilsituasjon som handler om flere av
        elementene på siden, plasserer vi meldingen øverst.
      </p>
      <div>
        <TopStripe>
          <Link path={'#topbanner'} text={'Kontakt oss'} placement="before" />

          <TopStripeMenu title={'Endre skriftstørrelse'}>
            <div style={{ fontSize: '20px' }}>
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
            <Icon iconName="person" />
            Vegard Sandli
          </span>

          <Link path={'#topbanner'} text={'Logg ut'} placement="before" />
        </TopStripe>
        <MessageBar size="large" type={MessageBar.Type.warning}>
          Saken din er blitt oppdatert mens du har kikket på den. Vennligst
          oppdater siden for å hente inn saken på nytt med oppdaterte
          opplysninger.
        </MessageBar>
        <TopBanner
          external
          title={'Side for publikum'}
          homeText={'Tilbake til skatteetaten.no'}
          logoLink
        />
      </div>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'--'}
      headingLevel="3"
      stepId={'step-5'}
    ></AccordionItem>
  </Accordion>
</>;
```
