Noen komponenter benytter react-18next for å støtte flere språk. Dersom din løsning støtter andre
språk enn bokmål så er det nødvending å sette aktivt språk i i18next slik at de innbakte tekstene
i komponentene vises på riktig språk.

I18next benyttes også i nytt designsystem, og i overgangsfasen vil det være
nødvendig å holde språk i synk på tvers av nytt designsystem og designsystem-legacy.
I tillegg er det greit å være klar over at nytt designsystem bruker nye språkkoder, i
henhold til skatteetatens standard. Pakken "ds-core-utils" exporterer enum "languages", som inneholder de nye
verdiene.

Aktivt språk kan holdes i synk ved hjelp av 'languageChanged' eventet slik:

```javascript static
import { dsI18n, Languages } from '@skatteetaten/ds-core-utils';
import designsystemLegacyI18n from '@skatteetaten/frontend-components/utils/i18n/i18n';
i18n.on('languageChanged', (lang) => {
  dsI18n.changeLanguage(lang);
  // hvis du bruker legacy designsystemet må dette også holdes i sync
  if (lang.length > 2) {
    // ny standard bruker en_GB, nb_NO osv. Legacy designsystem bruker en, nb, nn
    designsystemLegacyI18n.changeLanguage(lang.substring(0, 2));
  }
});
```
