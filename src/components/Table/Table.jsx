import React from "react";

import "./Table.scss";

const Table = ({ headData, renderHead, bodyData, renderBody }) => {
  return (
    <div className="table-wrapper">
      <table>
        {headData && renderHead ? (
          <thead>
            <tr>{headData.map((item, index) => renderHead(item, index))}</tr>
          </thead>
        ) : null}
        {bodyData && renderBody ? (
          <tbody>
            {bodyData.map((item, index) => renderBody(item, index))}
          </tbody>
        ) : null}
      </table>
    </div>
  );
};

export default Table;
