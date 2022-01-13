import * as React from 'react';
import { TopStripeButton } from '../TopStripeButton/TopStripeButton';
import { TopStripeMenu } from '../TopStripeMenu/TopStripeMenu';
import { EnglishFlag, NorwegianFlag, SamiFlag } from '../assets';
import { Icon } from '../../Icon';
import { UseScreen } from '../../utils';
import { getClassNames } from './LanguagePicker.classNames';
import { useEffect } from 'react';
import classNames from 'classnames';

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
      return 'Sámegiella';
  }
};

const displayFlag = (language: LanguageEnum): JSX.Element => {
  switch (language) {
    case LanguageEnum.BOKMAAL:
      return <img src={NorwegianFlag} alt={''} />;
    case LanguageEnum.NYNORSK:
      return <img src={NorwegianFlag} alt={''} />;
    case LanguageEnum.ENGLISH:
      return <img src={EnglishFlag} alt={''} />;
    case LanguageEnum.SAMI:
      return <img src={SamiFlag} alt={''} />;
  }
};

const generateLanguagePickerTitle = (language: LanguageEnum): JSX.Element => {
  const styles = getClassNames();
  return (
    <>
      <span className={styles.flag}>{displayFlag(language)}</span>
      {generateLanguagePickerText(language)}
    </>
  );
};

const LanguagePickerButton = ({
  buttonLanguage,
  selectedLanguage,
  setLanguage,
  showOnMobile,
}): JSX.Element => {
  const styles = getClassNames();
  const isSelectedLanguage = buttonLanguage === selectedLanguage;
  return (
    <TopStripeButton
      onClick={() => setLanguage(buttonLanguage)}
      showOnMobile={showOnMobile}
      className={classNames(
        styles.languageButton,
        !isSelectedLanguage ? styles.languageButtonIsNotSelected : ''
      )}
      role={'menuitem'}
      aria-current={isSelectedLanguage}
    >
      {isSelectedLanguage && (
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

  useEffect(() => {
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

  useEffect(() => {
    document.documentElement.lang = selectedLanguage;
  }, [selectedLanguage]);

  const screenSize = UseScreen();
  if (screenSize.sm && !showOnMobile) {
    return null;
  }

  return (
    <>
      <TopStripeMenu
        showOnMobile={showOnMobile}
        title={generateLanguagePickerTitle(selectedLanguage)}
        className={className}
      >
        {languages.map((language) => {
          return (
            <LanguagePickerButton
              key={language}
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
