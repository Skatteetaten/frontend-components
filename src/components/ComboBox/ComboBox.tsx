import * as React from 'react';
import {
  VirtualizedComboBox,
  IComboBoxProps
} from 'office-ui-fabric-react/lib-commonjs/ComboBox';
import Callout from '../Callout/Callout';
import classnames from 'classnames';

import { Label } from 'office-ui-fabric-react/lib-commonjs/Label';
import { IconButton } from 'office-ui-fabric-react/lib-commonjs/Button';
import {
  getClassNames,
  getLabelClassNames,
  getOptionsClassNames
} from './ComboBox.classNames';
import ErrorMessage from '../ErrorMessage';

export interface ComboboxProps extends IComboBoxProps {
  /** Egendefinert feilmelding */
  errorMessage?: IComboBoxProps['errorMessage'];
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
  private readonly _iconButtonElement: React.RefObject<HTMLDivElement>;
  constructor(props: ComboboxProps) {
    super(props);
    this.state = {
      isCalloutVisible: false
    };
    this._iconButtonElement = React.createRef();
    this._onRenderLabel = this._onRenderLabel.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onDismiss = this._onDismiss.bind(this);
  }

  _onRenderLabel(props: any) {
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
          <span className={styles.labelIconArea} ref={this._iconButtonElement}>
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
      className,
      id,
      ...rest
    } = this.props;
    return (
      <div id={id}>
        {this._onRenderLabel(this.props)}
        <VirtualizedComboBox
          {...rest}
          role="combobox"
          className={classnames(getClassNames(this.props), className)}
          calloutProps={{
            className: getOptionsClassNames(this.props)
          }}
        >
          {children}
        </VirtualizedComboBox>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    );
  }
}
