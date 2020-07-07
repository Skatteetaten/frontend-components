** CommandBar kan inneholde en eller flere menyer og knapper.
For å skape en bra struktur kan man også velge å flytte ikke-viktige
knapper i overflow eller på andre siden av skjermen. **

```js
initialState = {
  items: [
    {
      key: 'Add',
      name: 'Registrer ny opplysning',
      ariaLabel: 'Registrer ny opplysning',
      iconProps: {
        iconName: 'AddOutline'
      }
    }
  ],
  farItems: [
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
  ],
  overflowItems: [
    {
      key: 'bookmark',
      name: 'Merk som bokmerke',
      ariaLabel: 'Merk som bokmerke',
      iconProps: {
        iconName: 'Bookmark'
      }
    },
    {
      key: 'favorite',
      name: 'Merk som favoritt',
      ariaLabel: 'Merk som favoritt',
      iconProps: {
        iconName: 'Favorite'
      }
    }
  ]
};

<div className="ExampleSpacing8">
  <CommandBar items={state.items} farItems={state.farItems} />
</div>;
```

```js
initialState = {
  items: [
    {
      key: 'view1',
      name: 'Start arbeidsoppgave',
      ariaLabel: 'Start arbeidsoppgave',
      onClick: () => {
        console.log('og');
      },
      iconProps: {
        iconName: 'PlayOutline'
      }
    },
    {
      key: 'view2',
      name: 'Sett på vent',
      ariaLabel: 'Sett arbeidsoppgave på vent',
      onClick: () => {
        console.log('hei');
      },
      iconProps: {
        iconName: 'PauseOutline'
      }
    },

    {
      key: 'view3',
      name: 'Tildel',
      ariaLabel: 'Tildel arbeidsoppgave',
      onClick: () => {
        console.log('og');
      },
      iconProps: {
        iconName: 'PersonMoreOutline'
      }
    }
  ],

  farItems: [
    {
      key: 'Print',
      name: 'Skriv ut',
      ariaLabel: 'Skriv ut',
      iconProps: {
        iconName: 'Print'
      },
      iconOnly: true
    }
  ]
};

<div className="ExampleSpacing8">
  <CommandBar items={state.items} farItems={state.farItems} />
</div>;
```

```js noeditor uu
<p>Denne seksjonen er foreløpig tom.</p>
```

```js noeditor beskrivelse
<h3>Over innholdet</h3>
<p>CommandBar er et område med kommandoer knyttet innholdet på en side, et panel eller en region. CommandBar skal ligge på toppen av det tilhørende innholdet, og kan da fungerte som en intutiv måte å utføre handlinger på innholdet. </p>

<h3>Unngå for mange elementer</h3>
<p>CommandBar fungerer best når den ikke inneholder mer enn 5–7 kommandoer. Hvis du har for mange kommandoer eller disse er dårlig organisert, kan komponenten bli vanskelig å bruke eller gjemme viktige kommandoer for brukerne.</p>

<h3>Viktigste elementer først</h3>
<p>Kommandoer bør være sortert etter viktighet; de viktigste først og fra venstre mot høyre. Hvis du trenger å vise status eller visningsalternativer bør disse plasses på høyre side. Ikke vis mer enn 2–3 kommandoer på høyre side, fordi det vil gjøre hele komponenten vanskeligere lese.</p>

<h3>Ikoner</h3>
<p>Kommandoene skal som hovedregel ha både ikon og beskrivende tekst. Det kan imidlertid være ok å bruke kun ikoner for kommandoer som er mye brukt og lett gjenkjennelige.</p>

```
