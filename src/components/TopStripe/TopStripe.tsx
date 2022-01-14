import * as React from 'react';
import { getClassNames } from './TopStripe.classNames';
import classnames from 'classnames';
import { TopStripeProps } from './TopStripe.types';
import { TopStripeMenu } from './TopStripeMenu';
import { TopStripeButton } from './TopStripeButton';
import { TopStripeLink } from './TopStripeLink';
import { LanguagePicker } from './LanguagePicker';
import { TopStripeUser } from './TopStripeUser';

export const TopStripeContext = React.createContext<TopStripeProps>({
  open: -1,
});

/*
 * visibleName TopStripe (Toppstripe)
 */
export const TopStripe: React.FC<TopStripeProps> = (props) => {
  const topStripeElements = [
    TopStripeMenu,
    TopStripeButton,
    TopStripeLink,
    TopStripeUser,
    LanguagePicker,
  ];
  const notOpenIndex = -1;
  const topRef = React.createRef<HTMLUListElement>();
  const [openIndex, setOpenIndex] = React.useState(notOpenIndex);
  const setOpen = (num: number) => {
    if (openIndex === num) {
      setOpenIndex(notOpenIndex);
    } else {
      setOpenIndex(num);
    }
  };
  const { children, className, contentWidth, ...rest } = props;
  const styles = getClassNames(contentWidth);
  const showOverlay = openIndex !== notOpenIndex ? styles.overlayShow : '';

  const handleClickOutside = (e: any) => {
    const eventPaths: Array<EventTarget> = e.composedPath
      ? e.composedPath()
      : [];
    const target = eventPaths.length > 0 ? eventPaths[0] : e.target;
    const node = topRef.current;
    if (node && node.contains(target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(notOpenIndex);
  };

  const handleEscape = (e: any) => {
    // Match escape key
    if (e.keyCode === 27) {
      setOpen(notOpenIndex);
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
    <div className={styles.topStripe}>
      <div className={classnames(styles.overlay, showOverlay)} />
      <div className={styles.background}>
        <TopStripeContext.Provider
          value={{
            open: openIndex,
            setOpen: setOpen,
            closeMenu: () => setOpenIndex(notOpenIndex),
          }}
        >
          <ul
            ref={topRef}
            className={classnames(styles.topStripeContainer, className)}
            {...rest}
          >
            {React.Children.map(children, (child: any, index) =>
              child ? (
                <li
                  className={classnames(styles.topStripeElement, {
                    [styles.loggedInUser]: child.type === TopStripeUser,
                    [styles.hideOnMobile]:
                      topStripeElements.includes(child.type) &&
                      !child.props.showOnMobile,
                  })}
                >
                  {React.cloneElement(child, {
                    index,
                  })}
                </li>
              ) : null
            )}
          </ul>
        </TopStripeContext.Provider>
      </div>
    </div>
  );
};
