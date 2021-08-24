### **v.5.0.0 - 24.08.2021**

- Oppgraderer fluent-ui til v8:
  https://github.com/microsoft/fluentui/wiki/Version-8-release-notes
  https://github.com/microsoft/fluentui/wiki/Version-8-migration-guide#individual-components-new-features
  - ivaretar breaking-change på role i checkbox
  - flytter ref på combobox til ytterste wrapper
  - datepicker oppdaterer ref - TO-DO: ikke mulig å aksessere lokal state for editMode
  - refaktorerer TabItem til FunctionComponent
  - oppdaterer types for TextField
- Rydder opp i dupliserte dependencies: Fjerner @uifabric dependencies og peker mot allerede installerte @fabricui versjoner
- Oppgraderer dependencies: Oppgradrere i18next og react-i18next dependencies, plus node-fetch dependency
- Flytter fra dependency til devDependency: uuid
- Fjerner unødvendige dependencies: fjerner tslib (allerede definert i fluentui)
- Eksport til ESM: Endrer fra umd til esm eksport (//TO-DO reaktivere import-maps)
- # Reorganisering av import/export til å fungere med moduler (//TO-DO alle doc-sidene må retestes) //TO-DO fjerne entry.ts i /lib etter compile

### **v.4.1.2 - 24.08.2021**

- FileUploader: Better support for screen reader, and updated focus styling on main button
- LabelWithCallout: fixes a bug where the callout background was not displayed correctly
- Table: fixes an issue where setOpenEditableRowIndex was not called
- Improved accessibility in Chip and Callout examples

### **v.4.1.1 - 17.06.2021**

- TopBanner: now supports TopStripe as a prop, and therefore rendered inside the header-element. (Accessibility improvement)
- DatePicker: Fixes a styling bug where calendar dates overlaped "Today-button", and improved contrast on month-elements.
- LanguagePicker now changes the langauge of the whole page.
- Input fields now has a more consistent look when disabled
- Link: Changed font weight from bold to medium
- Patterns: New patterns for text and single page application. Page layout pattern updated with accessibility improvements.
- RadioButtonGroup: Ability to change label size
- Table: Fixed an accessiblity issue where the expand rows where not read in correct order by screen readers. Ability to display a summarization row.
- Updated browser stats; IE11 removed from list since usage has been less than 2 % for a longer period.
- Updated i18next dependency
- Various updates to documentation

### **v.4.1.0 - 10.05.2021**

- Greatly reduced bundle size! Typescript is now compiled to es modules instead of commonjs in /lib. This means that the building-pipeline must support 'es import'-statements, not just 'require' statements. Note that you may also have to configure jest-testing, see [Kom i gang for utviklere](#section-kom-i-gang-for-utviklere).
- DatePicker: Fixes an accessibility bug where label and input field was not correctly associated.
- LanguagePicker: Fixes a typescript issue.
- ScrollToTopButton: Fixes a styling issue where the icon was not correctly centered.
- FileUploader now supports .CSV files
- Various updates to documentation.

### **v.4.0.0 - 19.04.2021 - Major release**

#### **Better support for micro frontends (UMD build)**

- Enabled UMD module building for the design system. This enables it to be loaded with SystemJS for micro-frontend setups.
- Imports: During the work with UMD building changes were made to imports. Most should be fine but some will need rewrite. Generally all componenets should now be imported directly from '@skatteetaten/frontend-componenents', and not from subfolders. This is especially important if you consume the design system as an UMD module
- Imports: Imports from @fluentui/react are now also imported directly from root and not from sub-folders e.g. @fluentui/react/lib-commonjs/someComponent
- #'@reach/auto-id': This package has been removed because of incompatability. It has been replaced by a manual alternative.

#### **Breaking changes**

- Changed import for Fabric React Components from office-ui-fabric-react to @fluentui/react. https://github.com/microsoft/fluentui#looking-for-office-ui-fabric-react
- New import statement for all components (due to UMD build)
- Card: rewritten so that it now uses a button-element for the open/close-mechanism. This means that support for secondary actions in the header section has been removed. These must now be placed in the card body. Default color is now set to beige.
- Footer: removed fixed width to support a vide range of screen sizes
- Callout: autodismiss and border now defaults to true
- ErrorMessage: removed ariaLabel-prop

#### **Additions and fixes**

- LanguagePicker - new component
- New pattern with page layout
- StepList hos has an option to add outer grid column to better align with pages content.
- Components now uses rem units for font size - accessibility improvements
- Card: Added ability to remove padding inside the card completely.
- SearchField how uses a filter icon instead for magnifier glass when filtering options
- OpenClose: added compact version
- Links: updated hover styles
- Accordion: Chevron icon now aligns towards top
- ActionButton: the text inside button now aligns towards icon instead of being centered.
- Updated Sketch library
- Various updates to documentation and code examples.

### **v.3.8.1 - 10.03.2021**

- Table: now supports spanned rows and has the ability to hide edit buttons on separate rows.
- SearchField: ability to run onChange before setting search results.
- DatePicker: fixes a bug where initPickerDate was ignored.
- Added chatbot icons.

### **v.3.8.0 - 25.02.2021**

- A new section containing recommended patterns.
- Table: caption is now required. Added feature to visually hide table caption, but still make it accessible to screen readers.
- LabelWithCallout: Fixes a visual bug that showed a white area when using a border around the callout.
- Accordion: Better support for dynamic loading of steps and correct rendering of left line. This update also removes outer margins to better support smaller screens. To bring back this margin you have to add your own custom styling.
- SearchField: Accessibility improvements in SearchField with dropdown.

### **v.3.7.7 - 20.01.2021**

- FileUploader: Support for downloading files and overriding accepted file format label.
- AccordionItem: now send html attributes to div (supports data-testid)
- DatePicker: Fixes a bug where error messages would not be displayed (isOutOfBounds and invalidInput)
- LabelWithCallout: Now supports Callout with border.

### **v.3.7.6 - 08.01.2021**

- Callout: Added new prop to draw border around callout
- FileUploader: Added prop that makes delete compatible with webseal
- LinkGroup: Now uses same markup as Link (Accessibility improvement)
- Dialog: Fixes an issue where the logo inside the dialog dissappeared
- Card: added ability to have more html attributes ie. data-testid.

### **v.3.7.5 - 11.12.2020**

- Fixes an issue with icons disappering with react-scripts version 4.0
- ScrollToTopButton: Added aria-hidden to top container to hide it from screen readers.
- Card: title can now be rendered as a custom tag, for instance h2 or h3.

### **v.3.7.4 - 03.12.2020**

- AccordionMenu: added ability to flex content inside title area
- Icons: New icons Pin and PinOff
- TopBanner: Fixed onClick in internal header
- TopStripe/Link: Accessibility; a link can now be used for skipping to main content.

### **v.3.7.3 - 19.11.2020**

- DropDown and TextField: now includes aria-invalid attribute
- AccordionItem: removed aria-controls attribute
- Table: ability to add caption
- Checkbox: Styling updated to white background
- RadioButtonGroup: fixes a styling issue with error border
- ActionButton: fixes a styling issue with alignment
- FileUpload: various accessibility improvements, now exports server response, updated error messages
- New icons: Bell and Facebook
- Updated Sketch file to version 1.6

### **v.3.7.2 - 18.11.2020**

- Table: Fixes an issue with row index and initial loading

### **v.3.7.1 - 03.11.2020**

- Table: Added compact table
- DatePicker: Fixes a bug where icons where not displayed correctly
- SearchField: ability to trigger search by clicking icon, drop down menu is now overlayed.
- Pagination: className is optional as it should be
- TopStripe: Accessibility and styling fixes.
- Sketch file updated to v1.5.
- Updated documentation

### **v.3.7.0 - 29.09.2020**

- SearchField: added ability to activate with keyboard shortcut
- TopBanner/FooterContent: added ability to display english logo.
- Icon: updated company-icons, and added the theme icons.
- Card: changed default border width to 4px.
- Table: ability to trigger editableContent by clicking on row
- Sketch components for designers: updated to version 1.4
- Button: fixes and issue where buttons with icons were not aligned properly
- Button: better supports multiple lines of text

### **v.3.6.0 - 08.09.2020**

- Table: now supports expandable rows. Improved accessbility by labeling sortable columns.
- Callout: improved accessibility by removing role="dialog" as default. This is indirectly applied in LabelWithCallout and help texts in input fields.
- Dialog: improved accessibility by changing default role="alertdialog" to role="dialog".
- DatePicker: now supports different languanges, mainly in aria-labels strings.
- FileUploader: fixes an issue where is was not possible to upload the same file.
- Updated documentation and examples.

### **v.3.5.1 - 21.08.2020**

- Pagination: fixes an issue that displayed wrong number of items when changing page size.
- DatePicker: added readonly mode. Component now uses hooks.
- TopStripeMenu: now uses showOnMobile to better support responsive design.
- Dropdown: fixes a issue where some CSS where not applied.
- IconButton: accessibility improvements; remove role and changed to type=button.
- Documentation on Icon og ActionButton updated.

### **v.3.5.0 - 10.07.2020**

- CommandBar: new component
- Input fields: Added 2px border to input fields when displaying errors.
- File uploader: better support for long file names, added loading callback function and various small improvements.
- Added readonly mode to ComboBox and Dropdown.
- Sketch: updated symbol file (v1.3).
- Card: fixes an issue where Card rendered invalid HTML.
- Dropdown: better support for viewing long option strings.

### **v.3.4.2 - 07.07.2020**

- AccordionItem: Ability to wrap content in span-element when not using headingLevel.

### **v.3.4.1 - 25.06.2020**

- Pagination: fixes a bug when displaying numbers
- Accessbility improvements to TopStripe and TextField (read only mode).
- AccordionItem: added ability to run function on open/collapse (onChange).
- RadioButtonGroup: ErrorMessage is now displayed with red border.
- Fixes various semantic errors in Accordion, Table and IconButton.
- Added section on version strategy ("Krav og versjoner") and improved documentation.

### **v.3.4.0 - 28.05.2020**

- Pagination: new component for navigating long tables or search results.
- Spinner: changed label color from blue to same as spinner
- FileUpload: Improved handeling of long file names, norwegian characters and error messages.
- RadioButtonGroup: Improved typography in description.
- DetailsList: Ability to remove hover effect

### **v.3.3.5 - 13.05.2020**

- Sketch components updated.
- Fixed an issue where icons could not be imported.

### **v.3.3.4 - 08.05.2020**

- Tabs: has options for border and underline for improved contrast and affordance.
- FileUpload: added function to normalize file names.
- InputFields: Help text can now be closed automatically when clicking utside the box.
- Added icon for "Enkeltpersonsforetak"
- Updated fabric to lastest version
- Updated dependencies

### **v.3.3.3 - 29.04.2020**

- New component: ButtonLink. This component should be used when the "Call to action" is to navigate to another page.
- Changed margins in OpenClose to match title
- FileUploader: accessbility improvements and ability to display additional text.
- New icon: account-multiple
- LabelWithCallout: added ability to have aria label on help button.
- Updated documentation: WCAG and ARIA-information, some CSS improvements and updated «Bruk og innhold» for buttons and links.

### **v.3.3.2 - 07.04.2020**

- Changed to manual version strategy. This does not affect how the components are used, it is simply a change in the way we deploy changes.

### **v.3.3.1 - 06.04.2020**

- FileUploader now accepts multiple files.
- Accordion subtitle now accepts object as prop.
- Fixed at bug with placement of a subtitle in accordion.
- RadiobuttonGroup has now an option for horizontal layout
- SearchField no longer shows clear button on Webkit browsers.
- StepList - change button is now correctry centered vertically
- LabelWithCallout - fixes a styling bug visible on non-white backgrounds.
- Added link to Axure components.
- Fix styling bug in heuritics and examples.
- Brought back pink in color list.

### **v.3.3.0 - 19.03.2020**

- New component - FileUploader
- Remove stuck scrollbar inside dialog
- Accessbility improvements to input-fields.
- OpenClose: icons placement defaults to left
- Combobox: fixed focus style
- Upgraded to Fabric 7.82.1

### **v.3.2.2 - 03.03.2020**

- Accessibility improvements to Accordion, Dialog, MessageBar, ErrorMessage, Spinner, ProgressBar, NavigationTile and FooterContent.
- Updated Sketch-file

### **v.3.2.1 - 27.02.2020**

- Dialog: added prop tabletContentOverflows to address an issue when scrolling on iPad.
- Icons: Added some bigger and more detailed theme-icons
- ComboBox: Long options in list are no longer cut - wraps instead.
- SearchField: Fixed a bug where not all props were sent
- Description in RadioButtonGroup was incorrectly set to required

### **v.3.2.0 - 25.02.2020**

- OpenClose: new component
- ActionButton: Icon can now be placed on right side.
- Expand or collapse button in Card wont longer trigger sumbit if used inside a form.
- SearchField can now show search results in a drop down.
- The label in LabelWithCallout can now be rendered as legend (for use in a fieldset).
- LabelWithCallout: fixed an issue where the help icon was incorrecly placed if the label went over multiple lines.
- FooterContent: fixed a typescript error

### **v.3.1.1 - 10.02.2020**

- Dialog: fixed an error where overflow content disappered on iOS.
- Dialog: fixed the logo placement when no title is used
- RadioButtonGroup can now display description.
- Combobox: accessbility improvement: remove aria-role

### **v.3.1.0 - 04.02.2020**

- Internal TopBanner can now render children-elements. Added slantedAreaWidth prop to set width to slanted area.
- Accordion: added ability to specify h-tag level
- Link: new prop OpenInNew
- Added missing className support to Accordion, TopStripe, Chip, ErrorMessage
- TopStripe: Updated example and some styling fixes.
- Dialog: ability to change tooltip/aria-label on close-button.
- Callout: Added focus style to close button.
- Input: ability to use inputMode=numeric
- Icons are now being generated in better quality.
- StepList accessibility improvements
- Website improvements on responsive layout and accessibility

### **v.3.0.1 - 20.12.2019**

- Added missing icons (Ekteskap, Familie, PreviewFile).
- SkeBasis: Set properties palette and fonts as optional.

### **v.3.0.0 - December 2019**

New major release - this is a big one. All components have been rewritten to typescript. We are now able to expose the full API for the components that are based on Fabric components.

#### **Breaking changes**

- All input field now has calloutFloating set to false as default.
- All input field now has same props for help and warning messages (help, warning).
- AccordtionMenu: Prop title has been renamed to heading.
- Button: Prop buttonType has been renamed to buttonStyle.
- Card: Color and border now written on the form: color={Card.Color.WHITE} border={Card.Border.GREEN_BORDER}.
- ComboBox: removed prop expandOnFocus.
- CheckBox: component renamed to from Checkbox to CheckBox.
- CheckBox: remove id-prop.
- DatePicker: Prop info has been renamed to help.
- Dialog: Prop helpText has been removed.
- DropDown: Prop info has been renamed to help.
- FooterContent: Removed id-prop.
- IconButton: Prop alt removed. Use ariaLabel or ariaDescription instead.
- IconButton: Prop buttonType has been renamed to buttonSize.
- Link: Link is now an inline element (span) instead of block.
- MessageBar: type is now written on the form: type={MessageBar.Type.info}.
- NavigationTile: title prop renamed to heading.
- Spinner: size is now written on the form: size={SpinnerSize.medium}.
- TopStripe: Rewritten with new API and subcomponents (TopStripeButton and TopStripeMenu).

#### **Additions and fixes**

- NavigationTile: Can now be rendered with subcomponent, NavigationContent.
- LabelWithCallout: New component.
- FooterContent: added ariaLabel-prop.
- Grid: added className and tag-props.
- TextField: Fixes a bug where a large multiline text field was not rendered correcly.
- Table: added the prop hideOnMobile to hide colums on mobile.
- ScrollToTopButton: Fixes a bug where the text on the button was not renderen in safari.
- Changed error color to improve contrast.
- Added icons for preview, marriage and family.
- Various accessibility improvements.
- Demopage: updated documentation and component template page.

#### **v.2.1.0 - November 7, 2019**

- New components; Link and LinkGroup
- Fixed an issue when displaying help text in a wide TextField
- Added inline help text (CalloutFloating) on ComboBox, Datepicker, Dropdown
- RadioButtonGroup: Added help text and updated style on errorMessage.
- Grid: Added possibility to specify padding
- StepList: Supports conditional rendering of steps, and transparent background color instead of white.
- AccordionItem can now show a subtitle
- Table: open row can be triggerd with prop.
- NavigationTile: Can now render different h2-tags.
- Demopage: mobile navigation and updated documentation.
- Minor updates to Sketch-components

NOTE: The code behind this version is not yet made visble in the github-repo, due to a process of moving between repositories. The changes will be made available in the next release.

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
