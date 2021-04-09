import * as React from 'react';
import { getClassNames } from './TopStripe.classNames';
import classnames from 'classnames';
import { TopStripeButton } from '../index';

export interface TopStripeProps {
  children?: JSX.Element | Array<JSX.Element | null | false>;
  className?: string;
  /** @ignore */
  open?: number;
  /** @ignore */
  setOpen?: any;
  /** @ignore */
  closeMenu?: () => void;
}

export const TopStripeContext = React.createContext<TopStripeProps>({
  open: -1,
});

/**
 * @visibleName TopStripe (Toppstripe)
 */
export const TopStripe: React.FC<TopStripeProps> = (props) => {
  const notOpen = -1;
  const topRef = React.createRef<HTMLUListElement>();
  const [open, setOpenIndex] = React.useState(notOpen);
  const setOpen = (num) => {
    if (open === num) {
      setOpenIndex(notOpen);
    } else {
      setOpenIndex(num);
    }
  };
  const styles = getClassNames();
  const { children, className, ...rest } = props;
  const showOverlay = open !== notOpen ? styles.overlayShow : '';

  const handleClickOutside = (e: any) => {
    const node = topRef.current;
    if (node && node.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(notOpen);
  };

  const handleEscape = (e: any) => {
    // Match escape key
    if (e.keyCode === 27) {
      setOpen(notOpen);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  });

  return (
    <>
      <div className={classnames(styles.overlay, showOverlay)} />
      <TopStripeContext.Provider
        value={{
          open: open,
          setOpen: setOpen,
          closeMenu: () => setOpenIndex(notOpen),
        }}
      >
        <ul
          ref={topRef}
          className={classnames(styles.topStripeContainer, className)}
          {...rest}
        >
          {React.Children.map(children, (child: any, index) => {
            if (child && child.type === TopStripeButton) {
              return (
                <li>
                  {React.cloneElement(child, {
                    topStripeStyle: styles.plainButton,
                  })}
                </li>
              );
            } else {
              return child ? (
                <li>{React.cloneElement(child, { index })}</li>
              ) : null;
            }
          })}
        </ul>
      </TopStripeContext.Provider>
    </>
  );
};
