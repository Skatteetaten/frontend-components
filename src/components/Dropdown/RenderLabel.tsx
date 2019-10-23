import { getLabelClassNames } from './Dropdown.classNames';
import { IconButton, Label } from 'office-ui-fabric-react/lib-commonjs';
import Callout from '../Callout';
import * as React from 'react';

interface RenderLabelProps {
  label?: string;
  info?: string;
}

const RenderLabel: React.FC<RenderLabelProps> = ({ label, info }) => {
  const inputEl = React.useRef(null);
  const [isCalloutVisible, setCalloutVisible] = React.useState(false);
  const styles = getLabelClassNames();
  return (
    <div className={styles.labelArea}>
      <span className={styles.label} ref={inputEl}>
        {label ? (
          <Label
            className={styles.labelText}
            aria-label={label}
            htmlFor={label}
          >
            {label}
          </Label>
        ) : null}
      </span>
      {info && (
        <span className={styles.labelIconArea}>
          <IconButton
            iconProps={{ iconName: 'HelpOutline' }}
            title="Info"
            ariaLabel="Info"
            role="tooltip"
            aria-haspopup="true"
            onClick={() => setCalloutVisible(true)}
            className={styles.icon}
          />
        </span>
      )}
      {isCalloutVisible && (
        <Callout
          target={inputEl}
          directionalHint={Callout.POS_TOP_LEFT}
          color={Callout.HELP}
          ariaLabel={'Hjelpetekst'}
          role="dialog"
          onClose={() => setCalloutVisible(false)}
        >
          <div className={styles.callOut}>{info}</div>
        </Callout>
      )}
    </div>
  );
};

export default RenderLabel;
