import React, { useEffect, useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
//import Like from "./common/like";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import _ from "lodash";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState();
  const [sortColumn, setSortColumn] = useState({
    column: "title",
    order: "asc",
  });
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const handleDelete = (movieId) => {
    const updatedMovies = movies.filter((movie) => movie._id !== movieId._id);
    setMovies(updatedMovies);
  };
  const handleLiked = (currMovie) => {
    const tempMovies = [...movies];
    const index = tempMovies.indexOf(currMovie);
    tempMovies[index] = { ...tempMovies[index] };
    tempMovies[index].liked = !tempMovies[index].liked;
    setMovies(tempMovies);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
  };

  const handleOnSort = (columnObject) => {
    //console.log(currentSort);
    setSortColumn(columnObject);
  };

  const allMovies = [...movies];
  const getPageData = () => {
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.column], [sortColumn.order]);

    const Movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: Movies };
  };

  useEffect(() => {
    setMovies(getMovies());
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    setGenre(genres);
    setPageSize(5);
    console.log("genre is", genre);
  }, []);
  const { totalCount, data: Movies } = getPageData();
  return (
    <div className="row">
      <div className="col-3">
        <ListGroup
          items={genre}
          onItemSelect={handleGenreSelect}
          selectedItem={selectedGenre}
        />
      </div>
      <div className="col">
        {movies.length > 0 ? (
          <>
            <p>Showing {totalCount} movies in your database</p>
            <MoviesTable
              Movies={Movies}
              handleLiked={handleLiked}
              handleDelete={handleDelete}
              handleOnSort={handleOnSort}
              sortColumn={sortColumn}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              onPageChange={handlePageChange}
              currentPage={currentPage}
            />
          </>
        ) : (
          <p>No movies in your database</p>
        )}
      </div>
    </div>
  );
};

export default Movies;
