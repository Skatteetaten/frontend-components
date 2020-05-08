import * as React from 'react';
import { getClassNames } from './Pagination.classNames';
import classnames from 'classnames';

interface PaginationProps {
  className: string;
  /** Nåværende sidenummer */
  currentPage: number;
  /** Funksjon som trigges på sideendring */
  onPageChange: (page: number) => void;
  total: number;
  pageSize: number;
}
const getNumberOfPages = (total: number, pageSize: number) => {
  return Math.ceil(total / pageSize);
};

const range = (start, end) =>
  Array.from({ length: end - start }, (v, k) => k + start);

const getSlidingWindowEdges = (
  currentPage: number,
  total: number,
  pageSize: number
) => {
  const windowSize = 10;

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

const FirstPage = (props: {
  currentPage: number;
  total: number;
  pageSize: number;
  onClick: (newPage: number) => void;
}) => {
  const edges = getSlidingWindowEdges(
    props.currentPage,
    props.total,
    props.pageSize
  );
  console.log(edges);

  return (
    <li>
      <button
        onClick={() => {
          props.onClick(1);
        }}
      >
        1
      </button>
    </li>
  );
};

const LastPage = (props: {
  currentPage: number;
  total: number;
  pageSize: number;
  onClick: (newPage: number) => void;
}) => {
  const edges = getSlidingWindowEdges(
    props.currentPage,
    props.total,
    props.pageSize
  );
  const numberOfPages = getNumberOfPages(props.total, props.pageSize);
  if (edges.endPage === numberOfPages) {
    return null;
  }

  return (
    <li>
      ...{' '}
      <button
        onClick={() => {
          props.onClick(numberOfPages - 1);
        }}
      >
        {numberOfPages}
      </button>
    </li>
  );
};

const NextPage: React.FC<{
  currentPage: number;
  total: number;
  pageSize: number;
  onClick: (newPage: number) => void;
}> = props => {
  if (props.currentPage === getNumberOfPages(props.total, props.pageSize)) {
    return <li>Neste</li>;
  }

  return (
    <li>
      <button
        onClick={evt => {
          evt.preventDefault();
          props.onClick(props.currentPage + 1);
        }}
      >
        Neste
      </button>
    </li>
  );
};

const PreviousLink: React.FC<{
  currentPage: number;
  onClick: (newPage: number) => void;
}> = props => {
  return (
    <li>
      <button
        onClick={evt => {
          evt.preventDefault();
          props.onClick(props.currentPage - 1);
        }}
      >
        Forrige
      </button>
    </li>
  );
};

const Page: React.FC<{
  page: number;
  onClick: (page: number) => void;
  isCurrent: boolean;
}> = props => {
  return (
    <li>
      <button
        onClick={evt => {
          evt.preventDefault();
          props.onClick(props.page + 1);
        }}
      >
        {props.page + 1}
      </button>
    </li>
  );
};

const Pages = (props: {
  currentPage: number;
  pageSize: number;
  onPageChange: (newPage: number) => void;
  total: number;
}) => {
  const windowEdges = getSlidingWindowEdges(
    props.currentPage,
    props.total,
    props.pageSize
  );

  return (
    <div>
      {range(windowEdges.startPage, windowEdges.endPage).map(i => {
        return (
          <Page
            key={i}
            onClick={props.onPageChange}
            page={i}
            isCurrent={props.currentPage === i}
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
  const { currentPage } = props;
  const styles = getClassNames();
  console.log(currentPage);
  return (
    <div className={classnames(styles.paginationContainer, props.className)}>
      <ul>
        {currentPage > 1 && (
          <PreviousLink
            currentPage={currentPage}
            onClick={(page: number) => props.onPageChange(page)}
          />
        )}

        <FirstPage
          currentPage={currentPage}
          total={props.total}
          pageSize={props.pageSize}
          onClick={props.onPageChange}
        />
        <li>
          <ul>
            <Pages
              onPageChange={props.onPageChange}
              currentPage={currentPage}
              total={props.total}
              pageSize={props.pageSize}
            />
          </ul>
        </li>
        <LastPage
          currentPage={currentPage}
          total={props.total}
          pageSize={props.pageSize}
          onClick={props.onPageChange}
        />
        <NextPage
          currentPage={currentPage}
          total={props.total}
          pageSize={props.pageSize}
          onClick={props.onPageChange}
        />
      </ul>
    </div>
  );
};

export default Pagination;
