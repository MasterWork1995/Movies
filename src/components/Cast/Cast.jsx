import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCastMovie } from "../../services/moviesApi";
import s from "./Cast.module.css";
import image from "../../img/Cast.jpg";

const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useParams();

  const renderCastMovie = () => {
    fetchCastMovie(movieId).then(setMovieCast);
  };

  useEffect(() => {
    renderCastMovie();
  }, [movieId]);

  return (
    <>
      <h2 className={s.title}>Actors</h2>
      {movieCast && (
        <ul className={s.list}>
          {movieCast.map(({ id, name, profile_path, character }) => (
            <li key={id} className={s.listItem}>
              <div className={s.wrapper}>
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                    className={s.image}
                  />
                ) : (
                  <img src={image} alt={name} className={s.image} />
                )}
              </div>
              <h3 className={s.subTitle}>{name}</h3>
              {character ? (
                <p className={s.text}>
                  Character:{" "}
                  <span className={s.characterName}>{character}</span>
                </p>
              ) : (
                <p className={s.text}>
                  Character: <span className={s.characterName}>Unknown</span>
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export { Cast };