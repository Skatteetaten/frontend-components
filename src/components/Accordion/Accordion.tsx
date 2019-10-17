import * as React from 'react';
import Grid from '../Grid/Grid';
import { getClassNames } from './Accordion.classNames';

interface AccordionProps {
  /** Benyttes når man skal ta brukeren gjennom en sekvens av trinnvise steg. */
  processList?: boolean;
  stepId?: string;
}
/**
 * @visibleName Accordion (Ekspanderende panel)
 */
export default class Accordion extends React.PureComponent<AccordionProps, {}> {
  render() {
    const { processList, stepId, children } = this.props;
    // @ts-ignore TODO
    const styles = getClassNames(this.props);
    return (
      <>
        {/*
          // @ts-ignore TODO */}
        <div className={styles.accordion}>
          <Grid>
            {React.Children.map(children, (child, index) =>
              // @ts-ignore TODO
              React.cloneElement(child, {
                stepNumber: index + 1,
                // @ts-ignore TODO
                id: stepId + index + 1,
                // @ts-ignore TODO
                totalSteps: children.length,
                processList: processList
              })
            )}
          </Grid>
        </div>
      </>
    );
  }
}
