import * as React from 'react';
import { TopStripeButton } from './TopStripeButton';
import { TopStripeMenu } from './TopStripeMenu';
import { ReactComponent as EnglishFlag } from './assets/EnglishFlag.svg';
import { ReactComponent as NorwegianFlag } from './assets/NorwegianFlag.svg';
import { ReactComponent as SamiFlag } from './assets/SamiFlag.svg';
import Icon from '../Icon/Icon';
import { UseScreen } from '../utils/ScreenPlugin';
import { getClassNames } from './LanguagePicker.classNames';

enum LanguageEnum {
  BOKMAAL = 'nb',
  NYNORSK = 'nn',
  ENGLISH = 'en',
  SAMI = 'se'
}

const generateLanguagePickerText = (language: LanguageEnum): string => {
  switch (language) {
    case LanguageEnum.BOKMAAL:
      return 'Bokmål';
    case LanguageEnum.NYNORSK:
      return 'Nynorsk';
    case LanguageEnum.ENGLISH:
      return 'Engelsk';
    case LanguageEnum.SAMI:
      return 'Sámigiella';
  }
};

const displayFlag = (language: LanguageEnum): JSX.Element => {
  switch (language) {
    case LanguageEnum.BOKMAAL:
      return <NorwegianFlag />;
    case LanguageEnum.NYNORSK:
      return <NorwegianFlag />;
    case LanguageEnum.ENGLISH:
      return <EnglishFlag />;
    case LanguageEnum.SAMI:
      return <SamiFlag />;
  }
};

const LanguagePickerButton = ({
  buttonLanguage,
  selectedLanguage,
  setLanguage,
  showOnMobile
}): JSX.Element => {
  const styles = getClassNames();
  return (
    <TopStripeButton
      onClick={() => setLanguage(buttonLanguage)}
      showOnMobile={showOnMobile}
      className={styles.languageButton}
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
  selectedLanguage: LanguageEnum;
  setLanguage: any;
  showOnMobile?: boolean;
  showSami?: boolean;
}
export const LanguagePicker: React.FC<LanguagePickerProps> = props => {
  const {
    className,
    selectedLanguage,
    setLanguage,
    showOnMobile = false,
    showSami = false
  } = props;
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
        <LanguagePickerButton
          buttonLanguage={LanguageEnum.BOKMAAL}
          selectedLanguage={selectedLanguage}
          setLanguage={setLanguage}
          showOnMobile={showOnMobile}
        />
        <LanguagePickerButton
          buttonLanguage={LanguageEnum.NYNORSK}
          selectedLanguage={selectedLanguage}
          setLanguage={setLanguage}
          showOnMobile={showOnMobile}
        />
        <LanguagePickerButton
          buttonLanguage={LanguageEnum.ENGLISH}
          selectedLanguage={selectedLanguage}
          setLanguage={setLanguage}
          showOnMobile={showOnMobile}
        />
        {showSami && (
          <LanguagePickerButton
            buttonLanguage={LanguageEnum.SAMI}
            selectedLanguage={selectedLanguage}
            setLanguage={setLanguage}
            showOnMobile={showOnMobile}
          />
        )}
      </TopStripeMenu>
    </>
  );
};
