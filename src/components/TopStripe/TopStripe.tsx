import * as React from 'react';
import { getClassNames } from './TopStripe.classNames';

interface TopStripeProps {
  children?: JSX.Element;
  open?: number;
  setOpen?: any;
}

export const TopStripeContext = React.createContext<TopStripeProps>({
  open: -1
});

const TopStripe: React.FC<TopStripeProps> = props => {
  const [open, setOpenIndex] = React.useState();
  const setOpen = num => {
    if (open === num) {
      setOpenIndex(null);
    } else {
      setOpenIndex(num);
    }
  };
  const styles = getClassNames();
  const { children, ...rest } = props;
  return (
    <div className={styles.topStripe}>
      <TopStripeContext.Provider
        value={{
          open: open,
          setOpen: setOpen
        }}
      >
        <ul className={styles.topStripeContainer} {...rest}>
          {React.Children.map(children, (child: any, index) => {
            return <li>{React.cloneElement(child, { index })}</li>;
          })}
        </ul>
      </TopStripeContext.Provider>
    </div>
  );
};
export default TopStripe;
