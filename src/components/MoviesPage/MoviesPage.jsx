import { useState, useEffect } from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import api from "../../services/moviesApi";
import movie from "../../img/movie.jpg";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [request, setRequest] = useState("");
  const [movies, setMovies] = useState([]);
  const { url } = useRouteMatch();
  const location = useLocation();

  useEffect(() => {
    if (request === "") return;
    renderSearchQuery();
  }, [request]);

  const renderSearchQuery = () => {
    api.fetchQuery(request).then(setMovies);
  };

  const handleChangeRequest = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRequest(query);
    setQuery("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          value={query}
          onChange={handleChangeRequest}
          placeholder={"Please enter your request"}
          type="text"
          autoComplete="off"
          autoFocus
          className={s.formText}
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
      {movies.length > 0 && (
        <>
          <ul className={s.list}>
            {movies.map(({ id, title, poster_path }) => (
              <li key={id} className={s.listItem}>
                <Link
                  className={s.link}
                  to={{
                    pathname: `${url}/${id}`,
                    state: {
                      from: location.pathname,
                    },
                  }}
                >
                  <div className={s.wrapper}>
                    {poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        alt={title}
                        className={s.image}
                      />
                    ) : (
                      <img src={movie} alt={title} className={s.image} />
                    )}
                  </div>
                  <p className={s.text}>{title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
export default MoviesPage;
