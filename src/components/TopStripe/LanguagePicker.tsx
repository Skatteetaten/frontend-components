import * as React from 'react';
import { TopStripeButton } from './TopStripeButton';
import { TopStripeMenu } from './TopStripeMenu';
import { ReactComponent as EnglishFlag } from './assets/EnglishFlag.svg';
import { ReactComponent as NorwegianFlag } from './assets/NorwegianFlag.svg';
import Icon from '../Icon/Icon';

enum LanguageEnum {
  BOKMAAL = 'nb',
  NYNORSK = 'nn',
  ENGLISH = 'en'
}

const generateLanguagePickerText = (language: LanguageEnum): string => {
  switch (language) {
    case LanguageEnum.BOKMAAL:
      return 'Bokmål';
    case LanguageEnum.NYNORSK:
      return 'Nynorsk';
    case LanguageEnum.ENGLISH:
      return 'Engelsk';
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
  }
};

const LanguagePickerButton = ({
  buttonLanguage,
  selectedLanguage,
  setLanguage
}): JSX.Element => (
  <TopStripeButton onClick={() => setLanguage(buttonLanguage)}>
    {buttonLanguage === selectedLanguage && <Icon iconName={'Check'} />}
    {displayFlag(buttonLanguage)}
    {generateLanguagePickerText(buttonLanguage)}
  </TopStripeButton>
);

export interface LanguagePickerProps {
  className?: string;
  selectedLanguage: LanguageEnum;
  setLanguage: any;
}
export const LanguagePicker: React.FC<LanguagePickerProps> = props => {
  const { className, selectedLanguage, setLanguage } = props;

  return (
    <>
      {displayFlag(selectedLanguage)}
      <TopStripeMenu
        showOnMobile={false}
        title={generateLanguagePickerText(selectedLanguage)}
        className={className}
      >
        <LanguagePickerButton
          buttonLanguage={LanguageEnum.BOKMAAL}
          selectedLanguage={selectedLanguage}
          setLanguage={setLanguage}
        />
        <LanguagePickerButton
          buttonLanguage={LanguageEnum.NYNORSK}
          selectedLanguage={selectedLanguage}
          setLanguage={setLanguage}
        />
        <LanguagePickerButton
          buttonLanguage={LanguageEnum.ENGLISH}
          selectedLanguage={selectedLanguage}
          setLanguage={setLanguage}
        />
      </TopStripeMenu>
    </>
  );
};
