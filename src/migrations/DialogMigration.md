**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.5.0**

## Endringer i funksjonalitet:

- komponenten er gjort mer generell og illustrasjoner er ikke lenger innbakt.
- det finnes to varianter: 'standard' og 'important', hvor 'important'-varianten erstatter viktig dialog.
- ventevarsel lages ved å legge inn illustrasjon over tittel og innhold som children (se kodeeksempel lenger ned i tabellen).
- tittel er obligatorisk.

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

## Endringer i API

<!-- For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/modal/">Modal komponent</a> på dokumentasjonssiden til designsystemet. -->

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>
'ariaDescribedById'

'ariaLabelledById'

'closeButtonAriaLabel'

</td>
<td>
Fluent-UI props som er faset ut.
</td>
</tr>
<tr>
<td>'componentRef'</td>
<td>
'ref'

Alle komponentene våre bruker forwardRef. For komponent sendes 'ref' til &lt;dialog&gt;-elementet.

</td>
</tr>
<tr>
<td>
'containerClassName'

'contentClassName'

'styles'

'theme'

</td>
<td>
Fluent-UI spesifikke props som er faset ut. Bruk 'className' eller 'classNames' for å style komponenten.
</td>
</tr>
<tr>
<td>
'dialogContentProps'

'modalProps'

'topButtonsProps'

</td>
<td>
Fluent-UI props som er faset ut.
</td>
</tr>
<tr>
<td>'disableRestoreFocus'</td>
<td>
Fluent-UI prop som er faset ut.
</td>
</tr>
<tr>
<td>'doNotLayer'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'elementToFocusOnDismiss'</td>
<td>
Fluent-UI prop som er faset ut.
</td>
</tr>
<tr>
<td>'firstFocusableSelector'</td>
<td>
Fluent-UI prop som er faset ut.
</td>
</tr>
<tr>
<td>'forceFocusInsideTrap'</td>
<td>
Fluent-UI prop som er faset ut.
</td>
</tr>
<tr>
<td>'hidden'</td>
<td>
Fluent-UI prop som er faset ut. Et alternativ er å sette 'open' til false for å skjule Modal.
</td>
</tr>
<tr>
<td>'ignoreExternalFocusing'</td>
<td>
Fluent-UI prop som er faset ut.
</td>
</tr>
<tr>
<td>'isBlocking'</td>
<td>
Modalen lukkes ved klikk utenfor modalen by default. Bruk 'hideAutoClose' for å skru av autolukking.
</td>
</tr>
<tr>
<td>'isClickableOutsideFocusTrap'</td>
<td>
Fluent-UI prop som er faset ut.
</td>
</tr>
<tr>
<td>'isDarkOverlay'</td>
<td>
Fluent-UI prop som er faset ut.
</td>
</tr>
<tr>
<td>'isModeless'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'isOpen'</td>
<td>
'open'
</td>
</tr>
<tr>
<td>'language'</td>
<td>
'lang'
</td>
</tr>
<tr>
<td>'layoutStyle'</td>
<td>
'padding'. Alternativer er 'none', 's', 'm', 'l', 'mega'. 'l' er default.
</td>
</tr>
<tr>
<td>
'maxWidth'

'minWidth'

</td>
<td>
Fluent-UI props som er faset ut.
</td>
</tr>
<tr>
<td>'onDismiss'</td>
<td>
'onClose'
</td>
</tr>
<tr>
<td>'onDismissed'</td>
<td>
Fluent-UI prop som er faset ut.
</td>
</tr>
<tr>
<td>
'onLayerDidMount'

'onLayerMounted'

</td>
<td>
Fluent-UI props som er faset ut.
</td>
</tr>
<tr>
<td>'responsiveMode'</td>
<td>
Fluent-UI prop som er faset ut.
</td>
</tr>
<tr>
<td>'subText'</td>
<td>
'children'
</td>
</tr>
<tr>
<td>'tabletContentOverflows'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'type'</td>
<td>
Fluent-UI prop som er faset ut.

'hideOutline' er et alternativ for å vise modalen uten ramme.

</td>
</tr>
<tr>
<td>
'waitAlert'

'waitAlertBtnText

</td>
<td>
Faset ut. Bruk 'imageSource' for å legge inn bilde øverst i Modal og 'children' for å legge inn tekst og knapp.

Før:

```javascript static
import { Dialog } from '@skatteetaten/frontend-components/Dialog';
import { ActionButton } from '@skatteetaten/frontend-components/ActionButton';

const [state, setState] = React.useState({ hideDialog: true });

<ActionButton
    buttonStyle="secondary"
    onClick={() => setState({ hideDialog: false })}
    icon="InfoOutline"
  >
    Vis ventevarsel
  </ActionButton>
  <Dialog
    hidden={state.hideDialog}
    type={Dialog.Type.normal}
    onDismiss={() => setState({ hideDialog: true });}
    waitAlert
  ></Dialog>
```

Nå:

```js static
import { Modal } from '@skatteetaten/ds-overlays';
import { Button } from '@skatteetaten/ds-buttons';
import { InfoOutlineSVGPath } from '@skatteetaten/ds-buttons';
import waitAlertIllustration from 'assets/wait-alert-illustration.png';

const ref = React.useRef<HTMLDialogElement>(null);

<Button
    variant={'secondary'}
    onClick={(): void => ref.current?.showModal()}
    svgPath={InfoOutlineSVGPath}
  >
    Vis ventevarsel
  </ActionButton>
  <Modal
        ref={ref}
        title={'Hei, er du fortsatt her?'}
        imageSource={waitAlertIllustration}
        imageSourceAltText={
          'Illustrasjon av travel person med seks armer, opptatt med kontorarbeid.'
        }
      >
        <Paragraph hasSpacing>
          {
            'Vi ser at du ikke har gjort noe på nettsiden på ei stund. Er du fortsatt her?'
          }
        </Paragraph>
        <Button
          className={'width100'}
          onClick={(): void => ref.current?.close()}
        >
          {'Ja'}
        </Button>
      </Modal>
```

</td>
</tr>
</tbody>
</table>
</div>
