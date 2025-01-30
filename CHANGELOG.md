```js noeditor
import { Accordion } from '@skatteetaten/frontend-components/Accordion';
import { AccordionItem } from '@skatteetaten/frontend-components/Accordion/AccordionItem';

<div>
  <div lang="en">
    <h2>v.15.0.0 - January 2025</h2>
    <ul>
      <li>Migration guide: WaitALert</li>
      <li>Migration guide: DetailsList</li>
      <li>Migration guide: Card</li>
      <li>Migration guide: Image</li>
      <li>Fixed typo in depreceation warning for Dropdown</li>
      <li>Updated documentation to point to the current design system.</li>
    </ul>
    <h2>v.14.0.1 - August 2024</h2>
    <ul>
      <li>Upgraded dependency: axios</li>
    </ul>
    <h2>v.14.0.0 - June 2024</h2>
    <ul>
      <li>Upgraded dependency: axios</li>
      <li>Upgraded dependency: classnames</li>
      <li>Upgraded dependency: hotkeys-js</li>
      <li>Upgraded dependency: i18next</li>
      <li>Upgraded dependency: prop-types</li>
      <li>Upgraded dependency: react-i18next</li>
    </ul>
    <h2>v.13.0.0 - June 2024</h2>
    <ul>
      <li>Migration guide: Callout</li>
      <li>Migration guide: Accordion</li>
      <li>Migration guide: NavigationTile</li>
      <li>Migration guide: TopBannerInternal</li>
      <li>Migration guide: Tabs</li>
    </ul>
    <h2>v.12.0.0 - April 2024</h2>
    <ul>
      <li>Migration guide: DatePicker</li>
      <li>Migration guide: Pagination</li>
      <li>Migration guide: SearchField</li>
      <li>Migration guide: Tag</li>
    </ul>
    <h2>v.11.0.0 - February 2024</h2>
    <ul>
      <li>Migration guide: TopBanner</li>
      <li>Migration guide: FileUploader</li>
    </ul>
    <h2>v.10.0.1 - January 2024</h2>
    <ul>
      <li>Upgraded dependency: axios </li>
    </ul>

    <h2>v.10.0.0 - November 2023</h2>
    <ul>
      <li>Migration guide: Dropdown</li>
      <li>Migration guide: Dialog</li>
      <li>Migration guide: Modal</li>
      <li>Migration guide: Spinner</li>
      <li>Upgraded dependency: axios </li>
    </ul>

    <h2>v.9.0.1 - October 2023</h2>
    <ul>
      <li>Add EPI documentation links to migration guides</li>
      <li>
        Update migration guides (Checkbox- and RadioGroup) with help
        functionality
      </li>
    </ul>

    <h2>v.9.0.0 - September 2023</h2>
    <ul>
      <li>Migration guide: FooterContent</li>
      <li>Migration guide: TextField</li>
      <li>Migration guide: StepList / Step</li>
      <li>Migration guide: LabelWithCallout</li>
      <li>Migration guide: ErrorSummary</li>
      <li>
        Added prop hideExpand to rowData to control which rows are expandable
      </li>
      <li>Fileuploader - added id-prop</li>
      <li>Changed logo for Statens Innkreving</li>
    </ul>

    <h2>v.8.0.1 - August 2023</h2>
    <ul>
      <li>Added id to button in FileUpload component</li>
    </ul>

    <h2>v.8.0.0 - June 2023</h2>
    <ul>
      <li>Migration guide: Card</li>
      <li>Migration guide: Checkbox</li>
      <li>Migration guide: Errormessage</li>
      <li>Migration guide: MessageBar</li>
      <li>Migration guide: OpenClose</li>
      <li>Migration guide: RadioButtonGroup</li>
      <li>Migration guide: Table</li>
      <li>Add new logo statens innkreving</li>
      <li>Fix typo installasjon.md</li>
      <li>Remove deprecated props in Dialog</li>
    </ul>

    <h2>v.7.0.0 - March 2023</h2>
    <ul>
      <li>Migration guide: Link, LinkGroup</li>
      <li>Migration guide: ScrollToTopButton</li>
      <li>Migration guide: Typography components</li>
      <li>Migration guide: Language (i18next)</li>
      <li>Added support for zip files in FileUpload component</li>
    </ul>

    <h2>v.6.0.5 - February 2023</h2>
    <ul>
      <li>Fixed WCAG violations on GitHub documentation</li>
      <li>NavigtionTile: fixed WCAG 4.1.1 (parsing) violation</li>
    </ul>

    <h2>v.6.0.4 - January 2023</h2>
    <ul>
      <li>Fixed violations on WCAG 3.1.2(Language of Parts)</li>
      <li>have added long attribute on language menu items</li>
      <li>have added long attribute on hardcoded alt texts</li>
      <li>hardcoded texts have been replaced by text variables</li>
      <li>
        DatePicker: nynorsk and sami texts for months and days (for this to
        work, the prop language must have a value)
      </li>
      <li>ErrorSummary: fixed WCAG 2.1.1 (Keyboard) violation</li>
      <li>
        Added the accessibilty statement to the GitHub footer for the design
        system
      </li>
    </ul>

    <h2>v.6.0.3 - January 2023</h2>
    <ul>
      <li>
        TopStrip/TopStripMenuItem: when a keyboard user exits a submenu with the
        tab key, it is now closed by itself (similar to if the user pressed
        enter/space on the close button in the submenu)
      </li>
      <li>
        TopStripMenu: when a keyboard-user has opened a submenu and then use
        shift+tab, the submenu will now be closed when the user leaves the
        actual menu item
      </li>
      <li>
        TextField: input-fields with prefix and/or suffix have the label read
        out by a screen reader now and not just the affix values
      </li>
      <li>
        FooterContent: extended existing example with an accessibilty statement
        and some info about it
      </li>
    </ul>

    <h2>v.6.0.2 - January 2023</h2>
    <ul>
      <li>Pagination: fixed WCAG 4.1.1 violation</li>
      <li>Some small adjustments to migration guides</li>
      <li>
        Datepicker: fixed incorrect date formatting (from D.MM.YYYY to
        DD.MM.YYYY)
      </li>
    </ul>

    <h2>v.6.0.1 - 7 December 2022</h2>
    <ul>
      <li>IconButton: slight adjustment to migration guide (added size)</li>
      <li>Various minor updates to documentation</li>
    </ul>

    <h2>v.6.0.0 - 18 November 2022</h2>
    <p>
      The package '@skatteetaten/frontend-components' is released in parallel
      with '@skatteetaten/ds-core-designtokens', '@skatteetaten/ds-buttons' and
      '@skatteetaten/ds-icons'. The components in these packages replace the
      ones marked 'deprecated' in the documentation. From now on this package
      (@skatteetaten/frontend-components/) will be called 'Designsystem legacy'.
    </p>
    <ul>
      <li>
        Upgraded dependencies: @fluentui/react, i18next, react-i18next,
        typescript
      </li>
      <li>
        Add children prop explicitly for improved compatibility with React 18
      </li>
      <li>
        Moment: removal of moment as a dependency
        <ul>
          <li>
            Automatic conversion from DDMM to DD.MM.YYYY is not included any
            longer (ie. typing 0404 + Enter does not automatically lead to
            04.04.2022). Instead, dates need to be written manually in the
            format DD.MM.YYYY or chosen from the calendar.
          </li>
        </ul>
      </li>
      <li>
        Deprecating the following components:
        <ul>
          <li>Designtokens and SkeBasis</li>
          <li>Button, ActionButton, IconButton and ButtonLink</li>
          <li>Icon</li>
        </ul>
      </li>
    </ul>
  </div>

  <h2>Se eldre versjoner</h2>

  <Accordion>
    <AccordionItem
      toggleContent
      toggleButtonText={'Versjon 5.x.x'}
      stepId={'step-1-1'}
    >
      <div lang="en">
        <h3>v.5.1.0 - 8 September 2022</h3>
        <ul>
          <li>Dialog: new variant with waiting dialog.</li>
          <li>Improved code example for single page application pattern.</li>
          <li>
            Table: improved font size, alignment and padding in compact table
            header.
          </li>
          <li>
            FileUploader: fixes an issue with an id that was not set correctly.
          </li>
          <li>
            Link: Invisible links (Skip to content) are now placed further
            outside view to ensure they wont interfere with other content.
          </li>
          <li>Updated moment dependency.</li>
          <li>Updated docs, tests and other minor improvements.</li>
        </ul>

        <h3>v.5.0.6 - 27 June 2022</h3>
        <ul>
          <li>SearchField: Fixes an issue where id was not set correctly</li>
          <li>Table: ability to open a table row with index</li>
        </ul>

        <h3>v.5.0.5 - 10 May 2022</h3>
        <ul>
          <li>
            SearchField: fixes an issue where the search button was not
            clickable when focused.
          </li>
          <li>
            FileUploader: fixes an issue where aria-describedby was not set
            correctly with no accepted file formats.
          </li>
          <li>
            Documentation: fixes an issue with the path where
            "frontend-components" was missing. Updated examples: Dialog, Modal,
            RadioButtonGroup, Table (editable rows), and error messages. Updated
            typography section.
          </li>
        </ul>

        <h3>v.5.0.4 - 6 April 2022</h3>
        <ul>
          <li>Support node version 16</li>
          <li>
            Datepicker: fixes a bug where error messages
            (isOutOfBoundsErrorMessage) were not displayed correctly.
          </li>
          <li>
            TopBanner: now sets alt-text on logo image based on brand, language
            and link/nolink (external only).
          </li>
        </ul>

        <h3>v.5.0.3 - 10 March 2022</h3>
        <ul>
          <li>Updated FluentUI dependencies.</li>
          <li>Table: Added screen reader only header cells.</li>
        </ul>

        <h3>v.5.0.2 - 23 February 2022</h3>
        <ul>
          <li>Fixes CommonJS build process.</li>
        </ul>

        <h3>v.5.0.1 - 18 February 2022</h3>
        <ul>
          <li>New pattern for help text.</li>
          <li>TopStripe fixes an alignment styling issue.</li>
          <li>
            ErrorSummary: will no longer hide itself if it has children
            elements.
          </li>
          <li>Tables formatFunction: Added JSX-element as valid response.</li>
          <li>ScrollToTopButton: set classname prop to optional.</li>
          <li>Card: Fixes prop for grey background-color.</li>
        </ul>

        <h3>v.5.0.0 - 1 February 2022 - Major release</h3>
        <h4>Breaking</h4>
        <ul>
          <li>React 17 is now required</li>
          <li>
            global imports from root is no longer supported:{' '}
            <code>
              import &#123; CardBorder &#125; from
              '@skatteetaten/frontend-components';
            </code>{' '}
            must now be changed to more specific imports:{' '}
            <code>
              import &#123; CardBorder &#125; from
              '@skatteetaten/frontend-components/Card';
            </code>
          </li>
        </ul>

        <h4>Breaking per component</h4>
        <h5>LabelWithCallout</h5>
        <ul>
          <li>
            'className' prop replaced with customClassNames to target overrides
            to spesific element
          </li>
          <li>
            'autoDismiss', 'border' deprecated, use the same keys within
            'calloutProps' prop instead
          </li>
        </ul>

        <h5>
          SearchField, ComboBox, DatePicker, Dropdown, FileUploader,
          RadioButtonGroup
        </h5>
        <ul>
          <li>'labelCallout' prop renamed to 'labelWithCalloutProps'</li>
          <li>
            'labelWithCalloutAutoDismiss', use 'autodismiss' key under
            'labelWithCalloutProps.calloutProps' prop instead
          </li>
        </ul>

        <h5>DatePicker</h5>
        <p>
          Prop 'labelCallout' og 'labelWithCalloutAutoDismiss' deprecated, use
          CalloutProps exposed under labelWithCalloutProps and
          datepickerCalloutProps instead
        </p>

        <h5>Table</h5>
        <p>Prop className deprecated, use customClassNames instead</p>

        <h5>Button</h5>
        <p>
          Width is no longer defaults to 100 % width on mobile. Use
          mobileFullWidth to enable.
        </p>
        <p>
          Variants have been reorganized/prioritized, with new names and default
          value:
        </p>
        <ul>
          <li>"primaryLarge" is now "callToAction"</li>
          <li>"primaryRoundedFilled" is now "primary"</li>
          <li>"secondary" is now "secondarySimple"</li>
          <li>"primary" is now "primaryCornered"</li>
          <li>"primaryRounded" is now "secondary" (default)</li>
        </ul>

        <h5>ScrollToTopButton</h5>
        <ul>
          <li>
            Now uses breakpoints from designtokens for vertical placement (also
            added ability to change placement)
          </li>
          <li>
            'className' prop replaced with customClassNames to target overrides
            to spesific element
          </li>
        </ul>

        <h4>Colors and design</h4>
        <ul>
          <li>
            Colors updated with new names and values. Colors are now accessible
            via design tokens. Added design tokens for spacing and typography as
            well.
          </li>
          <li>
            New colors brands (themes), which changes the main color in:
            TopBanner (external), FooterContent, Tabs, Dialog and ProgressBar.
            We have themes for Skatteetaten (default), Statens innkreving (INK),
            and Lønnsstøtteordningen (LSO).
          </li>
          <li>New status colors: statusOk and statusWarning.</li>
          <li>
            Both Button and ActionButton have upgraded styling, click and hover
            effects
          </li>
          <li>
            ErrorMessage design upgraded to match the new ErrorSummary
            component.
          </li>
          <li>ActionButton: the large icon is slightly smaller.</li>
          <li>MessageBar now has colored icons and a left border.</li>
        </ul>

        <h4>Micro frontend support and building pipeline</h4>
        <ul>
          <li>
            The components now better supports Micro Frontends; styling
            information can be accessed from shadow DOM. (Note: Dialog does not
            fully support this yet - use Modal instead)
          </li>
          <li>Export has been changed from UMD to ESM.</li>
          <li>Reorganized import and export to support modules.</li>
        </ul>

        <h4>Upgrades and optimizations</h4>
        <ul>
          <li>
            <a
              class="brodtekst-link"
              href="https://github.com/microsoft/fluentui/wiki/Version-8-release-notes"
            >
              Upgraded to Fluent-UI v8
            </a>{' '}
            (this upgrade requires React 17)
          </li>
          <li>
            Upgraded dependencies: axios, i18next og react-i18next and
            node-fetch
          </li>
          <li>
            Remove unnecessary dependencies: tslib (already included in Fluent
            UI) and fixes duplicate dependencies.
          </li>
          <li>Moved uuid from dependency to devDependendy</li>
          <li>
            Icons have been reorganized into a single, much smaller font file,
            using woff-format only.
          </li>
        </ul>

        <h4>Additional</h4>
        <ul>
          <li>Modal: New component for simpler modal boxes.</li>
          <li>Sketch-file updated and reorganized.</li>
          <li>Added new page with design tokens.</li>
          <li>
            Fixes known accessibility issues with Commandbar, Dropdown and
            Combobox.
          </li>
          <li>
            TopBanner: Added ability to change the url when clicking the logo.
          </li>
          <li>
            Table: Updated styling and code for better reposiveness, alignment
            and performance.
          </li>
          <li>
            TopStripe: Updated styling for better mobile support. Added ability
            to set content width for large screens.
          </li>
          <li>Callout: Slightly changed styling for close button.</li>
          <li>
            Added sami translations to components to DatePicker, FileUploader,
            SearchField and Table.
          </li>
          <li>OpenClose: added ability to show underline.</li>
          <li>
            TableRow: added custom styling and fixes a padding issue in SumRow
          </li>
          <li>
            Input fields now has the ability to show required mark next to
            label.
          </li>
          <li>CheckBox has has a role="checkbox" instead of select type.</li>
          <li>
            It is no longer possible to access datepicker local state editMode.
          </li>
          <li>Various updates to documentation</li>
        </ul>
      </div>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Versjon 4.x.x'}
      stepId={'step-1-2'}
    >
      <div lang="en">
        <h3>v.4.2.2 - 12 January 2022</h3>

        <ul>
          <li>Updated Axios to fix vulnerabilities</li>
        </ul>

        <h3>v.4.2.1 - 30.11.2021</h3>

        <ul>
          <li>FileUploader: now supports UPPERCASE file types.</li>
          <li>Removed dependency material-design-icons</li>
        </ul>

        <h3>v.4.2.0 - 24.11.2021</h3>

        <ul>
          <li>New ErrorSummary component.</li>
          <li>
            OpenClose: Improvements to accessbility and reposiveness. Added
            ability to underline text.
          </li>
          <li>Sketch-file updated and reorganized.</li>
          <li>Checkbox: fixes styling for disabled state.</li>
          <li>
            RadioButtonGroup improvements on a display issue when zooming.
          </li>
          <li>Table header cells now reacts to alignment.</li>
          <li>
            Deprecated: Button buttonStyle: primaryRounded,
            primaryRoundedFilled, primaryLarge. We are planning to simplyfy the
            button hierarchy, and in the next major release these variants will
            have new names.
          </li>
        </ul>

        <h3>v.4.1.6 - 15.10.2021</h3>

        <ul>
          <li>TopStripe: Added width to flag SVGs</li>
        </ul>

        <h3>v.4.1.5 - 01.10.2021</h3>

        <ul>
          <li>
            SearchField: fixed keyboard navigation when using a filtered list.
          </li>
        </ul>

        <h3>v.4.1.4 - 22.09.2021</h3>

        <ul>
          <li>
            FileUploader: added more supported file types. Fixes an isse with
            the isLoading-prop that resulted in a console error.
          </li>
          <li>
            SearchField: fixes type specification on props searchShortcutKeys
            and searchIconTitle ('string' to string).
          </li>
        </ul>

        <h3>v.4.1.3 - 06.09.2021</h3>

        <ul>
          <li>
            Revert change from v.4.1.0, compiling to es modules, due to problems
            with build pipelines.
          </li>
          <li>Added function to format column data in table</li>
          <li>Added line in below expandable content in table.</li>
        </ul>

        <h3>v.4.1.2 - 24.08.2021</h3>

        <ul>
          <li>
            FileUploader: Better support for screen reader, and updated focus
            styling on main button
          </li>
          <li>
            LabelWithCallout: fixes a bug where the callout background was not
            displayed correctly
          </li>
          <li>
            Table: fixes an issue where setOpenEditableRowIndex was not called
          </li>
          <li>Improved accessibility in Chip and Callout examples</li>
        </ul>

        <h3>v.4.1.1 - 17.06.2021</h3>

        <ul>
          <li>
            TopBanner: now supports TopStripe as a prop, and therefore rendered
            inside the header-element. (Accessibility improvement)
          </li>
          <li>
            DatePicker: Fixes a styling bug where calendar dates overlaped
            "Today-button", and improved contrast on month-elements.
          </li>
          <li>LanguagePicker now changes the langauge of the whole page.</li>
          <li>Input fields now has a more consistent look when disabled</li>
          <li>Link: Changed font weight from bold to medium</li>
          <li>
            Patterns: New patterns for text and single page application. Page
            layout pattern updated with accessibility improvements.
          </li>
          <li>RadioButtonGroup: Ability to change label size</li>
          <li>
            Table: Fixed an accessiblity issue where the expand rows where not
            read in correct order by screen readers. Ability to display a
            summarization row.
          </li>
          <li>
            Updated browser stats; IE11 removed from list since usage has been
            less than 2 % for a longer period.
          </li>
          <li>Updated i18next dependency</li>
          <li>Various updates to documentation</li>
        </ul>

        <h3>v.4.1.0 - 10.05.2021</h3>

        <ul>
          <li>
            Greatly reduced bundle size! Typescript is now compiled to es
            modules instead of commonjs in /lib. This means that the
            building-pipeline must support 'es import'-statements, not just
            'require' statements. Note that you may also have to configure
            jest-testing, see [Kom i gang for
            utviklere](#section-kom-i-gang-for-utviklere).
          </li>
          <li>
            DatePicker: Fixes an accessibility bug where label and input field
            was not correctly associated.
          </li>
          <li>LanguagePicker: Fixes a typescript issue.</li>
          <li>
            ScrollToTopButton: Fixes a styling issue where the icon was not
            correctly centered.
          </li>
          <li>FileUploader now supports .CSV files</li>
          <li>Various updates to documentation.</li>
        </ul>

        <h3>v.4.0.0 - 19.04.2021 - Major release</h3>

        <h4>Better support for micro frontends (UMD build)</h4>

        <ul>
          <li>
            Enabled UMD module building for the design system. This enables it
            to be loaded with SystemJS for micro-frontend setups.
          </li>
          <li>
            Imports: During the work with UMD building changes were made to
            imports. Most should be fine but some will need rewrite. Generally
            all componenets should now be imported directly from
            '@skatteetaten/frontend-componenents', and not from subfolders. This
            is especially important if you consume the design system as an UMD
            module
          </li>
          <li>
            Imports: Imports from @fluentui/react are now also imported directly
            from root and not from sub-folders e.g.
            @fluentui/react/lib-commonjs/someComponent
          </li>
          <li>
            #'@reach/auto-id': This package has been removed because of
            incompatability. It has been replaced by a manual alternative.
          </li>
        </ul>

        <h4>Breaking changes</h4>

        <ul>
          <li>
            Changed import for Fabric React Components from
            office-ui-fabric-react to @fluentui/react.
            <a
              class="brodtekst-link"
              href="https://github.com/microsoft/fluentui#looking-for-office-ui-fabric-react"
            >
              Looking for Office UI Fabric React?
            </a>
          </li>
          <li>New import statement for all components (due to UMD build)</li>
          <li>
            Card: rewritten so that it now uses a button-element for the
            open/close-mechanism. This means that support for secondary actions
            in the header section has been removed. These must now be placed in
            the card body. Default color is now set to beige.
          </li>
          <li>
            Footer: removed fixed width to support a vide range of screen sizes
          </li>
          <li>Callout: autodismiss and border now defaults to true</li>
          <li>ErrorMessage: removed ariaLabel-prop</li>
        </ul>

        <h4>Additions and fixes</h4>

        <ul>
          <li>new component</li>
          <li>New pattern with page layout</li>
          <li>
            StepList hos has an option to add outer grid column to better align
            with pages content.
          </li>
          <li>
            Components now uses rem units for font size - accessibility
            improvements
          </li>
          <li>
            Card: Added ability to remove padding inside the card completely.
          </li>
          <li>
            SearchField how uses a filter icon instead for magnifier glass when
            filtering options
          </li>
          <li>OpenClose: added compact version</li>
          <li>Links: updated hover styles</li>
          <li>Accordion: Chevron icon now aligns towards top</li>
          <li>
            ActionButton: the text inside button now aligns towards icon instead
            of being centered.
          </li>
          <li>Updated Sketch library</li>
          <li>Various updates to documentation and code examples.</li>
        </ul>
      </div>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Versjon 3.x.x'}
      stepId={'step-1-3'}
    >
      <div lang="en">
        <h3>v.3.8.1 - 10.03.2021</h3>

        <ul>
          <li>
            Table: now supports spanned rows and has the ability to hide edit
            buttons on separate rows.
          </li>
          <li>
            SearchField: ability to run onChange before setting search results.
          </li>
          <li>DatePicker: fixes a bug where initPickerDate was ignored.</li>
          <li>Added chatbot icons.</li>
        </ul>

        <h3>v.3.8.0 - 25.02.2021</h3>

        <ul>
          <li>A new section containing recommended patterns.</li>
          <li>
            Table: caption is now required. Added feature to visually hide table
            caption, but still make it accessible to screen readers.
          </li>
          <li>
            LabelWithCallout: Fixes a visual bug that showed a white area when
            using a border around the callout.
          </li>
          <li>
            Accordion: Better support for dynamic loading of steps and correct
            rendering of left line. This update also removes outer margins to
            better support smaller screens. To bring back this margin you have
            to add your own custom styling.
          </li>
          <li>
            SearchField: Accessibility improvements in SearchField with
            dropdown.
          </li>
        </ul>

        <h3>v.3.7.7 - 20.01.2021</h3>

        <ul>
          <li>
            FileUploader: Support for downloading files and overriding accepted
            file format label.
          </li>
          <li>
            AccordionItem: now send html attributes to div (supports
            data-testid)
          </li>
          <li>
            DatePicker: Fixes a bug where error messages would not be displayed
            (isOutOfBounds and invalidInput)
          </li>
          <li>LabelWithCallout: Now supports Callout with border.</li>
        </ul>

        <h3>v.3.7.6 - 08.01.2021</h3>

        <ul>
          <li>Callout: Added new prop to draw border around callout</li>
          <li>
            FileUploader: Added prop that makes delete compatible with webseal
          </li>
          <li>
            LinkGroup: Now uses same markup as Link (Accessibility improvement)
          </li>
          <li>
            Dialog: Fixes an issue where the logo inside the dialog dissappeared
          </li>
          <li>
            Card: added ability to have more html attributes ie. data-testid.
          </li>
        </ul>

        <h3>v.3.7.5 - 11.12.2020</h3>

        <ul>
          <li>
            Fixes an issue with icons disappering with react-scripts version 4.0
          </li>
          <li>
            ScrollToTopButton: Added aria-hidden to top container to hide it
            from screen readers.
          </li>
          <li>
            Card: title can now be rendered as a custom tag, for instance h2 or
            h3.
          </li>
        </ul>

        <h3>v.3.7.4 - 03.12.2020</h3>

        <ul>
          <li>
            AccordionMenu: added ability to flex content inside title area
          </li>
          <li>Icons: New icons Pin and PinOff</li>
          <li>TopBanner: Fixed onClick in internal header</li>
          <li>
            TopStripe/Link: Accessibility; a link can now be used for skipping
            to main content.
          </li>
        </ul>

        <h3>v.3.7.3 - 19.11.2020</h3>

        <ul>
          <li>DropDown and TextField: now includes aria-invalid attribute</li>
          <li>AccordionItem: removed aria-controls attribute</li>
          <li>Table: ability to add caption</li>
          <li>Checkbox: Styling updated to white background</li>
          <li>RadioButtonGroup: fixes a styling issue with error border</li>
          <li>ActionButton: fixes a styling issue with alignment</li>
          <li>
            FileUpload: various accessibility improvements, now exports server
            response, updated error messages
          </li>
          <li>New icons: Bell and Facebook</li>
          <li>Updated Sketch file to version 1.6</li>
        </ul>

        <h3>v.3.7.2 - 18.11.2020</h3>

        <ul>
          <li>Table: Fixes an issue with row index and initial loading</li>
        </ul>

        <h3>v.3.7.1 - 03.11.2020</h3>

        <ul>
          <li>Table: Added compact table</li>
          <li>
            DatePicker: Fixes a bug where icons where not displayed correctly
          </li>
          <li>
            SearchField: ability to trigger search by clicking icon, drop down
            menu is now overlayed.
          </li>
          <li>Pagination: className is optional as it should be</li>
          <li>TopStripe: Accessibility and styling fixes.</li>
          <li>Sketch file updated to v1.5.</li>
          <li>Updated documentation</li>
        </ul>

        <h3>v.3.7.0 - 29.09.2020</h3>

        <ul>
          <li>SearchField: added ability to activate with keyboard shortcut</li>
          <li>
            TopBanner/FooterContent: added ability to display english logo.
          </li>
          <li>Icon: updated company-icons, and added the theme icons.</li>
          <li>Card: changed default border width to 4px.</li>
          <li>Table: ability to trigger editableContent by clicking on row</li>
          <li>Sketch components for designers: updated to version 1.4</li>
          <li>
            Button: fixes and issue where buttons with icons were not aligned
            properly
          </li>
          <li>Button: better supports multiple lines of text</li>
        </ul>

        <h3>v.3.6.0 - 08.09.2020</h3>

        <ul>
          <li>
            Table: now supports expandable rows. Improved accessbility by
            labeling sortable columns.
          </li>
          <li>
            Callout: improved accessibility by removing role="dialog" as
            default. This is indirectly applied in LabelWithCallout and help
            texts in input fields.
          </li>
          <li>
            Dialog: improved accessibility by changing default
            role="alertdialog" to role="dialog".
          </li>
          <li>
            DatePicker: now supports different languanges, mainly in aria-labels
            strings.
          </li>
          <li>
            FileUploader: fixes an issue where is was not possible to upload the
            same file.
          </li>
          <li>Updated documentation and examples.</li>
        </ul>

        <h3>v.3.5.1 - 21.08.2020</h3>

        <ul>
          <li>
            Pagination: fixes an issue that displayed wrong number of items when
            changing page size.
          </li>
          <li>DatePicker: added readonly mode. Component now uses hooks.</li>
          <li>
            TopStripeMenu: now uses showOnMobile to better support responsive
            design.
          </li>
          <li>Dropdown: fixes a issue where some CSS where not applied.</li>
          <li>
            IconButton: accessibility improvements; remove role and changed to
            type=button.
          </li>
          <li>Documentation on Icon og ActionButton updated.</li>
        </ul>

        <h3>v.3.5.0 - 10.07.2020</h3>

        <ul>
          <li>CommandBar: new component</li>
          <li>
            Input fields: Added 2px border to input fields when displaying
            errors.
          </li>
          <li>
            File uploader: better support for long file names, added loading
            callback function and various small improvements.
          </li>
          <li>Added readonly mode to ComboBox and Dropdown.</li>
          <li>Sketch: updated symbol file (v1.3).</li>
          <li>Card: fixes an issue where Card rendered invalid HTML.</li>
          <li>Dropdown: better support for viewing long option strings.</li>
        </ul>

        <h3>v.3.4.2 - 07.07.2020</h3>

        <ul>
          <li>
            AccordionItem: Ability to wrap content in span-element when not
            using headingLevel.
          </li>
        </ul>
        <h3>v.3.4.1 - 25.06.2020</h3>

        <ul>
          <li>Pagination: fixes a bug when displaying numbers</li>
          <li>
            Accessbility improvements to TopStripe and TextField (read only
            mode).
          </li>
          <li>
            AccordionItem: added ability to run function on open/collapse
            (onChange).
          </li>
          <li>
            RadioButtonGroup: ErrorMessage is now displayed with red border.
          </li>
          <li>
            Fixes various semantic errors in Accordion, Table and IconButton.
          </li>
          <li>
            Added section on version strategy ("Krav og versjoner") and improved
            documentation.
          </li>
        </ul>

        <h3>v.3.4.0 - 28.05.2020</h3>

        <ul>
          <li>
            Pagination: new component for navigating long tables or search
            results.
          </li>
          <li>Spinner: changed label color from blue to same as spinner</li>
          <li>
            FileUpload: Improved handeling of long file names, norwegian
            characters and error messages.
          </li>
          <li>RadioButtonGroup: Improved typography in description.</li>
          <li>DetailsList: Ability to remove hover effect</li>
        </ul>

        <h3>v.3.3.5 - 13.05.2020</h3>

        <ul>
          <li>Sketch components updated.</li>
          <li>Fixed an issue where icons could not be imported.</li>
        </ul>

        <h3>v.3.3.4 - 08.05.2020</h3>

        <ul>
          <li>
            Tabs: has options for border and underline for improved contrast and
            affordance.
          </li>
          <li>FileUpload: added function to normalize file names.</li>
          <li>
            InputFields: Help text can now be closed automatically when clicking
            utside the box.
          </li>
          <li>Added icon for "Enkeltpersonsforetak"</li>
          <li>Updated fabric to lastest version</li>
          <li>Updated dependencies</li>
        </ul>

        <h3>v.3.3.3 - 29.04.2020</h3>

        <ul>
          <li>
            New component: ButtonLink. This component should be used when the
            "Call to action" is to navigate to another page.
          </li>
          <li>Changed margins in OpenClose to match title</li>
          <li>
            FileUploader: accessbility improvements and ability to display
            additional text.
          </li>
          <li>New icon: account-multiple</li>
          <li>
            LabelWithCallout: added ability to have aria label on help button.
          </li>
          <li>
            Updated documentation: WCAG and ARIA-information, some CSS
            improvements and updated «Bruk og innhold» for buttons and links.
          </li>
        </ul>

        <h3>v.3.3.2 - 07.04.2020</h3>

        <ul>
          <li>
            Changed to manual version strategy. This does not affect how the
            components are used, it is simply a change in the way we deploy
            changes.
          </li>
        </ul>

        <h3>v.3.3.1 - 06.04.2020</h3>

        <ul>
          <li>FileUploader now accepts multiple files.</li>
          <li>Accordion subtitle now accepts object as prop.</li>
          <li>Fixed at bug with placement of a subtitle in accordion.</li>
          <li>RadiobuttonGroup has now an option for horizontal layout</li>
          <li>SearchField no longer shows clear button on Webkit browsers.</li>
          <li>StepList - change button is now correctry centered vertically</li>
          <li>
            LabelWithCallout - fixes a styling bug visible on non-white
            backgrounds.
          </li>
          <li>Added link to Axure components.</li>
          <li>Fix styling bug in heuritics and examples.</li>
          <li>Brought back pink in color list.</li>
        </ul>

        <h3>v.3.3.0 - 19.03.2020</h3>

        <ul>
          <li>New component - FileUploader</li>
          <li>Remove stuck scrollbar inside dialog</li>
          <li>Accessbility improvements to input-fields.</li>
          <li>OpenClose: icons placement defaults to left</li>
          <li>Combobox: fixed focus style</li>
          <li>Upgraded to Fabric 7.82.1</li>
        </ul>

        <h3>v.3.2.2 - 03.03.2020</h3>

        <ul>
          <li>
            Accessibility improvements to Accordion, Dialog, MessageBar,
            ErrorMessage, Spinner, ProgressBar, NavigationTile and
            FooterContent.
          </li>
          <li>Updated Sketch-file</li>
        </ul>

        <h3>v.3.2.1 - 27.02.2020</h3>

        <ul>
          <li>
            Dialog: added prop tabletContentOverflows to address an issue when
            scrolling on iPad.
          </li>
          <li>Icons: Added some bigger and more detailed theme-icons</li>
          <li>
            ComboBox: Long options in list are no longer cut - wraps instead.
          </li>
          <li>SearchField: Fixed a bug where not all props were sent</li>
          <li>
            Description in RadioButtonGroup was incorrectly set to required
          </li>
        </ul>

        <h3>v.3.2.0 - 25.02.2020</h3>

        <ul>
          <li>OpenClose: new component</li>
          <li>ActionButton: Icon can now be placed on right side.</li>
          <li>
            Expand or collapse button in Card wont longer trigger sumbit if used
            inside a form.
          </li>
          <li>SearchField can now show search results in a drop down.</li>
          <li>
            The label in LabelWithCallout can now be rendered as legend (for use
            in a fieldset).
          </li>
          <li>
            LabelWithCallout: fixed an issue where the help icon was incorrecly
            placed if the label went over multiple lines.
          </li>
          <li>FooterContent: fixed a typescript error</li>
        </ul>

        <h3>v.3.1.1 - 10.02.2020</h3>

        <ul>
          <li>
            Dialog: fixed an error where overflow content disappered on iOS.
          </li>
          <li>Dialog: fixed the logo placement when no title is used</li>
          <li>RadioButtonGroup can now display description.</li>
          <li>Combobox: accessbility improvement: remove aria-role</li>
        </ul>

        <h3>v.3.1.0 - 04.02.2020</h3>

        <ul>
          <li>
            Internal TopBanner can now render children-elements. Added
            slantedAreaWidth prop to set width to slanted area.
          </li>
          <li>Accordion: added ability to specify h-tag level</li>
          <li>Link: new prop OpenInNew</li>
          <li>
            Added missing className support to Accordion, TopStripe, Chip,
            ErrorMessage
          </li>
          <li>TopStripe: Updated example and some styling fixes.</li>
          <li>Dialog: ability to change tooltip/aria-label on close-button.</li>
          <li>Callout: Added focus style to close button.</li>
          <li>Input: ability to use inputMode=numeric</li>
          <li>Icons are now being generated in better quality.</li>
          <li>StepList accessibility improvements</li>
          <li>Website improvements on responsive layout and accessibility</li>
        </ul>

        <h3>v.3.0.1 - 20.12.2019</h3>

        <ul>
          <li>Added missing icons (Ekteskap, Familie, PreviewFile).</li>
          <li>SkeBasis: Set properties palette and fonts as optional.</li>
        </ul>

        <h3>v.3.0.0 - December 2019</h3>

        <p>
          New major release - this is a big one. All components have been
          rewritten to typescript. We are now able to expose the full API for
          the components that are based on Fabric components.
        </p>

        <h4>Breaking changes</h4>

        <ul>
          <li>
            All input field now has calloutFloating set to false as default.
          </li>
          <li>
            All input field now has same props for help and warning messages
            (help, warning).
          </li>
          <li>AccordtionMenu: Prop title has been renamed to heading.</li>
          <li>Button: Prop buttonType has been renamed to buttonStyle.</li>
          <li>
            Card: Color and border now written on the form: color=
            Card.Color.WHITE border=Card.Border.GREEN_BORDER.
          </li>
          <li>ComboBox: removed prop expandOnFocus.</li>
          <li>CheckBox: component renamed to from Checkbox to CheckBox.</li>
          <li>CheckBox: remove id-prop.</li>
          <li>DatePicker: Prop info has been renamed to help.</li>
          <li>Dialog: Prop helpText has been removed.</li>
          <li>DropDown: Prop info has been renamed to help.</li>
          <li>FooterContent: Removed id-prop.</li>
          <li>
            IconButton: Prop alt removed. Use ariaLabel or ariaDescription
            instead.
          </li>
          <li>IconButton: Prop buttonType has been renamed to buttonSize.</li>
          <li>Link: Link is now an inline element (span) instead of block.</li>
          <li>
            MessageBar: type is now written on the form: type=
            MessageBar.Type.info.
          </li>
          <li>NavigationTile: title prop renamed to heading.</li>
          <li>
            Spinner: size is now written on the form: size=SpinnerSize.medium.
          </li>
          <li>
            TopStripe: Rewritten with new API and subcomponents (TopStripeButton
            and TopStripeMenu).
          </li>
        </ul>

        <h4>Additions and fixes</h4>

        <ul>
          <li>
            NavigationTile: Can now be rendered with subcomponent,
            NavigationContent.
          </li>
          <li>LabelWithCallout: New component.</li>
          <li>FooterContent: added ariaLabel-prop.</li>
          <li>Grid: added className and tag-props.</li>
          <li>
            TextField: Fixes a bug where a large multiline text field was not
            rendered correcly.
          </li>
          <li>Table: added the prop hideOnMobile to hide colums on mobile.</li>
          <li>
            ScrollToTopButton: Fixes a bug where the text on the button was not
            renderen in safari.
          </li>
          <li>Changed error color to improve contrast.</li>
          <li>Added icons for preview, marriage and family.</li>
          <li>Various accessibility improvements.</li>
          <li>Demopage: updated documentation and component template page.</li>
        </ul>
      </div>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Versjon 2.x.x'}
      stepId={'step-1-4'}
    >
      <div>
        <h3>v.2.1.0 - November 7, 2019</h3>

        <ul lang="en">
          <li>New components; Link and LinkGroup</li>
          <li>Fixed an issue when displaying help text in a wide TextField</li>
          <li>
            Added inline help text (CalloutFloating) on ComboBox, Datepicker,
            Dropdown
          </li>
          <li>
            RadioButtonGroup: Added help text and updated style on errorMessage.
          </li>
          <li>Grid: Added possibility to specify padding</li>
          <li>
            StepList: Supports conditional rendering of steps, and transparent
            background color instead of white.
          </li>
          <li>AccordionItem can now show a subtitle</li>
          <li>Table: open row can be triggerd with prop.</li>
          <li>NavigationTile: Can now render different h2-tags.</li>
          <li>Demopage: mobile navigation and updated documentation.</li>
          <li>Minor updates to Sketch-components</li>
        </ul>

        <p lang="en">
          NOTE: The code behind this version is not yet made visble in the
          github-repo, due to a process of moving between repositories. The
          changes will be made available in the next release.
        </p>

        <h3>v.2.0.0 - Oktober 1, 2019</h3>

        <p>
          Versjon for GitHub - Designsystemet er åpent tilgjengelig! Dette også
          er en hovedversjon med enkelte endringer som ikke er
          bakoverkompatible:
        </p>

        <h4>Breaking changes</h4>

        <ul>
          <li>
            Endret pakkenavn fra aurora-frontend-react-komponenter til
            @skatteetaten/frontend-components
          </li>
          <li>Fjernet komponenten List</li>
          <li>Fjernet komponenten Modal (bruk Dialog i stedet)</li>
          <li>Fjernet legacy-farge på knapper</li>
          <li>Fjernet legacy-farge på Callout</li>
          <li>TextField har nå uthevet tekst som default i lesemodus</li>
          <li>Fjernet utgåtte ikoner: Done, Up og Down</li>
          <li>
            Table: Fjernet mulighet for å opprette kolonner utifra data som ble
            sendt inn.
          </li>
          <li>React: Støtter kun versjon 16.8.0 og oppover.</li>
        </ul>

        <h4>Andre forbedringer</h4>

        <ul>
          <li>Oppgradering til siste versjon av Fabric (støtter hooks)</li>
          <li>Ny komponent ErrorMessage</li>
          <li>Ny komponent TopStrip</li>
          <li>Ny komponent ScrollToTopButton</li>
          <li>Nytt ikon for tilgang</li>
          <li>
            Lagt til støtte for å angi antall linjer tekst i multiline
            textfield.
          </li>
        </ul>
      </div>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Versjon 1.x.x'}
      stepId={'step-1-5'}
    >
      <div>
        <h3>v.1.8.0 - September 17, 2019</h3>

        <ul>
          <li>Ny komponent - AccordionMenu/AccordionMenuItem.</li>
          <li>Card: mulighet til å sette hvit ramme rundt et kort.</li>
          <li>Table: Kan aligne tekst i celler innenfor en kolonne.</li>
          <li>TextField: Forbedring av suffix.</li>
          <li>
            Lagt til ScreenPlugin som har forhåndsdefinerte breakpoints som
            enkelt gir mulighet til å vise/skjule elementer i react koden basert
            på skjermstørrelse.
          </li>
          <li>
            Forbedring av fokusmarkering på hjelpeikon, Combobox,
            Button(primary).
          </li>
          <li>
            Lagt til store varianter av inputfelt(DatePicker, DropDown,
            Combobox).
          </li>
          <li>TopBanner: Logo er nå klikkbar.</li>
          <li>AccordionItem: Lagt til property subtitle.</li>
        </ul>

        <h3>v.1.7.2 - September 3, 2019</h3>

        <ul>
          <li>
            StepList: fast avstand til ikon for bedre visning på store skjermer.
          </li>
          <li>
            TopBanner: la til mulighet for å vise underelementer i stedet for
            tittel og tilbakelenke.
          </li>
          <li>Ny navigasjon på demosiden, med kobling til stil og tone</li>
          <li>La til deploy-ikon</li>
        </ul>

        <h3>v.1.7.0 - August 13, 2019</h3>

        <ul>
          <li>React Styleguidist oppgradert til versjon 9.</li>
          <li>Card: Fikset IE bug for tittel.</li>
          <li>Lagt til snapshot tester</li>
          <li>Diverse UU forbedringer av komponentene</li>
          <li>
            Table: Kan nå styre rekkefølge og hvilke kolonner som skal vises +
            små fikser
          </li>
          <li>StepList: Små stil endringer av avstander i et steg</li>
          <li>TextField: Multiline / onChange fiks</li>
        </ul>

        <h3>v.1.6.2 - Juni 27, 2019</h3>

        <ul>
          <li>La til icon, onClick og ariaLabel på Accordion</li>
          <li>
            TextField: Rettet en feil som oppstod når mask ble brukt på tom
            verdi.
          </li>
        </ul>

        <h3>v.1.6.1 - Juni 26, 2019</h3>
        <ul>
          <li>La til onChange-prop på Card</li>
          <li>La til nye ikoner for skatteprossesen</li>
          <li>
            Justerte stiler slik at inputfelt får konsekvente rammer og
            fokusmarkering
          </li>
          <li>Tekst og stiljustering på demosiden.</li>
        </ul>

        <h3>v.1.6.0 - Juni 17, 2019</h3>

        <ul>
          <li>
            Lagt til ny kompoent for enkle tabeller (med rediger-funksjon).
          </li>
          <li>
            Reponsiv typografi: Fontstørrelse og linjeavstand tilpasser seg nå
            skjermstørrelsen
          </li>
          <li>Lagt til nye rammefarger og marger i Card.</li>
          <li>Lagt til stor versjon av MessageBar.</li>
          <li>Fikset en feil med plassering av ikon i SearchField</li>
          <li>Fikset en med visning av ikon i DetailsList</li>
          <li>Nye ikoner; piler, usortert tabellkolonner og person</li>
        </ul>

        <h3>v.1.5.2 - Mai 29, 2019</h3>

        <ul>
          <li>
            Oppdaterte til siste versjon av Fabric (retter feil knyttet til mask
            i TextField og klikkbart område i DatePicker)
          </li>
          <li>Tilpasning av forside og venstremeny</li>
          <li>SearchField har nå ramme på liten versjon.</li>
        </ul>

        <h3>v.1.5.1 - Mai 13, 2019</h3>

        <ul>
          <li>
            Fikset en feil som førte til at ikoner ikke ble vist i Internet
            Explorer 11.
          </li>
          <li>Automatiserte tester av komponentene.</li>
        </ul>

        <h3>v.1.5.0 - Mai 7, 2019</h3>

        <ul>
          <li>Ikonoppdatering, lagt til flere ikoner og ny oversikt.</li>
          <li>Oppdaterte eksempler og struktur på flere komponentsider</li>
          <li>Button: Lagt til mulighet for stor primærknapp</li>
          <li>
            Ny komponent: Typografi. Legger til css for vanlige
            typografi-elementer.
          </li>
          <li>Oppdaterte Sketch-komponenter</li>
          <li>Card: La til mulighet for å vise en undertittel.</li>
          <li>Callout: visuell justerering av ramme og ikon</li>
          <li>ActionButton: visuell justering av fokus- og hovereffekt</li>
          <li>MessageBar: Blocked viser nå hengelås-ikon.</li>
        </ul>

        <h3>v.1.4.3 - Apr 8, 2019</h3>

        <ul>
          <li>
            TextField: Mulighet til å validere og formatere verdier med mask
          </li>
          <li>
            CallOut: Lagt til mulighet for automatisk lukking, samt
            stiljusteringer.
          </li>
          <li>Chip: Fikset en feil på kontrastnivå ved lenke inni rød Chip.</li>
          <li>La til ikon for bedrift.</li>
        </ul>

        <h3>v.1.4.2 - Apr 1, 2019</h3>

        <ul>
          <li>
            Dialog: La til en visning for viktig melding, samt diverse
            stiljusteringer
          </li>
          <li>DetailsList: la til mulighet for gjennomsiktig bakgrunn</li>
          <li>
            Fikset en feil som førte til at Footer fikk feil utseende i IE11.
          </li>
          <li>TextField: Mulighet til å overstyre componentRef</li>
        </ul>

        <h3>v.1.4.1 - Mar 12, 2019</h3>

        <ul>
          <li>Inputfelt har nå samme utseende og animasjon på feilmeldinger</li>
          <li>Endret farge på ProgressBar</li>
          <li>Endret utseende på spinner for å følge visuell profil.</li>
          <li>
            TextField: Lagt til mulighet å la feltet være editerbart når det er
            tomt.
          </li>
        </ul>

        <h3>v.1.4.0 - Mar 4, 2019</h3>

        <ul>
          <li>Ny komponent StepList og tilhørende Step.</li>
          <li>
            Fikset en feil som førte til at sortering i DetaljListe slutter å
            fungere.
          </li>
          <li>
            Fikset et feil som førte til at iconer forsvant fra NavigationTile.
          </li>
          <li>Lagt til to nye ikoner for å låsing.</li>
        </ul>

        <h3>v.1.3.0 - Feb 26, 2019</h3>

        <ul>
          <li>Ny komponent: Accordion og tilhørende AccorditionItem</li>
          <li>Ny komponent: SearchField</li>
          <li>
            Oppdatert design på NavigationTile, samt den denne nå kan nå vises
            uten ikon eller beskrivelse.
          </li>
          <li>Designfiks på RadioButtonGroup og CheckBox</li>
          <li>
            Fikset et feil som førte til at rød feil-ramme ikke ble vist på
            TextField.
          </li>
          <li>Oppdatering av Sketch-komponenter for designskisser.</li>
        </ul>

        <h3>v.1.2.3 - Feb 15, 2019</h3>

        <ul>
          <li>
            DatePicker: Endret teksten som kommer når man er utenfor gyldig
            datoområde, og gitt mulighet til å overstyre denne.
          </li>
          <li>
            Tabs: Bruker nå TabItem-komponent for å kunne bytte mellom innholdet
            i fanene.
          </li>
          <li>Oppdaterte "Kom i gang for designer".</li>
        </ul>

        <h3>v.1.2.2 - Jan 31, 2019</h3>

        <ul>
          <li>Endret font størrelsen på DetailsList fra 17px til 16px</li>
        </ul>

        <h3>v.1.2.0 - Jan 24, 2019</h3>

        <ul>
          <li>Nytt design på komponentsidene.</li>
          <li>Ny komponenent: Tabs</li>
          <li>Nytt ikon: circleFilled</li>
          <li>
            Lagt til Sketch-komponenter for enklere lage designskisser med samme
            utseende som react-komponentene.
          </li>
          <li>Ny Design-seksjon med overordenet designdokumentasjon.</li>
          <li>Oppgradering av React styleguidist.</li>
          <li>Konfigurert til å skjule komponentenes API som standard.</li>
          <li>Rettet en feil som tok bort sirkelen rundt IconButton</li>
        </ul>

        <h3>v.1.1.18 - Jan 16, 2019</h3>

        <ul>
          <li>
            Rettet en feil i Chip der aria-label førte til advarsel i konsoll.
          </li>
        </ul>

        <h3>v.1.1.17 - Jan 15, 2019</h3>

        <ul>
          <li>
            Rettet en feil der grafikken i footerContent ikke alltid fyller hele
            bredden
          </li>
          <li>
            Rettet en feil hvor tekstfelt i editeringsmodus brukte uriktig
            endringshendelse
          </li>
          <li>
            La til en ramme rundt dialogboks (i henhold til visuell profil).
          </li>
        </ul>

        <h3>v.1.1.16 - Des 21, 2018</h3>

        <ul>
          <li>
            Rettet en feil som førte til feil fontsstørrelse på lenke i
            TopBanner
          </li>
          <li>
            Rettet en feil som førte feil fokusmarkering på Chrome i
            RadioButtonGroup
          </li>
        </ul>

        <h3>v.1.1.15 - Des 19, 2018</h3>

        <ul>
          <li>
            Rettet en feil som førte til at fontstørrelse på label for ComboBox,
            DatePicker og DropDown ble større.
          </li>
          <li>Endret hjelpeikon på DatePicker</li>
          <li>Endret bakgrunnsfarge på Callout fra Dropdown</li>
          <li>Opprydding i oversikten over farger.</li>
        </ul>

        <h3>v.1.1.14 - Des 12, 2018</h3>

        <ul>
          <li>
            Oppdatert stiling av MessageBar til å være i henhold til visuell
            profil
          </li>
        </ul>

        <h3>v.1.1.13 - Des 7, 2018</h3>

        <ul>
          <li>Fikset feil ved fokusmarking av RadioButtonGroup og ComboBox</li>
          <li>Lagt til ikoner som representerer fil</li>
          <li>Fjerne understrek ved klikk på ActionButton</li>
        </ul>

        <h3>v1.1.9 - Nov 30, 2018</h3>

        <ul>
          <li>Gått bort fra automatisk release</li>
          <li>Lagt til release dokumentasjon</li>
          <li>Fjernet YARN fra prosjektet</li>
          <li>Endret Jenkins script</li>
          <li>Oppdatert Fabric:</li>
          <li>office-ui-fabric-core 9.6.1</li>
          <li>office-ui-fabric-reac 6.107.0</li>
          <li>@uifabric/merge-styles 6.15.0</li>
          <li>@uifabric/styling 6.36.0</li>
          <li>@uifabric/utilities 6.27.0</li>
        </ul>

        <h3>v1.1.6 - Nov 22, 2018</h3>

        <ul>
          <li>Diverse UU forbedringer</li>
        </ul>

        <h3>v1.1.5 - Nov 22, 2018</h3>

        <ul>
          <li>
            – Dialog className property var foreldet benytter nå
            modalProps.className
          </li>
        </ul>

        <h3>v1.1.4 - Nov 20, 2018</h3>

        <ul>
          <li>className er tilgjengelig i alle komponenter</li>
          <li>
            – Lagt til utility{' '}
            <a
              class="brodtekst-link"
              href="https://github.com/JedWatson/classnames#readme"
              target="_blank"
            >
              classnames
            </a>{' '}
            slik at det er mulig å legge til flere klassenavn ved stiling av
            komponentene
          </li>
        </ul>

        <h3>v1.1.3 - Nov 20, 2018</h3>

        <ul>
          <li>
            – Lagt til property "id" for alle komponenter, for enklere å kunne
            teste komponentenen.
          </li>
          <li>Modal og Dialog har foreløpig ikke ID property</li>
          <li>
            Noen komponenter blir nå wrappet i en div for å kunne sette id
          </li>
        </ul>

        <h3>v1.1.2 - Nov 20, 2018</h3>

        <ul>
          <li>Ny property "disabled" for ActionButton komponent</li>
        </ul>

        <h3>v1.1.2 - Nov 20, 2018</h3>

        <ul>
          <li>Lagt til property "disabled" for ActionButton komponent</li>
        </ul>

        <h3>v1.1.1 - Nov 15, 2018</h3>

        <ul>
          <li>Ny komponent: Chip</li>
        </ul>

        <h3>v1.0.26 - Nov 9, 2018</h3>

        <ul>
          <li>Ramme på disablet CheckBox, DatePicker og Dropdown</li>
        </ul>

        <h3>v1.0.25 - Nov 7, 2018</h3>

        <ul>
          <li>Gjennomsiktig bakgrunn på tekstfelt i readonly-modus</li>
        </ul>

        <h3>v1.0.24 - Nov 7, 2018</h3>

        <ul>
          <li>Oppdatering av tekst og eksempler for flere komponenter.</li>
        </ul>

        <h3>v1.0.23 - Nov 5, 2018</h3>

        <ul>
          <li>
            – Hjelpetekst/varseltekst på tekstfelt kan nå være flytende eller
            plassert og mellom label og tekstfelt.
          </li>
          <li>Callout ny farge tilgjengelig for varseltekst</li>
          <li>Lagr til nytt ikon: WarningOutline</li>
        </ul>

        <h3>v1.0.22 - Nov 5, 2018</h3>

        <ul>
          <li>Selection klasse lagt til i DetailsList</li>
        </ul>

        <h3>v1.0.21 - Nov 5, 2018</h3>
        <ul>
          <li>Mobiltilpasset meny i StyleGuidedist</li>
          <li>Responsive tilpasninger av TopBanner</li>
        </ul>

        <h3>v1.0.20 - Okt 31, 2018</h3>

        <ul>
          <li>Nytt ikon: AttachFile</li>
        </ul>

        <h3>v1.0.19 - Okt 24, 2018</h3>

        <ul>
          <li>Nytt ikon: CloudUpload</li>
        </ul>

        <h3>v1.0.18 - Sept 21, 2018</h3>

        <ul>
          <li>
            – Universell utforming: Lagt inn aria-label på tekstfelt og
            helpeknapp.
          </li>
        </ul>

        <h3>v1.0.17 - Sept 20, 2018</h3>

        <ul>
          <li>
            – Fire nye ikoner; favoritt, justerVenstre, innstillinger og
            tidslinje
          </li>
        </ul>

        <h3>v1.0.16 - Sept 19, 2018</h3>

        <ul>
          <li>Fjerne min-Width på header</li>
        </ul>

        <h3>v1.0.15 - Aug 28, 2018</h3>

        <ul>
          <li>Diverse hover og fokus-issues</li>
          <li>Klikkbar header på Card og tydeligere toggle-ikon.</li>
        </ul>

        <h3>v1.0.12 - Aug 15, 2018</h3>

        <ul>
          <li>Ny seksjon i menyen: Eksempler på bruk.</li>
        </ul>

        <h3>v1.0.11 - Juli 31, 2018</h3>

        <ul>
          <li>
            – Kort har nå justerbar tekststørrelse og marg, slik at de kan
            fremstå om både hoved- og delseksjoner.
          </li>
          <li>Lagt til eksempler på bruk av layout- og skjemakomponenter.</li>
        </ul>

        <h3>v1.0.8 - Juni 20, 2018</h3>

        <ul>
          <li>Endret Button propTypes "type" --&gt; "type"</li>
          <li>Endret IconButton propTypes "type" --&gt; "type"</li>
        </ul>

        <h3>v1.0.7 - Juni 20, 2018</h3>

        <ul>
          <li>1. Stilendring på hover state for sekundærknapp</li>
          <li>
            2. Oppdatert mappenavn på komponenten DetailList --&gt; DetalilsList
          </li>
          <li>3. Endret meny visning for styleguidedist</li>
          <li>4. Oppdatert Dialog komponent</li>
          <li>5. Diverse endringer av farger</li>
          <li>6. Oppdatert ToppBanner komponent</li>
          <li>7. Oppdatert Card komponent</li>
          <li>8. Oppdatert DropDown komponent</li>
        </ul>

        <p>Fabric props er nå tilgjengelig i komponentene:</p>
        <ul>
          <li>ActionButton</li>
          <li>Button</li>
          <li>Callout</li>
          <li>Card</li>
          <li>CheckBox</li>
          <li>ComboBox</li>
          <li>DatePicker</li>
          <li>DetailsList</li>
          <li>Dialog</li>
          <li>Dropdown</li>
          <li>IconButton</li>
          <li>List</li>
          <li>MessageBar</li>
          <li>Modal</li>
          <li>ProgressBar</li>
          <li>RadioButtonGroup</li>
          <li>Spinner</li>
          <li>TextField</li>
        </ul>

        <h3>v1.0.6 - Juni 11, 2018</h3>

        <ul>
          <li>
            Flyttet React og React-dom fra dependencies til peerDependencies
          </li>
          <li>
            Versjoner i dependencies har blitt låst (fjernet `^` fra versjonen).
          </li>
          <li>
            Opprettet `aurora-frontend-react-komponenter/utils/loadTheme` for å
            støtte testing av komponenter som bruker biblioteket.
          </li>
          <li>
            Oppdatert `Kom i gang` dokumentasjon med informasjon om testing.
          </li>
          <li>
            Oppdatert `Komponenter/Icon` dokumentasjon med hvordan finne nytt
            ikon.
          </li>
        </ul>

        <h3>Oppdatering for Master (Release 1.0) - Juni 05, 2018</h3>

        <ul>
          <li>Endret navn på komponenter og props fra norsk til engelsk</li>
          <li>Fjernet komponentene: Nett/Sokefelt/Tekst/Tittel</li>
          <li>
            Oppgradert Fabric fra versjon 5 til 6{' '}
            <a
              class="brodtekst-link"
              href="https://github.com/OfficeDev/office-ui-fabric-react/blob/master/6.0_RELEASE_NOTES.md"
            >
              Release NOTES
            </a>
          </li>
          <li>Endret mappestrukturen under src/components</li>
          <li>
            Hver enkelt komponent har nå egen index for kortere import statement
          </li>
          <li>Endret styling på knapper (Buttons/ActionButton/IconButton)</li>
          <li>Endret variabelnavn for Skatteetaten farger i paletten</li>
        </ul>
      </div>
    </AccordionItem>
  </Accordion>
</div>;
```
