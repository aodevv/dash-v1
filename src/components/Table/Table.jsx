import React, { useState } from "react";

import "./Table.scss";

const Table = ({ headData, renderHead, bodyData, renderBody, limit }) => {
  const initialDataLimit =
    limit && bodyData ? bodyData.slice(0, limit) : bodyData;

  const [dataLimit, setDataLimit] = useState(initialDataLimit);
  const [currPage, setCurrPage] = useState(0);

  let pages = 1;
  let range = [];

  if (limit !== undefined) {
    let page = Math.floor(bodyData.length / limit);
    pages = bodyData.length && limit === 0 ? page : page;
    range = [...Array(pages).keys()];
  }

  const selectPage = (page) => {
    const start = limit * page;
    const end = start + limit;

    setDataLimit(bodyData.slice(start, end));
    setCurrPage(page);
  };

  return (
    <div>
      <div className="table-wrapper">
        <table>
          {headData && renderHead ? (
            <thead>
              <tr>{headData.map((item, index) => renderHead(item, index))}</tr>
            </thead>
          ) : null}
          {bodyData && renderBody ? (
            <tbody>
              {dataLimit.map((item, index) => renderBody(item, index))}
            </tbody>
          ) : null}
        </table>
      </div>
      {pages > 1 ? (
        <div className="table__pagination">
          {range.map((item, index) => (
            <div
              onClick={() => selectPage(index)}
              key={index}
              className={`table__pagination-item ${
                currPage === index ? "active" : ""
              }`}
            >
              {item + 1}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Table;
