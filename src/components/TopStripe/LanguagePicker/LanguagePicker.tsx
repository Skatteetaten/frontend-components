import * as React from 'react';
import { TopStripeButton } from '../TopStripeButton';
import { TopStripeMenu } from '../TopStripeMenu';
import { EnglishFlag, NorwegianFlag, SamiFlag } from '../assets';
import { Icon } from '../../Icon';
import { UseScreen } from '../../utils';
import { getClassNames } from './LanguagePicker.classNames';
import { useEffect } from 'react';
import classnames from 'classnames';

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
      <span className={styles.languageButtonFlag}>{displayFlag(language)}</span>
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
      className={styles.languageButton}
      role={'menuitem'}
      aria-current={isSelectedLanguage}
      lang={buttonLanguage}
    >
      {isSelectedLanguage && (
        <Icon iconName={'Check'} className={styles.checkIcon} />
      )}
      <span
        className={classnames(
          styles.languageButtonContent,
          styles.languageButtonFlag
        )}
      >
        {displayFlag(buttonLanguage)}
      </span>
      <span
        className={classnames(
          styles.languageButtonContent,
          styles.languageButtonText,
          {
            [styles.languageButtonIsNotSelected]: !isSelectedLanguage,
          }
        )}
      >
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

/**
 * @deprecated Komponenten er erstattet av innebygget funksjonalitet i TopBannerExternal fra "@skatteetaten/ds-layout"
 */
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
    <TopStripeMenu
      data-testid={'language-picker'}
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
  );
};
