import React, { useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Pagination from "./common/pagination";
import { paginate } from "./utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";

const Movies = () => {
  const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
  const itemsCountPerPage = 4;
  const [movies, setMovies] = useState(getMovies());
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGenre, setCurrentGenre] = useState({
    _id: "",
    name: "All Genres",
  });
  const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });

  const handleDelete = (movie) => {
    let newMovies = movies.filter((m) => m._id !== movie._id);
    setMovies(newMovies);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLike = (movie) => {
    const newMovies = [...movies];
    const index = newMovies.indexOf(movie);
    newMovies[index] = { ...newMovies[index] };
    newMovies[index].liked = !newMovies[index].liked;
    setMovies(newMovies);
  };

  const handleListChange = (genre) => {
    setCurrentGenre(genre);
    setCurrentPage(1);
  };

  const handleSort = (newSortColumn) => {
    setSortColumn(newSortColumn);
  };

  // filtering movies as per genre name (list group)
  const filteredMovies =
    currentGenre && currentGenre._id
      ? movies.filter((m) => m.genre._id === currentGenre._id)
      : movies;

  // then soting as per table heading (title, genre.name, ...)
  const sortedMovies = _.orderBy(
    filteredMovies,
    [sortColumn.path],
    [sortColumn.order]
  );

  // then paginating sorted movies
  const paginatedMovies = paginate(
    sortedMovies,
    currentPage,
    itemsCountPerPage
  );
  // paginated movies is passed to moviesTable

  let { length: count } = filteredMovies;
  if (count === 0) return <p>There are no movies in the database.</p>;

  return (
    <div className="movies">
      <div className="row">
        <div className="col-lg-2 col-md-4">
          <ListGroup
            items={genres}
            onListChange={handleListChange}
            selectedItem={currentGenre}
          />
        </div>
        <div className="col-lg-6 col-md-8">
          <p>
            <u>Showing {filteredMovies.length} movies in the database.</u>
          </p>
          <MoviesTable
            movies={paginatedMovies}
            sortColumn={sortColumn}
            onDelete={handleDelete}
            onLike={handleLike}
            onSort={handleSort}
          />
          <Pagination
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={count}
            activePage={currentPage}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Movies;
