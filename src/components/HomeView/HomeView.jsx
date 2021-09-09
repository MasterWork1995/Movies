import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../services/moviesApi";
import s from "./HomeView.module.css";

const HomeView = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const trendingMoviesRender = () => {
    fetchTrendingMovies().then((response) => setTrendingMovies(response));
  };

  useEffect(() => {
    trendingMoviesRender();
  }, []);

  return (
    <>
      <h1 className={s.title}>Trends of the week</h1>
      <ul className={s.list}>
        {trendingMovies.map(({ id, title, poster_path }) => (
          <li key={id} className={s.listItem}>
            <Link className={s.link} to={`movies/${id}`}>
              <div className={s.wrapper}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                  className={s.image}
                />
              </div>
              <p className={s.text}>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export { HomeView };
