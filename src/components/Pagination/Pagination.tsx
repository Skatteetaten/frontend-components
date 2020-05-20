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
  /** Antall sidetall som vises samtidig. Default er 3. */
  pagesDisplayed?: number;
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

const range = (start: number, end: number, pagesDisplayed: number) =>
  Array.from(
    { length: pagesDisplayed < end ? pagesDisplayed : end },
    (v, k) => k + start
  );

export const getSlidingWindowEdges = (
  currentPage: number,
  total: number,
  pageSize: number,
  pagesDisplayed: number
) => {
  const numberOfPages = getNumberOfPages(total, pageSize);
  if (numberOfPages <= pagesDisplayed) {
    return {
      startPage: 1,
      endPage: numberOfPages
    };
  }
  let startPage = currentPage - (pagesDisplayed - 1);
  if (currentPage <= pagesDisplayed) {
    startPage = 1;
  }
  let endPage = startPage + (pagesDisplayed - 1);

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
        role="link"
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
        role="link"
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
          : 'Side ') + page
      );
    }
    return (ariaLabelNavigationLink ? ariaLabelNavigationLink : 'Side ') + page;
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
        aria-disabled={isCurrent}
        role="link"
      >
        {page}
      </button>
    </li>
  );
};

const Pages = (props: {
  currentPage: number;
  pagesDisplayed: number | undefined;
  pageSize: number;
  onPageChange: (newPage: number) => void;
  total: number;
  ariaLabelNavigationLink: string | undefined;
  ariaLabelNavigationLinkActive: string | undefined;
}) => {
  const pagesDisplayed = props.pagesDisplayed || 3;
  const windowEdges = getSlidingWindowEdges(
    props.currentPage,
    props.total,
    props.pageSize,
    pagesDisplayed
  );

  return (
    <div>
      {range(windowEdges.startPage, windowEdges.endPage, pagesDisplayed).map(
        i => {
          return (
            <Page
              key={i}
              onClick={props.onPageChange}
              page={i}
              isCurrent={props.currentPage === i}
              ariaLabelNavigationLink={props.ariaLabelNavigationLink}
              ariaLabelNavigationLinkActive={
                props.ariaLabelNavigationLinkActive
              }
            />
          );
        }
      )}
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
    pagesDisplayed,
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
      <nav aria-label={ariaLabel ? ariaLabel : 'Sidenavigering'}>
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
                pagesDisplayed={pagesDisplayed}
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
