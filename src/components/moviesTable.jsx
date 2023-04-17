import React from "react";
import Like from "./common/like";
import Table from "./common/table";
import { Link } from "react-router-dom";
const MoviesTable = (props) => {
  const { Movies, handleLiked, handleDelete, handleOnSort, sortColumn } = props;
  const columns = [
    {
      column: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { column: "genre.name", label: "Genre" },
    { column: "numberInStock", label: "Stock" },
    { column: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onLiked={() => handleLiked(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => handleDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      data={Movies}
      sortColumn={sortColumn}
      handleOnSort={handleOnSort}
    />
  );
};

export default MoviesTable;
