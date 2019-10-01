import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { getClassNames } from './Card.classNames';
import IconButton from '../IconButton/IconButton';

/**
 * @visibleName Card (Innholdskort)
 */

export default class Card extends React.PureComponent {
  static GREY = 'neutralGrey';
  static GREEN = 'lightGreen';
  static BEIGE = 'beige';
  static WHITE = 'white';
  static RED = 'lightPink';

  static GREEN_BORDER = 'green';
  static RED_BORDER = 'pink';
  static YELLOW_BORDER = 'brown';
  static GREY_BORDER = 'grey';
  static WHITE_BORDER = 'white';

  static propTypes = {
    /** Teksten som vises i kortet */
    title: PropTypes.string,
    /** Subtittel som vises i kortet */
    subtitle: PropTypes.string,
    /** Fontstørrelse på tittel */
    titlesize: PropTypes.oneOf(['large', 'x-large', 'xx-large']),
    /** Om kortet skal kunne utvides eller ikke */
    expand: PropTypes.bool,
    /** Om utvidikonet skal ha sirkel eller ikke */
    circleOnIcon: PropTypes.bool,
    /** Om kortet er utvidet eller ikke */
    isExpanded: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Finnes fire bakgrunnfarger: graa, gronn, rod eller beige */
    color: PropTypes.oneOf([
      Card.WHITE,
      Card.GREY,
      Card.GREEN,
      Card.BEIGE,
      Card.RED
    ]),
    /** Ramme rundt kortet */
    border: PropTypes.oneOf([
      Card.GREEN_BORDER,
      Card.RED_BORDER,
      Card.YELLOW_BORDER,
      Card.GREY_BORDER,
      Card.WHITE_BORDER
    ]),
    /** Aksjoner i toppen av kortet */
    actions: PropTypes.object,
    /** Avstand under kortet */
    marginbottom: PropTypes.string,
    /** Luft over og under kortet */
    margin: PropTypes.oneOf(['medium', 'large', 'xlarge']),
    /** Callback som kjøres når man åpner eller lukker kortet */
    onChange: PropTypes.func,
    className: PropTypes.string,
    /** Global attributt som må være unik for hele HTML dokumentet */
    id: PropTypes.string
    /** Call back som kjøres når man åpner/lukker tittel*/
  };

  static defaultProps = {
    title: undefined,
    subtitle: undefined,
    titlesize: 'x-large',
    expand: false,
    isExpanded: true,
    color: Card.GREY,
    actions: null,
    marginbottom: '2px',
    margin: 'medium',
    circleOnIcon: true
  };

  constructor(props) {
    super(props);
    const { isExpanded } = props;
    this.state = { isExpandedState: isExpanded };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isExpandedState !== prevState.isExpandedState) {
      this.props.onChange && this.props.onChange(this.state.isExpandedState);
    }
  }

  render() {
    const { isExpandedState } = this.state;
    const {
      children,
      title,
      subtitle,
      expand,
      actions,
      isExpanded,
      className,
      circleOnIcon,
      id,
      ...props
    } = this.props;

    const styles = getClassNames(this.props, this.state);
    return (
      <div id={id} className={classnames(styles.root, className)}>
        {title || subtitle || expand ? (
          <div className={styles.header}>
            <div className={styles.titlecontainer}>
              {expand && (
                <div
                  aria-label={title}
                  className={styles.titleExpand}
                  onClick={() => {
                    this.setState({
                      isExpandedState: !this.state.isExpandedState
                    });
                    this.props.onClick && this.props.onClick();
                  }}
                >
                  {title}
                </div>
              )}
              {!expand && (
                <div className={styles.title} aria-label={title}>
                  {title}
                </div>
              )}
              {actions && <div className={styles.actions}>{actions}</div>}
              {<div className={styles.subtitle}>{subtitle}</div>}
            </div>
            {expand && (
              <div className={styles.expandIcon}>
                <IconButton
                  aria-expanded={isExpandedState ? true : false}
                  icon={'ChevronDown'}
                  title={isExpanded ? 'Kollaps innhold' : 'Utvid innhold'}
                  aria-label="Kollaps innhold"
                  circle={circleOnIcon ? true : false}
                  onClick={() => {
                    this.setState({
                      isExpandedState: !this.state.isExpandedState
                    });
                    this.props.onClick && this.props.onClick();
                  }}
                />
              </div>
            )}
          </div>
        ) : null}
        {isExpandedState && (
          <div {...props} className={styles.body}>
            {children}
          </div>
        )}
      </div>
    );
  }
}
