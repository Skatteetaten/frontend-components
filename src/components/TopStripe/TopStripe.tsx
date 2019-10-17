import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Link } from 'office-ui-fabric-react/lib-commonjs/Link';

import ActionButton from '../ActionButton/ActionButton';

import { getClassNames } from './TopStripe.classNames';

export class TopStripe extends React.PureComponent {
  static propTypes = {
    /** Meny elementer */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        /** Intern nøkkel/id i menylisten */
        key: PropTypes.string.isRequired,
        /** Tekst som vises for menyvalget */
        label: PropTypes.string.isRequired,
        /** Ikke vis label, men den blir med som ariaLabel */
        noLabelText: PropTypes.bool,
        /** Icon som vises for menyvalget */
        icon: PropTypes.string,
        /** URL menyvalget skal sende bruker til */
        href: PropTypes.string,
        /** Tekst som skal vises når menyvalget velges */
        info: PropTypes.string,
        /** Undermenyliste */
        items: PropTypes.arrayOf(
          PropTypes.shape({
            /** Intern nøkkel/id i undermenylisten */
            key: PropTypes.string.isRequired,
            /** Tekst som vises for menyvalget */
            label: PropTypes.string.isRequired,
            /** Icon som vises for menyvalget */
            icon: PropTypes.string,
            /** URL menyvalget skal sende bruker til */
            href: PropTypes.string,
            /** Javascript metode som skal kjøres når menyvalget velges */
            onClick: PropTypes.func,
            /** Markering av menyvalget for å indikere at det er valgt */
            selected: PropTypes.bool
          })
        ),
        /** Brukes til å indikere at menyvalget ikke skal vises på små enheter */
        notSmallDevice: PropTypes.bool
      })
    ).isRequired,
    /** Overstyring av "lukk meny"-tekst. Brukes typisk til språkstøtte */
    closeMenuText: PropTypes.string
  };

  static defaultProps = {
    closeMenuText: 'Lukk meny'
  };

  state = {
    activeMenu: null
  };
  // @ts-ignore TODO
  styles = getClassNames(this.props);
  // @ts-ignore TODO
  selectMenu(id) {
    this.setState({ activeMenu: id });
  }

  closeMenu() {
    this.setState({ activeMenu: null });
  }
  // @ts-ignore TODO
  buildDropdownInfo(key, info, show) {
    const classes = [
      this.styles.dropdownContainer,
      this.styles.dropdownContainerRight
    ];

    if (show) {
      classes.push(this.styles.dropdownShow);
    }

    return (
      <div className={classnames(classes)} onClick={() => this.closeMenu()}>
        <div className={this.styles.info}>{info}</div>
        <div className={this.styles.infoClose}>
          <ActionButton
            id={key + '-choice'}
            icon={'ChevronUp'}
            // @ts-ignore TODO
            ariaLabel={this.props.closeMenuText}
          />
          <span className={this.styles.hiddenText}>
            {
              // @ts-ignore TODO
              this.props.closeMenuText
            }
          </span>
        </div>
      </div>
    );
  }
  // @ts-ignore TODO
  buildDropdownMenuLinkChoice(children, href) {
    return (
      <Link
        href={href}
        className={this.styles.dropdownMenuchoiceLink}
        tabIndex={-1}
      >
        {children}
      </Link>
    );
  }
  // @ts-ignore TODO
  buildDropdownMenuChoice(choice, context) {
    const liClasses = [this.styles.dropdownMenuchoice];
    const buttonClasses = [this.styles.dropdownMenuchoiceButton];
    let icon = choice.icon;

    if (choice.selected !== undefined && choice.selected === true) {
      liClasses.push(this.styles.dropdownMenuchoiceActive);
      buttonClasses.push(this.styles.dropdownMenuchoiceButtonActive);

      if (!icon) {
        icon = 'Check';
      }
    }

    if (!icon) {
      buttonClasses.push(this.styles.dropdownMenuchoiceButtonEmptyIcon);
    }

    let clikkFunction = () => {
      choice.onClick();
      context.closeMenu();
    };

    if (choice.href) {
      // @ts-ignore TODO
      clikkFunction = undefined;
    }

    let buttonElement = (
      <ActionButton
        ariaLabel={choice.label}
        icon={icon}
        className={classnames(buttonClasses)}
        onClick={clikkFunction}
      >
        {choice.label}
      </ActionButton>
    );

    if (choice.href) {
      buttonElement = this.buildDropdownMenuLinkChoice(
        buttonElement,
        choice.href
      );
    }

    return (
      <li className={classnames(liClasses)} key={choice.key}>
        {buttonElement}
      </li>
    );
  }
  // @ts-ignore TODO
  buildDropdownMenuCloseChoice(key, closeLabel, context) {
    return (
      <li className={this.styles.dropdownMenuchoiceClose} key={key + '-close'}>
        <ActionButton
          id={key + '-close'}
          icon={'ChevronUp'}
          onClick={() => context.closeMenu()}
          ariaLabel={closeLabel}
        />
        <span className={this.styles.hiddenText}>{closeLabel}</span>
      </li>
    );
  }
  // @ts-ignore TODO
  buildDropdownMenu(key, menuitems, show, rightFixed) {
    const classes = [
      this.styles.dropdownContainer,
      this.styles.dropdownContainerList
    ];

    if (show) {
      classes.push(this.styles.dropdownShow);
    }

    if (rightFixed) {
      classes.push(this.styles.dropdownContainerRight);
    }
    // @ts-ignore TODO
    let menuchoice = menuitems.map(valg =>
      this.buildDropdownMenuChoice(valg, this)
    );

    menuchoice.push(
      // @ts-ignore TODO
      this.buildDropdownMenuCloseChoice(key, this.props.closeMenuText, this)
    );

    return (
      <div className={classnames(classes)}>
        <ul className={this.styles.dropdownList}>{menuchoice}</ul>
      </div>
    );
  }
  // @ts-ignore TODO
  buidNavMenuLinkChoice(children, href) {
    return (
      <Link href={href} className={this.styles.navMenuchoiceLink} tabIndex={-1}>
        {children}
      </Link>
    );
  }

  buildNavMenu() {
    // @ts-ignore TODO
    const itemsLength = this.props.items.length;
    // @ts-ignore TODO
    return this.props.items.map((valg, idx) => {
      const menuChoiceIsActive = this.state.activeMenu === valg.key;
      const classes = [this.styles.navMenuchoice];
      let dropdown = undefined;
      let click = undefined;
      let choiceContent = valg.noLabel ? null : valg.label;

      if (menuChoiceIsActive) {
        classes.push(this.styles.navMenuchoiceActive);
      }

      if (valg.notSmallDevice) {
        classes.push(this.styles.navMenuchoiceNotSmallDevice);
      }

      if (valg.info) {
        dropdown = this.buildDropdownInfo(
          valg.key,
          valg.info,
          menuChoiceIsActive
        );
        click = () => this.selectMenu(valg.key);
      } else if (valg.items) {
        dropdown = this.buildDropdownMenu(
          valg.key,
          valg.items,
          menuChoiceIsActive,
          idx >= itemsLength - 1
        );
        click = () => this.selectMenu(valg.key);
      }

      let element = (
        <ActionButton
          ariaLabel={valg.label}
          onClick={click}
          icon={valg.icon}
          className={this.styles.navMenuchoiceButton}
        >
          {choiceContent}
        </ActionButton>
      );

      if (valg.href) {
        element = this.buidNavMenuLinkChoice(element, valg.href);
      }

      return (
        <li key={valg.key} className={classnames(classes)}>
          {element}
          {dropdown}
        </li>
      );
    });
  }

  render() {
    const menuchoiceList = this.buildNavMenu();

    const showOverlay =
      this.state.activeMenu !== null ? this.styles.overlayShow : '';

    return (
      <div>
        <div
          id={'topStripeOverlay'}
          className={classnames(this.styles.overlay, showOverlay)}
          onClick={() => this.selectMenu(null)}
        />

        <div className={this.styles.container}>
          <div id={'topStripeNav'} className={this.styles.nav}>
            <ul className={classnames(this.styles.navMenu)}>
              {menuchoiceList}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TopStripe;
