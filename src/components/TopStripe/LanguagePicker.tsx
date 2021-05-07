import * as React from 'react';
import { TopStripeButton } from './TopStripeButton';
import { TopStripeMenu } from './TopStripeMenu';
import { EnglishFlag, NorwegianFlag, SamiFlag } from './assets';
import { Icon } from '../Icon';
import { UseScreen } from '../utils';
import { getClassNames } from './LanguagePicker.classNames';

export enum LanguageEnum {
  BOKMAAL = 'nb',
  NYNORSK = 'nn',
  ENGLISH = 'en',
  SAMI = 'se',
}

const generateLanguagePickerText = (language: LanguageEnum): string => {
  switch (language) {
    case LanguageEnum.BOKMAAL:
      return 'Bokmål';
    case LanguageEnum.NYNORSK:
      return 'Nynorsk';
    case LanguageEnum.ENGLISH:
      return 'English';
    case LanguageEnum.SAMI:
      return 'Sámigiella';
  }
};

const displayFlag = (language: LanguageEnum): JSX.Element => {
  const altText: string = generateLanguagePickerText(language);

  switch (language) {
    case LanguageEnum.BOKMAAL:
      return <img src={NorwegianFlag} alt={altText} />;
    case LanguageEnum.NYNORSK:
      return <img src={NorwegianFlag} alt={altText} />;
    case LanguageEnum.ENGLISH:
      return <img src={EnglishFlag} alt={altText} />;
    case LanguageEnum.SAMI:
      return <img src={SamiFlag} alt={altText} />;
  }
};

const LanguagePickerButton = ({
  buttonLanguage,
  selectedLanguage,
  setLanguage,
  showOnMobile,
}): JSX.Element => {
  const styles = getClassNames();
  return (
    <TopStripeButton
      onClick={() => setLanguage(buttonLanguage)}
      showOnMobile={showOnMobile}
      className={styles.languageButton}
      role={'menuitem'}
      aria-current={buttonLanguage === selectedLanguage}
    >
      {buttonLanguage === selectedLanguage && (
        <Icon iconName={'Check'} className={styles.checkIcon} />
      )}
      <span className={styles.flag}>{displayFlag(buttonLanguage)}</span>
      <span className={styles.text}>
        {generateLanguagePickerText(buttonLanguage)}
      </span>
    </TopStripeButton>
  );
};

export interface LanguagePickerProps {
  className?: string;
  /**
   * Current language on the page. Valid values are 'nb', 'nn', 'en' and 'se'
   */
  selectedLanguage: LanguageEnum;
  /**
   * Method for setting the language on the page
   */
  setLanguage: any;
  /**
   * If element is displayed in TopStripe on mobile
   * @default true
   */
  showOnMobile?: boolean;
  /**
   * If sami option is included in language picker
   * @default false
   */
  showSami?: boolean;
}

export const LanguagePicker: React.FC<LanguagePickerProps> = (props) => {
  const {
    className,
    selectedLanguage,
    setLanguage,
    showOnMobile = true,
    showSami = false,
  } = props;
  const [languages, setLanguages] = React.useState<LanguageEnum[]>([]);

  React.useEffect(() => {
    showSami
      ? setLanguages([
          LanguageEnum.BOKMAAL,
          LanguageEnum.NYNORSK,
          LanguageEnum.ENGLISH,
          LanguageEnum.SAMI,
        ])
      : setLanguages([
          LanguageEnum.BOKMAAL,
          LanguageEnum.NYNORSK,
          LanguageEnum.ENGLISH,
        ]);
  }, [showSami]);

  const styles = getClassNames();
  const screenSize = UseScreen();
  if (screenSize.sm && !showOnMobile) {
    return null;
  }

  return (
    <>
      <span className={styles.flag}>{displayFlag(selectedLanguage)}</span>
      <TopStripeMenu
        showOnMobile={showOnMobile}
        title={generateLanguagePickerText(selectedLanguage)}
        className={className}
      >
        {languages.map((language) => {
          return (
            <LanguagePickerButton
              buttonLanguage={language}
              selectedLanguage={selectedLanguage}
              setLanguage={setLanguage}
              showOnMobile={showOnMobile}
            />
          );
        })}
      </TopStripeMenu>
    </>
  );
};
