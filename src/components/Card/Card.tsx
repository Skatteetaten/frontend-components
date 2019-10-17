import classnames from 'classnames';
import * as React from 'react';
import IconButton from '../IconButton/IconButton';
import { getClassNames } from './Card.classNames';

enum CardColor {
  GREY = 'neutralGrey',
  GREEN = 'lightGreen',
  BEIGE = 'beige',
  WHITE = 'white',
  RED = 'lightPink'
}

enum CardBorder {
  GREEN_BORDER = 'green',
  RED_BORDER = 'pink',
  YELLOW_BORDER = 'brown',
  GREY_BORDER = 'grey',
  WHITE_BORDER = 'white'
}

interface CardProps {
  /** Teksten som vises i kortet */
  title?: string;
  /** Subtittel som vises i kortet */
  subtitle?: string;
  /** Fontstørrelse på tittel */
  titlesize?: 'large' | 'x-large' | 'xx-large';
  /** Om kortet skal kunne utvides eller ikke */
  expand?: boolean;
  /** Om utvidikonet skal ha sirkel eller ikke */
  circleOnIcon?: boolean;
  /** Om kortet er utvidet eller ikke */
  isExpanded?: boolean;
  /** Finnes fire bakgrunnfarger: graa, gronn, rod eller beige */
  color?:
    | CardColor.BEIGE
    | CardColor.GREEN
    | CardColor.BEIGE
    | CardColor.WHITE
    | CardColor.RED;
  /** Ramme rundt kortet */
  border?:
    | CardBorder.WHITE_BORDER
    | CardBorder.GREEN_BORDER
    | CardBorder.YELLOW_BORDER
    | CardBorder.RED_BORDER
    | CardBorder.GREY_BORDER;
  /** Aksjoner i toppen av kortet */
  actions?: object;
  /** Avstand under kortet */
  marginbottom?: string;
  /** Luft over og under kortet */
  margin?: 'medium' | 'large' | 'xlarge';
  /** Callback som kjøres når man åpner eller lukker kortet */
  onChange?: (...args: any[]) => any;
  /** Global attributt som må være unik for hele HTML dokumentet */
  className?: string;
  /** Call back som kjøres når man åpner/lukker tittel */
  id?: string;
  /** onClick */
  onClick?: () => void;
}

interface CardState {
  isExpandedState: boolean;
}

/**
 * @visibleName Card (Innholdskort)
 */
export default class Card extends React.PureComponent<CardProps, CardState> {
  static GREY = CardColor.GREY;
  static GREEN = CardColor.GREEN;
  static BEIGE = CardColor.BEIGE;
  static WHITE = CardColor.WHITE;
  static RED = CardColor.RED;

  static GREEN_BORDER = CardBorder.GREEN_BORDER;
  static RED_BORDER = CardBorder.RED_BORDER;
  static YELLOW_BORDER = CardBorder.YELLOW_BORDER;
  static GREY_BORDER = CardBorder.GREY_BORDER;
  static WHITE_BORDER = CardBorder.WHITE_BORDER;

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
  // @ts-ignore TODO
  constructor(props) {
    super(props);
    const { isExpanded } = props;
    this.state = { isExpandedState: isExpanded };
  }
  // @ts-ignore TODO
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
      // @ts-ignore TODO
      actions,
      isExpanded,
      className,
      circleOnIcon,
      id,
      ...props
    } = this.props;

    const styles = getClassNames(this.props, this.state);
    // @ts-ignore TODO
    const { styleActions } = styles;
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
              {/*
               // @ts-ignore TODO */}
              {actions && <div className={styleActions}>{actions}</div>}
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
