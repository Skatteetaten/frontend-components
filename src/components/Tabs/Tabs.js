import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  Pivot,
  PivotItem,
  PivotLinkFormat,
  PivotLinkSize
} from 'office-ui-fabric-react/lib-commonjs/Pivot';

import { getClassNames } from './Tabs.classNames';

/**
 * @visibleName Tabs (Arkfane)
 */
export default class Tabs extends React.PureComponent {
  static propTypes = {
    /** Markert/aktiv arkfane */
    selectedKey: PropTypes.string,
    /** Overstyring av stiler */
    className: PropTypes.string,
    /** Global attributt som må være unik for hele HTML dokumentet */
    id: PropTypes.string
  };

  render() {
    const { children, selectedKey, className, id, ...props } = this.props;

    return (
      <div id={id}>
        <Pivot
          selectedKey={selectedKey}
          linkFormat={PivotLinkFormat.tabs}
          linkSize={PivotLinkSize.large}
          {...props}
          className={classnames(getClassNames(this.props), className)}
        >
          {React.Children.map(this.props.children, child => (
            <PivotItem {...child.props} />
          ))}
        </Pivot>
      </div>
    );
  }
}
