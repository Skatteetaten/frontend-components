import * as React from 'react';
import { getClassNames } from './TopStripe.classNames';
import classnames from 'classnames';
import { TopStripeButton } from './TopStripeButton';

interface TopStripeProps {
  children?: JSX.Element;
  /** @ignore */
  open?: number;
  /** @ignore */
  setOpen?: any;
}

export const TopStripeContext = React.createContext<TopStripeProps>({
  open: -1
});

const TopStripe: React.FC<TopStripeProps> = props => {
  const notOpen = -1;
  const [open, setOpenIndex] = React.useState(notOpen);
  const setOpen = num => {
    if (open === num) {
      setOpenIndex(notOpen);
    } else {
      setOpenIndex(num);
    }
  };
  const styles = getClassNames();
  const { children, ...rest } = props;
  const showOverlay = open !== notOpen ? styles.overlayShow : '';
  return (
    <>
      <div className={classnames(styles.overlay, showOverlay)} />
      <TopStripeContext.Provider
        value={{
          open: open,
          setOpen: setOpen
        }}
      >
        <ul className={styles.topStripeContainer} {...rest}>
          {React.Children.map(children, (child: any, index) => {
            if (child.type === TopStripeButton) {
              return (
                <li>
                  {React.cloneElement(child, { style: styles.plainButton })}
                </li>
              );
            } else {
              return <li>{React.cloneElement(child, { index })}</li>;
            }
          })}
        </ul>
      </TopStripeContext.Provider>
    </>
  );
};
export default TopStripe;
