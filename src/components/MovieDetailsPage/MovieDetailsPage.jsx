import { useState, useEffect } from "react";
import { useParams, NavLink, useRouteMatch, Route } from "react-router-dom";
import { fetchMovieDetails } from "../../services/moviesApi";
import s from "./MovieDetailsPage.module.css";
import movieDefault from "../../img/movie.jpg";

import { Cast } from "../Cast/Cast";
import { Review } from "../Review/Review";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  useEffect(() => {
    renderMovieDetails();
  }, [movieId]);

  const renderMovieDetails = () => {
    fetchMovieDetails(movieId).then(setMovie);
  };

  const handleClick = () => {};

  return (
    <>
      <button onClick={handleClick} className={s.button}>
        Go back
      </button>
      {movie && (
        <>
          <div className={s.wrapper}>
            <div className={s.imageWrapper}>
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className={s.image}
                />
              ) : (
                <img src={movieDefault} alt={movie.title} className={s.image} />
              )}
            </div>
            <div className={s.textWrapper}>
              <h2 className={s.title}>
                {movie.title} ({movie.release_date.split("-")[0]})
              </h2>
              <p className={s.text}>
                Use score: <span>{movie.vote_average * 10}%</span>
              </p>
              <h3 className={s.subTitle}>Overview</h3>
              <p className={s.text}>{movie.overview}</p>
              <h3 className={s.subTitle}>Genres</h3>
              <p className={s.text}>
                {movie.genres.map((genre) => genre.name).join(", ")}
              </p>
              <h3 className={s.subTitle}>Additional information</h3>
              <ul className={s.list}>
                <li className={s.listItem}>
                  <NavLink
                    to={`${url}/cast`}
                    className={s.link}
                    activeClassName={s.activeLink}
                  >
                    Cast
                  </NavLink>
                </li>
                <li className={s.listItem}>
                  <NavLink
                    to={`${url}/review`}
                    className={s.link}
                    activeClassName={s.activeLink}
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <Route path={`${path}/cast`}>
            <Cast />
          </Route>
          <Route path={`${path}/review`}>
            <Review />
          </Route>
        </>
      )}
    </>
  );
};

export { MovieDetailsPage };
