import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  DropdownMenuItemType,
  Dropdown as FabricDropdown
} from 'office-ui-fabric-react/lib-commonjs/Dropdown';
import { Label } from 'office-ui-fabric-react/lib-commonjs/Label';
import { IconButton } from 'office-ui-fabric-react/lib-commonjs/Button';
import Callout from '../Callout/Callout';
import Icon from '../Icon/Icon';
import {
  getClassNames,
  getCalloutClassNames,
  getLabelClassNames,
  getErrorClassNames
} from './Dropdown.classNames';

/**
 * @visibleName Dropdown (Nedtrekksliste)
 */
export default class Dropdown extends React.PureComponent {
  static propTypes = {
    /** Emne over feltet */
    label: PropTypes.string,
    /** Hjelpetekst */
    info: PropTypes.string,
    /** Feilmeldingtekst */
    errorMessage: PropTypes.string,
    className: PropTypes.string,
    /** Global attributt som må være unik for hele HTML dokumentet */
    id: PropTypes.string,
    /** Størrelse på inputfelt som skal benyttes */
    inputSize: PropTypes.oneOf(['normal', 'large'])
  };
  static ItemType = DropdownMenuItemType;

  constructor(props) {
    super(props);
    this.state = {
      isCalloutVisible: false
    };
    this._onRenderLabel = this._onRenderLabel.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onDismiss = this._onDismiss.bind(this);
  }

  _onRenderLabel(props) {
    const { label, info, componentId } = props;

    const styles = getLabelClassNames(props);
    let { isCalloutVisible } = this.state;
    return (
      <div className={styles.labelArea}>
        <span className={styles.label}>
          {label ? (
            <Label
              className={styles.labelText}
              htmlFor={componentId}
              aria-label={label}
            >
              {label}
            </Label>
          ) : null}
        </span>
        {info && (
          <span
            className={styles.labelIconArea}
            ref={menuButton => (this._iconButtonElement = menuButton)}
          >
            <IconButton
              iconProps={{ iconName: 'HelpOutline' }}
              title="Info"
              ariaLabel="Info"
              role="tooltip"
              aria-haspopup="true"
              onClick={this._onClick}
              className={styles.icon}
            />
          </span>
        )}
        {isCalloutVisible && (
          <Callout
            directionalHint={Callout.POS_TOP_LEFT}
            color={Callout.HELP}
            ariaLabel={'Hjelpetekst'}
            role="dialog"
            target={this._iconButtonElement}
            onClose={this._onDismiss}
          >
            <div className={styles.callOut}>{info}</div>
          </Callout>
        )}
      </div>
    );
  }

  _onClick() {
    this.setState({
      isCalloutVisible: !this.state.isCalloutVisible
    });
  }

  _onDismiss() {
    this.setState({
      isCalloutVisible: false
    });
  }

  render() {
    const {
      children,
      errorMessage,
      label,
      info,
      onRenderLabel,
      className,
      id,
      inputSize,
      ...props
    } = this.props;
    const labelProps = { label, info };
    return (
      <div id={id}>
        {onRenderLabel
          ? onRenderLabel(labelProps)
          : this._onRenderLabel(labelProps)}
        <FabricDropdown
          {...props}
          label={undefined}
          className={classnames(getClassNames(this.props), className)}
          calloutProps={{
            className: getCalloutClassNames(this.props)
          }}
          inputSize={inputSize}
          onRenderCaretDown={() => <Icon iconName={'ChevronDown'} />}
        >
          {children}
        </FabricDropdown>
        {errorMessage && (
          <div className={getErrorClassNames(this.props)}>{errorMessage}</div>
        )}
      </div>
    );
  }
}
