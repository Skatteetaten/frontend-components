import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import Grid from '../../Grid/Grid';
import Icon from '../../Icon/Icon';

import { getClassNames } from '../Accordion.classNames';

const ToggleContent = ({
  styles,
  toggleContent,
  toggleButtonText,
  stepId,
  isContentOpen,
  subtitle,
  onClick
}) => {
  if (!toggleContent) {
    return null;
  }

  return (
    <button
      className={
        isContentOpen
          ? classnames(styles.toggleButton, styles.toggleButtonOpen)
          : styles.toggleButton
      }
      aria-expanded={!!isContentOpen}
      aria-controls={stepId}
      aria-label={toggleButtonText}
      onClick={onClick}
    >
      <label>
        {toggleButtonText}

        <Icon iconName={'ChevronDown'} />

        {subtitle && (
          <p
            className={styles.subtitle}
            aria-labelledby={subtitle}
            tabIndex={'0'}
          >
            {subtitle}
          </p>
        )}
      </label>
    </button>
  );
};

export default class AccordionItem extends React.PureComponent {
  static propTypes = {
    /** Valg for å kunne vise/skjule innhold til et steg med en "vise/skjule" knapp */
    toggleContent: PropTypes.bool,
    /** Teksten for vise/skjule knappen for et steg */
    toggleButtonText: PropTypes.string,
    /** Om et steg skal være default åpen */
    isOpen: PropTypes.bool,
    /** Om skal vise spesifisert ikon istedet tall hvis Accordion er en processList  */
    icon: PropTypes.string,
    /** Tekst som er ønskelig at leses opp for skjermleser om man spesifiserer et ikon */
    ariaLabel: PropTypes.string,
    /** Om man ønsker ytterligere aksjon når bruker åpner steget. Kalles KUN når steget åpnes, ikke når det lukkes. */
    onClick: PropTypes.func,
    /**   Id som settes i aria-control på vise/skjule knapp som peker på innholdspanelet som knappen styrer */
    stepId: PropTypes.string,
    /** Tittel til innholdet */
    title: PropTypes.string,
    /** Subtittel som vises i accordionitem */
    subtitle: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      isContentOpen: props.isOpen
    };
  }

  render() {
    const { isContentOpen } = this.state;
    const styles = getClassNames(this.props);

    const {
      title,
      subtitle,
      toggleContent,
      toggleButtonText,
      stepNumber,
      icon,
      ariaLabel,
      children,
      totalSteps,
      stepId,
      processList
    } = this.props;

    return (
      <div
        key={stepNumber}
        aria-describedby={stepNumber}
        aria-label={stepNumber}
        className={styles.wrapperStep}
      >
        {processList && stepNumber !== totalSteps && (
          <span className={styles.stepLine} />
        )}
        <Grid.Row rowSpacing={Grid.SPACE_NONE}>
          <Grid.Col>
            <Grid.Row rowSpacing={Grid.SPACE_NONE}>
              {processList && (
                <Grid.Col sm={3} md={2} xl={1}>
                  <div className={styles.stepNumber}>
                    <span aria-label={ariaLabel ? ariaLabel : ''}>
                      {icon ? <Icon iconName={icon} /> : stepNumber}
                    </span>
                  </div>
                </Grid.Col>
              )}
              <Grid.Col
                sm={processList ? 9 : 12}
                md={processList ? 10 : 12}
                xl={processList ? 11 : 12}
              >
                <hr className={styles.hr1} />
                <ToggleContent
                  styles={styles}
                  toggleContent={toggleContent}
                  toggleButtonText={toggleButtonText}
                  stepId={stepId}
                  isContentOpen={isContentOpen}
                  subtitle={subtitle}
                  onClick={this._clickHandler}
                />
                {(isContentOpen || !toggleContent) && (
                  <div
                    className={styles.content}
                    id={stepId}
                    role={'region'}
                    tabIndex={'0'}
                  >
                    <h1 className={styles.title}>{title}</h1>
                    {children}
                  </div>
                )}
                {stepNumber === totalSteps && <hr className={styles.hr1} />}
              </Grid.Col>
            </Grid.Row>
          </Grid.Col>
        </Grid.Row>
      </div>
    );
  }

  _clickHandler = () => {
    const { isContentOpen } = this.state;
    const { onClick } = this.props;
    if (onClick && !isContentOpen) {
      onClick();
    }
    this._toggleVisibility();
  };

  _toggleVisibility = () => {
    this.setState({
      isContentOpen: !this.state.isContentOpen
    });
  };
}
