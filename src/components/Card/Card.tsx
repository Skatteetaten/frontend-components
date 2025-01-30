import classnames from 'classnames';
import * as React from 'react';
import { getClassNames } from './Card.classNames';
import { Icon } from '../Icon';
import { CardBorder, CardColor, CardProps, CardState } from './Card.types';

/**
 * @deprecated Card har ingen en-til-en erstatter. Panel, Card, Alert, OpenClose eller
 * Accordion kan benyttes avhengig av hvilken funskjonalitet man trenger fra Card.
 * visibleName Card (Innholdskort)
 */
export class Card extends React.PureComponent<CardProps, CardState> {
  static Color = CardColor;
  static Border = CardBorder;

  static defaultProps = {
    title: undefined,
    titleTagName: 'div',
    subtitle: undefined,
    titlesize: 'x-large',
    expand: false,
    isExpanded: true,
    color: CardColor.BEIGE,
    marginbottom: '2px',
    margin: 'medium',
    buttonType: 'button',
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
      className,
      id,
      buttonType,
      ariaLabel,
      isExpanded,
      titlesize,
      color,
      border,
      marginbottom,
      margin,
      onChange,
      onClick,
      ...htmlAttributes
    } = this.props;

    const TitleTag = titleTagName as keyof JSX.IntrinsicElements;
    const styles = getClassNames(this.props, this.state);

    const expandCard = (
      <button
        className={styles.header}
        onClick={expand ? this._toggleExpand : undefined}
        aria-expanded={isExpandedState}
        type={buttonType}
      >
        <div className={styles.titlecontainer}>
          <TitleTag className={styles.titleExpand}>{title}</TitleTag>
          {<div className={styles.subtitle}>{subtitle}</div>}
        </div>
        <div className={styles.expandIcon}>
          <Icon iconName={'ChevronDown'} />
        </div>
      </button>
    );

    const regularCard = (
      <div className={styles.header}>
        <div className={styles.titlecontainer}>
          <TitleTag className={styles.title}>{title}</TitleTag>
          {<div className={styles.subtitle}>{subtitle}</div>}
        </div>
      </div>
    );
    return (
      <div
        id={id}
        className={classnames(styles.root, className)}
        {...htmlAttributes}
      >
        {expand ? expandCard : title || subtitle ? regularCard : null}
        {isExpandedState && <div className={styles.body}>{children}</div>}
      </div>
    );
  }

  _toggleExpand = () => {
    this.setState({
      isExpandedState: !this.state.isExpandedState,
    });
    this.props.onClick && this.props.onClick();
  };
}
