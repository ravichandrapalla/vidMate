import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableHeader = ({ columns, sortColumn, handleOnSort }) => {
  const raiseSort = (column) => {
    let currentSort = { ...sortColumn };
    //console.log("curent sort is ", currentSort, "target column is ", column);
    if (currentSort.column === column) {
      currentSort.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      currentSort.column = column;
      currentSort.order = "asc";
    }
    handleOnSort(currentSort);
  };
  const renderSortIcon = (column) => {
    if (column.column !== sortColumn.column) return null;
    console.log(
      "passed is",
      column.column,
      "sortcolumn is ",
      sortColumn.column
    );
    if (sortColumn.order === "asc")
      return <FontAwesomeIcon icon="fa-solid fa-sort-down" />;
    return <i className="fa-solid fa-sort-up"></i>;
  };
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.column || column.key}
            onClick={() => raiseSort(column.column)}
          >
            {column.label} {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
