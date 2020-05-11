import * as React from 'react';
import { getClassNames } from './Pagination.classNames';
import classnames from 'classnames';
import Icon from '../Icon';

interface PaginationProps {
  /** Aria-label */
  ariaLabel?: string;
  /** Aria-label for sidelinker */
  ariaLabelNavigationLink?: string;
  /** Aria-label for aktiv sidelink */
  ariaLabelNavigationLinkActive?: string;
  /** CSS class */
  className: string;
  /** Nåværende sidenummer */
  currentPage: number;
  /** Tekst neste-knapp */
  nextLabel?: string;
  /** Funksjon som trigges på sideendring */
  onPageChange: (page: number) => void;
  /** Total antall objekter i liste */
  total: number;
  /** Ant objekter som vises per side */
  pageSize: number;
  /** Tekst forrige-knapp */
  previousLabel?: string;
}
const getNumberOfPages = (total: number, pageSize: number) => {
  return Math.ceil(total / pageSize);
};

const range = start => Array.from({ length: 3 }, (v, k) => k + start);

const getSlidingWindowEdges = (
  currentPage: number,
  total: number,
  pageSize: number
) => {
  const windowSize = 3;

  const numberOfPages = getNumberOfPages(total, pageSize);
  if (numberOfPages <= windowSize) {
    return {
      startPage: 1,
      endPage: numberOfPages
    };
  }

  let startPage = currentPage - Math.ceil(windowSize / 2);
  if (startPage < 1) {
    startPage = 1;
  }
  let endPage = startPage + windowSize;

  if (endPage > numberOfPages) {
    endPage = numberOfPages;
  }
  return {
    startPage: startPage,
    endPage: endPage
  };
};

const NextPage: React.FC<{
  currentPage: number;
  total: number;
  pageSize: number;
  onClick: (newPage: number) => void;
  label: string;
}> = props => {
  const styles = getClassNames();

  return (
    <li>
      <button
        onClick={evt => {
          evt.preventDefault();
          props.onClick(props.currentPage + 1);
        }}
        aria-label={props.label}
      >
        <span>{props.label}</span>
        <Icon iconName="ChevronRight" className={styles.linkIcons} />
      </button>
    </li>
  );
};

const PreviousLink: React.FC<{
  currentPage: number;
  onClick: (newPage: number) => void;
  label: string;
}> = props => {
  const styles = getClassNames();
  return (
    <li>
      <button
        onClick={evt => {
          evt.preventDefault();
          props.onClick(props.currentPage - 1);
        }}
        aria-label={props.label}
      >
        <Icon iconName="ChevronLeft" className={styles.linkIcons} />
        {props.label}
      </button>
    </li>
  );
};

const Page: React.FC<{
  page: number;
  onClick: (page: number) => void;
  isCurrent: boolean;
  ariaLabelNavigationLink: string | undefined;
  ariaLabelNavigationLinkActive: string | undefined;
}> = props => {
  const {
    page,
    onClick,
    isCurrent,
    ariaLabelNavigationLink,
    ariaLabelNavigationLinkActive
  } = props;
  const styles = getClassNames();

  const ariaLabel = () => {
    if (isCurrent) {
      return (
        (ariaLabelNavigationLinkActive
          ? ariaLabelNavigationLinkActive
          : 'Aktiv side, Side ') + page
      );
    }
    return (
      (ariaLabelNavigationLink ? ariaLabelNavigationLink : 'Gå til ') + page
    );
  };

  return (
    <li>
      <button
        onClick={evt => {
          evt.preventDefault();
          onClick(page);
        }}
        className={isCurrent ? styles.activePage : styles.pageNumber}
        aria-label={ariaLabel()}
        aria-current={isCurrent}
      >
        {page}
      </button>
    </li>
  );
};

const Pages = (props: {
  currentPage: number;
  pageSize: number;
  onPageChange: (newPage: number) => void;
  total: number;
  ariaLabelNavigationLink: string | undefined;
  ariaLabelNavigationLinkActive: string | undefined;
}) => {
  const windowEdges = getSlidingWindowEdges(
    props.currentPage,
    props.total,
    props.pageSize
  );
  return (
    <div>
      {range(windowEdges.startPage).map(i => {
        return (
          <Page
            key={i}
            onClick={props.onPageChange}
            page={i}
            isCurrent={props.currentPage === i}
            ariaLabelNavigationLink={props.ariaLabelNavigationLink}
            ariaLabelNavigationLinkActive={props.ariaLabelNavigationLinkActive}
          />
        );
      })}
    </div>
  );
};

/**
 * @visibleName Pagination
 */
const Pagination: React.FC<PaginationProps> = props => {
  const {
    ariaLabel,
    ariaLabelNavigationLink,
    ariaLabelNavigationLinkActive,
    className,
    currentPage,
    nextLabel,
    onPageChange,
    pageSize,
    previousLabel,
    total
  } = props;
  const styles = getClassNames();
  const firstListObject = (currentPage - 1) * pageSize;
  const lastListObject = firstListObject + pageSize;
  const view =
    lastListObject > total ? total : firstListObject + 1 + '-' + lastListObject;
  return (
    <div className={classnames(styles.paginationContainer, className)}>
      <p>
        Viser {view} av {total}
      </p>
      <nav
        role="navigation"
        aria-label={ariaLabel ? ariaLabel : 'Paginerings navigasjon'}
      >
        <ul>
          {currentPage > 1 && (
            <PreviousLink
              currentPage={currentPage}
              onClick={(page: number) => onPageChange(page)}
              label={previousLabel ? previousLabel : 'Forrige'}
            />
          )}
          <li>
            <ul>
              <Pages
                onPageChange={onPageChange}
                currentPage={currentPage}
                total={total}
                pageSize={pageSize}
                ariaLabelNavigationLink={ariaLabelNavigationLink}
                ariaLabelNavigationLinkActive={ariaLabelNavigationLinkActive}
              />
            </ul>
          </li>
          {currentPage < getNumberOfPages(total, pageSize) && (
            <NextPage
              currentPage={currentPage}
              total={total}
              pageSize={pageSize}
              onClick={onPageChange}
              label={nextLabel ? nextLabel : 'Neste'}
            />
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
