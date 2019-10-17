import * as React from 'react';
import {
  VirtualizedComboBox as FabricComboBox,
  IComboBoxProps
} from 'office-ui-fabric-react/lib-commonjs/ComboBox';
import Callout from '../Callout/Callout';
import classnames from 'classnames';

import { Label } from 'office-ui-fabric-react/lib-commonjs/Label';
import { IconButton } from 'office-ui-fabric-react/lib-commonjs/Button';
import {
  getClassNames,
  getErrorClassNames,
  getLabelClassNames,
  getOptionsClassNames
} from './ComboBox.classNames';

// This is just a workaround so that the combobox opens on focus.
class SkeCombobox extends FabricComboBox {
  focus = () => {
    if (
      // @ts-ignore TODO
      this.props.expandOnFocus === true &&
      // @ts-ignore TODO
      this._comboBox.value &&
      this.props.disabled === false
    ) {
      // @ts-ignore TODO
      this._comboBox.value.focus(this.props.shouldOpenOnFocus);
      return true;
    }
    return false;
  };
}

interface ComboboxProps extends IComboBoxProps {
  /** Angir om valgene automatisk skal vises når feltet har focus */
  expandOnFocus?: boolean;
  /** Hjelpetekst */
  help?: JSX.Element | string;
  /** Størrelse på inputfelt som skal benyttes */
  inputSize?: 'normal' | 'large';
}
type ComboboxState = {
  isCalloutVisible: boolean;
};
/**
 * @visibleName ComboBox (Nedtrekksliste med skriving)
 */
export default class Combobox extends React.PureComponent<
  ComboboxProps,
  ComboboxState
> {
  static defaultProps = {
    autoComplete: 'on',
    expandOnFocus: false,
    allowFreeform: false,
    label: undefined,
    errorMessage: undefined,
    help: undefined,
    disabled: false,
    shouldOpenOnFocus: true
  };
  // @ts-ignore TODO
  constructor(props) {
    super(props);
    this.state = {
      isCalloutVisible: false
    };
    this._onRenderLabel = this._onRenderLabel.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onDismiss = this._onDismiss.bind(this);
  }
  // @ts-ignore TODO
  _onRenderLabel(props) {
    const { label, help, componentId } = props;

    const styles = getLabelClassNames(props);
    let { isCalloutVisible } = this.state;
    const helpElement = React.isValidElement(help) ? help : <p>{help}</p>;
    return (
      <div className={styles.labelArea}>
        <span className={styles.label}>
          {label ? (
            <Label className={styles.labelText} htmlFor={componentId}>
              {label}
            </Label>
          ) : null}
        </span>
        {help && (
          <span
            className={styles.labelIconArea}
            // @ts-ignore TODO
            ref={menuButton => (this._iconButtonElement = menuButton)}
          >
            <IconButton
              iconProps={{ iconName: 'HelpOutline' }}
              title="HelpOutline"
              ariaLabel="Hjelp"
              onClick={this._onClick}
              className={styles.icon}
              aria-haspopup={true}
            />
          </span>
        )}
        {isCalloutVisible && (
          <Callout
            directionalHint={Callout.POS_TOP_LEFT}
            color={Callout.HELP}
            ariaLabel={'Hjelpetekst'}
            // @ts-ignore TODO
            target={this._iconButtonElement}
            onClose={this._onDismiss}
          >
            {helpElement}
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
      help,
      // @ts-ignore TODO
      onRenderLabel,
      className,
      id,
      ...props
    } = this.props;
    const labelProps = { label, help };
    return (
      <div id={id}>
        {onRenderLabel
          ? onRenderLabel(labelProps)
          : this._onRenderLabel(labelProps)}
        <SkeCombobox
          {...props}
          role="combobox"
          className={classnames(getClassNames(this.props), className)}
          onFocus={this._basicComboBoxOnClick}
          componentRef={this._basicComboBoxComponentRef}
          calloutProps={{
            className: getOptionsClassNames(this.props)
          }}
        >
          {children}
        </SkeCombobox>
        {errorMessage && (
          <label className={getErrorClassNames(this.props)}>
            {errorMessage}
          </label>
        )}
      </div>
    );
  }
  // @ts-ignore TODO
  _basicComboBoxComponentRef = component => {
    // @ts-ignore TODO
    this._basicCombobox = component;
  };

  _basicComboBoxOnClick = () => {
    // @ts-ignore TODO
    this._basicCombobox.focus();
    const { onFocus } = this.props;
    // @ts-ignore TODO
    onFocus && onFocus();
  };
}
