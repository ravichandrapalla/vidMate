import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, sortColumn, handleOnSort, data }) => {
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        handleOnSort={handleOnSort}
      />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
