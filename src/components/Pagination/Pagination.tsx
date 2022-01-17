import * as React from 'react';
import { getClassNames } from './Pagination.classNames';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { PaginationProps } from './Pagination.types';

const getNumberOfPages = (total: number, pageSize: number) => {
  return Math.ceil(total / pageSize);
};

const range = (start: number, end: number, pagesDisplayed: number) =>
  [...new Array(pagesDisplayed < end ? pagesDisplayed : end)]
    .filter((v, k) => !(k + start > end))
    .map((v, k) => k + start);

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
      endPage: numberOfPages,
    };
  }
  let startPage = currentPage - (pagesDisplayed - 1);
  if (currentPage <= pagesDisplayed) {
    startPage = 1;
  }
  let endPage = startPage + (pagesDisplayed - 1);

  // Funksjon for å sette currentPage midt i sidevelger
  if (endPage === currentPage && !(endPage >= numberOfPages)) {
    const addValue = Math.floor(pagesDisplayed / 2);
    endPage = endPage + addValue;
    startPage = startPage + addValue;
  }
  if (endPage > numberOfPages) {
    endPage = numberOfPages;
  }
  return {
    startPage: startPage,
    endPage: endPage,
  };
};

/*
 * visibleName Pagination (Sidevelger)
 */
export const Pagination: React.FC<PaginationProps> = (props) => {
  const {
    ariaLabel,
    ariaLabelNavigationLink,
    ariaLabelNavigationLinkActive,
    className,
    nextLabel,
    onPageChange,
    pagesDisplayed,
    previousLabel,
    total,
  } = props;
  const styles = getClassNames();
  const [pageSize, setPageSize] = React.useState(props.pageSize);
  const [currentPage, setCurrentPage] = React.useState(props.currentPage);
  const firstListObject = (currentPage - 1) * pageSize;
  const lastListObject = Math.min(firstListObject + pageSize, total);

  React.useEffect(() => {
    setCurrentPage(props.currentPage);
  }, [props.currentPage]);

  React.useEffect(() => {
    if (pageSize !== props.pageSize) {
      setCurrentPage(1);
    }
    setPageSize(props.pageSize);
  }, [props.pageSize, pageSize]);

  const view =
    lastListObject > total ? total : firstListObject + 1 + '-' + lastListObject;

  return (
    <div className={classnames(styles.paginationContainer, className)}>
      <p data-testid="pagination-oppsummering">{`Viser ${view} av ${total}`}</p>
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

export const NextPage: React.FC<{
  currentPage: number;
  total: number;
  pageSize: number;
  onClick: (newPage: number) => void;
  label: string;
}> = (props) => {
  const styles = getClassNames();

  return (
    <li>
      <button
        onClick={(evt) => {
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

export const PreviousLink: React.FC<{
  currentPage: number;
  onClick: (newPage: number) => void;
  label: string;
}> = (props) => {
  const styles = getClassNames();
  return (
    <li>
      <button
        onClick={(evt) => {
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

export const Page: React.FC<{
  page: number;
  onClick: (page: number) => void;
  isCurrent: boolean;
  ariaLabelNavigationLink: string | undefined;
  ariaLabelNavigationLinkActive: string | undefined;
}> = (props) => {
  const {
    page,
    onClick,
    isCurrent,
    ariaLabelNavigationLink,
    ariaLabelNavigationLinkActive,
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
        onClick={(evt) => {
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

export const Pages = (props: {
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
        (i) => {
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
