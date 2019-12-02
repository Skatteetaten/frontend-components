import React from 'react';
import { TopStripeMenu } from './TopStripeMenu';
import ActionButton from '../ActionButton';
import { getClassNames } from './TopStripeMenu.classNames';
interface TopStripeLanguageSelectorProps {
  options: any[];
  index?: number;
}

export const TopStripeLanguageSelector: React.FC = props => {
  const [selected, setSelected] = React.useState();
  const styles = getClassNames();
  const { options } = props;

  return (
    <TopStripeMenu
      {...props}
      title={'Endre språk'}
      onRender={
        options &&
        options.map(item => {
          if (!selected && item.defaultSelected) {
            setSelected(item.language);
          }
          const isSelected = selected === item.language;
          const selectLanguage = () => {
            setSelected(item.language);
            item.onClick();
          };
          return (
            <li>
              <ActionButton
                className={styles.menuButton}
                ariaLabel={item.language}
                icon={isSelected ? 'Check' : undefined}
                onClick={() => selectLanguage()}
              >
                {item.language}
              </ActionButton>
            </li>
          );
        })
      }
    />
  );
};
