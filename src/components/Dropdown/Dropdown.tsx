import classnames from 'classnames';
import { IconButton } from 'office-ui-fabric-react/lib-commonjs/Button';
import {
  Dropdown as FabricDropdown,
  DropdownMenuItemType,
  IDropdownProps
} from 'office-ui-fabric-react/lib-commonjs/Dropdown';
import { Label } from 'office-ui-fabric-react/lib-commonjs/Label';
import * as React from 'react';
import Callout from '../Callout/Callout';
import Icon from '../Icon/Icon';
import {
  getCalloutClassNames,
  getClassNames,
  getErrorClassNames,
  getLabelClassNames
} from './Dropdown.classNames';

interface DropdownProps extends IDropdownProps {
  /** Hjelpetekst */
  info?: string;
  /** Størrelse på inputfelt som skal benyttes */
  inputSize?: 'normal' | 'large';
}

interface DropdownState {
  isCalloutVisible: boolean;
}
/**
 * @visibleName Dropdown (Nedtrekksliste)
 */
export default class Dropdown extends React.PureComponent<
  DropdownProps,
  DropdownState
> {
  static ItemType = DropdownMenuItemType;
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
            // @ts-ignore TODO
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
            // @ts-ignore TODO
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
      ...props
    } = this.props;
    const labelProps = { label, info };
    return (
      <>
        {this._onRenderLabel(labelProps)}
        <FabricDropdown
          {...props}
          className={classnames(getClassNames(this.props), className)}
          calloutProps={{
            className: getCalloutClassNames(this.props)
          }}
          onRenderCaretDown={() => <Icon iconName={'ChevronDown'} />}
        >
          {children}
        </FabricDropdown>
        {errorMessage && (
          <div className={getErrorClassNames(this.props)}>{errorMessage}</div>
        )}
      </>
    );
  }
}
