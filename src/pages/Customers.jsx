import React from "react";

import Table from "../components/Table/Table";

import customerList from "../assets/JsonData/customers-list.json";

import { customerTableHead, renderHead, renderBody } from "./Customers.utils";

const Customers = () => {
  return (
    <div>
      <h2 className="page-header">Customers</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                limit={10}
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={customerList}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
