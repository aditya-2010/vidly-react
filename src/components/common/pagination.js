import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const { totalItemsCount, itemsCountPerPage, onChange, activePage } = props;

  const pagesCount = Math.ceil(totalItemsCount / itemsCountPerPage);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <div>
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={page === activePage ? "page-item active" : "page-item"}
            >
              <button
                className="page-link clickable"
                onClick={() => onChange(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  totalItemsCount: PropTypes.number.isRequired,
  itemsCountPerPage: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Pagination;
