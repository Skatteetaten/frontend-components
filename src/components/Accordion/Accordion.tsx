import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../Grid/Grid';
import { getClassNames } from './Accordion.classNames';

/**
 * @visibleName Accordion (Ekspanderende panel)
 */
export default class Accordion extends React.PureComponent {
  static propTypes = {
    /** Klassenavn som kan benyttes for å overstyre css */
    className: PropTypes.string,
    /** Benyttes når man skal ta brukeren gjennom en sekvens av trinnvise steg. */
    processList: PropTypes.bool
  };

  render() {
    const { processList, stepId, children } = this.props;
    const styles = getClassNames(this.props);

    return (
      <div className={styles.accordion}>
        <Grid>
          {React.Children.map(children, (child, index) =>
            React.cloneElement(child, {
              stepNumber: index + 1,
              id: stepId + index + 1,
              totalSteps: children.length,
              processList: processList
            })
          )}
        </Grid>
      </div>
    );
  }
}
