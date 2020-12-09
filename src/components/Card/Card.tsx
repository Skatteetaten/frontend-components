import classnames from 'classnames';
import * as React from 'react';
import IconButton from '../IconButton/IconButton';
import { getClassNames } from './Card.classNames';

export enum CardColor {
  GREY = 'neutralGrey',
  GREEN = 'lightGreen',
  BEIGE = 'beige',
  WHITE = 'white',
  RED = 'lightPink'
}

export enum CardBorder {
  GREEN_BORDER = 'green',
  RED_BORDER = 'pink',
  YELLOW_BORDER = 'brown',
  GREY_BORDER = 'grey',
  WHITE_BORDER = 'white'
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Teksten som vises i kortet */
  title?: string;
  /** tagName for kort-tittel */
  titleTagName?: keyof JSX.IntrinsicElements;
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
  color?: CardColor.BEIGE | CardColor.GREEN | CardColor.WHITE | CardColor.RED;
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
  /** aria-label */
  ariaLabel?: string;
  /** Button type. Default er 'button' */
  buttonType?: string;
}

export interface CardState {
  isExpandedState: boolean;
}

/**
 * @visibleName Card (Innholdskort)
 */
export default class Card extends React.PureComponent<CardProps, CardState> {
  static Color = CardColor;
  static Border = CardBorder;

  static defaultProps = {
    title: undefined,
    titleTagName: 'div',
    subtitle: undefined,
    titlesize: 'x-large',
    expand: false,
    isExpanded: true,
    color: Card.Color.GREY,
    actions: null,
    marginbottom: '2px',
    margin: 'medium',
    circleOnIcon: true,
    buttonType: 'button',
    ariaLabel: null
  };

  constructor(props: CardProps) {
    super(props);
    const { isExpanded } = props;
    this.state = { isExpandedState: isExpanded || false };
  }
  componentDidUpdate(prevProps: CardProps, prevState: CardState) {
    if (this.state.isExpandedState !== prevState.isExpandedState) {
      this.props.onChange && this.props.onChange(this.state.isExpandedState);
    }
  }

  render() {
    const { isExpandedState } = this.state;
    const {
      children,
      title,
      titleTagName,
      subtitle,
      expand,
      actions,
      className,
      circleOnIcon,
      id,
      buttonType,
      ariaLabel
    } = this.props;
    const TitleTag = titleTagName as keyof JSX.IntrinsicElements;

    const styles = getClassNames(this.props, this.state);
    return (
      <div id={id} className={classnames(styles.root, className)}>
        {title || subtitle || expand ? (
          <div className={styles.header}>
            <div className={styles.titlecontainer}>
              {expand && (
                <TitleTag
                  aria-label={title}
                  className={styles.titleExpand}
                  onClick={this._toggleExpand}
                >
                  {title}
                </TitleTag>
              )}
              {!expand && (
                <TitleTag className={styles.title} aria-label={title}>
                  {title}
                </TitleTag>
              )}
              {actions && <div>{actions}</div>}
              {
                <div className={styles.subtitle} aria-label={subtitle}>
                  {subtitle}
                </div>
              }
            </div>
            {expand && (
              <div className={styles.expandIcon}>
                <IconButton
                  aria-expanded={isExpandedState}
                  icon={'ChevronDown'}
                  ariaLabel={ariaLabel}
                  circle={circleOnIcon}
                  onClick={this._toggleExpand}
                  type={buttonType}
                />
              </div>
            )}
          </div>
        ) : null}
        {isExpandedState && <div className={styles.body}>{children}</div>}
      </div>
    );
  }

  _toggleExpand = () => {
    this.setState({
      isExpandedState: !this.state.isExpandedState
    });
    this.props.onClick && this.props.onClick();
  };
}
