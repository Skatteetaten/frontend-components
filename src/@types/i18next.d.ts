//https://www.i18next.com/overview/typescript
import { defaultNS, languages } from '../components/utils/i18n/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof languages['nb'];
  }
}
